import { useEffect, useRef, useState } from 'react'
import { Sparkles } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { ChatBubble } from '../components/mentor/ChatBubble'
import { ChatInput } from '../components/mentor/ChatInput'
import { useLanguage } from '../hooks/useLanguage'
import { storage, STORAGE_KEYS } from '../lib/storage'
import { mentorService } from '../lib/mentorService.ts'
import { toMentorAttachment, type PendingAttachment } from '../lib/attachment.ts'
import { completedTopicIdsFor, calculateOverallProgress, getCurrentStage } from '../lib/progress.ts'
import { findRoadmap } from '../data/roadmaps.ts'
import type { SelectedCareer, LearnerProgress } from '../types/learner'
import type { LearnerAnswers } from '../types/assessment'
import type { Language } from '../context/language-context.ts'
import type { MentorAttachment, MentorContext, MentorMessage } from '../types/mentor.ts'

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

function ChatHeader() {
  const { dict } = useLanguage()

  return (
    <div className="flex shrink-0 items-center gap-3 border-b border-[var(--color-border)] px-5 py-3.5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-soft)] text-white shadow-sm">
        <Sparkles size={18} />
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-[var(--color-text)]">{dict.mentor.title}</p>
        <p className="flex items-center gap-1.5 truncate text-xs text-[var(--color-text-muted)]">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
          {dict.mentor.statusOnline}
        </p>
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
  const [attachment, setAttachment] = useState<PendingAttachment | null>(null)
  const [sending, setSending] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, sending])

  async function requestReply(userContent: string, mentorAttachment?: MentorAttachment) {
    setSending(true)
    try {
      const reply = await mentorService.sendMessage(userContent, buildContext(language), mentorAttachment)
      if (reply.status === 'ok' && reply.message) {
        setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: 'mentor', content: reply.message! }])
      } else {
        // Diagnostic only — never shown in the chat UI (see dict.mentor.unavailable below).
        console.warn('[AI Mentor] unavailable:', reply.reason, reply.upstreamStatus ?? '')
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: 'mentor',
            content: dict.mentor.unavailable,
            unavailable: true,
            retryFor: userContent,
            retryForAttachment: mentorAttachment,
          },
        ])
      }
    } catch (error) {
      // Defensive only — mentorService.sendMessage is documented to never throw.
      console.warn('[AI Mentor] unavailable: unexpected-client-error', error)
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: 'mentor',
          content: dict.mentor.unavailable,
          unavailable: true,
          retryFor: userContent,
          retryForAttachment: mentorAttachment,
        },
      ])
    } finally {
      setSending(false)
    }
  }

  function handleSend(content?: string) {
    const trimmed = (content ?? input).trim()
    if ((!trimmed && !attachment) || sending) return

    const pendingAttachment = attachment
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role: 'user',
        content: trimmed,
        attachment: pendingAttachment
          ? { name: pendingAttachment.file.name, mimeType: pendingAttachment.file.type, previewUrl: pendingAttachment.previewUrl }
          : undefined,
      },
    ])
    setInput('')
    setAttachment(null)

    if (pendingAttachment) {
      void toMentorAttachment(pendingAttachment).then((mentorAttachment) => requestReply(trimmed, mentorAttachment))
    } else {
      void requestReply(trimmed)
    }
  }

  function handleRetry(message: MentorMessage) {
    if (!message.retryFor && !message.retryForAttachment) return
    if (sending) return
    setMessages((prev) => prev.filter((candidate) => candidate.id !== message.id))
    void requestReply(message.retryFor ?? '', message.retryForAttachment)
  }

  return (
    <Container className="py-6 sm:py-14">
      <div className="mx-auto max-w-2xl lg:max-w-3xl">
        <p className="hidden text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)] sm:block">
          {dict.mentor.eyebrow}
        </p>
        <h1 className="mt-2 hidden text-2xl font-semibold text-[var(--color-text)] sm:block sm:text-3xl">
          {dict.mentor.title}
        </h1>
        <p className="mt-2 hidden text-sm text-[var(--color-text-muted)] sm:block">{dict.mentor.subtitle}</p>

        <Card className="flex h-[calc(100dvh-12rem)] flex-col overflow-hidden !p-0 sm:mt-6 sm:h-[70vh] lg:h-[75vh]">
          <ChatHeader />

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
            <ChatInput
              value={input}
              onChange={setInput}
              attachment={attachment}
              onAttachmentChange={setAttachment}
              onSend={() => handleSend()}
              disabled={sending}
            />
          </div>
        </Card>
      </div>
    </Container>
  )
}
