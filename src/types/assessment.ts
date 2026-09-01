import type { LocalizedText } from './common.ts'

export interface LearnerAnswers {
  technologyInterest: string
  currentExperience: string
  currentSkills: string
  difficulties: string
  preferredWork: string
  careerGoal: string
  learningStyle: string
  careerUncertainty: string
  expectations: string
}

export type AssessmentFieldKey = keyof LearnerAnswers

interface BaseQuestion {
  id: AssessmentFieldKey
  label: LocalizedText
}

export interface TextQuestion extends BaseQuestion {
  type: 'text'
  placeholder: LocalizedText
}

export interface ChoiceOption {
  value: string
  label: LocalizedText
}

export interface ChoiceQuestion extends BaseQuestion {
  type: 'choice'
  options: ChoiceOption[]
}

export type AssessmentQuestion = TextQuestion | ChoiceQuestion
