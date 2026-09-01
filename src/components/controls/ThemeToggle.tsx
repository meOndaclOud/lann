import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { useLanguage } from '../../hooks/useLanguage'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { dict } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dict.controls.toggleTheme}
      title={dict.controls.toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--color-primary)]"
    >
      {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  )
}
