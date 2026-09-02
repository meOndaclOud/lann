import { ArrowLeft, Download } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { Button, ButtonLink } from '../components/ui/Button'
import { useLanguage } from '../hooks/useLanguage'
import { storage, STORAGE_KEYS } from '../lib/storage'
import { getProfile } from '../lib/profileStore.ts'
import { completedTopicIdsFor, completedProjectIdsFor, calculateOverallProgress, getCurrentStage } from '../lib/progress.ts'
import { careerProfiles } from '../data/careers.ts'
import { careerPathwayExtras } from '../data/careerPathwayExtras.ts'
import { findRoadmap } from '../data/roadmaps.ts'
import { buildCvData } from '../lib/cv.ts'
import type { SelectedCareer, LearnerProgress } from '../types/learner'

function findCareerProfile(careerId: string) {
  return careerProfiles.find((profile) => profile.id === careerId) ?? careerPathwayExtras.find((profile) => profile.id === careerId)
}

function triggerDownload(fullName: string) {
  const originalTitle = document.title
  const safeName = (fullName || 'Learner').trim().replace(/\s+/g, '_')
  document.title = `${safeName}_CV`

  function restore() {
    document.title = originalTitle
    window.removeEventListener('afterprint', restore)
  }
  window.addEventListener('afterprint', restore)
  window.print()
}

export function Cv() {
  const { dict, language } = useLanguage()
  const t = dict.profile

  const selectedCareer = storage.getItem<SelectedCareer | null>(STORAGE_KEYS.selectedCareer, null)
  const careerProfile = selectedCareer ? findCareerProfile(selectedCareer.id) : undefined
  const roadmap = selectedCareer ? findRoadmap(selectedCareer.id) : undefined
  const progress = storage.getItem<LearnerProgress | null>(STORAGE_KEYS.progress, null)
  const completedTopicIds = selectedCareer ? completedTopicIdsFor(progress, selectedCareer.id) : []
  const completedProjectIds = selectedCareer ? completedProjectIdsFor(progress, selectedCareer.id) : []
  const { completed, percent } = roadmap ? calculateOverallProgress(roadmap.stages, completedTopicIds) : { completed: 0, percent: 0 }
  const currentStage = roadmap ? getCurrentStage(roadmap.stages, completedTopicIds) : null

  if (!selectedCareer || !careerProfile || !roadmap || completed === 0) {
    return (
      <Container className="py-12">
        <Card className="mx-auto max-w-md text-center">
          <h1 className="text-xl font-semibold text-[var(--color-text)]">{t.emptyCv.title}</h1>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">{t.emptyCv.description}</p>
          <div className="mt-5">
            <ButtonLink to="/careers" variant="primary">
              {t.emptyCv.cta}
            </ButtonLink>
          </div>
        </Card>
      </Container>
    )
  }

  const profile = getProfile()
  const cv = buildCvData({
    profile,
    language,
    selectedCareer,
    careerProfile,
    roadmap,
    completedTopicIds,
    completedProjectIds,
    percent,
    levelLabel: currentStage ? dict.learningPath.levelLabels[currentStage.level] : '',
    copy: {
      aspiringPrefix: t.cv.aspiringPrefix,
      summaryLead: t.cv.summaryLead,
      summaryTrail: t.cv.summaryTrail,
      and: t.cv.and,
    },
  })

  return (
    <Container className="py-10 sm:py-14">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center justify-between gap-3 print:hidden">
          <Button type="button" variant="ghost" onClick={() => window.history.back()}>
            <ArrowLeft size={14} />
            {t.cv.backToProfile}
          </Button>
          <Button type="button" variant="primary" onClick={() => triggerDownload(cv.fullName)}>
            <Download size={14} />
            {t.cv.downloadCta}
          </Button>
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)] print:hidden">
          {t.cv.pageEyebrow}
        </p>

        <Card className="mt-4 print:border-0 print:bg-white print:p-0 print:shadow-none">
          <div className="print:text-black">
            {/* Header */}
            <h1 className="text-2xl font-semibold text-[var(--color-text)] print:text-black">
              {cv.fullName || t.fields.fullNamePlaceholder}
            </h1>
            <p className="mt-1 text-sm text-[var(--color-text-muted)] print:text-black">{cv.professionalRole}</p>
            <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--color-text-muted)] print:text-black">
              {cv.location && <span>{cv.location}</span>}
              {cv.phone && <span>{cv.phone}</span>}
              {cv.email && <span>{cv.email}</span>}
            </p>

            {/* Summary */}
            <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-[var(--color-text)] print:text-black">
              {t.cv.summaryHeading}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text)] print:text-black">
              {cv.bio ? `${cv.bio} ` : ''}
              {cv.summary}
            </p>

            {/* Skills */}
            {cv.skills.length > 0 && (
              <>
                <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-[var(--color-text)] print:text-black">
                  {t.cv.skillsHeading}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text)] print:text-black">{cv.skills.join(' · ')}</p>
              </>
            )}

            {/* Learning & Development */}
            <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-[var(--color-text)] print:text-black">
              {t.cv.learningHeading}
            </h2>
            <p className="mt-2 text-sm text-[var(--color-text)] print:text-black">
              {cv.careerName} — {cv.levelLabel} ({cv.percent}%)
            </p>
            {cv.completedStageTitles.length > 0 && (
              <p className="mt-1 text-sm text-[var(--color-text-muted)] print:text-black">
                {t.cv.completedSectionsLabel}: {cv.completedStageTitles.join(', ')}
              </p>
            )}
            {cv.skills.length > 0 && (
              <p className="mt-1 text-sm text-[var(--color-text-muted)] print:text-black">
                {t.cv.completedTopicsLabel}: {cv.skills.join(', ')}
              </p>
            )}

            {/* Projects */}
            {cv.projects.length > 0 && (
              <>
                <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-[var(--color-text)] print:text-black">
                  {t.cv.projectsHeading}
                </h2>
                <ul className="mt-2 space-y-3">
                  {cv.projects.map((project) => (
                    <li key={project.title}>
                      <p className="text-sm font-medium text-[var(--color-text)] print:text-black">{project.title}</p>
                      <p className="mt-0.5 text-sm text-[var(--color-text-muted)] print:text-black">{project.description}</p>
                      {project.skills.length > 0 && (
                        <p className="mt-0.5 text-xs text-[var(--color-text-muted)] print:text-black">{project.skills.join(' · ')}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Certifications */}
            {cv.certifications.length > 0 && (
              <>
                <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-[var(--color-text)] print:text-black">
                  {t.cv.certificationsHeading}
                </h2>
                <p className="mt-2 text-sm text-[var(--color-text)] print:text-black">{cv.certifications.join(' · ')}</p>
              </>
            )}

            {/* Interests */}
            {cv.interests.length > 0 && (
              <>
                <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-[var(--color-text)] print:text-black">
                  {t.cv.interestsHeading}
                </h2>
                <p className="mt-2 text-sm text-[var(--color-text)] print:text-black">{cv.interests.join(' · ')}</p>
              </>
            )}
          </div>
        </Card>
      </div>
    </Container>
  )
}
