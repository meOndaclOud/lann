import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'border border-transparent bg-[var(--color-primary)] text-white shadow-sm hover:shadow-md hover:brightness-105',
  secondary:
    'border border-[var(--color-border)] bg-[var(--color-bg-alt)] text-[var(--color-text)] hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-primary-soft)] max-md:border-[var(--color-glass-border)] max-md:bg-[var(--color-glass-surface)] max-md:backdrop-blur-xl',
  ghost: 'border border-transparent bg-transparent text-[var(--color-text)] hover:bg-[var(--color-bg-alt)]',
}

function buttonClasses(variant: ButtonVariant, className: string) {
  return `inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:pointer-events-none disabled:opacity-50 disabled:hover:translate-y-0 disabled:active:scale-100 ${variantClasses[variant]} ${className}`
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button className={buttonClasses(variant, className)} {...props}>
      {children}
    </button>
  )
}

interface ButtonLinkProps extends LinkProps {
  variant?: ButtonVariant
}

export function ButtonLink({ variant = 'primary', className = '', children, ...props }: ButtonLinkProps) {
  return (
    <Link className={buttonClasses(variant, className)} {...props}>
      {children}
    </Link>
  )
}
