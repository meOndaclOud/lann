import { Sparkles, RotateCcw } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import type { MentorMessage } from '../../types/mentor.ts'

interface ChatBubbleProps {
  message: MentorMessage
  onRetry: () => void
}

export function ChatBubble({ message, onRetry }: ChatBubbleProps) {
  const { dict } = useLanguage()

  if (message.role === 'user') {
    return (
      <div className="flex justify-end">
        <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-[var(--color-primary)] px-4 py-2.5 text-sm text-white">
          {message.content}
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
    <div className="flex justify-start">
      <div className="max-w-[80%] rounded-2xl rounded-bl-sm border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-text)]">
        {message.content}
      </div>
    </div>
  )
}
