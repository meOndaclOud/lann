import type { CommunityCategory, CommunityUpdate } from './communityTypes.ts'

const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-3.6-flash'
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`
const MAX_OUTPUT_TOKENS = 512

const VALID_CATEGORIES: CommunityCategory[] = ['webinar', 'workshop', 'class', 'career', 'technology', 'other']

const SYSTEM_PROMPT = `You help LANN (လမ်း), a Myanmar technology learning platform, tidy up already-collected Facebook community posts for display to learners.

You will be given a post's original text and a deterministically-computed category guess. Your only jobs:
1. Confirm or correct the category — one of: webinar, workshop, class, career, technology, other.
2. Write a short (1-2 sentence) learner-friendly summary of what the post is about, in the requested language.

Strict rules:
- Do NOT invent, guess, or restate any date, time, or deadline — dates are handled elsewhere. Never include a specific date in your summary unless it is explicitly written in the post text.
- Do NOT invent or mention a registration link or URL.
- Do NOT claim something is free unless the post text clearly says so.
- Never change or reference the original post's URL.
- If the post is vague or unclear, keep the summary honest and general rather than filling in gaps.

Respond with ONLY a JSON object, no markdown formatting: {"category": "...", "summary": "..."}`

interface ClassificationResult {
  category: CommunityCategory
  summary: string
}

function extractText(data: unknown): string | null {
  if (!data || typeof data !== 'object') return null
  const candidates = (data as { candidates?: unknown }).candidates
  if (!Array.isArray(candidates) || candidates.length === 0) return null
  const firstCandidate = candidates[0] as { content?: { parts?: unknown } } | undefined
  const parts = firstCandidate?.content?.parts
  if (!Array.isArray(parts) || parts.length === 0) return null
  const firstPart = parts[0] as { text?: unknown } | undefined
  const text = firstPart?.text
  return typeof text === 'string' && text.trim().length > 0 ? text : null
}

function parseClassification(text: string): ClassificationResult | null {
  const cleaned = text.replace(/```json|```/g, '').trim()
  try {
    const parsed: unknown = JSON.parse(cleaned)
    if (!parsed || typeof parsed !== 'object') return null
    const category = (parsed as { category?: unknown }).category
    const summary = (parsed as { summary?: unknown }).summary
    if (typeof summary !== 'string' || summary.trim().length === 0) return null
    if (typeof category !== 'string' || !VALID_CATEGORIES.includes(category as CommunityCategory)) return null
    return { category: category as CommunityCategory, summary: summary.trim() }
  } catch {
    return null
  }
}

async function classifyOne(
  update: CommunityUpdate,
  apiKey: string,
  language: 'en' | 'my',
): Promise<ClassificationResult | null> {
  const languageInstruction =
    language === 'my'
      ? 'Write the summary in Burmese. Keep common technical terms (Docker, Git, API, Cloud, etc.) in English.'
      : 'Write the summary in English.'

  const userPrompt = `Deterministic category guess: ${update.category}\n${languageInstruction}\n\nPost text:\n${update.content}`

  const response = await fetch(GEMINI_API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-goog-api-key': apiKey,
    },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
      generationConfig: { maxOutputTokens: MAX_OUTPUT_TOKENS },
    }),
  })

  if (!response.ok) {
    throw new Error(`Gemini API responded with ${response.status}`)
  }

  const data: unknown = await response.json()
  const text = extractText(data)
  if (!text) return null
  return parseClassification(text)
}

/**
 * Optional AI enhancement layer: refines category + adds a short
 * learner-friendly summary. Never touches eventDate or registrationUrl
 * (those stay 100% deterministic — see communityProvider.ts) and never
 * modifies originalUrl. If AI is unavailable or a call fails for a given
 * post, that post is returned unchanged rather than dropped, per CLAUDE.md's
 * "AI Failure" rule — the original deterministic content always displays.
 */
export async function enhanceWithAI(
  updates: CommunityUpdate[],
  language: 'en' | 'my',
): Promise<CommunityUpdate[]> {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) return updates

  return Promise.all(
    updates.map(async (update) => {
      try {
        const result = await classifyOne(update, apiKey, language)
        if (!result) return update
        return { ...update, category: result.category, description: result.summary }
      } catch (error) {
        console.error('[community] AI classification failed for a post:', error instanceof Error ? error.message : error)
        return update
      }
    }),
  )
}
