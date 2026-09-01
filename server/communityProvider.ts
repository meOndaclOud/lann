import type { CommunityCategory, CommunitySource, CommunityUpdate } from './communityTypes.ts'
import { getEnabledSources } from './communitySources.ts'

const GRAPH_API_VERSION = process.env.FACEBOOK_GRAPH_API_VERSION || 'v19.0'
const POST_FIELDS = 'id,message,created_time,permalink_url,full_picture'
const POSTS_PER_SOURCE = 10

// --- Deterministic relevance + category signals -----------------------
// Same philosophy as the career-matching engine: keyword-based, auditable,
// never dependent on AI to decide whether something is even shown.

const TECH_RELEVANCE_KEYWORDS = [
  'technology', 'tech', 'developer', 'programming', 'coding', 'software',
  'computer science', 'data', 'cloud', 'cybersecurity', 'web development',
  'mobile app', 'startup', 'digital skill', 'engineer', 'IT ',
  'နည်းပညာ', 'ကွန်ပျူတာ', 'ဆော့ဝဲ', 'ဒေတာ', 'ပရိုဂရမ်',
]

const CATEGORY_KEYWORDS: Record<Exclude<CommunityCategory, 'other'>, string[]> = {
  webinar: ['webinar', 'online seminar', 'live session', 'ဝဘ်ဆိုင်နာ', 'အွန်လိုင်း ဆွေးနွေးပွဲ'],
  workshop: ['workshop', 'hands-on', 'bootcamp', 'training session', 'အလုပ်ရုံဆွေးနွေးပွဲ'],
  class: ['class', 'course', 'training', 'lesson', 'သင်တန်း'],
  career: ['career', 'job opening', 'internship', 'hiring', 'recruitment', 'vacancy', 'scholarship', 'အလုပ်ခေါ်', 'ပညာသင်ဆု'],
  technology: ['tech talk', 'tech event', 'hackathon', 'conference', 'meetup'],
}

const EVENT_SIGNAL_KEYWORDS = [
  'register', 'sign up', 'sign-up', 'rsvp', 'join us', 'free', 'date:', 'time:', 'venue:',
  'register now', 'deadline', 'apply now', 'မှတ်ပုံတင်', 'တက်ရောက်', 'လျှောက်ထား',
]

function countMatches(text: string, keywords: string[]): number {
  const lower = text.toLowerCase()
  return keywords.filter((keyword) => lower.includes(keyword.toLowerCase())).length
}

function detectCategory(text: string, fallback: CommunityCategory): CommunityCategory {
  let best: CommunityCategory = fallback
  let bestCount = 0
  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS) as [CommunityCategory, string[]][]) {
    const count = countMatches(text, keywords)
    if (count > bestCount) {
      bestCount = count
      best = category
    }
  }
  return bestCount > 0 ? best : fallback
}

function computeRelevanceScore(text: string): number {
  const techHits = countMatches(text, TECH_RELEVANCE_KEYWORDS)
  const categoryHits = Object.values(CATEGORY_KEYWORDS).reduce((sum, keywords) => sum + countMatches(text, keywords), 0)
  const eventHits = countMatches(text, EVENT_SIGNAL_KEYWORDS)
  const totalSignals = techHits + categoryHits + eventHits
  return Math.min(100, totalSignals * 20)
}

// --- Conservative date extraction --------------------------------------
// Only matches unambiguous "Month D, YYYY" / "D Month YYYY" patterns with a
// full or abbreviated English month name. Never guesses a date from vague
// phrasing ("next Saturday", "this weekend") — leaves eventDate null instead.

const MONTHS = [
  'january', 'february', 'march', 'april', 'may', 'june', 'july',
  'august', 'september', 'october', 'november', 'december',
]
const MONTH_PATTERN = MONTHS.map((month) => month.slice(0, 3)).join('|')

const DATE_PATTERNS = [
  // "January 15, 2026" or "Jan 15, 2026"
  new RegExp(`\\b(${MONTHS.join('|')}|${MONTH_PATTERN})\\.?\\s+(\\d{1,2}),?\\s+(\\d{4})\\b`, 'i'),
  // "15 January 2026" or "15 Jan 2026"
  new RegExp(`\\b(\\d{1,2})\\s+(${MONTHS.join('|')}|${MONTH_PATTERN})\\.?,?\\s+(\\d{4})\\b`, 'i'),
]

function monthIndex(name: string): number {
  const lower = name.toLowerCase()
  const full = MONTHS.indexOf(lower)
  if (full >= 0) return full
  return MONTHS.findIndex((month) => month.startsWith(lower.slice(0, 3)))
}

function extractEventDate(text: string): string | null {
  for (const pattern of DATE_PATTERNS) {
    const match = text.match(pattern)
    if (!match) continue

    const isDayFirst = /^\d/.test(match[1])
    const day = Number(isDayFirst ? match[1] : match[2])
    const monthName = isDayFirst ? match[2] : match[1]
    const year = Number(match[3])
    const month = monthIndex(monthName)

    if (month < 0 || day < 1 || day > 31 || year < 2020 || year > 2100) continue

    const date = new Date(Date.UTC(year, month, day))
    if (Number.isNaN(date.getTime())) continue
    return date.toISOString()
  }
  return null
}

// --- Registration link extraction --------------------------------------
// Any http(s) URL in the post body that isn't the post's own permalink.

const URL_PATTERN = /https?:\/\/[^\s)]+/g

function extractRegistrationUrl(text: string, permalinkUrl: string): string | null {
  const matches = text.match(URL_PATTERN)
  if (!matches) return null
  const candidate = matches.find((url) => !permalinkUrl || !url.startsWith(permalinkUrl))
  return candidate ? candidate.replace(/[.,)]+$/, '') : null
}

function deriveTitle(message: string): string {
  const firstLine = message.split('\n')[0].trim()
  if (firstLine.length <= 80) return firstLine || 'Community update'
  return `${firstLine.slice(0, 77).trimEnd()}...`
}

function deriveDescription(message: string): string {
  const flattened = message.replace(/\s+/g, ' ').trim()
  if (flattened.length <= 200) return flattened
  return `${flattened.slice(0, 197).trimEnd()}...`
}

interface RawFacebookPost {
  id?: unknown
  message?: unknown
  created_time?: unknown
  permalink_url?: unknown
  full_picture?: unknown
}

function normalizePost(raw: RawFacebookPost, source: CommunitySource): CommunityUpdate | null {
  const message = typeof raw.message === 'string' ? raw.message : ''
  if (!message.trim()) return null // no text to evaluate relevance from — skip rather than guess

  const relevanceScore = computeRelevanceScore(message)
  if (relevanceScore <= 0) return null // not clearly technology/community related

  const permalinkUrl = typeof raw.permalink_url === 'string' ? raw.permalink_url : source.facebookUrl
  const eventDate = extractEventDate(message)

  return {
    id: `${source.id}-${String(raw.id ?? crypto.randomUUID())}`,
    sourceId: source.id,
    sourceName: source.name,
    title: deriveTitle(message),
    description: deriveDescription(message),
    content: message,
    originalUrl: permalinkUrl,
    publishedAt: typeof raw.created_time === 'string' ? raw.created_time : new Date().toISOString(),
    eventDate,
    category: detectCategory(message, source.category),
    platform: 'facebook',
    imageUrl: typeof raw.full_picture === 'string' ? raw.full_picture : null,
    registrationUrl: extractRegistrationUrl(message, permalinkUrl),
    isUpcoming: eventDate !== null && new Date(eventDate).getTime() > Date.now(),
    relevanceScore,
  }
}

async function fetchSourcePosts(source: CommunitySource, accessToken: string): Promise<CommunityUpdate[]> {
  const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${encodeURIComponent(source.facebookPageId)}/posts?fields=${POST_FIELDS}&limit=${POSTS_PER_SOURCE}`

  const response = await fetch(url, {
    headers: { authorization: `Bearer ${accessToken}` },
  })

  if (!response.ok) {
    const errorBody = await response.text().catch(() => '')
    throw new Error(`Facebook Graph API responded with ${response.status} for source "${source.id}": ${errorBody}`)
  }

  const data: unknown = await response.json()
  const posts = (data as { data?: unknown }).data
  if (!Array.isArray(posts)) return []

  const normalized: CommunityUpdate[] = []
  for (const raw of posts as RawFacebookPost[]) {
    const update = normalizePost(raw, source)
    if (update) normalized.push(update)
  }
  return normalized
}

/**
 * Fetches and normalizes posts from every enabled source. Throws if the
 * token is missing or every source fails — callers (communityHandler) decide
 * what to do about that (cache, fallback). Never invents data: a source that
 * returns nothing relevant just contributes zero updates.
 */
export async function fetchLiveCommunityUpdates(): Promise<CommunityUpdate[]> {
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN
  if (!accessToken) {
    throw new Error('FACEBOOK_ACCESS_TOKEN is not configured')
  }

  const sources = getEnabledSources()
  if (sources.length === 0) {
    throw new Error('No enabled community sources configured')
  }

  const results = await Promise.allSettled(sources.map((source) => fetchSourcePosts(source, accessToken)))

  const updates: CommunityUpdate[] = []
  let anySucceeded = false
  for (const result of results) {
    if (result.status === 'fulfilled') {
      anySucceeded = true
      updates.push(...result.value)
    }
  }

  if (!anySucceeded) {
    throw new Error('All configured community sources failed to load')
  }

  return updates.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}
