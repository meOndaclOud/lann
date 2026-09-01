import type { MentorAttachment, MentorContext, MentorReply, MentorService } from '../types/mentor.ts'

const SIMULATED_DELAY_MS = 700

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Standalone mock kept for reference/testing — simulates a real round trip
 * and always reports unavailable, without calling anything.
 */
export const mockMentorService: MentorService = {
  async sendMessage(message: string, context: MentorContext, attachment?: MentorAttachment): Promise<MentorReply> {
    void message
    void context
    void attachment
    await delay(SIMULATED_DELAY_MS)
    return { status: 'unavailable' }
  },
}

function isMentorReply(value: unknown): value is MentorReply {
  if (!value || typeof value !== 'object') return false
  const status = (value as { status?: unknown }).status
  return status === 'ok' || status === 'unavailable'
}

/**
 * Talks to POST /api/mentor — the server-side route that holds the actual
 * API key (see server/mentorProvider.ts). Never throws: a network error, a
 * non-2xx response, or a malformed body all resolve to 'unavailable' rather
 * than surfacing a raw error to the chat UI, per CLAUDE.md's AI Failure rule.
 */
export const httpMentorService: MentorService = {
  async sendMessage(message: string, context: MentorContext, attachment?: MentorAttachment): Promise<MentorReply> {
    try {
      const response = await fetch('/api/mentor', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ message, context, attachment }),
      })

      if (!response.ok) {
        return { status: 'unavailable' }
      }

      const data: unknown = await response.json()
      if (isMentorReply(data) && (data.status !== 'ok' || (typeof data.message === 'string' && data.message.trim()))) {
        return data
      }
      return { status: 'unavailable' }
    } catch {
      return { status: 'unavailable' }
    }
  },
}

export const mentorService: MentorService = httpMentorService
