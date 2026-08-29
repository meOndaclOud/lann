"use client";

import Link from "next/link";

import { LocaleToggle } from "@/components/locale/LocaleToggle";
import { useLocale } from "@/components/locale/LocaleProvider";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Navbar() {
  const { t } = useLocale();

  return (
    <header className="border-border bg-background/80 sticky top-0 z-40 border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="focus-visible:ring-primary rounded-md text-lg font-semibold tracking-tight focus-visible:ring-2 focus-visible:outline-none"
        >
          {t("common.appName")}
        </Link>
        <div className="flex items-center gap-3">
          <LocaleToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
