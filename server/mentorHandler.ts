import { getMentorReply } from './mentorProvider.ts'
import type { MentorAttachmentInput, MentorRequestBody, MentorResponseBody } from './types.ts'

export interface MentorHandlerResult {
  httpStatus: number
  body: MentorResponseBody
}

// Roughly 6MB of base64 (~4.5MB of actual file data) — generous for a phone
// photo while keeping the request body a sane size for a serverless function.
const MAX_ATTACHMENT_BASE64_LENGTH = 6 * 1024 * 1024
const ALLOWED_ATTACHMENT_MIME_TYPES = new Set(['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'application/pdf'])

function isValidAttachment(value: unknown): value is MentorAttachmentInput {
  if (!value || typeof value !== 'object') return false
  const candidate = value as Record<string, unknown>
  return (
    typeof candidate.mimeType === 'string' &&
    ALLOWED_ATTACHMENT_MIME_TYPES.has(candidate.mimeType) &&
    typeof candidate.data === 'string' &&
    candidate.data.length > 0 &&
    candidate.data.length <= MAX_ATTACHMENT_BASE64_LENGTH
  )
}

function isValidRequest(input: unknown): input is MentorRequestBody {
  if (!input || typeof input !== 'object') return false
  const candidate = input as Record<string, unknown>
  const hasMessage = typeof candidate.message === 'string' && candidate.message.trim().length > 0
  const hasAttachment = candidate.attachment !== undefined
  if (hasAttachment && !isValidAttachment(candidate.attachment)) return false
  if (typeof candidate.message !== 'string') return false
  return hasMessage || hasAttachment
}

/**
 * Framework-agnostic core of POST /api/mentor: validate, call the provider,
 * shape an HTTP status + JSON body. Both the Vite dev middleware and the
 * deployable serverless function call this directly, so the actual routing
 * glue in each stays a few lines.
 */
export async function handleMentorRequest(input: unknown): Promise<MentorHandlerResult> {
  if (!isValidRequest(input)) {
    return { httpStatus: 400, body: { error: 'A message is required.' } }
  }

  const reply = await getMentorReply(input.message, input.context, input.attachment)
  return { httpStatus: 200, body: reply }
}
