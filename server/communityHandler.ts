import { fetchLiveCommunityUpdates } from './communityProvider.ts'
import { enhanceWithAI } from './communityClassifier.ts'
import { getCachedUpdates, getStaleCachedUpdates, setCachedUpdates } from './communityCache.ts'
import { communityFallbackUpdates } from './communityFallback.ts'
import type { CommunityFeedResult } from './communityTypes.ts'

export interface CommunityHandlerResult {
  httpStatus: number
  body: CommunityFeedResult
}

function parseLanguage(input: unknown): 'en' | 'my' {
  const value = typeof input === 'object' && input ? (input as Record<string, unknown>).language : undefined
  return value === 'my' ? 'my' : 'en'
}

/**
 * Framework-agnostic core of GET /api/community: cache -> live fetch
 * (+ optional AI enhancement) -> stale cache -> local fallback, in that
 * order. Never throws — a failure at any stage degrades to the next one
 * rather than surfacing a raw error to the client, per CLAUDE.md's "AI
 * Failure" / "never break the application" rules extended to the whole
 * community feed.
 */
export async function handleCommunityRequest(query: unknown): Promise<CommunityHandlerResult> {
  const language = parseLanguage(query)

  const fresh = getCachedUpdates()
  if (fresh) {
    const cached = getStaleCachedUpdates()
    return {
      httpStatus: 200,
      body: { updates: fresh, source: 'cache', lastUpdated: cached ? new Date(cached.cachedAt).toISOString() : null },
    }
  }

  try {
    const liveUpdates = await fetchLiveCommunityUpdates()
    const enhanced = await enhanceWithAI(liveUpdates, language)
    setCachedUpdates(enhanced)
    return {
      httpStatus: 200,
      body: { updates: enhanced, source: 'live', lastUpdated: new Date().toISOString() },
    }
  } catch (error) {
    console.error('[community] live fetch failed:', error instanceof Error ? error.message : error)
  }

  const stale = getStaleCachedUpdates()
  if (stale) {
    return {
      httpStatus: 200,
      body: { updates: stale.updates, source: 'cache', lastUpdated: new Date(stale.cachedAt).toISOString() },
    }
  }

  return {
    httpStatus: 200,
    body: { updates: communityFallbackUpdates, source: 'fallback', lastUpdated: null },
  }
}
