import type { MentorAttachment } from '../types/mentor.ts'

export const MAX_ATTACHMENT_BYTES = 4 * 1024 * 1024
export const ALLOWED_ATTACHMENT_TYPES = ['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'application/pdf']

export interface PendingAttachment {
  file: File
  /** Object URL for showing a preview before sending — must be revoked when replaced/cleared. */
  previewUrl: string
}

export function isSupportedAttachmentType(file: File): boolean {
  return ALLOWED_ATTACHMENT_TYPES.includes(file.type)
}

export function isAttachmentImage(mimeType: string): boolean {
  return mimeType.startsWith('image/')
}

function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      // Strip the "data:<mime>;base64," prefix — Gemini's inlineData wants raw base64.
      const commaIndex = result.indexOf(',')
      resolve(commaIndex >= 0 ? result.slice(commaIndex + 1) : result)
    }
    reader.onerror = () => reject(reader.error ?? new Error('Failed to read file'))
    reader.readAsDataURL(file)
  })
}

export async function toMentorAttachment(pending: PendingAttachment): Promise<MentorAttachment> {
  const data = await readFileAsBase64(pending.file)
  return { mimeType: pending.file.type, data, name: pending.file.name }
}
