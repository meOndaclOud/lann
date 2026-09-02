import { useRef, useState } from 'react'
import type { ChangeEvent, KeyboardEvent } from 'react'
import { Camera, X, User, Pencil, Briefcase, MapPin, Mail, Phone } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { Button, ButtonLink } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Textarea } from '../components/ui/Textarea'
import { Badge } from '../components/ui/Badge'
import { ProgressBar } from '../components/ui/ProgressBar'
import { useLanguage } from '../hooks/useLanguage'
import { storage, STORAGE_KEYS } from '../lib/storage'
import { getProfile, saveProfile } from '../lib/profileStore.ts'
import { completedTopicIdsFor, calculateOverallProgress, getCurrentStage } from '../lib/progress.ts'
import { careerProfiles } from '../data/careers.ts'
import { careerPathwayExtras } from '../data/careerPathwayExtras.ts'
import { findRoadmap } from '../data/roadmaps.ts'
import type { SelectedCareer, LearnerProgress } from '../types/learner'
import type { LearnerProfile } from '../types/profile.ts'

const AVATAR_SIZE = 160

function findCareerProfile(careerId: string) {
  return careerProfiles.find((profile) => profile.id === careerId) ?? careerPathwayExtras.find((profile) => profile.id === careerId)
}

function resizeImageToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = () => reject(reader.error)
    reader.onload = () => {
      const img = new Image()
      img.onerror = () => reject(new Error('Could not read image'))
      img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = AVATAR_SIZE
        canvas.height = AVATAR_SIZE
        const ctx = canvas.getContext('2d')
        if (!ctx) {
          reject(new Error('Canvas not supported'))
          return
        }
        const side = Math.min(img.width, img.height)
        const sx = (img.width - side) / 2
        const sy = (img.height - side) / 2
        ctx.drawImage(img, sx, sy, side, side, 0, 0, AVATAR_SIZE, AVATAR_SIZE)
        resolve(canvas.toDataURL('image/jpeg', 0.85))
      }
      img.src = reader.result as string
    }
    reader.readAsDataURL(file)
  })
}

interface TagInputProps {
  values: string[]
  onChange: (values: string[]) => void
  placeholder: string
  addLabel: string
  removeLabel: string
}

function TagInput({ values, onChange, placeholder, addLabel, removeLabel }: TagInputProps) {
  const [draft, setDraft] = useState('')

  function addTag() {
    const trimmed = draft.trim()
    if (trimmed.length === 0 || values.includes(trimmed)) {
      setDraft('')
      return
    }
    onChange([...values, trimmed])
    setDraft('')
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      event.preventDefault()
      addTag()
    }
  }

  return (
    <div>
      <div className="flex gap-2">
        <Input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />
        <Button type="button" variant="secondary" onClick={addTag}>
          {addLabel}
        </Button>
      </div>
      {values.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {values.map((value) => (
            <span
              key={value}
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] py-1 pl-3 pr-2 text-xs text-[var(--color-text)]"
            >
              {value}
              <button
                type="button"
                onClick={() => onChange(values.filter((item) => item !== value))}
                aria-label={`${removeLabel}: ${value}`}
                className="flex h-4 w-4 items-center justify-center rounded-full text-[var(--color-text-muted)] transition-colors duration-200 ease-out hover:bg-[var(--color-bg-alt)] hover:text-[var(--color-text)]"
              >
                <X size={11} />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

interface AboutRowProps {
  icon: React.ComponentType<{ size?: number }>
  value: string
}

function AboutRow({ icon: Icon, value }: AboutRowProps) {
  return (
    <div className="flex items-center gap-2.5 text-sm text-[var(--color-text)]">
      <Icon size={15} />
      <span>{value}</span>
    </div>
  )
}

export function Profile() {
  const { dict, language } = useLanguage()
  const t = dict.profile
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [profile, setProfile] = useState<LearnerProfile>(getProfile)
  const [editMode, setEditMode] = useState(false)
  const [draft, setDraft] = useState<LearnerProfile>(profile)
  const [saved, setSaved] = useState(false)

  function updateDraft<K extends keyof LearnerProfile>(key: K, value: LearnerProfile[K]) {
    setDraft((prev) => ({ ...prev, [key]: value }))
  }

  function enterEdit() {
    setDraft(profile)
    setEditMode(true)
    setSaved(false)
  }

  function cancelEdit() {
    setEditMode(false)
  }

  function handleSave() {
    saveProfile(draft)
    setProfile(draft)
    setEditMode(false)
    setSaved(true)
  }

  async function handleAvatarChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    try {
      const dataUrl = await resizeImageToDataUrl(file)
      updateDraft('avatarDataUrl', dataUrl)
    } catch {
      // Photo upload is a nice-to-have — silently skip on failure rather than breaking the form.
    }
  }

  const selectedCareer = storage.getItem<SelectedCareer | null>(STORAGE_KEYS.selectedCareer, null)
  const careerProfile = selectedCareer ? findCareerProfile(selectedCareer.id) : undefined
  const roadmap = selectedCareer ? findRoadmap(selectedCareer.id) : undefined
  const progress = storage.getItem<LearnerProgress | null>(STORAGE_KEYS.progress, null)
  const completedTopicIds = selectedCareer ? completedTopicIdsFor(progress, selectedCareer.id) : []
  const { completed, percent } = roadmap ? calculateOverallProgress(roadmap.stages, completedTopicIds) : { completed: 0, percent: 0 }
  const currentStage = roadmap ? getCurrentStage(roadmap.stages, completedTopicIds) : null
  const careerName = selectedCareer ? (language === 'my' ? selectedCareer.nameMy : selectedCareer.name) : null
  const hasStarted = completed > 0
  const completedSkills = roadmap
    ? roadmap.stages.flatMap((stage) =>
        stage.topics.filter((topic) => completedTopicIds.includes(topic.id)).map((topic) => topic.label[language]),
      )
    : []

  const aboutRows = [
    profile.professionalRole && { icon: Briefcase, value: profile.professionalRole },
    profile.location && { icon: MapPin, value: profile.location },
    profile.email && { icon: Mail, value: profile.email },
    profile.phone && { icon: Phone, value: profile.phone },
  ].filter((row): row is { icon: typeof Briefcase; value: string } => Boolean(row))

  return (
    <Container className="py-10 sm:py-14">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">{t.eyebrow}</p>
        <h1 className="mt-2 text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">{t.title}</h1>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">{t.subtitle}</p>

        {!editMode ? (
          <>
            {/* Header */}
            <Card className="mt-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-bg-alt)] shadow-sm sm:h-20 sm:w-20">
                    {profile.avatarDataUrl ? (
                      <img src={profile.avatarDataUrl} alt="" className="h-full w-full object-cover" />
                    ) : (
                      <User size={28} className="text-[var(--color-text-muted)]" />
                    )}
                  </div>
                  <div>
                    {profile.fullName ? (
                      <>
                        <h2 className="text-xl font-semibold tracking-tight text-[var(--color-text)]">{profile.fullName}</h2>
                        {profile.professionalRole && (
                          <p className="mt-0.5 text-sm font-medium text-[var(--color-text-muted)]">{profile.professionalRole}</p>
                        )}
                      </>
                    ) : (
                      <>
                        <h2 className="text-base font-semibold text-[var(--color-text)]">{t.header.completeProfileTitle}</h2>
                        <p className="mt-0.5 text-sm text-[var(--color-text-muted)]">{t.header.completeProfileDescription}</p>
                      </>
                    )}
                  </div>
                </div>
                <Button type="button" variant="secondary" onClick={enterEdit} className="shrink-0">
                  <Pencil size={14} />
                  <span className="hidden sm:inline">{t.header.editCta}</span>
                </Button>
              </div>
              {saved && <p className="mt-3 text-sm text-[var(--color-text-muted)]">{t.savedNotice}</p>}
            </Card>

            {/* About */}
            <Card className="mt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">{t.sectionAbout}</h3>
              {aboutRows.length === 0 ? (
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{t.emptyAbout}</p>
              ) : (
                <div className="mt-3 space-y-2.5">
                  {aboutRows.map((row) => (
                    <AboutRow key={row.value} icon={row.icon} value={row.value} />
                  ))}
                </div>
              )}
              {profile.interestedFields.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {profile.interestedFields.map((field) => (
                    <Badge key={field}>{field}</Badge>
                  ))}
                </div>
              )}
            </Card>

            {/* Bio */}
            <Card className="mt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">{t.sectionBio}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text)]">{profile.bio || t.emptyBio}</p>
            </Card>
          </>
        ) : (
          <>
            {/* Personal Information */}
            <Card className="mt-8">
              <h2 className="text-base font-semibold text-[var(--color-text)]">{t.editSections.personalInfo}</h2>

              <div className="mt-4 flex items-center gap-4">
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-bg-alt)]">
                  {draft.avatarDataUrl ? (
                    <img src={draft.avatarDataUrl} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <User size={26} className="text-[var(--color-text-muted)]" />
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button type="button" variant="secondary" onClick={() => fileInputRef.current?.click()}>
                    <Camera size={14} />
                    {t.avatarUploadCta}
                  </Button>
                  {draft.avatarDataUrl && (
                    <Button type="button" variant="ghost" onClick={() => updateDraft('avatarDataUrl', undefined)}>
                      {t.avatarRemoveCta}
                    </Button>
                  )}
                  <input ref={fileInputRef} type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-[var(--color-text-muted)]">{t.fields.fullName}</label>
                  <Input
                    className="mt-1.5"
                    value={draft.fullName}
                    onChange={(event) => updateDraft('fullName', event.target.value)}
                    placeholder={t.fields.fullNamePlaceholder}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-[var(--color-text-muted)]">{t.fields.location}</label>
                  <Input
                    className="mt-1.5"
                    value={draft.location}
                    onChange={(event) => updateDraft('location', event.target.value)}
                    placeholder={t.fields.locationPlaceholder}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-[var(--color-text-muted)]">{t.fields.phone}</label>
                  <Input
                    className="mt-1.5"
                    type="tel"
                    value={draft.phone}
                    onChange={(event) => updateDraft('phone', event.target.value)}
                    placeholder={t.fields.phonePlaceholder}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-[var(--color-text-muted)]">{t.fields.email}</label>
                  <Input
                    className="mt-1.5"
                    type="email"
                    value={draft.email}
                    onChange={(event) => updateDraft('email', event.target.value)}
                    placeholder={t.fields.emailPlaceholder}
                  />
                </div>
              </div>
            </Card>

            {/* Professional Information */}
            <Card className="mt-4">
              <h2 className="text-base font-semibold text-[var(--color-text)]">{t.editSections.professionalInfo}</h2>
              <div className="mt-4">
                <label className="text-xs font-medium text-[var(--color-text-muted)]">{t.fields.professionalRole}</label>
                <Input
                  className="mt-1.5"
                  value={draft.professionalRole}
                  onChange={(event) => updateDraft('professionalRole', event.target.value)}
                  placeholder={t.fields.professionalRolePlaceholder}
                />
              </div>
              <div className="mt-4">
                <label className="text-xs font-medium text-[var(--color-text-muted)]">{t.fields.certifications}</label>
                <div className="mt-1.5">
                  <TagInput
                    values={draft.certifications}
                    onChange={(values) => updateDraft('certifications', values)}
                    placeholder={t.fields.certificationsPlaceholder}
                    addLabel={t.addCta}
                    removeLabel={t.removeCta}
                  />
                </div>
              </div>
            </Card>

            {/* About You */}
            <Card className="mt-4">
              <h2 className="text-base font-semibold text-[var(--color-text)]">{t.editSections.aboutYou}</h2>
              <div className="mt-4">
                <label className="text-xs font-medium text-[var(--color-text-muted)]">{t.fields.bio}</label>
                <Textarea
                  className="mt-1.5"
                  rows={3}
                  value={draft.bio}
                  onChange={(event) => updateDraft('bio', event.target.value)}
                  placeholder={t.fields.bioPlaceholder}
                />
              </div>
            </Card>

            {/* Interests */}
            <Card className="mt-4">
              <h2 className="text-base font-semibold text-[var(--color-text)]">{t.editSections.interests}</h2>
              <div className="mt-4">
                <TagInput
                  values={draft.interestedFields}
                  onChange={(values) => updateDraft('interestedFields', values)}
                  placeholder={t.fields.interestedFieldsPlaceholder}
                  addLabel={t.addCta}
                  removeLabel={t.removeCta}
                />
              </div>
            </Card>

            <div className="mt-6 flex items-center gap-3">
              <Button type="button" variant="primary" onClick={handleSave}>
                {t.saveCta}
              </Button>
              <Button type="button" variant="ghost" onClick={cancelEdit}>
                {t.cancelCta}
              </Button>
            </div>
          </>
        )}

        <h2 className="mt-10 text-lg font-semibold text-[var(--color-text)]">{t.sectionLearningProgress}</h2>

        {!selectedCareer || !careerProfile || !roadmap ? (
          <Card className="mt-4 text-center">
            <h3 className="text-base font-semibold text-[var(--color-text)]">{t.noCareerSelected.title}</h3>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">{t.noCareerSelected.description}</p>
            <div className="mt-4">
              <ButtonLink to="/careers" variant="primary">
                {t.noCareerSelected.cta}
              </ButtonLink>
            </div>
          </Card>
        ) : (
          <>
            <Card className="mt-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-xs text-[var(--color-text-muted)]">{t.currentlyLearningLabel}</p>
                  <p className="mt-0.5 text-base font-semibold text-[var(--color-text)]">{careerName}</p>
                </div>
                {currentStage && <Badge>{dict.learningPath.levelLabels[currentStage.level]}</Badge>}
              </div>
              <div className="mt-4 flex items-center justify-between gap-2 text-xs text-[var(--color-text-muted)]">
                <span>{t.progressLabel}</span>
                <span>{percent}%</span>
              </div>
              <div className="mt-1.5">
                <ProgressBar value={percent} />
              </div>
              <div className="mt-4">
                <ButtonLink to={`/learning-path/${selectedCareer.id}`} variant="secondary">
                  {t.continueLearningCta}
                </ButtonLink>
              </div>
            </Card>

            {!hasStarted ? (
              <Card className="mt-4 text-center">
                <h3 className="text-base font-semibold text-[var(--color-text)]">{t.emptyCv.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{t.emptyCv.description}</p>
                <div className="mt-4">
                  <ButtonLink to={`/learning-path/${selectedCareer.id}`} variant="primary">
                    {t.continueLearningCta}
                  </ButtonLink>
                </div>
              </Card>
            ) : (
              <>
                <h2 className="mt-10 text-lg font-semibold text-[var(--color-text)]">{t.sectionPortfolio}</h2>
                <Card className="mt-4">
                  <h3 className="text-base font-semibold text-[var(--color-text)]">{t.portfolioTitle}</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{t.portfolioIntro}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <Badge>{careerName}</Badge>
                    {currentStage && <Badge>{dict.learningPath.levelLabels[currentStage.level]}</Badge>}
                    <span className="text-xs text-[var(--color-text-muted)]">
                      {t.progressLabel}: {percent}%
                    </span>
                  </div>

                  {completedSkills.length > 0 && (
                    <div className="mt-4 border-t border-[var(--color-border)] pt-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                        {t.cv.skillsHeading}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {completedSkills.slice(0, 6).map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-text-muted)]"
                          >
                            {skill}
                          </span>
                        ))}
                        {completedSkills.length > 6 && (
                          <span className="rounded-full px-2.5 py-1 text-xs text-[var(--color-text-muted)]">
                            +{completedSkills.length - 6}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="mt-4">
                    <ButtonLink to="/profile/cv" variant="primary">
                      {t.viewCvCta}
                    </ButtonLink>
                  </div>
                </Card>
              </>
            )}
          </>
        )}
      </div>
    </Container>
  )
}
