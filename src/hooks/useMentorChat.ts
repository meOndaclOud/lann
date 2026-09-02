import { useState } from 'react'
import { useLanguage } from './useLanguage'
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

/**
 * All AI Mentor conversation state and behavior, shared between the full
 * /mentor page and the mobile floating chat popup — see
 * components/mentor/MobileMentorWidget.tsx. Extracted so both surfaces stay
 * behaviorally identical (same service, same context, same error handling)
 * without duplicating logic, per CLAUDE.md's component-reuse rule.
 */
export function useMentorChat() {
  const { dict, language } = useLanguage()
  const [messages, setMessages] = useState<MentorMessage[]>([])
  const [input, setInput] = useState('')
  const [attachment, setAttachment] = useState<PendingAttachment | null>(null)
  const [sending, setSending] = useState(false)

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

  return { messages, input, setInput, attachment, setAttachment, sending, handleSend, handleRetry }
}
