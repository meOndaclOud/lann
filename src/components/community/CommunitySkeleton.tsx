import { Card } from '../ui/Card'

export function CommunitySkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index} className="flex flex-col gap-3">
          <div className="h-4 w-20 animate-pulse rounded-full bg-[var(--color-bg-alt)]" />
          <div className="h-4 w-3/4 animate-pulse rounded bg-[var(--color-bg-alt)]" />
          <div className="h-3 w-full animate-pulse rounded bg-[var(--color-bg-alt)]" />
          <div className="h-3 w-2/3 animate-pulse rounded bg-[var(--color-bg-alt)]" />
          <div className="h-3 w-1/2 animate-pulse rounded bg-[var(--color-bg-alt)]" />
          <div className="h-8 w-28 animate-pulse rounded-lg bg-[var(--color-bg-alt)]" />
        </Card>
      ))}
    </div>
  )
}
