import { ExternalLink, Calendar, Clock } from 'lucide-react'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { useLanguage } from '../../hooks/useLanguage'
import type { CommunityUpdate } from '../../types/community.ts'

interface CommunityCardProps {
  update: CommunityUpdate
}

function formatDate(iso: string, locale: string): string {
  try {
    return new Date(iso).toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' })
  } catch {
    return iso
  }
}

export function CommunityCard({ update }: CommunityCardProps) {
  const { dict, language } = useLanguage()
  const locale = language === 'my' ? 'my-MM' : 'en-US'

  return (
    <Card hoverable className="flex h-full flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <Badge>{dict.community.filters[update.category]}</Badge>
        {update.isUpcoming && (
          <Badge className="bg-transparent text-[var(--color-warning)]">{dict.community.filters.upcoming}</Badge>
        )}
      </div>

      <h3 className="text-base font-semibold leading-snug text-[var(--color-text)]">{update.title}</h3>
      <p className="flex-1 text-sm text-[var(--color-text-muted)]">{update.description}</p>

      <div className="flex flex-col gap-1 text-xs text-[var(--color-text-muted)]">
        <span>{update.sourceName}</span>
        <span className="inline-flex items-center gap-1">
          <Clock size={12} />
          {dict.community.publishedLabel}: {formatDate(update.publishedAt, locale)}
        </span>
        {update.eventDate && (
          <span className="inline-flex items-center gap-1 text-[var(--color-primary)]">
            <Calendar size={12} />
            {dict.community.eventDateLabel}: {formatDate(update.eventDate, locale)}
          </span>
        )}
      </div>

      <a
        href={update.originalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-lg border border-[var(--color-border)] px-3 py-1.5 text-xs font-medium text-[var(--color-text)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
      >
        {dict.community.viewOriginal}
        <ExternalLink size={12} />
      </a>
    </Card>
  )
}
