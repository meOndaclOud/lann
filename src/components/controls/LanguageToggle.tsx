import { Languages } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'

export function LanguageToggle() {
  const { language, toggleLanguage, dict } = useLanguage()
  const nextLabel = language === 'en' ? 'MY' : 'EN'

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={dict.controls.toggleLanguage}
      title={dict.controls.toggleLanguage}
      className="inline-flex h-9 items-center gap-1 rounded-full border border-[var(--color-border)] px-3 text-xs font-semibold text-[var(--color-text)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--color-primary)]"
    >
      <Languages size={14} />
      {nextLabel}
    </button>
  )
}
