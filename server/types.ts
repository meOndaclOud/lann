/**
 * Shapes shared between the request handler, the AI provider, and both HTTP
 * entry points (Vite dev middleware + the deployable serverless function).
 * These intentionally mirror src/types/mentor.ts's MentorContext/MentorReply
 * — the server has no dependency on client code, so the shapes are
 * duplicated on purpose rather than imported across the src/server boundary.
 */
export interface MentorContextInput {
  language?: 'en' | 'my'
  career?: { id: string; name: string } | null
  currentStage?: string | null
  progressPercent?: number | null
  learnerDifficulties?: string | null
}

export interface MentorAttachmentInput {
  /** e.g. 'image/png', 'image/jpeg', 'application/pdf'. */
  mimeType: string
  /** Base64-encoded file content, without the "data:...;base64," prefix. */
  data: string
}

export interface MentorRequestBody {
  message: string
  context?: MentorContextInput
  attachment?: MentorAttachmentInput
}

/**
 * Why a reply came back unavailable — never shown to the learner (the chat
 * UI keeps its one generic, friendly message per CLAUDE.md's AI Failure
 * rule), but surfaced to the browser console and Vercel function logs so a
 * developer can tell "no API key configured" apart from "Gemini rejected
 * the request" apart from "the network call itself failed" without guessing.
 */
export type MentorUnavailableReason = 'missing-api-key' | 'upstream-http-error' | 'upstream-empty-response' | 'network-error'

export type MentorReplyResult =
  | { status: 'ok'; message: string }
  | { status: 'unavailable'; reason: MentorUnavailableReason; upstreamStatus?: number }

export type MentorResponseBody = MentorReplyResult | { error: string }
