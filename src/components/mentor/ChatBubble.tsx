import { useState } from 'react'
import { Sparkles, RotateCcw, FileText, Copy, Check } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import { isAttachmentImage } from '../../lib/attachment.ts'
import type { MentorMessage } from '../../types/mentor.ts'

interface ChatBubbleProps {
  message: MentorMessage
  onRetry: () => void
}

function AttachmentPreview({ attachment }: { attachment: NonNullable<MentorMessage['attachment']> }) {
  if (isAttachmentImage(attachment.mimeType)) {
    return (
      <img
        src={attachment.previewUrl}
        alt=""
        className="mb-2 max-h-48 w-full rounded-xl object-cover"
      />
    )
  }

  return (
    <div className="mb-2 flex items-center gap-2 rounded-xl bg-white/15 px-3 py-2">
      <FileText size={16} />
      <span className="min-w-0 flex-1 truncate text-xs">{attachment.name}</span>
    </div>
  )
}

export function ChatBubble({ message, onRetry }: ChatBubbleProps) {
  const { dict } = useLanguage()
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(message.content)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard access can fail silently (permissions, insecure context) — not worth surfacing an error for.
    }
  }

  if (message.role === 'user') {
    return (
      <div className="flex justify-end">
        <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-[var(--color-primary)] px-4 py-2.5 text-sm text-white">
          {message.attachment && <AttachmentPreview attachment={message.attachment} />}
          {message.content && <p>{message.content}</p>}
        </div>
      </div>
    )
  }

  if (message.unavailable) {
    return (
      <div className="flex justify-start">
        <div className="max-w-[85%] rounded-2xl rounded-bl-sm border border-[var(--color-warning)] bg-[var(--color-bg-alt)] px-4 py-3 text-sm">
          <div className="flex items-center gap-1.5 text-[var(--color-warning)]">
            <Sparkles size={13} />
            <span className="text-xs font-semibold uppercase tracking-wide">{dict.mentor.unavailableLabel}</span>
          </div>
          <p className="mt-1.5 text-[var(--color-text-muted)]">{message.content}</p>
          <button
            type="button"
            onClick={onRetry}
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-primary)] hover:underline"
          >
            <RotateCcw size={12} />
            {dict.mentor.retryCta}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="group flex justify-start">
      <div className="max-w-[80%]">
        <div className="rounded-2xl rounded-bl-sm border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-text)] shadow-sm">
          {message.content}
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="mt-1 flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] text-[var(--color-text-muted)] opacity-0 transition-opacity duration-200 ease-out hover:text-[var(--color-text)] focus-visible:opacity-100 group-hover:opacity-100"
        >
          {copied ? <Check size={11} /> : <Copy size={11} />}
          {copied ? dict.mentor.copiedLabel : dict.mentor.copyCta}
        </button>
      </div>
    </div>
  )
}
