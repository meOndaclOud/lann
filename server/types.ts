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

export type MentorReplyResult = { status: 'ok'; message: string } | { status: 'unavailable' }

export type MentorResponseBody = MentorReplyResult | { error: string }
