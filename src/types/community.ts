/**
 * Client-side mirror of server/communityTypes.ts. The server has no
 * dependency on client code, so this is intentionally duplicated rather than
 * imported across the src/server boundary — same pattern as src/types/mentor.ts.
 */
export type CommunityCategory = 'webinar' | 'workshop' | 'class' | 'career' | 'technology' | 'other'

export interface CommunityUpdate {
  id: string
  sourceId: string
  sourceName: string
  title: string
  description: string
  content: string
  originalUrl: string
  publishedAt: string
  eventDate: string | null
  category: CommunityCategory
  platform: 'facebook'
  imageUrl: string | null
  registrationUrl: string | null
  isUpcoming: boolean
  relevanceScore: number
}

export type CommunityFeedSource = 'live' | 'cache' | 'fallback'

export interface CommunityFeedResult {
  updates: CommunityUpdate[]
  source: CommunityFeedSource
  lastUpdated: string | null
}

export type CommunityFilter = 'latest' | 'upcoming' | CommunityCategory
