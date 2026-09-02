import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { Button, ButtonLink } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { ProgressBar } from '../components/ui/ProgressBar'
import { RoadmapTimeline } from '../components/roadmap/RoadmapTimeline'
import { Breadcrumbs } from '../components/roadmap/Breadcrumbs'
import { useLanguage } from '../hooks/useLanguage'
import { storage, STORAGE_KEYS } from '../lib/storage'
import { completedTopicIdsFor, completedProjectIdsFor, calculateOverallProgress, toggleProjectCompletion } from '../lib/progress.ts'
import { careerProfiles } from '../data/careers.ts'
import { findRoadmap } from '../data/roadmaps.ts'
import type { LearnerProgress } from '../types/learner'
import type { Resource } from '../types/roadmap'

function findProfile(careerId: string) {
  return careerProfiles.find((profile) => profile.id === careerId)
}

interface ResourceCategoryProps {
  title: string
  resources: Resource[]
  comingSoonText: string
}

function ResourceCategory({ title, resources, comingSoonText }: ResourceCategoryProps) {
  return (
    <Card>
      <h3 className="text-sm font-semibold text-[var(--color-text)]">{title}</h3>
      {resources.length === 0 ? (
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">{comingSoonText}</p>
      ) : (
        <ul className="mt-2 space-y-3">
          {resources.map((resource) => (
            <li key={resource.id}>
              <a
                href={resource.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-[var(--color-primary)] hover:underline"
              >
                {resource.title}
              </a>
              <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">{resource.description}</p>
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}

export function LearningPath() {
  const { career } = useParams<{ career: string }>()
  const { dict, language } = useLanguage()
  const [progress, setProgress] = useState<LearnerProgress | null>(() =>
    storage.getItem<LearnerProgress | null>(STORAGE_KEYS.progress, null),
  )

  const profile = career ? findProfile(career) : undefined
  const roadmap = career ? findRoadmap(career) : undefined

  if (!profile || !roadmap) {
    return (
      <Container className="py-12">
        <Card className="mx-auto max-w-md text-center">
          <h1 className="text-xl font-semibold text-[var(--color-text)]">{dict.learningPath.notFound.title}</h1>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">{dict.learningPath.notFound.description}</p>
          <div className="mt-5">
            <ButtonLink to="/careers" variant="primary">
              {dict.learningPath.notFound.cta}
            </ButtonLink>
          </div>
        </Card>
      </Container>
    )
  }

  const completedTopicIds = completedTopicIdsFor(progress, profile.id)
  const completedProjectIds = completedProjectIdsFor(progress, profile.id)
  const { completed, total, percent } = calculateOverallProgress(roadmap.stages, completedTopicIds)
  const careerName = language === 'my' ? profile.nameMy : profile.name

  const careerId = profile.id

  function handleToggleProject(projectId: string) {
    const next = toggleProjectCompletion(progress, careerId, projectId)
    storage.setItem(STORAGE_KEYS.progress, next)
    setProgress(next)
  }

  const resourceCategories: { key: keyof typeof roadmap.resources; resources: Resource[] }[] = [
    { key: 'myanmarSeniorResources', resources: roadmap.resources.myanmarSeniorResources },
    { key: 'myanmarYoutubeChannels', resources: roadmap.resources.myanmarYoutubeChannels },
    { key: 'freeMyanmarResources', resources: roadmap.resources.freeMyanmarResources },
    { key: 'burmeseDigitalBooks', resources: roadmap.resources.burmeseDigitalBooks },
  ]

  return (
    <Container className="py-10 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs items={[{ label: dict.nav.careers, to: '/careers' }, { label: careerName }]} />

        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
          {dict.learningPath.overviewLabel}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <h1 className="text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">{careerName}</h1>
          <Badge>{dict.learningPath.difficultyLabels[profile.difficulty]}</Badge>
        </div>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)]">
          {profile.shortDescription[language]}
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)]">
          {profile.whatTheyDo[language]}
        </p>

        <Card className="mt-6">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
              {dict.learningPath.sectionResponsibilities}
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm text-[var(--color-text)]">
              {profile.responsibilities.map((item) => (
                <li key={item.en} className="flex gap-2">
                  <span className="text-[var(--color-primary)]">•</span>
                  <span>{item[language]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
              {dict.learningPath.sectionWhereUsed}
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text)]">{profile.whereUsed[language]}</p>
          </div>

          <div className="mt-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
              {dict.learningPath.sectionSuitableFor}
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text)]">{profile.suitableFor[language]}</p>
          </div>

          <div className="mt-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
              {dict.learningPath.sectionPrerequisites}
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm text-[var(--color-text)]">
              {profile.prerequisiteKnowledge.map((item) => (
                <li key={item.en} className="flex gap-2">
                  <span className="text-[var(--color-primary)]">•</span>
                  <span>{item[language]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
              {dict.learningPath.sectionProgression}
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text)]">{profile.progression[language]}</p>
          </div>
        </Card>

        <Card className="mt-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm font-medium text-[var(--color-text)]">{dict.learningPath.progressLabel}</span>
            <span className="text-xs text-[var(--color-text-muted)]">
              {completed}/{total} · {percent}%
            </span>
          </div>
          <div className="mt-2">
            <ProgressBar value={percent} />
          </div>
          {completed === 0 && (
            <p className="mt-3 text-sm text-[var(--color-text-muted)]">{dict.learningPath.justStarted}</p>
          )}
        </Card>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Card>
            <h2 className="text-sm font-semibold text-[var(--color-text)]">
              {dict.learningPath.whyInternationalLabel}
            </h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">{profile.internationalContext[language]}</p>
          </Card>
          <Card>
            <h2 className="text-sm font-semibold text-[var(--color-text)]">{dict.learningPath.whyMyanmarLabel}</h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">{profile.myanmarContext[language]}</p>
          </Card>
        </div>

        <h2 className="mt-10 text-lg font-semibold text-[var(--color-text)]">
          {dict.learningPath.specializationsLabel}
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {profile.specializations.map((specialization) => (
            <span
              key={specialization.en}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-sm text-[var(--color-text)]"
            >
              {specialization[language]}
            </span>
          ))}
        </div>

        <h2 className="mt-10 text-lg font-semibold text-[var(--color-text)]">{dict.learningPath.roadmapLabel}</h2>
        <div className="mt-4">
          <RoadmapTimeline
            careerId={profile.id}
            stages={roadmap.stages}
            completedTopicIds={completedTopicIds}
            statusLabels={dict.learningPath.statusLabels}
          />
        </div>

        <h2 className="mt-6 text-lg font-semibold text-[var(--color-text)]">{dict.learningPath.projectsLabel}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {roadmap.projects.map((project) => {
            const isProjectComplete = completedProjectIds.includes(project.id)
            return (
              <Card key={project.id}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-[var(--color-text)]">{project.title[language]}</h3>
                  <Badge>{dict.learningPath.levelLabels[project.level]}</Badge>
                </div>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{project.description[language]}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.skills.map((skill) => (
                    <span
                      key={skill.en}
                      className="rounded-full border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]"
                    >
                      {skill[language]}
                    </span>
                  ))}
                </div>
                <Button
                  type="button"
                  variant={isProjectComplete ? 'secondary' : 'primary'}
                  onClick={() => handleToggleProject(project.id)}
                  className="mt-4"
                >
                  <CheckCircle2 size={14} />
                  {isProjectComplete ? dict.learningPath.projectCompletedLabel : dict.learningPath.markProjectCompleteCta}
                </Button>
              </Card>
            )
          })}
        </div>

        <h2 className="mt-10 text-lg font-semibold text-[var(--color-text)]">{dict.learningPath.resourcesLabel}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {resourceCategories.map(({ key, resources }) => (
            <ResourceCategory
              key={key}
              title={dict.learningPath.resourceCategoryLabels[key]}
              resources={resources}
              comingSoonText={dict.learningPath.resourcesComingSoon}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}
