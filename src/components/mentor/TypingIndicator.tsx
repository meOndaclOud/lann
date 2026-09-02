export function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex w-fit items-center gap-1.5 rounded-2xl rounded-bl-sm border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-text-muted)] [animation-delay:0ms]" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-text-muted)] [animation-delay:150ms]" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-text-muted)] [animation-delay:300ms]" />
      </div>
    </div>
  )
}
