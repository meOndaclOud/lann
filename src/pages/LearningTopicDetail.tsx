import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Circle, Lock } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { Button, ButtonLink } from '../components/ui/Button'
import { Breadcrumbs } from '../components/roadmap/Breadcrumbs'
import { useLanguage } from '../hooks/useLanguage'
import { storage, STORAGE_KEYS } from '../lib/storage'
import {
  completedTopicIdsFor,
  completedTaskIdsFor,
  toggleTopicCompletion,
  toggleTaskCompletion,
  getStageStatus,
} from '../lib/progress.ts'
import { careerProfiles } from '../data/careers.ts'
import { findRoadmap } from '../data/roadmaps.ts'
import type { LearnerProgress } from '../types/learner'
import type { RoadmapTopic, TopicResourceType } from '../types/roadmap'

function findProfile(careerId: string) {
  return careerProfiles.find((profile) => profile.id === careerId)
}

const RESOURCE_TYPE_ORDER: TopicResourceType[] = [
  'documentation',
  'course',
  'tutorial',
  'video',
  'practice-lab',
  'project',
  'book',
]

export function LearningTopicDetail() {
  const { career, topic: topicId } = useParams<{ career: string; topic: string }>()
  const { dict, language } = useLanguage()
  const [progress, setProgress] = useState(() =>
    storage.getItem<LearnerProgress | null>(STORAGE_KEYS.progress, null),
  )

  const profile = career ? findProfile(career) : undefined
  const roadmap = career ? findRoadmap(career) : undefined

  let topic: RoadmapTopic | undefined
  let stageIndex = -1
  if (roadmap) {
    for (let i = 0; i < roadmap.stages.length; i++) {
      const match = roadmap.stages[i].topics.find((candidate) => candidate.id === topicId)
      if (match) {
        topic = match
        stageIndex = i
        break
      }
    }
  }

  if (!profile || !roadmap || !topic) {
    return (
      <Container className="py-12">
        <Card className="mx-auto max-w-md text-center">
          <h1 className="text-xl font-semibold text-[var(--color-text)]">{dict.topicDetail.notFound.title}</h1>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">{dict.topicDetail.notFound.description}</p>
          <div className="mt-5">
            <ButtonLink to={career ? `/learning-path/${career}` : '/careers'} variant="primary">
              {dict.topicDetail.notFound.cta}
            </ButtonLink>
          </div>
        </Card>
      </Container>
    )
  }

  const careerName = language === 'my' ? profile.nameMy : profile.name
  const completedTopicIds = completedTopicIdsFor(progress, profile.id)
  const completedTaskIds = completedTaskIdsFor(progress, profile.id)
  const isComplete = completedTopicIds.includes(topic.id)
  const stageStatus = getStageStatus(stageIndex, roadmap.stages, completedTopicIds)
  const locked = stageStatus === 'locked'
  const detail = topic.detail

  function handleToggleComplete() {
    const next = toggleTopicCompletion(progress, profile!.id, topic!.id)
    storage.setItem(STORAGE_KEYS.progress, next)
    setProgress(next)
  }

  function handleToggleTask(taskId: string) {
    const next = toggleTaskCompletion(progress, profile!.id, taskId)
    storage.setItem(STORAGE_KEYS.progress, next)
    setProgress(next)
  }

  const resourcesByType = detail
    ? RESOURCE_TYPE_ORDER.map((type) => ({
        type,
        items: detail.resources.filter((resource) => resource.type === type),
      })).filter((group) => group.items.length > 0)
    : []

  return (
    <Container className="py-10 sm:py-14">
      <div className="mx-auto max-w-2xl">
        <Breadcrumbs
          items={[
            { label: dict.nav.careers, to: '/careers' },
            { label: careerName, to: `/learning-path/${profile.id}` },
            { label: topic.label[language] },
          ]}
        />

        <Link
          to={`/learning-path/${profile.id}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
        >
          <ArrowLeft size={15} />
          {dict.topicDetail.backToRoadmap}
        </Link>

        <h1 className="mt-3 text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">{topic.label[language]}</h1>

        {locked ? (
          <Card className="mt-6">
            <div className="flex items-center gap-2">
              <Lock size={16} className="text-[var(--color-text-muted)]" />
              <p className="text-sm text-[var(--color-text-muted)]">{dict.learningPath.statusLabels.locked}</p>
            </div>
          </Card>
        ) : (
          <>
            {detail ? (
              <>
                <Card className="mt-6">
                  <div>
                    <h2 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                      {dict.topicDetail.whatItIsLabel}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--color-text)]">{detail.whatItIs[language]}</p>
                  </div>
                  <div className="mt-5">
                    <h2 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                      {dict.topicDetail.whyItMattersLabel}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--color-text)]">{detail.whyItMatters[language]}</p>
                  </div>
                  <div className="mt-5">
                    <h2 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                      {dict.topicDetail.whereUsedLabel}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--color-text)]">{detail.whereUsed[language]}</p>
                  </div>
                  {detail.prerequisiteNote && (
                    <div className="mt-5">
                      <h2 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                        {dict.topicDetail.prerequisiteLabel}
                      </h2>
                      <p className="mt-2 text-sm text-[var(--color-text)]">{detail.prerequisiteNote[language]}</p>
                    </div>
                  )}
                </Card>

                <h2 className="mt-8 text-base font-semibold text-[var(--color-text)]">
                  {dict.topicDetail.firstStepsLabel}
                </h2>
                <Card className="mt-3">
                  <ol className="space-y-1.5 text-sm text-[var(--color-text)]">
                    {detail.firstSteps.map((firstStep, index) => (
                      <li key={firstStep.en} className="flex gap-2">
                        <span className="text-[var(--color-text-muted)]">{index + 1}.</span>
                        <span>{firstStep[language]}</span>
                      </li>
                    ))}
                  </ol>
                </Card>

                <h2 className="mt-8 text-base font-semibold text-[var(--color-text)]">
                  {dict.topicDetail.deepDiveLabel}
                </h2>
                <div className="mt-3 space-y-4">
                  {detail.steps.map((learningStep, index) => (
                    <Card key={learningStep.title.en}>
                      <h3 className="text-sm font-semibold text-[var(--color-text)]">
                        {String(index + 1).padStart(2, '0')}. {learningStep.title[language]}
                      </h3>
                      <div className="mt-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                          {dict.topicDetail.learnLabel}
                        </p>
                        <ul className="mt-1.5 space-y-1 text-sm text-[var(--color-text)]">
                          {learningStep.learn.map((item) => (
                            <li key={item.en} className="flex gap-2">
                              <span className="text-[var(--color-primary)]">•</span>
                              <span>{item[language]}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                          {dict.topicDetail.practiceLabel}
                        </p>
                        <ul className="mt-1.5 space-y-1 text-sm text-[var(--color-text)]">
                          {learningStep.practice.map((item) => (
                            <li key={item.en} className="flex gap-2">
                              <span className="text-[var(--color-primary)]">•</span>
                              <span>{item[language]}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Card>
                    <h2 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                      {dict.topicDetail.buildLabel}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--color-text)]">{detail.build[language]}</p>
                  </Card>
                  <Card>
                    <h2 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                      {dict.topicDetail.verifyLabel}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--color-text)]">{detail.verify[language]}</p>
                  </Card>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Card>
                    <h2 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                      {dict.topicDetail.tipsLabel}
                    </h2>
                    <ul className="mt-2 space-y-1.5 text-sm text-[var(--color-text)]">
                      {detail.tips.map((tip) => (
                        <li key={tip.en} className="flex gap-2">
                          <span className="text-[var(--color-primary)]">•</span>
                          <span>{tip[language]}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                  <Card>
                    <h2 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                      {dict.topicDetail.commonMistakesLabel}
                    </h2>
                    <ul className="mt-2 space-y-1.5 text-sm text-[var(--color-text)]">
                      {detail.commonMistakes.map((mistake) => (
                        <li key={mistake.en} className="flex gap-2">
                          <span className="text-[var(--color-primary)]">•</span>
                          <span>{mistake[language]}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

                <h2 className="mt-8 text-base font-semibold text-[var(--color-text)]">
                  {dict.topicDetail.practiceTasksLabel}
                </h2>
                <Card className="mt-3">
                  <ul className="space-y-1">
                    {detail.practiceTasks.map((practiceTask) => {
                      const done = completedTaskIds.includes(practiceTask.id)
                      return (
                        <li key={practiceTask.id}>
                          <button
                            type="button"
                            onClick={() => handleToggleTask(practiceTask.id)}
                            className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm transition-colors duration-200 ease-out hover:bg-[var(--color-bg-alt)]"
                          >
                            {done ? (
                              <CheckCircle2 size={16} className="shrink-0 text-[var(--color-primary)]" />
                            ) : (
                              <Circle size={16} className="shrink-0 text-[var(--color-text-muted)]" />
                            )}
                            <span className={done ? 'text-[var(--color-text-muted)] line-through' : 'text-[var(--color-text)]'}>
                              {practiceTask.label[language]}
                            </span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </Card>

                <h2 className="mt-8 text-base font-semibold text-[var(--color-text)]">
                  {dict.topicDetail.resourcesLabel}
                </h2>
                <Card className="mt-3">
                  {resourcesByType.length === 0 ? (
                    <p className="text-sm text-[var(--color-text-muted)]">{dict.topicDetail.resourcesComingSoon}</p>
                  ) : (
                    <div className="space-y-4">
                      {resourcesByType.map(({ type, items }) => (
                        <div key={type}>
                          <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                            {dict.topicDetail.resourceCategoryLabels[type]}
                          </h3>
                          <ul className="mt-2 space-y-2">
                            {items.map((resource) => (
                              <li key={resource.id}>
                                <a
                                  href={resource.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-sm font-medium text-[var(--color-primary)] hover:underline"
                                >
                                  {resource.title}
                                </a>
                                <p className="text-xs text-[var(--color-text-muted)]">{resource.description}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </>
            ) : (
              <Card className="mt-6">
                <h2 className="text-base font-semibold text-[var(--color-text)]">
                  {dict.topicDetail.detailComingSoon.title}
                </h2>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  {dict.topicDetail.detailComingSoon.description}
                </p>
              </Card>
            )}

            <Card className="mt-8">
              <h2 className="text-base font-semibold text-[var(--color-text)]">
                {dict.topicDetail.readyToCompleteLabel}
              </h2>
              {detail && detail.completionChecklist.length > 0 && (
                <>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                    {dict.topicDetail.readyToCompleteIntro}
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-[var(--color-text)]">
                    {detail.completionChecklist.map((item) => (
                      <li key={item.en} className="flex gap-2">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--color-primary)]" />
                        <span>{item[language]}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <Button type="button" variant={isComplete ? 'secondary' : 'primary'} onClick={handleToggleComplete} className="mt-5">
                {isComplete ? dict.topicDetail.markedCompleteLabel : dict.topicDetail.markCompleteCta}
              </Button>
            </Card>
          </>
        )}
      </div>
    </Container>
  )
}
