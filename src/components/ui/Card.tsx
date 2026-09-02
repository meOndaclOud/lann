import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  hoverable?: boolean
}

export function Card({ children, hoverable = false, className = '', ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm transition-all duration-200 ease-out max-md:border-[var(--color-glass-border)] max-md:bg-[var(--color-glass-surface)] max-md:shadow-[0_1px_3px_rgba(0,0,0,0.04)] max-md:backdrop-blur-xl ${
        hoverable ? 'hover:-translate-y-0.5 hover:shadow-md' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
