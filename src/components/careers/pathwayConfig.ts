import { Code2, Layers, Palette, Server, Network, ShieldCheck, Cloud, Activity, Compass, Bot, Wand2, Blocks } from 'lucide-react'
import type { ComponentType } from 'react'
import type { LocalizedText } from '../../types/common.ts'
import type { CareerProfile } from '../../types/career.ts'
import { careerProfiles } from '../../data/careers.ts'
import { careerPathwayExtras } from '../../data/careerPathwayExtras.ts'

export interface PathwayNode {
  careerId: string
  icon: ComponentType<{ size?: number }>
  /** Display title for this page specifically — kept separate from CareerProfile.name/nameMy so other pages (e.g. the Learning Path) are unaffected. */
  title: LocalizedText
}

/**
 * The careers shown on the /careers pathway map, in a difficulty-rising
 * "journey" order: foundational dev/design roles first, then infrastructure
 * and security, then senior/generalist and AI-focused paths as the finale.
 */
export const PATHWAY_NODES: PathwayNode[] = [
  { careerId: 'software-engineering', icon: Code2, title: { en: 'Programmer', my: 'ပရိုဂရမ်မာ' } },
  { careerId: 'full-stack-development', icon: Layers, title: { en: 'Full Stack Developer', my: 'Full Stack ဆော့ဖ်ဝဲအင်ဂျင်နီယာ' } },
  { careerId: 'ui-ux-design', icon: Palette, title: { en: 'UI/UX Designer', my: 'UI/UX ဒီဇိုင်နာ' } },
  { careerId: 'system-administrator', icon: Server, title: { en: 'System Administrator', my: 'System အက်ဒမင်' } },
  { careerId: 'networking', icon: Network, title: { en: 'Network Engineer', my: 'Network အင်ဂျင်နီယာ' } },
  { careerId: 'cybersecurity', icon: ShieldCheck, title: { en: 'Cybersecurity Analyst', my: 'Cybersecurity လုံခြုံရေးပညာရှင်' } },
  { careerId: 'cloud-devops', icon: Cloud, title: { en: 'Cloud / DevOps Engineer', my: 'Cloud / DevOps အင်ဂျင်နီယာ' } },
  { careerId: 'site-reliability-engineer', icon: Activity, title: { en: 'Site Reliability Engineer', my: 'Site Reliability အင်ဂျင်နီယာ' } },
  { careerId: 'forward-deployed-engineer', icon: Compass, title: { en: 'Forward Deployed Engineer', my: 'Forward Deployed အင်ဂျင်နီယာ' } },
  { careerId: 'solution-architect', icon: Blocks, title: { en: 'Solution Architect', my: 'Solution Architect' } },
  { careerId: 'prompt-engineer', icon: Wand2, title: { en: 'Prompt Engineer', my: 'Prompt Engineer' } },
  { careerId: 'ai-engineer', icon: Bot, title: { en: 'AI Engineer', my: 'AI အင်ဂျင်နီယာ' } },
]

/** Looks up a career's full profile from either data source the pathway map draws on. */
export function findPathwayCareerProfile(careerId: string): CareerProfile | undefined {
  return careerProfiles.find((profile) => profile.id === careerId) ?? careerPathwayExtras.find((profile) => profile.id === careerId)
}
