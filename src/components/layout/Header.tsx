import { NavLink } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { Container } from '../ui/Container'
import { Logo } from './Logo'
import { ThemeToggle } from '../controls/ThemeToggle'
import { LanguageToggle } from '../controls/LanguageToggle'
import { useLanguage } from '../../hooks/useLanguage'

const navItems = [
  { to: '/dashboard', key: 'dashboard' as const },
  { to: '/careers', key: 'careers' as const },
  { to: '/resources', key: 'resources' as const },
  { to: '/community', key: 'community' as const },
]

export function Header() {
  const { dict } = useLanguage()

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center text-[var(--color-text)]">
          <Logo className="h-7 w-auto" />
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ease-out ${
                  isActive
                    ? 'text-[var(--color-primary)]'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                }`
              }
            >
              {dict.nav[item.key]}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <NavLink
            to="/mentor"
            aria-label={dict.nav.mentor}
            title={dict.nav.mentor}
            className={({ isActive }) =>
              `hidden h-9 w-9 items-center justify-center rounded-full border transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--color-primary)] md:inline-flex ${
                isActive
                  ? 'border-[var(--color-primary)] text-[var(--color-primary)]'
                  : 'border-[var(--color-border)] text-[var(--color-text)]'
              }`
            }
          >
            <Sparkles size={16} />
          </NavLink>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  )
}
