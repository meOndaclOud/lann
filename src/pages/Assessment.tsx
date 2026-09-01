import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Textarea } from '../components/ui/Textarea'
import { ProgressBar } from '../components/ui/ProgressBar'
import { ChoiceGroup } from '../components/assessment/ChoiceGroup'
import { useLanguage } from '../hooks/useLanguage'
import { storage, STORAGE_KEYS } from '../lib/storage'
import { assessmentQuestions } from '../data/assessmentQuestions'
import type { LearnerAnswers } from '../types/assessment'

const emptyAnswers: LearnerAnswers = {
  technologyInterest: '',
  currentExperience: '',
  currentSkills: '',
  difficulties: '',
  preferredWork: '',
  careerGoal: '',
  learningStyle: '',
  careerUncertainty: '',
  expectations: '',
}

function getInitialAnswers(): LearnerAnswers {
  const stored = storage.getItem<Partial<LearnerAnswers>>(STORAGE_KEYS.learnerAnswers, {})
  return { ...emptyAnswers, ...stored }
}

export function Assessment() {
  const { dict, language } = useLanguage()
  const navigate = useNavigate()

  const [answers, setAnswers] = useState<LearnerAnswers>(getInitialAnswers)
  const [stepIndex, setStepIndex] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const totalSteps = assessmentQuestions.length
  const question = assessmentQuestions[stepIndex]
  const isLastStep = stepIndex === totalSteps - 1
  const percent = Math.round(((stepIndex + 1) / totalSteps) * 100)

  function updateAnswer(value: string) {
    const next = { ...answers, [question.id]: value }
    setAnswers(next)
    storage.setItem(STORAGE_KEYS.learnerAnswers, next)
    if (error) setError(null)
  }

  function handleNext() {
    if (answers[question.id].trim().length === 0) {
      setError(question.type === 'choice' ? dict.assessment.choiceRequiredError : dict.assessment.requiredError)
      return
    }

    if (isLastStep) {
      navigate('/assessment/result')
      return
    }

    setStepIndex((i) => i + 1)
    setError(null)
  }

  function handleBack() {
    setError(null)
    setStepIndex((i) => Math.max(0, i - 1))
  }

  return (
    <Container className="py-10 sm:py-14">
      <div className="mx-auto max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
          {dict.assessment.title}
        </p>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">{dict.assessment.intro}</p>

        <div className="mt-6">
          <ProgressBar value={percent} />
          <p className="mt-2 text-xs text-[var(--color-text-muted)]">
            {dict.assessment.stepLabel} {stepIndex + 1}/{totalSteps}
          </p>
        </div>

        <Card className="mt-6">
          <h1 className="text-lg font-semibold text-[var(--color-text)]">{question.label[language]}</h1>

          <div className="mt-4">
            {question.type === 'text' ? (
              <Textarea
                key={question.id}
                value={answers[question.id]}
                onChange={(event) => updateAnswer(event.target.value)}
                placeholder={question.placeholder[language]}
                rows={4}
                invalid={!!error}
              />
            ) : (
              <ChoiceGroup
                options={question.options.map((option) => ({ value: option.value, label: option.label[language] }))}
                value={answers[question.id] || null}
                onChange={updateAnswer}
                invalid={!!error}
              />
            )}
          </div>

          {error && <p className="mt-3 text-sm text-[var(--color-warning)]">{error}</p>}

          <div className="mt-6 flex items-center justify-between gap-3">
            <Button type="button" variant="ghost" onClick={handleBack} disabled={stepIndex === 0}>
              {dict.assessment.back}
            </Button>
            <Button type="button" variant="primary" onClick={handleNext}>
              {isLastStep ? dict.assessment.finish : dict.assessment.next}
            </Button>
          </div>
        </Card>
      </div>
    </Container>
  )
}
