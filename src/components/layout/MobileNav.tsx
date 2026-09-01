import { NavLink } from 'react-router-dom'
import { Home, Users, BookOpen, Sparkles, MoreHorizontal } from 'lucide-react'
import type { ComponentType } from 'react'
import { useLanguage } from '../../hooks/useLanguage'

interface MobileNavItem {
  to: string
  key: 'home' | 'community' | 'learn' | 'mentor' | 'more'
  icon: ComponentType<{ size?: number }>
}

const items: MobileNavItem[] = [
  { to: '/', key: 'home', icon: Home },
  { to: '/community', key: 'community', icon: Users },
  { to: '/resources', key: 'learn', icon: BookOpen },
  { to: '/mentor', key: 'mentor', icon: Sparkles },
  { to: '/careers', key: 'more', icon: MoreHorizontal },
]

export function MobileNav() {
  const { dict } = useLanguage()

  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur md:hidden">
      <ul className="flex items-center justify-around px-2 py-2">
        {items.map(({ to, key, icon: Icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 rounded-lg px-3 py-1 text-[11px] font-medium transition-colors duration-200 ease-out ${
                  isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)]'
                }`
              }
            >
              <Icon size={20} />
              {dict.nav[key]}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
