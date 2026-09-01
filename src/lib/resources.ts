import { careerRoadmaps } from '../data/roadmaps.ts'
import type { Resource } from '../types/roadmap.ts'

export type ResourceGroupKey = 'watchVideos' | 'digitalBooks' | 'classes' | 'other'

function groupFor(resource: Resource): ResourceGroupKey {
  if (resource.type === 'video') return 'watchVideos'
  if (resource.type === 'book') return 'digitalBooks'
  if (resource.type === 'course' || resource.type === 'practice') return 'classes'
  return 'other'
}

/**
 * Flattens every career's verified resources (see data/roadmaps.ts) into one
 * site-wide list for the standalone /resources page, grouped by resource
 * type into the four categories shown there. A career with no verified
 * resources for a given group simply contributes nothing — never padded
 * with placeholder content (see CLAUDE.md's "never fabricate" rule).
 */
export function getGroupedResources(): Record<ResourceGroupKey, Resource[]> {
  const groups: Record<ResourceGroupKey, Resource[]> = {
    watchVideos: [],
    digitalBooks: [],
    classes: [],
    other: [],
  }

  for (const roadmap of careerRoadmaps) {
    const all = [
      ...roadmap.resources.myanmarSeniorResources,
      ...roadmap.resources.myanmarYoutubeChannels,
      ...roadmap.resources.freeMyanmarResources,
      ...roadmap.resources.burmeseDigitalBooks,
    ]
    for (const resource of all) {
      groups[groupFor(resource)].push(resource)
    }
  }

  return groups
}
