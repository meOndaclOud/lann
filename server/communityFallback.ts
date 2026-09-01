import type { CommunityUpdate } from './communityTypes.ts'

/**
 * Small local fallback dataset, used ONLY when live Meta data and cached
 * data are both unavailable (see communityHandler.ts). These are NOT real
 * Facebook posts — LANN never fabricates a resource, event, or source (see
 * CLAUDE.md). Each entry is clearly labeled as sample content, and
 * `originalUrl` points back to LANN's own /community page rather than a
 * made-up Facebook link, so a learner is never sent to a fake destination.
 *
 * This whole file can be deleted once real, verified sources are configured
 * in communitySources.ts and live data is reliably available — nothing else
 * needs to change to remove it.
 */
export const communityFallbackUpdates: CommunityUpdate[] = [
  {
    id: 'fallback-sample-1',
    sourceId: 'fallback',
    sourceName: 'LANN (Sample Content)',
    title: '[Sample] Live community updates are not yet configured',
    description:
      'This is placeholder content. Once trusted Myanmar tech community Facebook Pages are added to communitySources.ts, real webinars, workshops, and classes will appear here instead.',
    content:
      'This is placeholder content. Once trusted Myanmar tech community Facebook Pages are added to communitySources.ts, real webinars, workshops, and classes will appear here instead.',
    originalUrl: '/community',
    publishedAt: new Date().toISOString(),
    eventDate: null,
    category: 'other',
    platform: 'facebook',
    imageUrl: null,
    registrationUrl: null,
    isUpcoming: false,
    relevanceScore: 0,
  },
  {
    id: 'fallback-sample-2',
    sourceId: 'fallback',
    sourceName: 'LANN (Sample Content)',
    title: '[Sample] Example: a free webinar would appear here',
    description:
      'This is what a technology webinar update looks like once a real source is connected — a short summary, the source page name, and a link to the original Facebook post.',
    content:
      'This is what a technology webinar update looks like once a real source is connected — a short summary, the source page name, and a link to the original Facebook post.',
    originalUrl: '/community',
    publishedAt: new Date().toISOString(),
    eventDate: null,
    category: 'webinar',
    platform: 'facebook',
    imageUrl: null,
    registrationUrl: null,
    isUpcoming: false,
    relevanceScore: 0,
  },
  {
    id: 'fallback-sample-3',
    sourceId: 'fallback',
    sourceName: 'LANN (Sample Content)',
    title: '[Sample] Example: a career or internship post would appear here',
    description:
      'This is what a career-related update looks like once a real source is connected — internships, hiring posts, and scholarship announcements from verified Myanmar tech pages.',
    content:
      'This is what a career-related update looks like once a real source is connected — internships, hiring posts, and scholarship announcements from verified Myanmar tech pages.',
    originalUrl: '/community',
    publishedAt: new Date().toISOString(),
    eventDate: null,
    category: 'career',
    platform: 'facebook',
    imageUrl: null,
    registrationUrl: null,
    isUpcoming: false,
    relevanceScore: 0,
  },
]
