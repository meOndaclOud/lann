import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { Button, ButtonLink } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { ProgressBar } from '../components/ui/ProgressBar'
import { useLanguage } from '../hooks/useLanguage'
import { storage, STORAGE_KEYS } from '../lib/storage'
import { matchCareers } from '../lib/careerMatching.ts'
import { careerProfiles } from '../data/careers.ts'
import type { LearnerAnswers } from '../types/assessment'
import type { CareerMatch, CareerProfile, MatchLevel } from '../types/career'
import type { SelectedCareer } from '../types/learner'

function findProfile(careerId: string): CareerProfile | undefined {
  return careerProfiles.find((profile) => profile.id === careerId)
}

interface MatchCardProps {
  match: CareerMatch
  profile: CareerProfile
  rank: number
  expanded: boolean
  onToggle: () => void
  onChoose: () => void
}

function MatchCard({ match, profile, rank, expanded, onToggle, onChoose }: MatchCardProps) {
  const { dict, language } = useLanguage()
  const levelLabel: Record<MatchLevel, string> = dict.assessmentResult.levels

  return (
    <Card className="!p-0 overflow-hidden">
      <button type="button" onClick={onToggle} className="flex w-full items-center gap-4 p-5 text-left">
        <span className="text-lg font-semibold text-[var(--color-text-muted)]">0{rank}</span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-base font-semibold text-[var(--color-text)]">
              {language === 'my' ? profile.nameMy : profile.name}
            </h2>
            <Badge>{levelLabel[match.level]}</Badge>
          </div>
          <div className="mt-2 max-w-xs">
            <ProgressBar value={match.score} />
          </div>
        </div>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[var(--color-text-muted)] transition-transform duration-200 ease-out ${
            expanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {expanded && (
        <div className="border-t border-[var(--color-border)] px-5 pb-5 pt-4">
          {match.reasons.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                {dict.assessmentResult.sectionWhy}
              </h3>
              <ul className="mt-2 space-y-1.5 text-sm text-[var(--color-text)]">
                {match.reasons.map((reason) => (
                  <li key={reason.en} className="flex gap-2">
                    <span className="text-[var(--color-primary)]">•</span>
                    <span>{reason[language]}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
              {dict.assessmentResult.sectionStrengths}
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm text-[var(--color-text)]">
              {profile.skills.map((skill) => (
                <li key={skill.en} className="flex gap-2">
                  <span className="text-[var(--color-primary)]">•</span>
                  <span>{skill[language]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
              {dict.assessmentResult.sectionChallenges}
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm text-[var(--color-text-muted)]">
              {profile.challenges.map((challenge) => (
                <li key={challenge.en} className="flex gap-2">
                  <span className="text-[var(--color-primary)]">•</span>
                  <span>{challenge[language]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
              {dict.assessmentResult.sectionMyanmar}
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text)]">{profile.myanmarContext[language]}</p>
          </div>

          <div className="mt-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
              {dict.assessmentResult.sectionRoles}
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text)]">{profile.roles.join(' · ')}</p>
          </div>

          {profile.specializations.length > 0 && (
            <div className="mt-5">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                {dict.assessmentResult.sectionSpecializations}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {profile.specializations.map((specialization) => (
                  <Badge key={specialization.en}>{specialization[language]}</Badge>
                ))}
              </div>
            </div>
          )}

          <Button type="button" variant="primary" onClick={onChoose} className="mt-6">
            {dict.assessmentResult.chooseCta}
          </Button>
        </div>
      )}
    </Card>
  )
}

export function AssessmentResult() {
  const { dict } = useLanguage()
  const navigate = useNavigate()
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [answers] = useState(() => storage.getItem<LearnerAnswers | null>(STORAGE_KEYS.learnerAnswers, null))
  const [result] = useState(() => (answers ? matchCareers(answers) : null))

  function handleChoose(profile: CareerProfile) {
    const selected: SelectedCareer = { id: profile.id, name: profile.name, nameMy: profile.nameMy }
    storage.setItem(STORAGE_KEYS.selectedCareer, selected)
    navigate(`/learning-path/${profile.id}`)
  }

  if (!answers) {
    return (
      <Container className="py-12">
        <Card className="mx-auto max-w-md text-center">
          <h1 className="text-xl font-semibold text-[var(--color-text)]">
            {dict.assessmentResult.emptyNoAnswers.title}
          </h1>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            {dict.assessmentResult.emptyNoAnswers.description}
          </p>
          <div className="mt-5">
            <ButtonLink to="/assessment" variant="primary">
              {dict.assessmentResult.emptyNoAnswers.cta}
            </ButtonLink>
          </div>
        </Card>
      </Container>
    )
  }

  if (!result || result.matches.length === 0) {
    return (
      <Container className="py-12">
        <Card className="mx-auto max-w-md text-center">
          <h1 className="text-xl font-semibold text-[var(--color-text)]">
            {dict.assessmentResult.emptyNoMatches.title}
          </h1>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            {dict.assessmentResult.emptyNoMatches.description}
          </p>
          <div className="mt-5">
            <ButtonLink to="/careers" variant="primary">
              {dict.assessmentResult.emptyNoMatches.cta}
            </ButtonLink>
          </div>
        </Card>
      </Container>
    )
  }

  return (
    <Container className="py-10 sm:py-14">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
          {dict.assessmentResult.eyebrow}
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">
          {dict.assessmentResult.title}
        </h1>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">{dict.assessmentResult.intro}</p>

        <div className="mt-8 space-y-4">
          {result.matches.map((match, index) => {
            const profile = findProfile(match.careerId)
            if (!profile) return null
            return (
              <MatchCard
                key={profile.id}
                match={match}
                profile={profile}
                rank={index + 1}
                expanded={expandedId === profile.id}
                onToggle={() => setExpandedId((current) => (current === profile.id ? null : profile.id))}
                onChoose={() => handleChoose(profile)}
              />
            )
          })}
        </div>
      </div>
    </Container>
  )
}
