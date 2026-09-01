import { useEffect, useRef, useState } from 'react'
import { Sparkles } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { ChatBubble } from '../components/mentor/ChatBubble'
import { ChatInput } from '../components/mentor/ChatInput'
import { useLanguage } from '../hooks/useLanguage'
import { storage, STORAGE_KEYS } from '../lib/storage'
import { mentorService } from '../lib/mentorService.ts'
import { completedTopicIdsFor, calculateOverallProgress, getCurrentStage } from '../lib/progress.ts'
import { findRoadmap } from '../data/roadmaps.ts'
import type { SelectedCareer, LearnerProgress } from '../types/learner'
import type { LearnerAnswers } from '../types/assessment'
import type { Language } from '../context/language-context.ts'
import type { MentorContext, MentorMessage } from '../types/mentor.ts'

function buildContext(language: Language): MentorContext {
  const selectedCareer = storage.getItem<SelectedCareer | null>(STORAGE_KEYS.selectedCareer, null)
  const progress = storage.getItem<LearnerProgress | null>(STORAGE_KEYS.progress, null)
  const answers = storage.getItem<LearnerAnswers | null>(STORAGE_KEYS.learnerAnswers, null)
  const roadmap = selectedCareer ? findRoadmap(selectedCareer.id) : undefined
  const completedTopicIds = selectedCareer ? completedTopicIdsFor(progress, selectedCareer.id) : []
  const currentStage = roadmap ? getCurrentStage(roadmap.stages, completedTopicIds) : null

  return {
    language,
    career: selectedCareer
      ? { id: selectedCareer.id, name: language === 'my' ? selectedCareer.nameMy : selectedCareer.name }
      : null,
    currentStage: currentStage ? currentStage.title[language] : null,
    progressPercent: roadmap ? calculateOverallProgress(roadmap.stages, completedTopicIds).percent : null,
    learnerDifficulties: answers?.difficulties || null,
  }
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex w-fit items-center gap-1.5 rounded-2xl rounded-bl-sm border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-text-muted)] [animation-delay:0ms]" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-text-muted)] [animation-delay:150ms]" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-text-muted)] [animation-delay:300ms]" />
      </div>
    </div>
  )
}

interface EmptyStateProps {
  onPromptClick: (prompt: string) => void
}

function EmptyState({ onPromptClick }: EmptyStateProps) {
  const { dict } = useLanguage()

  return (
    <div className="flex h-full flex-col items-center justify-center px-4 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-soft)]">
        <Sparkles size={22} className="text-[var(--color-primary)]" />
      </div>
      <h2 className="mt-4 text-base font-semibold text-[var(--color-text)]">{dict.mentor.greetingTitle}</h2>
      <p className="mt-1 max-w-sm text-sm text-[var(--color-text-muted)]">{dict.mentor.greetingBody}</p>
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {dict.mentor.suggestedPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => onPromptClick(prompt)}
            className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-medium text-[var(--color-text)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--color-primary)]"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  )
}

export function Mentor() {
  const { dict, language } = useLanguage()
  const [messages, setMessages] = useState<MentorMessage[]>([])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, sending])

  async function requestReply(userContent: string) {
    setSending(true)
    try {
      const reply = await mentorService.sendMessage(userContent, buildContext(language))
      if (reply.status === 'ok' && reply.message) {
        setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: 'mentor', content: reply.message! }])
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: 'mentor',
            content: dict.mentor.unavailable,
            unavailable: true,
            retryFor: userContent,
          },
        ])
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: 'mentor',
          content: dict.mentor.unavailable,
          unavailable: true,
          retryFor: userContent,
        },
      ])
    } finally {
      setSending(false)
    }
  }

  function handleSend(content: string) {
    const trimmed = content.trim()
    if (!trimmed || sending) return
    setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: 'user', content: trimmed }])
    setInput('')
    void requestReply(trimmed)
  }

  function handleRetry(message: MentorMessage) {
    if (!message.retryFor || sending) return
    setMessages((prev) => prev.filter((candidate) => candidate.id !== message.id))
    void requestReply(message.retryFor)
  }

  return (
    <Container className="py-10 sm:py-14">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
          {dict.mentor.eyebrow}
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">{dict.mentor.title}</h1>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">{dict.mentor.subtitle}</p>

        <Card className="mt-6 flex h-[65vh] flex-col overflow-hidden !p-0 sm:h-[70vh]">
          <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto p-5">
            {messages.length === 0 ? (
              <EmptyState onPromptClick={handleSend} />
            ) : (
              messages.map((message) => (
                <ChatBubble key={message.id} message={message} onRetry={() => handleRetry(message)} />
              ))
            )}
            {sending && <TypingIndicator />}
          </div>

          <div className="shrink-0 border-t border-[var(--color-border)] p-3">
            <ChatInput value={input} onChange={setInput} onSend={() => handleSend(input)} disabled={sending} />
          </div>
        </Card>
      </div>
    </Container>
  )
}
