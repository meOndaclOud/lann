import type { RoadmapStage, StageStatus, StartingPoint } from "@/types/roadmap";

/**
 * How many leading stages count as already completed for each starting
 * point. This is a deterministic, client-only demo (no persisted progress
 * yet — ARCHITECTURE.md §14 keeps real progress server-derived once auth
 * and a database exist).
 */
const COMPLETED_COUNT_BY_STARTING_POINT: Record<StartingPoint, number> = {
  nothing: 0,
  some_basics: 3,
  intermediate: 6,
};

/**
 * Computes each stage's status from a linear starting point. Stages before
 * the starting point are COMPLETED, the stage at the starting point is
 * IN_PROGRESS, and everything after is LOCKED until its prerequisite is
 * COMPLETED. AVAILABLE is part of the status model (ARCHITECTURE.md §23)
 * but only appears once a roadmap has non-linear prerequisites — this
 * strictly linear Cloud/DevOps roadmap never produces it.
 */
export function computeStageStatuses(
  stages: RoadmapStage[],
  startingPoint: StartingPoint,
): Map<string, StageStatus> {
  const completedCount = COMPLETED_COUNT_BY_STARTING_POINT[startingPoint];
  const statuses = new Map<string, StageStatus>();

  stages.forEach((stage, index) => {
    if (index < completedCount) {
      statuses.set(stage.slug, "completed");
      return;
    }

    if (index === completedCount) {
      statuses.set(stage.slug, "in_progress");
      return;
    }

    const prerequisitesMet = stage.prerequisiteSlugs.every(
      (slug) => statuses.get(slug) === "completed",
    );
    statuses.set(stage.slug, prerequisitesMet ? "available" : "locked");
  });

  return statuses;
}

/** Default status set used whenever there is no in-page starting-point selection (e.g. a stage detail page reached directly). */
export function computeDefaultStageStatuses(stages: RoadmapStage[]): Map<string, StageStatus> {
  return computeStageStatuses(stages, "nothing");
}
