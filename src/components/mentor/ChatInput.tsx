import type { KeyboardEvent } from 'react'
import { Send } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'

interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSend: () => void
  disabled?: boolean
}

export function ChatInput({ value, onChange, onSend, disabled = false }: ChatInputProps) {
  const { dict } = useLanguage()

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      event.preventDefault()
      onSend()
    }
  }

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder={dict.mentor.inputPlaceholder}
        aria-label={dict.mentor.inputPlaceholder}
        className="flex-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] transition-colors duration-200 ease-out focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 disabled:opacity-60"
      />
      <button
        type="button"
        onClick={onSend}
        disabled={disabled || value.trim().length === 0}
        aria-label={dict.mentor.sendCta}
        title={dict.mentor.sendCta}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)] text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:brightness-110 disabled:pointer-events-none disabled:opacity-50 disabled:hover:translate-y-0"
      >
        <Send size={16} />
      </button>
    </div>
  )
}
