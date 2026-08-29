"use client";

import { useLocale } from "@/components/locale/LocaleProvider";
import type { TranslationKey } from "@/i18n";
import { cn } from "@/lib/utils/cn";
import type { StartingPoint } from "@/types/roadmap";

const OPTIONS: { value: StartingPoint; labelKey: TranslationKey }[] = [
  { value: "nothing", labelKey: "roadmap.startingPoint.nothing" },
  { value: "some_basics", labelKey: "roadmap.startingPoint.someBasics" },
  { value: "intermediate", labelKey: "roadmap.startingPoint.intermediate" },
];

export interface StartingPointSelectorProps {
  value: StartingPoint;
  onChange: (value: StartingPoint) => void;
}

/**
 * "I Know: [Nothing] [Some Basics] [Intermediate]" (INSTRUCTIONS.md §25).
 * Session-only — not persisted, since progress persistence isn't built yet.
 * The roadmap itself stays deterministic; this only changes where you start.
 */
export function StartingPointSelector({ value, onChange }: StartingPointSelectorProps) {
  const { t } = useLocale();

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-muted-foreground text-sm font-medium">
        {t("roadmap.startingPoint.label")}
      </span>
      <div
        role="group"
        aria-label={t("roadmap.startingPoint.label")}
        className="border-border bg-muted inline-flex items-center gap-1 rounded-full border p-1"
      >
        {OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={value === option.value}
            onClick={() => onChange(option.value)}
            className={cn(
              "rounded-full px-3 py-1 text-sm font-medium transition-colors",
              "focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
              value === option.value
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {t(option.labelKey)}
          </button>
        ))}
      </div>
    </div>
  );
}
