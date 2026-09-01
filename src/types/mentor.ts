/** A photo or file attached to an outgoing message — sent to Gemini as inline data. */
export interface MentorAttachment {
  /** e.g. 'image/png', 'image/jpeg', 'application/pdf'. */
  mimeType: string
  /** Base64-encoded file content, without the "data:...;base64," prefix. */
  data: string
  name: string
}

export interface MentorMessage {
  id: string
  role: 'user' | 'mentor'
  content: string
  /** Set on a user message that included a photo/file, so the bubble can show a preview. */
  attachment?: { name: string; mimeType: string; previewUrl: string }
  /** True for the "AI Mentor is unavailable" notice — rendered differently from a real reply. */
  unavailable?: boolean
  /** The user message this notice was replying to, so "Try again" can re-attempt it without duplicating the bubble. */
  retryFor?: string
  /** The attachment (if any) that went with retryFor, so "Try again" resends it too. */
  retryForAttachment?: MentorAttachment
}

/**
 * What the mentor is told about the learner, per CLAUDE.md's AI Mentor
 * Context rule — only what's relevant, never the learner's raw answers.
 */
export interface MentorContext {
  language: 'en' | 'my'
  career: { id: string; name: string } | null
  currentStage: string | null
  progressPercent: number | null
  learnerDifficulties: string | null
}

export type MentorReplyStatus = 'ok' | 'unavailable'

export interface MentorReply {
  status: MentorReplyStatus
  /** Present only when status is 'ok'. */
  message?: string
}

/**
 * The seam between the chat UI and whatever actually answers questions.
 * Implement this once a provider is connected (via a server-side route —
 * never call an AI API with a key from the browser) and swap it in for
 * `mockMentorService` in lib/mentorService.ts; nothing else needs to change.
 */
export interface MentorService {
  sendMessage(message: string, context: MentorContext, attachment?: MentorAttachment): Promise<MentorReply>
}
