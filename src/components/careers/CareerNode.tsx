import type { ComponentType } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import type { LocalizedText } from '../../types/common.ts'

interface CareerNodeProps {
  title: LocalizedText
  icon: ComponentType<{ size?: number }>
  step: number
  selected: boolean
  align: 'start' | 'end'
  onSelect: () => void
}

export function CareerNode({ title, icon: Icon, step, selected, align, onSelect }: CareerNodeProps) {
  const { dict, language } = useLanguage()

  const alignClass = align === 'start' ? 'sm:items-end sm:text-right' : 'sm:items-start sm:text-left'

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      aria-label={`${title[language]} — ${dict.careersPathway.viewOverviewCta}`}
      className={`group flex w-full flex-col gap-2 rounded-2xl p-2 text-center outline-none transition-transform duration-200 ease-out hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-[var(--color-primary)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] ${alignClass}`}
    >
      <span
        className={`relative mx-auto flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 shadow-sm transition-all duration-200 ease-out sm:h-20 sm:w-20 ${
          selected
            ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white scale-105 shadow-lg'
            : 'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-primary)] group-hover:border-[var(--color-primary)]'
        } ${align === 'start' ? 'sm:ml-auto' : 'sm:mr-auto'}`}
      >
        <Icon size={26} />
        <span
          className={`absolute -top-1.5 -left-1.5 flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-semibold ${
            selected
              ? 'border-white bg-white text-[var(--color-primary)]'
              : 'border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-muted)]'
          }`}
        >
          {step}
        </span>
      </span>
      <span className={`text-sm font-semibold ${selected ? 'text-[var(--color-primary)]' : 'text-[var(--color-text)]'}`}>
        {title[language]}
      </span>
    </button>
  )
}
