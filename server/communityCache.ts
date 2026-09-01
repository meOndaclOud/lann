import type { CommunityUpdate } from './communityTypes.ts'

// Simple in-memory MVP cache — a single process-wide slot, no distributed
// cache, no external store. Good enough for an MVP dev/single-instance
// deployment: avoids hitting Meta on every page render without adding
// operational complexity.

const TTL_MS = 15 * 60 * 1000 // 15 minutes

interface CacheEntry {
  updates: CommunityUpdate[]
  cachedAt: number
}

let cache: CacheEntry | null = null

export function getCachedUpdates(): CommunityUpdate[] | null {
  if (!cache) return null
  if (Date.now() - cache.cachedAt > TTL_MS) return null
  return cache.updates
}

/** Last successful cache contents, even if stale — used for the error-state fallback so a temporary Meta outage doesn't wipe out data learners already saw. */
export function getStaleCachedUpdates(): { updates: CommunityUpdate[]; cachedAt: number } | null {
  return cache
}

export function setCachedUpdates(updates: CommunityUpdate[]): void {
  cache = { updates, cachedAt: Date.now() }
}
