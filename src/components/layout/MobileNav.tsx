import { NavLink } from 'react-router-dom'
import { Home, Users, BookOpen, Compass, User } from 'lucide-react'
import type { ComponentType } from 'react'
import { useLanguage } from '../../hooks/useLanguage'

interface MobileNavItem {
  to: string
  key: 'home' | 'community' | 'learn' | 'careers' | 'profile'
  icon: ComponentType<{ size?: number; strokeWidth?: number }>
}

const items: MobileNavItem[] = [
  { to: '/', key: 'home', icon: Home },
  { to: '/community', key: 'community', icon: Users },
  { to: '/resources', key: 'learn', icon: BookOpen },
  { to: '/careers', key: 'careers', icon: Compass },
  { to: '/profile', key: 'profile', icon: User },
]

export function MobileNav() {
  const { dict } = useLanguage()

  return (
    <nav className="fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-20 print:hidden md:hidden">
      <ul className="flex items-center justify-around rounded-full border border-[var(--color-glass-border)] bg-[var(--color-glass-surface)] px-2 py-2 shadow-lg shadow-black/10 backdrop-blur-xl">
        {items.map(({ to, key, icon: Icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 rounded-full px-3 py-1 text-[10.5px] font-medium transition-colors duration-200 ease-out ${
                  isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-200 ease-out ${
                      isActive ? 'bg-[var(--color-primary)]/12' : 'bg-transparent'
                    }`}
                  >
                    <Icon size={19} strokeWidth={isActive ? 2.25 : 1.75} />
                  </span>
                  {dict.nav[key]}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
