import { Link } from 'react-router-dom'
import { CheckCircle2, Circle, CircleDot, Lock, ChevronRight } from 'lucide-react'
import { Card } from '../ui/Card'
import { useLanguage } from '../../hooks/useLanguage'
import { getStageStatus } from '../../lib/progress.ts'
import type { RoadmapStage, RoadmapStageStatus } from '../../types/roadmap.ts'

interface RoadmapTimelineProps {
  careerId: string
  stages: RoadmapStage[]
  completedTopicIds: string[]
  statusLabels: Record<RoadmapStageStatus, string>
}

function StatusIcon({ status }: { status: RoadmapStageStatus }) {
  if (status === 'completed') return <CheckCircle2 size={18} className="text-[var(--color-primary)]" />
  if (status === 'in-progress') return <CircleDot size={18} className="text-[var(--color-primary)]" />
  if (status === 'locked') return <Lock size={15} className="text-[var(--color-text-muted)]" />
  return <Circle size={18} className="text-[var(--color-text-muted)]" />
}

export function RoadmapTimeline({ careerId, stages, completedTopicIds, statusLabels }: RoadmapTimelineProps) {
  const { language } = useLanguage()

  return (
    <div>
      {stages.map((stage, index) => {
        const status = getStageStatus(index, stages, completedTopicIds)
        const locked = status === 'locked'
        const isLast = index === stages.length - 1

        return (
          <div key={stage.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]">
                <StatusIcon status={status} />
              </div>
              {!isLast && <div className="w-px flex-1 bg-[var(--color-border)]" />}
            </div>

            <div className="flex-1 pb-6">
              <Card className={locked ? 'opacity-60' : ''}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-[var(--color-text)]">{stage.title[language]}</h3>
                  <span className="text-xs font-medium uppercase tracking-wide text-[var(--color-text-muted)]">
                    {statusLabels[status]}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{stage.description[language]}</p>

                <ul className="mt-4 space-y-1">
                  {stage.topics.map((topic) => {
                    const done = completedTopicIds.includes(topic.id)

                    if (locked) {
                      return (
                        <li key={topic.id}>
                          <span className="flex w-full cursor-not-allowed items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-[var(--color-text-muted)]">
                            <Circle size={16} className="shrink-0" />
                            <span>{topic.label[language]}</span>
                          </span>
                        </li>
                      )
                    }

                    return (
                      <li key={topic.id}>
                        <Link
                          to={`/learning-path/${careerId}/${topic.id}`}
                          className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors duration-200 ease-out hover:bg-[var(--color-bg-alt)]"
                        >
                          {done ? (
                            <CheckCircle2 size={16} className="shrink-0 text-[var(--color-primary)]" />
                          ) : (
                            <Circle size={16} className="shrink-0 text-[var(--color-text-muted)]" />
                          )}
                          <span className={done ? 'flex-1 text-[var(--color-text-muted)] line-through' : 'flex-1 text-[var(--color-text)]'}>
                            {topic.label[language]}
                          </span>
                          <ChevronRight size={15} className="shrink-0 text-[var(--color-text-muted)]" />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </Card>
            </div>
          </div>
        )
      })}
    </div>
  )
}
