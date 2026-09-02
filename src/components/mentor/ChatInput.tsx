import { useRef, useState, type ChangeEvent, type KeyboardEvent } from 'react'
import { Paperclip, Send, X, FileText } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import {
  ALLOWED_ATTACHMENT_TYPES,
  MAX_ATTACHMENT_BYTES,
  isAttachmentImage,
  isSupportedAttachmentType,
  type PendingAttachment,
} from '../../lib/attachment.ts'

interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  attachment: PendingAttachment | null
  onAttachmentChange: (attachment: PendingAttachment | null) => void
  onSend: () => void
  disabled?: boolean
}

export function ChatInput({ value, onChange, attachment, onAttachmentChange, onSend, disabled = false }: ChatInputProps) {
  const { dict } = useLanguage()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState<string | null>(null)

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleSend()
    }
  }

  function handleSend() {
    if (disabled) return
    if (value.trim().length === 0 && !attachment) return
    onSend()
  }

  function clearAttachment() {
    if (attachment) URL.revokeObjectURL(attachment.previewUrl)
    onAttachmentChange(null)
  }

  function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return

    setError(null)
    if (!isSupportedAttachmentType(file)) {
      setError(dict.mentor.attachmentUnsupportedType)
      return
    }
    if (file.size > MAX_ATTACHMENT_BYTES) {
      setError(dict.mentor.attachmentTooLarge)
      return
    }

    if (attachment) URL.revokeObjectURL(attachment.previewUrl)
    onAttachmentChange({ file, previewUrl: URL.createObjectURL(file) })
  }

  return (
    <div>
      {error && <p className="mb-2 px-1 text-xs text-[var(--color-warning)]">{error}</p>}

      {attachment && (
        <div className="mb-2 flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-2.5 py-2">
          {isAttachmentImage(attachment.file.type) ? (
            <img
              src={attachment.previewUrl}
              alt=""
              className="h-10 w-10 shrink-0 rounded-lg object-cover"
            />
          ) : (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
              <FileText size={18} />
            </div>
          )}
          <span className="min-w-0 flex-1 truncate text-xs text-[var(--color-text-muted)]">{attachment.file.name}</span>
          <button
            type="button"
            onClick={clearAttachment}
            aria-label={dict.mentor.removeAttachmentCta}
            title={dict.mentor.removeAttachmentCta}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[var(--color-text-muted)] transition-colors duration-200 ease-out hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
          >
            <X size={14} />
          </button>
        </div>
      )}

      <div className="flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] p-1.5 pl-2 transition-colors duration-200 ease-out focus-within:border-[var(--color-primary)] focus-within:ring-2 focus-within:ring-[var(--color-primary)]/20 max-md:border-[var(--color-glass-border)] max-md:bg-[var(--color-glass-surface)] max-md:backdrop-blur-xl">
        <input
          ref={fileInputRef}
          type="file"
          accept={ALLOWED_ATTACHMENT_TYPES.join(',')}
          onChange={handleFileSelected}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={disabled}
          aria-label={dict.mentor.attachCta}
          title={dict.mentor.attachCta}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[var(--color-text-muted)] transition-colors duration-200 ease-out hover:bg-[var(--color-bg-alt)] hover:text-[var(--color-primary)] disabled:pointer-events-none disabled:opacity-50"
        >
          <Paperclip size={17} />
        </button>

        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder={dict.mentor.inputPlaceholder}
          aria-label={dict.mentor.inputPlaceholder}
          className="min-w-0 flex-1 bg-transparent px-1 py-1.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none disabled:opacity-60"
        />
        <button
          type="button"
          onClick={handleSend}
          disabled={disabled || (value.trim().length === 0 && !attachment)}
          aria-label={dict.mentor.sendCta}
          title={dict.mentor.sendCta}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white transition-all duration-200 ease-out hover:brightness-110 disabled:pointer-events-none disabled:opacity-40"
        >
          <Send size={15} />
        </button>
      </div>
    </div>
  )
}
