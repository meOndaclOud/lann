interface ProgressBarProps {
  value: number
  className?: string
}

export function ProgressBar({ value, className = '' }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value))

  return (
    <div className={`h-2 w-full overflow-hidden rounded-full bg-[var(--color-bg-alt)] ${className}`}>
      <div
        className="h-full rounded-full bg-[var(--color-primary)] transition-all duration-200 ease-out"
        style={{ width: `${clamped}%` }}
      />
    </div>
  )
}
