import type { LocalizedText } from './common.ts'

export type RoadmapStageLevel = 'beginner' | 'core' | 'intermediate' | 'advanced'

/** One Learn+Practice unit within a topic's deep-dive breakdown. */
export interface LearningStep {
  title: LocalizedText
  learn: LocalizedText[]
  practice: LocalizedText[]
}

export type TopicResourceType =
  | 'documentation'
  | 'course'
  | 'tutorial'
  | 'video'
  | 'book'
  | 'practice-lab'
  | 'project'

/** A resource scoped to one specific roadmap topic, not the whole career. */
export interface TopicResource {
  id: string
  title: string
  description: string
  type: TopicResourceType
  provider: string
  url: string
  level: RoadmapStageLevel
  isFree: boolean
  verified: boolean
}

/**
 * The deep-dive learning guide for one roadmap topic. Optional on
 * RoadmapTopic so existing topics keep working unchanged — a topic without
 * `detail` still gets a detail page (with an honest "not written yet" state)
 * via the same click-through interaction, it just has no authored content.
 */
export interface TopicDetail {
  whatItIs: LocalizedText
  whyItMatters: LocalizedText
  whereUsed: LocalizedText
  /** What the learner should already understand before starting — omit if there's no real prerequisite. */
  prerequisiteNote: LocalizedText | null
  /** "What to learn first" — an ordered list, not a schedule. */
  firstSteps: LocalizedText[]
  steps: LearningStep[]
  build: LocalizedText
  verify: LocalizedText
  tips: LocalizedText[]
  commonMistakes: LocalizedText[]
  practiceTasks: { id: string; label: LocalizedText }[]
  completionChecklist: LocalizedText[]
  resources: TopicResource[]
}

export interface RoadmapTopic {
  id: string
  label: LocalizedText
  detail?: TopicDetail
}

export interface RoadmapStage {
  id: string
  level: RoadmapStageLevel
  title: LocalizedText
  description: LocalizedText
  topics: RoadmapTopic[]
}

export type RoadmapStageStatus = 'locked' | 'available' | 'in-progress' | 'completed'

export interface CareerProject {
  id: string
  title: LocalizedText
  description: LocalizedText
  /** Which skill tier this project suits — not a schedule, just a difficulty signal. */
  level: RoadmapStageLevel
  skills: LocalizedText[]
}

export type ResourceType = 'course' | 'video' | 'book' | 'documentation' | 'practice' | 'webinar'
export type ResourceDifficulty = 'beginner' | 'junior' | 'intermediate' | 'advanced'
export type ResourceCreatorType = 'myanmar-senior' | 'myanmar-community' | 'international' | 'official'

/**
 * A single learning resource. Every field here exists so a real, verified
 * resource can be dropped in later — see the empty resource arrays in
 * data/roadmaps.ts and CLAUDE.md's rule against inventing unverified
 * resources (creator, url, etc. must never be fabricated).
 */
export interface Resource {
  id: string
  title: string
  description: string
  type: ResourceType
  language: 'my' | 'en'
  difficulty: ResourceDifficulty
  creator: string
  creatorType: ResourceCreatorType
  url: string
  isFree: boolean
  topic: string
  verified: boolean
}

export interface CareerRoadmapResources {
  /** Resources hosted or shared directly by senior Burmese technologists. */
  myanmarSeniorResources: Resource[]
  /** Videos from established Myanmar tech YouTube/video channels. */
  myanmarYoutubeChannels: Resource[]
  /** Other free learning resources available in Myanmar. */
  freeMyanmarResources: Resource[]
  /** Digital books or long-form written resources by Burmese tech authors. */
  burmeseDigitalBooks: Resource[]
}

export interface CareerRoadmap {
  careerId: string
  stages: RoadmapStage[]
  projects: CareerProject[]
  resources: CareerRoadmapResources
}
