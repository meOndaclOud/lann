import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'

interface PagePlaceholderProps {
  title: string
  description: string
  meta?: string
}

export function PagePlaceholder({ title, description, meta }: PagePlaceholderProps) {
  return (
    <Container className="py-12">
      <Card className="mx-auto max-w-xl text-center">
        <h1 className="text-2xl font-semibold text-[var(--color-text)]">{title}</h1>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">{description}</p>
        {meta && (
          <p className="mt-4 rounded-lg bg-[var(--color-bg-alt)] px-3 py-2 text-xs text-[var(--color-text-muted)]">
            {meta}
          </p>
        )}
      </Card>
    </Container>
  )
}
