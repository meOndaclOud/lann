import type { TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean
}

export function Textarea({ invalid = false, className = '', ...props }: TextareaProps) {
  return (
    <textarea
      className={`w-full rounded-xl border bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] transition-colors duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 ${
        invalid
          ? 'border-[var(--color-warning)]'
          : 'border-[var(--color-border)] focus:border-[var(--color-primary)]'
      } ${className}`}
      {...props}
    />
  )
}
