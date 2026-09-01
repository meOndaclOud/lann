import { useEffect, useState, type ReactNode } from 'react'
import { LanguageContext, type Language } from './language-context'
import { translations } from '../lib/localization'
import { storage, STORAGE_KEYS } from '../lib/storage'

function isLanguage(value: unknown): value is Language {
  return value === 'en' || value === 'my'
}

function getInitialLanguage(): Language {
  const stored = storage.getItem<string | null>(STORAGE_KEYS.language, null)
  return isLanguage(stored) ? stored : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    document.documentElement.setAttribute('lang', language)
    storage.setItem(STORAGE_KEYS.language, language)
  }, [language])

  const toggleLanguage = () => setLanguage((prev) => (prev === 'en' ? 'my' : 'en'))

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, dict: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}
