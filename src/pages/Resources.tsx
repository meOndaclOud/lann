import { ExternalLink } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { useLanguage } from '../hooks/useLanguage'
import { getGroupedResources, type ResourceGroupKey } from '../lib/resources.ts'
import type { Resource } from '../types/roadmap.ts'

const GROUP_ORDER: ResourceGroupKey[] = ['watchVideos', 'digitalBooks', 'classes', 'other']

function ResourceItemCard({ resource }: { resource: Resource }) {
  const { dict, language } = useLanguage()

  return (
    <Card hoverable className="flex h-full flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>{dict.pages.resources.creatorLabels[resource.creatorType]}</Badge>
        {resource.isFree && <Badge>{language === 'my' ? 'အခမဲ့' : 'Free'}</Badge>}
      </div>

      <h3 className="text-base font-semibold leading-snug text-[var(--color-text)]">{resource.title}</h3>
      <p className="flex-1 text-sm text-[var(--color-text-muted)]">{resource.description}</p>
      <p className="text-xs text-[var(--color-text-muted)]">{resource.creator}</p>

      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-lg border border-[var(--color-border)] px-3 py-1.5 text-xs font-medium text-[var(--color-text)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
      >
        {dict.pages.resources.viewCta}
        <ExternalLink size={12} />
      </a>
    </Card>
  )
}

export function Resources() {
  const { dict } = useLanguage()
  const grouped = getGroupedResources()

  return (
    <Container className="py-10">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-[var(--color-text)]">{dict.pages.resources.title}</h1>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">{dict.pages.resources.description}</p>
      </header>

      {GROUP_ORDER.map((key) => {
        const resources = grouped[key]
        return (
          <section key={key} className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-[var(--color-text)]">{dict.pages.resources.categories[key]}</h2>
            {resources.length === 0 ? (
              <p className="text-sm text-[var(--color-text-muted)]">{dict.pages.resources.emptyCategory}</p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {resources.map((resource) => (
                  <ResourceItemCard key={resource.id} resource={resource} />
                ))}
              </div>
            )}
          </section>
        )
      })}
    </Container>
  )
}
