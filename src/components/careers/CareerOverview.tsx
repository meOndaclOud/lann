import { X } from 'lucide-react'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { useLanguage } from '../../hooks/useLanguage'
import type { CareerProfile } from '../../types/career.ts'
import type { LocalizedText } from '../../types/common.ts'
import type { Language } from '../../context/language-context.ts'

function lowerFirst(text: string, language: Language): string {
  if (language !== 'en' || text.length === 0) return text
  return text.charAt(0).toLowerCase() + text.slice(1)
}

function joinNatural(items: LocalizedText[], language: Language, and: string): string {
  const values = items.map((item) => lowerFirst(item[language], language))
  if (values.length === 0) return ''
  if (values.length === 1) return values[0]
  if (values.length === 2) return `${values[0]} ${and} ${values[1]}`
  return `${values.slice(0, -1).join(', ')}, ${and} ${values[values.length - 1]}`
}

interface CareerOverviewProps {
  title: LocalizedText
  profile: CareerProfile
  onClose: () => void
}

export function CareerOverview({ title, profile, onClose }: CareerOverviewProps) {
  const { dict, language } = useLanguage()
  const t = dict.careersPathway

  const responsibilities = joinNatural(profile.responsibilities, language, t.and)
  const skills = joinNatural(profile.skills, language, t.and)
  const prerequisites = joinNatural(profile.prerequisiteKnowledge, language, t.and)
  const industries = profile.industries ? joinNatural(profile.industries, language, t.and) : ''

  const marketFacts = [profile.salaryRange, profile.demand, profile.competitiveness, profile.careerOpportunities]
    .filter((fact): fact is LocalizedText => Boolean(fact))
    .map((fact) => fact[language])

  return (
    <Card key={profile.id} className="mt-8 animate-[lann-fade-in_350ms_ease-out] motion-reduce:animate-none sm:mt-10">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-lg font-semibold text-[var(--color-text)] sm:text-xl">{title[language]}</h2>
          <Badge>{dict.learningPath.difficultyLabels[profile.difficulty]}</Badge>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label={t.closeCta}
          title={t.closeCta}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[var(--color-text-muted)] transition-colors duration-200 ease-out hover:bg-[var(--color-bg-alt)] hover:text-[var(--color-text)]"
        >
          <X size={16} />
        </button>
      </div>

      <div className="mt-4 space-y-4 text-sm leading-relaxed text-[var(--color-text)]">
        <p>
          {profile.whatTheyDo[language]} {profile.suitableFor[language]}
        </p>

        <p>
          {t.dayToDayLead} {responsibilities}. {t.thrivesLead} {skills}.
        </p>

        <p>
          {t.gettingStartedLead} {prerequisites}. {profile.progression[language]}
        </p>

        {marketFacts.length > 0 && (
          <p>
            <span className="font-semibold text-[var(--color-text)]">{t.atAGlance}: </span>
            {marketFacts.join(' ')}
            {industries && (
              <>
                {' '}
                {t.industriesLead} {industries}.
              </>
            )}
          </p>
        )}

        {profile.futureOutlook && <p>{profile.futureOutlook[language]}</p>}
      </div>
    </Card>
  )
}
