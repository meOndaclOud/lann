import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean
}

export function Input({ invalid = false, className = '', ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-xl border bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] transition-colors duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 max-md:bg-[var(--color-glass-surface)] max-md:backdrop-blur-xl ${
        invalid
          ? 'border-[var(--color-warning)]'
          : 'border-[var(--color-border)] focus:border-[var(--color-primary)] max-md:border-[var(--color-glass-border)]'
      } ${className}`}
      {...props}
    />
  )
}
