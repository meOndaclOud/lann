export interface SelectedCareer {
  id: string
  name: string
  nameMy: string
}

/**
 * Raw completion state for whichever career the learner is currently following.
 * Percentages, current stage, and stage lock state are all derived from this
 * (see lib/progress.ts) rather than stored, per the "don't store progress=72"
 * rule — completedTopicIds is the only source of truth.
 */
export interface LearnerProgress {
  careerId: string
  completedTopicIds: string[]
  /**
   * Optional so progress saved before practice-task tracking existed still
   * loads correctly — always read this through completedTaskIdsFor(), never
   * directly, since older stored records won't have it.
   */
  completedTaskIds?: string[]
}
