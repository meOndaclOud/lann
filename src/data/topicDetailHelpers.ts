import type { LearningStep } from '../types/roadmap.ts'

export type Pair = [string, string]

export function t(pair: Pair) {
  return { en: pair[0], my: pair[1] }
}

export function list(pairs: Pair[]) {
  return pairs.map(t)
}

export function step(title: Pair, learn: Pair[], practice: Pair[]): LearningStep {
  return { title: t(title), learn: list(learn), practice: list(practice) }
}

export function tasks(topicId: string, items: Pair[]) {
  return items.map((pair, index) => ({ id: `${topicId}-task-${index + 1}`, label: t(pair) }))
}
