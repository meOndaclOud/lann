import { CLOUD_DEVOPS_ROADMAP } from "@/content/roadmaps/cloud-devops";
import { FULL_STACK_DEVELOPMENT_ROADMAP } from "@/content/roadmaps/full-stack-development";
import type { CareerRoadmap } from "@/types/roadmap";

/**
 * Registry of career roadmaps. Cloud/DevOps and Full-Stack Development are
 * populated so far — the other 5 careers simply have no entry yet, so their
 * `/learning-paths/[career]` route 404s until a roadmap is authored for
 * them, using this same `CareerRoadmap` shape and the same components.
 */
export const ROADMAPS: CareerRoadmap[] = [CLOUD_DEVOPS_ROADMAP, FULL_STACK_DEVELOPMENT_ROADMAP];

export function getRoadmapByCareerSlug(slug: string): CareerRoadmap | undefined {
  return ROADMAPS.find((roadmap) => roadmap.careerSlug === slug);
}

export function getRoadmapStage(careerSlug: string, stageSlug: string) {
  const roadmap = getRoadmapByCareerSlug(careerSlug);
  return roadmap?.stages.find((stage) => stage.slug === stageSlug);
}
