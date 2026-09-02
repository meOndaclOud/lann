import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Users } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { ButtonLink } from '../components/ui/Button'
import { ProgressBar } from '../components/ui/ProgressBar'
import { Badge } from '../components/ui/Badge'
import { useLanguage } from '../hooks/useLanguage'
import { storage, STORAGE_KEYS } from '../lib/storage'
import { completedTopicIdsFor, calculateOverallProgress, getCurrentStage } from '../lib/progress.ts'
import { findRoadmap } from '../data/roadmaps.ts'
import type { SelectedCareer, LearnerProgress } from '../types/learner'

export function Home() {
  const { dict, language } = useLanguage()

  const selectedCareer = storage.getItem<SelectedCareer | null>(STORAGE_KEYS.selectedCareer, null)
  const progress = storage.getItem<LearnerProgress | null>(STORAGE_KEYS.progress, null)
  const roadmap = selectedCareer ? findRoadmap(selectedCareer.id) : undefined

  const careerName = selectedCareer ? (language === 'my' ? selectedCareer.nameMy : selectedCareer.name) : null
  const completedTopicIds = selectedCareer ? completedTopicIdsFor(progress, selectedCareer.id) : []
  const { completed, total, percent } = roadmap
    ? calculateOverallProgress(roadmap.stages, completedTopicIds)
    : { completed: 0, total: 0, percent: 0 }
  const currentStage = roadmap ? getCurrentStage(roadmap.stages, completedTopicIds) : null
  const stageName = currentStage ? currentStage.title[language] : null
  const hasStarted = completed > 0

  return (
    <Container className="py-10 sm:py-14">
      <section className="rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-bg-alt)] to-[var(--color-surface)] px-6 py-10 sm:px-10 sm:py-14">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
          {dict.home.hero.eyebrow}
        </p>
        <h1 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-[var(--color-text)] sm:text-4xl">
          {dict.home.hero.title}
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
          {dict.home.hero.description}
        </p>
        <div className="mt-6">
          <ButtonLink to="/assessment" variant="primary">
            {dict.home.hero.primaryCta}
            <ArrowRight size={16} />
          </ButtonLink>
        </div>
      </section>

      {selectedCareer && (
        <Card className="mt-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text)]">{dict.home.journey.heading}</h2>
              <p className="mt-1 text-sm font-medium text-[var(--color-primary)]">{careerName}</p>
            </div>
            <ButtonLink to={`/learning-path/${selectedCareer.id}`} variant="secondary">
              {dict.home.journey.continueCta}
              <ArrowRight size={16} />
            </ButtonLink>
          </div>

          {hasStarted ? (
            <div className="mt-5">
              <ProgressBar value={percent} />
              <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--color-text-muted)]">
                <span>
                  {completed}/{total} {dict.home.journey.topicsLabel} · {percent}%
                </span>
                <span>
                  {dict.home.journey.stageLabel}: {stageName}
                </span>
              </div>
            </div>
          ) : (
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">{dict.home.journey.justStarted}</p>
          )}

          <Link
            to="/assessment"
            className="mt-4 inline-block text-xs font-medium text-[var(--color-text-muted)] underline-offset-2 hover:text-[var(--color-text)] hover:underline"
          >
            {dict.home.hero.secondaryCta}
          </Link>
        </Card>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Card>
          <Sparkles size={20} className="text-[var(--color-primary)]" />
          <h2 className="mt-3 text-base font-semibold text-[var(--color-text)]">{dict.home.mentor.title}</h2>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{dict.home.mentor.description}</p>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">{dict.home.mentor.highlight}</p>
        </Card>

        <Card>
          <Users size={20} className="text-[var(--color-primary)]" />
          <div className="mt-3 flex items-center gap-2">
            <h2 className="text-base font-semibold text-[var(--color-text)]">{dict.home.community.title}</h2>
            <Badge>{dict.home.community.comingSoon}</Badge>
          </div>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{dict.home.community.description}</p>
        </Card>
      </div>
    </Container>
  )
}
