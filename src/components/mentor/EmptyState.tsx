import { Sparkles } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'

interface EmptyStateProps {
  onPromptClick: (prompt: string) => void
}

export function EmptyState({ onPromptClick }: EmptyStateProps) {
  const { dict } = useLanguage()

  return (
    <div className="flex h-full flex-col items-center justify-center px-4 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-soft)]">
        <Sparkles size={22} className="text-[var(--color-primary)]" />
      </div>
      <h2 className="mt-4 text-base font-semibold text-[var(--color-text)]">{dict.mentor.greetingTitle}</h2>
      <p className="mt-1 max-w-sm text-sm text-[var(--color-text-muted)]">{dict.mentor.greetingBody}</p>
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {dict.mentor.suggestedPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => onPromptClick(prompt)}
            className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-medium text-[var(--color-text)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--color-primary)]"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  )
}
