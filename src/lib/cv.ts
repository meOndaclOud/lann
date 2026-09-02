import type { Language } from '../context/language-context.ts'
import type { LearnerProfile } from '../types/profile.ts'
import type { SelectedCareer } from '../types/learner.ts'
import type { CareerProfile } from '../types/career.ts'
import type { CareerRoadmap } from '../types/roadmap.ts'
import { isStageComplete } from './progress.ts'

export interface CvSkillGroup {
  stageTitle: string
  topics: string[]
}

export interface CvProject {
  title: string
  description: string
  skills: string[]
}

/**
 * Everything needed to render the CV, already resolved to one language and
 * built entirely from real learner data — see buildCvData below. Nothing
 * here is invented: skills come only from completed topics, projects only
 * from ones the learner explicitly marked complete, certifications/interests
 * only from what the learner typed into their own profile.
 */
export interface CvData {
  fullName: string
  professionalRole: string
  location: string
  bio: string
  phone: string
  email: string
  careerName: string
  levelLabel: string
  percent: number
  summary: string
  skills: string[]
  skillGroups: CvSkillGroup[]
  completedStageTitles: string[]
  projects: CvProject[]
  certifications: string[]
  interests: string[]
}

interface BuildCvDataParams {
  profile: LearnerProfile
  language: Language
  selectedCareer: SelectedCareer
  careerProfile: CareerProfile
  roadmap: CareerRoadmap
  completedTopicIds: string[]
  completedProjectIds: string[]
  percent: number
  levelLabel: string
  /** Small pre-localized connector phrases for the generated summary sentence — see dict.profile.cv.* */
  copy: {
    aspiringPrefix: string
    summaryLead: string
    summaryTrail: string
    and: string
  }
}

function joinNatural(items: string[], and: string): string {
  if (items.length === 0) return ''
  if (items.length === 1) return items[0]
  if (items.length === 2) return `${items[0]} ${and} ${items[1]}`
  return `${items.slice(0, -1).join(', ')}, ${and} ${items[items.length - 1]}`
}

/**
 * Builds the learner's CV entirely from structured data — career profile,
 * roadmap, and actual completion state — never from hardcoded content per
 * career. See CLAUDE.md's "never fabricate" rule: this function has no way
 * to invent a skill, project, or credential the learner hasn't demonstrated.
 */
export function buildCvData(params: BuildCvDataParams): CvData {
  const { profile, language, selectedCareer, careerProfile, roadmap, completedTopicIds, completedProjectIds, percent, levelLabel, copy } =
    params

  const skillGroups: CvSkillGroup[] = roadmap.stages
    .map((stage) => ({
      stageTitle: stage.title[language],
      topics: stage.topics.filter((topic) => completedTopicIds.includes(topic.id)).map((topic) => topic.label[language]),
    }))
    .filter((group) => group.topics.length > 0)

  const skills = skillGroups.flatMap((group) => group.topics)

  const completedStageTitles = roadmap.stages
    .filter((stage) => isStageComplete(stage, completedTopicIds))
    .map((stage) => stage.title[language])

  const projects: CvProject[] = roadmap.projects
    .filter((project) => completedProjectIds.includes(project.id))
    .map((project) => ({
      title: project.title[language],
      description: project.description[language],
      skills: project.skills.map((skill) => skill[language]),
    }))

  const roleNoun = careerProfile.roles[0] ?? (language === 'my' ? selectedCareer.nameMy : selectedCareer.name)
  const topSkillsForSummary = skills.slice(0, 5)
  const summary =
    topSkillsForSummary.length > 0
      ? `${copy.aspiringPrefix} ${roleNoun} ${copy.summaryLead} ${joinNatural(topSkillsForSummary, copy.and)} ${copy.summaryTrail}`
      : `${copy.aspiringPrefix} ${roleNoun} ${copy.summaryTrail}`

  return {
    fullName: profile.fullName,
    professionalRole: profile.professionalRole || roleNoun,
    location: profile.location,
    bio: profile.bio,
    phone: profile.phone,
    email: profile.email,
    careerName: language === 'my' ? selectedCareer.nameMy : selectedCareer.name,
    levelLabel,
    percent,
    summary,
    skills,
    skillGroups,
    completedStageTitles,
    projects,
    certifications: profile.certifications,
    interests: profile.interestedFields,
  }
}
