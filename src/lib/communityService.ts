import type { CommunityFeedResult } from '../types/community.ts'

function isCommunityFeedResult(value: unknown): value is CommunityFeedResult {
  if (!value || typeof value !== 'object') return false
  const candidate = value as { updates?: unknown; source?: unknown }
  return Array.isArray(candidate.updates) && typeof candidate.source === 'string'
}

/**
 * Talks to GET /api/community — the server-side route that holds the Meta
 * access token (see server/communityProvider.ts). Never throws: a network
 * error, a non-2xx response, or a malformed body all resolve to an empty
 * fallback-shaped result rather than surfacing a raw error to the UI, per
 * CLAUDE.md's "never break the application" rule.
 */
export async function fetchCommunityUpdates(language: 'en' | 'my'): Promise<CommunityFeedResult> {
  try {
    const response = await fetch(`/api/community?language=${language}`)
    if (!response.ok) {
      return { updates: [], source: 'fallback', lastUpdated: null }
    }

    const data: unknown = await response.json()
    if (isCommunityFeedResult(data)) return data
    return { updates: [], source: 'fallback', lastUpdated: null }
  } catch {
    return { updates: [], source: 'fallback', lastUpdated: null }
  }
}
