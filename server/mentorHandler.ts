import { getMentorReply } from './mentorProvider.ts'
import type { MentorRequestBody, MentorResponseBody } from './types.ts'

export interface MentorHandlerResult {
  httpStatus: number
  body: MentorResponseBody
}

function isValidRequest(input: unknown): input is MentorRequestBody {
  if (!input || typeof input !== 'object') return false
  const candidate = input as Record<string, unknown>
  return typeof candidate.message === 'string' && candidate.message.trim().length > 0
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

  const reply = await getMentorReply(input.message, input.context)
  return { httpStatus: 200, body: reply }
}
