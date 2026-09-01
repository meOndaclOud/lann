export type CommunityCategory = 'webinar' | 'workshop' | 'class' | 'career' | 'technology' | 'other'

export type CommunitySourcePlatform = 'facebook'

export interface CommunitySource {
  id: string
  name: string
  /** Facebook Page ID (numeric or vanity) — used to query the Graph API. */
  facebookPageId: string
  facebookUrl: string
  category: CommunityCategory
  enabled: boolean
}

/**
 * The normalized shape the whole app (server cache, fallback data, and the
 * client) agrees on. Nothing downstream ever sees Meta's raw Graph API
 * response shape — see communityProvider.ts for the only place that does.
 */
export interface CommunityUpdate {
  id: string
  sourceId: string
  sourceName: string
  title: string
  description: string
  content: string
  originalUrl: string
  publishedAt: string
  /** ISO date string, or null if a date couldn't be confidently extracted — never guessed. */
  eventDate: string | null
  category: CommunityCategory
  platform: CommunitySourcePlatform
  imageUrl: string | null
  registrationUrl: string | null
  isUpcoming: boolean
  /** 0-100, deterministic keyword-based technology/community relevance. */
  relevanceScore: number
}

export type CommunityFeedSource = 'live' | 'cache' | 'fallback'

export interface CommunityFeedResult {
  updates: CommunityUpdate[]
  source: CommunityFeedSource
  lastUpdated: string | null
}
