import type { LocalizedText } from './common.ts'
import type { LearnerAnswers } from './assessment.ts'

export interface SignalGroup {
  /** Keywords/phrases searched for (case-insensitive) in the learner's free-text answers. */
  keywords: string[]
  reason: LocalizedText
  /**
   * Relative importance of this signal group. Omit for the default of 1 (a
   * generic/supporting signal — personality traits, broad tech words).
   * Use 2-3 for keywords that specifically and distinctively point at this
   * career (named tools, job titles, a named specialization) rather than
   * technology in general — see careerMatching.ts's specificity-over-generic
   * scoring, which rewards a learner matching multiple high-weight groups at
   * once (a real combination of specific signals) over one that only
   * loosely brushes many careers' generic groups.
   */
  weight?: number
}

export interface CareerProfile {
  id: string
  slug: string
  name: string
  nameMy: string
  shortDescription: LocalizedText
  /** Why this career matters globally — honest, generic, non-fabricated claims only. */
  internationalContext: LocalizedText
  myanmarContext: LocalizedText
  roles: string[]
  /** Strengths and qualities that help someone thrive in this career. */
  skills: LocalizedText[]
  /** Honest, supportive framing of what's genuinely hard about this path — not deterrents. */
  challenges: LocalizedText[]
  /** What this role actually does day to day, in plain language. */
  whatTheyDo: LocalizedText
  responsibilities: LocalizedText[]
  /** Where this role shows up in real organizations — startups, enterprises, agencies, etc. */
  whereUsed: LocalizedText
  suitableFor: LocalizedText
  difficulty: 'beginner-friendly' | 'moderate' | 'challenging'
  prerequisiteKnowledge: LocalizedText[]
  /** A short narrative of how this role typically grows over time — not a promise or a timeline. */
  progression: LocalizedText
  /** Named specialization tracks a learner can grow into within this career. */
  specializations: LocalizedText[]
  signals: SignalGroup[]
}

export type MatchLevel = 'strong' | 'good' | 'possible'

export interface CareerMatch {
  careerId: string
  score: number
  level: MatchLevel
  reasons: LocalizedText[]
}

export interface CareerMatchResult {
  matches: CareerMatch[]
  answers: LearnerAnswers
}
