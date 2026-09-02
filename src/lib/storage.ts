const STORAGE_PREFIX = 'lann:'

export const STORAGE_KEYS = {
  theme: 'theme',
  language: 'language',
  selectedCareer: 'selectedCareer',
  progress: 'progress',
  learnerAnswers: 'learnerAnswers',
  profile: 'profile',
} as const

function getItem<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(STORAGE_PREFIX + key)
    return raw === null ? fallback : (JSON.parse(raw) as T)
  } catch {
    return fallback
  }
}

function setItem<T>(key: string, value: T): void {
  try {
    window.localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value))
  } catch {
    // localStorage may be unavailable (private browsing, quota exceeded)
  }
}

export const storage = { getItem, setItem }
