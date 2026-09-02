import { Sparkles, X } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'

interface ChatHeaderProps {
  /** Present only in the mobile popup — the full /mentor page has no close action. */
  onClose?: () => void
}

export function ChatHeader({ onClose }: ChatHeaderProps) {
  const { dict } = useLanguage()

  return (
    <div className="flex shrink-0 items-center gap-3 border-b border-[var(--color-border)] px-5 py-3.5 max-md:border-[var(--color-glass-border)]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-soft)] text-white shadow-sm">
        <Sparkles size={18} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-[var(--color-text)]">{dict.mentor.title}</p>
        <p className="flex items-center gap-1.5 truncate text-xs text-[var(--color-text-muted)]">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
          {dict.mentor.statusOnline}
        </p>
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label={dict.careersPathway.closeCta}
          title={dict.careersPathway.closeCta}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[var(--color-text-muted)] transition-colors duration-200 ease-out hover:bg-[var(--color-bg-alt)] hover:text-[var(--color-text)]"
        >
          <X size={16} />
        </button>
      )}
    </div>
  )
}
