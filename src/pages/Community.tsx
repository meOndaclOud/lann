import { useEffect, useState } from 'react'
import { AlertCircle } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { CommunityCard } from '../components/community/CommunityCard'
import { CommunitySkeleton } from '../components/community/CommunitySkeleton'
import { fetchCommunityUpdates } from '../lib/communityService.ts'
import { useLanguage } from '../hooks/useLanguage'
import type { CommunityFeedResult, CommunityFilter } from '../types/community.ts'

const FILTERS: CommunityFilter[] = ['latest', 'upcoming', 'webinar', 'workshop', 'class', 'career', 'technology']

type LoadState = 'loading' | 'success' | 'error'

export function Community() {
  const { dict, language } = useLanguage()
  const [state, setState] = useState<LoadState>('loading')
  const [result, setResult] = useState<CommunityFeedResult | null>(null)
  const [filter, setFilter] = useState<CommunityFilter>('latest')
  const [fetchedForLanguage, setFetchedForLanguage] = useState<typeof language | null>(null)

  // Reset to the loading state during render when `language` changes, rather
  // than calling setState synchronously at the top of the effect below (React
  // flags that as cascading-render-prone) — this is React's own recommended
  // "adjust state while rendering" pattern for resetting state on a prop change.
  if (language !== fetchedForLanguage && state !== 'loading') {
    setState('loading')
  }

  useEffect(() => {
    let cancelled = false

    fetchCommunityUpdates(language)
      .then((data) => {
        if (cancelled) return
        // The client service resolves network/parse failures to an empty
        // fallback-shaped result; the server's own fallback dataset always
        // has content, so an empty array here means the request truly failed.
        setFetchedForLanguage(language)
        if (data.updates.length === 0 && data.source === 'fallback') {
          setState('error')
        } else {
          setResult(data)
          setState('success')
        }
      })
      .catch(() => {
        if (cancelled) return
        setFetchedForLanguage(language)
        setState('error')
      })

    return () => {
      cancelled = true
    }
  }, [language])

  const filtered = result
    ? result.updates.filter((update) => {
        if (filter === 'latest') return true
        if (filter === 'upcoming') return update.isUpcoming
        return update.category === filter
      })
    : []

  return (
    <Container className="py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-[var(--color-text)]">{dict.community.pageTitle}</h1>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">{dict.community.pageSubtitle}</p>
      </header>

      {result?.source === 'fallback' && (
        <div className="mb-6 flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-4 py-3 text-sm text-[var(--color-text-muted)]">
          <AlertCircle size={16} className="shrink-0 text-[var(--color-warning)]" />
          {dict.community.fallbackNotice}
        </div>
      )}

      <div className="mb-6 flex flex-wrap gap-2">
        {FILTERS.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setFilter(key)}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 ${
              filter === key
                ? 'border-[var(--color-primary)] bg-[var(--color-primary-soft)] text-[var(--color-primary)]'
                : 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-text)]'
            }`}
          >
            {dict.community.filters[key]}
          </button>
        ))}
      </div>

      {state === 'loading' && <CommunitySkeleton />}

      {state === 'error' && (
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center">
          <h2 className="text-base font-semibold text-[var(--color-text)]">{dict.community.error.title}</h2>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{dict.community.error.description}</p>
        </div>
      )}

      {state === 'success' && filtered.length === 0 && (
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center">
          <h2 className="text-base font-semibold text-[var(--color-text)]">{dict.community.empty.title}</h2>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{dict.community.empty.description}</p>
        </div>
      )}

      {state === 'success' && filtered.length > 0 && (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((update) => (
              <CommunityCard key={update.id} update={update} />
            ))}
          </div>
          {result?.lastUpdated && (
            <p className="mt-6 text-center text-xs text-[var(--color-text-muted)]">
              {dict.community.lastUpdatedLabel}: {new Date(result.lastUpdated).toLocaleString(language === 'my' ? 'my-MM' : 'en-US')}
            </p>
          )}
        </>
      )}
    </Container>
  )
}
