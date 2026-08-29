"use client";

import { Languages } from "lucide-react";

import { useLocale } from "@/components/locale/LocaleProvider";
import { cn } from "@/lib/utils/cn";
import type { Locale } from "@/types/locale";

const OPTIONS: { locale: Locale; labelKey: "language.english" | "language.burmese" }[] = [
  { locale: "en", labelKey: "language.english" },
  { locale: "mm", labelKey: "language.burmese" },
];

export function LocaleToggle() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      role="group"
      aria-label={t("language.toggleLabel")}
      className="border-border bg-muted inline-flex items-center gap-1 rounded-full border p-1"
    >
      <Languages aria-hidden="true" className="text-muted-foreground ml-1.5 size-4" />
      {OPTIONS.map((option) => (
        <button
          key={option.locale}
          type="button"
          aria-pressed={locale === option.locale}
          onClick={() => setLocale(option.locale)}
          className={cn(
            "rounded-full px-3 py-1 text-sm font-medium transition-colors",
            "focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
            locale === option.locale
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {t(option.labelKey)}
        </button>
      ))}
    </div>
  );
}
