import { test, describe } from 'node:test'
import assert from 'node:assert/strict'
import {
  completedTopicIdsFor,
  getStageStatus,
  toggleTopicCompletion,
  calculateOverallProgress,
  getCurrentStage,
  completedTaskIdsFor,
  toggleTaskCompletion,
} from './progress.ts'
import type { RoadmapStage } from '../types/roadmap.ts'
import type { LearnerProgress } from '../types/learner.ts'

function topic(id: string) {
  return { id, label: { en: id, my: id } }
}

const stages: RoadmapStage[] = [
  {
    id: 'beginner',
    level: 'beginner',
    title: { en: 'Beginner', my: 'Beginner' },
    description: { en: '', my: '' },
    topics: [topic('b1'), topic('b2')],
  },
  {
    id: 'core',
    level: 'core',
    title: { en: 'Core', my: 'Core' },
    description: { en: '', my: '' },
    topics: [topic('c1'), topic('c2')],
  },
  {
    id: 'advanced',
    level: 'advanced',
    title: { en: 'Advanced', my: 'Advanced' },
    description: { en: '', my: '' },
    topics: [topic('a1')],
  },
]

describe('completedTopicIdsFor', () => {
  test('returns empty when there is no progress yet', () => {
    assert.deepEqual(completedTopicIdsFor(null, 'career-a'), [])
  })

  test('returns empty when progress belongs to a different career', () => {
    const progress: LearnerProgress = { careerId: 'career-b', completedTopicIds: ['b1'] }
    assert.deepEqual(completedTopicIdsFor(progress, 'career-a'), [])
  })

  test('returns the stored ids when the career matches', () => {
    const progress: LearnerProgress = { careerId: 'career-a', completedTopicIds: ['b1', 'b2'] }
    assert.deepEqual(completedTopicIdsFor(progress, 'career-a'), ['b1', 'b2'])
  })
})

describe('getStageStatus', () => {
  test('the first stage is never locked, even with nothing completed', () => {
    assert.equal(getStageStatus(0, stages, []), 'available')
  })

  test('a stage with some but not all topics done is in-progress', () => {
    assert.equal(getStageStatus(0, stages, ['b1']), 'in-progress')
  })

  test('a stage with all topics done is completed', () => {
    assert.equal(getStageStatus(0, stages, ['b1', 'b2']), 'completed')
  })

  test('a later stage is locked until the previous stage is fully completed', () => {
    assert.equal(getStageStatus(1, stages, ['b1']), 'locked')
    assert.equal(getStageStatus(1, stages, ['b1', 'b2']), 'available')
  })

  test('completing an early stage does not unlock stages beyond the very next one', () => {
    assert.equal(getStageStatus(2, stages, ['b1', 'b2']), 'locked')
  })

  test('completing every prior stage unlocks the final stage', () => {
    assert.equal(getStageStatus(2, stages, ['b1', 'b2', 'c1', 'c2']), 'available')
  })
})

describe('toggleTopicCompletion', () => {
  test('marks a topic complete when starting from no progress', () => {
    const result = toggleTopicCompletion(null, 'career-a', 'b1')
    assert.deepEqual(result, { careerId: 'career-a', completedTopicIds: ['b1'], completedTaskIds: [] })
  })

  test('unmarks a topic that was already complete', () => {
    const progress: LearnerProgress = { careerId: 'career-a', completedTopicIds: ['b1', 'b2'] }
    const result = toggleTopicCompletion(progress, 'career-a', 'b1')
    assert.deepEqual(result.completedTopicIds, ['b2'])
  })

  test('switching careers starts a fresh completion list rather than mixing progress', () => {
    const progress: LearnerProgress = { careerId: 'career-a', completedTopicIds: ['b1', 'b2'] }
    const result = toggleTopicCompletion(progress, 'career-b', 'c1')
    assert.deepEqual(result, { careerId: 'career-b', completedTopicIds: ['c1'], completedTaskIds: [] })
  })

  test('does not mutate the progress object passed in', () => {
    const progress: LearnerProgress = { careerId: 'career-a', completedTopicIds: ['b1'] }
    const snapshot = { careerId: progress.careerId, completedTopicIds: [...progress.completedTopicIds] }
    toggleTopicCompletion(progress, 'career-a', 'b2')
    assert.deepEqual(progress, snapshot)
  })
})

describe('calculateOverallProgress', () => {
  test('0 of 5 topics gives 0%', () => {
    const result = calculateOverallProgress(stages, [])
    assert.deepEqual(result, { completed: 0, total: 5, percent: 0 })
  })

  test('partial completion rounds to the nearest percent', () => {
    const result = calculateOverallProgress(stages, ['b1', 'b2'])
    assert.deepEqual(result, { completed: 2, total: 5, percent: 40 })
  })

  test('all topics complete gives 100%', () => {
    const result = calculateOverallProgress(stages, ['b1', 'b2', 'c1', 'c2', 'a1'])
    assert.deepEqual(result, { completed: 5, total: 5, percent: 100 })
  })

  test('an empty roadmap does not divide by zero', () => {
    const result = calculateOverallProgress([], [])
    assert.deepEqual(result, { completed: 0, total: 0, percent: 0 })
  })
})

describe('getCurrentStage', () => {
  test('starts at the first stage when nothing is completed', () => {
    assert.equal(getCurrentStage(stages, [])?.id, 'beginner')
  })

  test('moves to the next stage once the current one is fully completed', () => {
    assert.equal(getCurrentStage(stages, ['b1', 'b2'])?.id, 'core')
  })

  test('stays on the last stage once everything is completed', () => {
    assert.equal(getCurrentStage(stages, ['b1', 'b2', 'c1', 'c2', 'a1'])?.id, 'advanced')
  })

  test('returns null for an empty roadmap', () => {
    assert.equal(getCurrentStage([], []), null)
  })
})

describe('completedTaskIdsFor', () => {
  test('returns empty when there is no progress yet', () => {
    assert.deepEqual(completedTaskIdsFor(null, 'career-a'), [])
  })

  test('returns empty for progress saved before task tracking existed', () => {
    const progress: LearnerProgress = { careerId: 'career-a', completedTopicIds: ['b1'] }
    assert.deepEqual(completedTaskIdsFor(progress, 'career-a'), [])
  })

  test('returns empty when progress belongs to a different career', () => {
    const progress: LearnerProgress = { careerId: 'career-b', completedTopicIds: [], completedTaskIds: ['t1'] }
    assert.deepEqual(completedTaskIdsFor(progress, 'career-a'), [])
  })

  test('returns the stored task ids when the career matches', () => {
    const progress: LearnerProgress = { careerId: 'career-a', completedTopicIds: [], completedTaskIds: ['t1', 't2'] }
    assert.deepEqual(completedTaskIdsFor(progress, 'career-a'), ['t1', 't2'])
  })
})

describe('toggleTaskCompletion', () => {
  test('marks a task complete when starting from no progress', () => {
    const result = toggleTaskCompletion(null, 'career-a', 't1')
    assert.deepEqual(result, { careerId: 'career-a', completedTopicIds: [], completedTaskIds: ['t1'] })
  })

  test('unmarks a task that was already complete', () => {
    const progress: LearnerProgress = { careerId: 'career-a', completedTopicIds: [], completedTaskIds: ['t1', 't2'] }
    const result = toggleTaskCompletion(progress, 'career-a', 't1')
    assert.deepEqual(result.completedTaskIds, ['t2'])
  })

  test('does not disturb topic completion when toggling a task', () => {
    const progress: LearnerProgress = { careerId: 'career-a', completedTopicIds: ['b1', 'b2'] }
    const result = toggleTaskCompletion(progress, 'career-a', 't1')
    assert.deepEqual(result.completedTopicIds, ['b1', 'b2'])
  })
})

describe('cross-field preservation', () => {
  test('toggling a topic does not wipe previously completed tasks', () => {
    const progress: LearnerProgress = { careerId: 'career-a', completedTopicIds: [], completedTaskIds: ['t1', 't2'] }
    const result = toggleTopicCompletion(progress, 'career-a', 'b1')
    assert.deepEqual(result.completedTaskIds, ['t1', 't2'])
  })

  test('toggling a task does not wipe previously completed topics', () => {
    const progress: LearnerProgress = { careerId: 'career-a', completedTopicIds: ['b1'], completedTaskIds: [] }
    const result = toggleTaskCompletion(progress, 'career-a', 't1')
    assert.deepEqual(result.completedTopicIds, ['b1'])
  })
})
