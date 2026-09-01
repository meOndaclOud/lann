import { createContext } from 'react'
import { translations } from '../lib/localization'

export type Language = keyof typeof translations

export interface LanguageContextValue {
  language: Language
  toggleLanguage: () => void
  dict: (typeof translations)['en']
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)
