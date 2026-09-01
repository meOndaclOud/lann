import type { LearnerAnswers } from '../types/assessment.ts'
import type { CareerProfile, CareerMatch, CareerMatchResult, MatchLevel } from '../types/career.ts'
import { careerProfiles } from '../data/careers.ts'

// difficulties is intentionally excluded — what a learner struggles with isn't
// a reliable signal for which career suits them, only the other free-text
// answers describe interest, strengths, and goals.
const SIGNAL_FIELDS: (keyof LearnerAnswers)[] = [
  'technologyInterest',
  'currentSkills',
  'preferredWork',
  'careerGoal',
  'expectations',
]

const DEFAULT_WEIGHT = 1
// A signal group at or above this weight represents a specific, distinguishing
// signal (a named tool, job title, or specialization) rather than a generic
// one. Two or more of these matching together is real evidence of a genuine
// combination of interests — e.g. "security + devops + machine learning" —
// not just broad overlap with many careers' soft, generic groups.
const STRONG_WEIGHT_THRESHOLD = 2
const COMBO_BONUS_BASE = 15
const COMBO_BONUS_PER_EXTRA_GROUP = 5

function buildSearchText(answers: LearnerAnswers): string {
  return SIGNAL_FIELDS.map((field) => answers[field]).join(' ')
}

/**
 * Normalizes free-text answers before matching, per the "never rely on exact
 * string equality" rule: lowercases, collapses repeated whitespace, and
 * strips periods out of dotted abbreviations ("A.I." -> "ai", "N.L.P." ->
 * "nlp") so they match the same plain keyword a career's signals already
 * list. This intentionally stays lightweight rather than a large synonym
 * dictionary — the actual synonym coverage (GenAI, Gen AI, Generative AI,
 * Cyber Security, Cybersecurity, etc.) lives as explicit keyword variants on
 * each signal group, which keeps every match traceable to a real keyword a
 * career actually declares (deterministic and understandable, per spec).
 */
function normalizeSearchText(text: string): string {
  return text
    .toLowerCase()
    .replace(/(?<=[a-z])\.(?=[a-z])/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function isAsciiWord(keyword: string): boolean {
  return /^[a-z0-9-]+$/i.test(keyword)
}

// Single ASCII words match on a word boundary (so "ux" doesn't match inside
// "luxury"). Phrases and Burmese keywords fall back to a plain substring
// search, since Burmese script isn't segmented by JS word-boundary rules.
function matchesKeyword(searchText: string, keyword: string): boolean {
  const lower = keyword.toLowerCase()
  if (isAsciiWord(lower)) {
    const escaped = lower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    return new RegExp(`(?:^|[^a-z0-9])${escaped}(?:[^a-z0-9]|$)`, 'i').test(searchText)
  }
  return searchText.includes(lower)
}

function levelFromScore(score: number): MatchLevel {
  if (score >= 90) return 'strong'
  if (score >= 50) return 'good'
  return 'possible'
}

/**
 * Scores one career profile against a learner's answers. Pure — no I/O, no
 * mutation.
 *
 * The score is a weighted match ratio (matched signal-group weight ÷ total
 * signal-group weight), not a flat "groups matched" fraction — a career
 * whose specific, high-weight groups (named tools, job titles) all match
 * scores much higher than one that only brushes generic, default-weight
 * groups. When two or more high-weight groups match together, a combo bonus
 * is added: that's real evidence of a genuine combination of specific
 * interests (e.g. AI + GenAI + a named ML term), which should outrank a
 * career matched only through soft, generic overlap. Every career profile
 * currently in the dataset uses only default-weight (1) groups, so for them
 * this reduces to the exact same "matched / total groups" percentage as
 * before — this is a strict generalization, not a behavior change for
 * existing data.
 */
export function scoreCareer(answers: LearnerAnswers, profile: CareerProfile): CareerMatch {
  const searchText = normalizeSearchText(buildSearchText(answers))

  const matchedSignals = profile.signals.filter((signal) =>
    signal.keywords.some((keyword) => matchesKeyword(searchText, keyword)),
  )

  const totalWeight = profile.signals.reduce((sum, signal) => sum + (signal.weight ?? DEFAULT_WEIGHT), 0)
  const matchedWeight = matchedSignals.reduce((sum, signal) => sum + (signal.weight ?? DEFAULT_WEIGHT), 0)

  const strongMatchedCount = matchedSignals.filter(
    (signal) => (signal.weight ?? DEFAULT_WEIGHT) >= STRONG_WEIGHT_THRESHOLD,
  ).length
  const comboBonus =
    strongMatchedCount >= 2 ? COMBO_BONUS_BASE + (strongMatchedCount - 2) * COMBO_BONUS_PER_EXTRA_GROUP : 0

  const baseScore = totalWeight > 0 ? (matchedWeight / totalWeight) * 100 : 0
  const score = Math.min(100, Math.round(baseScore + comboBonus))

  return {
    careerId: profile.id,
    score,
    level: levelFromScore(score),
    reasons: matchedSignals.map((signal) => signal.reason),
  }
}

/**
 * Scores every profile against the learner's answers and returns the top
 * matches, sorted highest-first. Careers with no matched signal at all are
 * left out rather than shown as a 0% "match". Pure — the input `answers` is
 * never mutated, and is passed through unchanged on the result so callers
 * (career result page, AI Mentor context) keep the learner's original words.
 */
export function matchCareers(
  answers: LearnerAnswers,
  profiles: CareerProfile[] = careerProfiles,
  topN = 3,
): CareerMatchResult {
  const matches = profiles
    .map((profile) => scoreCareer(answers, profile))
    .filter((match) => match.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topN)

  return { matches, answers }
}
