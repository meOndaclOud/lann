import type { CareerSlug, LocalizedText } from "@/types/career";

export type StageDifficulty = "beginner" | "junior" | "intermediate" | "advanced";

/** LOCKED/AVAILABLE/IN_PROGRESS/COMPLETED per ARCHITECTURE.md §14/§23. */
export type StageStatus = "locked" | "available" | "in_progress" | "completed";

export type StartingPoint = "nothing" | "some_basics" | "intermediate";

export interface RoadmapStage {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  goal: LocalizedText;
  difficulty: StageDifficulty;
  estimatedHours: number;
  topics: LocalizedText[];
  /** Slugs of stages that must be completed first (ARCHITECTURE.md §23). */
  prerequisiteSlugs: string[];
  /** What kind of resources connect here — a description, never a fabricated link. */
  resourceConnection: LocalizedText;
  /** What kind of project connects here, if this stage has one. */
  projectConnection?: LocalizedText;
  /** Terminal milestone (e.g. "Career Ready") rather than a learning stage. */
  isMilestone?: boolean;
}

export interface CareerRoadmap {
  careerSlug: CareerSlug;
  title: LocalizedText;
  description: LocalizedText;
  stages: RoadmapStage[];
}
