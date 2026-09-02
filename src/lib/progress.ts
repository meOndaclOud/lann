import type { LearnerProgress } from '../types/learner.ts'
import type { RoadmapStage, RoadmapStageStatus } from '../types/roadmap.ts'

/** Completed topic ids for `careerId`, or an empty list if progress belongs to a different career (or none exists). */
export function completedTopicIdsFor(progress: LearnerProgress | null, careerId: string): string[] {
  return progress && progress.careerId === careerId ? progress.completedTopicIds : []
}

export function isTopicCompleted(completedTopicIds: string[], topicId: string): boolean {
  return completedTopicIds.includes(topicId)
}

/** Completed practice-task ids for `careerId`. Safe against progress saved before task tracking existed. */
export function completedTaskIdsFor(progress: LearnerProgress | null, careerId: string): string[] {
  if (!progress || progress.careerId !== careerId) return []
  return progress.completedTaskIds ?? []
}

/** Exported for lib/cv.ts, which needs to know which stages are fully done to list "Completed sections" honestly. */
export function isStageComplete(stage: RoadmapStage, completedTopicIds: string[]): boolean {
  return stage.topics.length > 0 && stage.topics.every((topic) => completedTopicIds.includes(topic.id))
}

/** Completed project ids for `careerId`. Safe against progress saved before project tracking existed. */
export function completedProjectIdsFor(progress: LearnerProgress | null, careerId: string): string[] {
  if (!progress || progress.careerId !== careerId) return []
  return progress.completedProjectIds ?? []
}

/**
 * A stage is locked until the previous stage is fully completed. The first
 * stage is never locked. Beyond that, status reflects how many of its own
 * topics are done.
 */
export function getStageStatus(
  stageIndex: number,
  stages: RoadmapStage[],
  completedTopicIds: string[],
): RoadmapStageStatus {
  const stage = stages[stageIndex]

  if (stageIndex > 0 && !isStageComplete(stages[stageIndex - 1], completedTopicIds)) {
    return 'locked'
  }

  const completed = stage.topics.filter((topic) => completedTopicIds.includes(topic.id)).length
  if (stage.topics.length > 0 && completed === stage.topics.length) return 'completed'
  if (completed > 0) return 'in-progress'
  return 'available'
}

/** Toggles one topic's completion, resetting to a fresh state if the learner switched careers. */
export function toggleTopicCompletion(
  progress: LearnerProgress | null,
  careerId: string,
  topicId: string,
): LearnerProgress {
  const current = completedTopicIdsFor(progress, careerId)
  const completedTopicIds = current.includes(topicId)
    ? current.filter((id) => id !== topicId)
    : [...current, topicId]
  return {
    careerId,
    completedTopicIds,
    completedTaskIds: completedTaskIdsFor(progress, careerId),
    completedProjectIds: completedProjectIdsFor(progress, careerId),
  }
}

export interface OverallProgress {
  completed: number
  total: number
  percent: number
}

export function calculateOverallProgress(stages: RoadmapStage[], completedTopicIds: string[]): OverallProgress {
  const allTopics = stages.flatMap((stage) => stage.topics)
  const total = allTopics.length
  const completed = allTopics.filter((topic) => completedTopicIds.includes(topic.id)).length
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0
  return { completed, total, percent }
}

/** The first stage that isn't fully completed yet — i.e. what the learner should work on next. */
export function getCurrentStage(stages: RoadmapStage[], completedTopicIds: string[]): RoadmapStage | null {
  for (const stage of stages) {
    if (!isStageComplete(stage, completedTopicIds)) return stage
  }
  return stages.length > 0 ? stages[stages.length - 1] : null
}

/** Toggles one practice task's completion, independent of topic completion. */
export function toggleTaskCompletion(
  progress: LearnerProgress | null,
  careerId: string,
  taskId: string,
): LearnerProgress {
  const completedTopicIds = completedTopicIdsFor(progress, careerId)
  const currentTasks = completedTaskIdsFor(progress, careerId)
  const completedTaskIds = currentTasks.includes(taskId)
    ? currentTasks.filter((id) => id !== taskId)
    : [...currentTasks, taskId]
  return { careerId, completedTopicIds, completedTaskIds, completedProjectIds: completedProjectIdsFor(progress, careerId) }
}

/** Toggles one project's completion, independent of topic/task completion. */
export function toggleProjectCompletion(
  progress: LearnerProgress | null,
  careerId: string,
  projectId: string,
): LearnerProgress {
  const completedTopicIds = completedTopicIdsFor(progress, careerId)
  const completedTaskIds = completedTaskIdsFor(progress, careerId)
  const current = completedProjectIdsFor(progress, careerId)
  const completedProjectIds = current.includes(projectId)
    ? current.filter((id) => id !== projectId)
    : [...current, projectId]
  return { careerId, completedTopicIds, completedTaskIds, completedProjectIds }
}
