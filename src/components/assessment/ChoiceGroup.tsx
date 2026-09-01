interface ChoiceOption {
  value: string
  label: string
}

interface ChoiceGroupProps {
  options: ChoiceOption[]
  value: string | null
  onChange: (value: string) => void
  invalid?: boolean
}

export function ChoiceGroup({ options, value, onChange, invalid = false }: ChoiceGroupProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const selected = option.value === value
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={selected}
            className={`rounded-full border px-4 py-2 text-left text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 ${
              selected
                ? 'border-transparent bg-[var(--color-primary)] text-white'
                : `bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[var(--color-primary)] ${
                    invalid ? 'border-[var(--color-warning)]' : 'border-[var(--color-border)]'
                  }`
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
