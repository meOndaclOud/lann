"use client";

import { Monitor, Moon, Sun, type LucideIcon } from "lucide-react";

import { useLocale } from "@/components/locale/LocaleProvider";
import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/utils/cn";
import type { Theme } from "@/types/theme";

const THEMES: Theme[] = ["light", "dark", "system"];

const ICONS: Record<Theme, LucideIcon> = {
  light: Sun,
  dark: Moon,
  system: Monitor,
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useLocale();

  const labels: Record<Theme, string> = {
    light: t("theme.light"),
    dark: t("theme.dark"),
    system: t("theme.system"),
  };

  return (
    <div
      role="group"
      aria-label={t("theme.toggleLabel")}
      className="border-border bg-muted inline-flex items-center gap-1 rounded-full border p-1"
    >
      {THEMES.map((option) => {
        const Icon = ICONS[option];
        return (
          <button
            key={option}
            type="button"
            aria-pressed={theme === option}
            title={labels[option]}
            onClick={() => setTheme(option)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium transition-colors",
              "focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
              theme === option
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon aria-hidden="true" className="size-4" />
            <span className="hidden sm:inline">{labels[option]}</span>
          </button>
        );
      })}
    </div>
  );
}
