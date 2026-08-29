"use client";

import Link from "next/link";
import { useEffect } from "react";

import { useLocale } from "@/components/locale/LocaleProvider";
import { LocaleToggle } from "@/components/locale/LocaleToggle";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export interface MobileMenuProps {
  id: string;
  open: boolean;
  onClose: () => void;
}

/**
 * Disclosure panel for the mobile "Top Navigation + Mobile Menu" pattern
 * (ARCHITECTURE.md §33). Holds the same nav links and theme/locale controls
 * the desktop navbar shows inline.
 */
export function MobileMenu({ id, open, onClose }: MobileMenuProps) {
  const { t } = useLocale();

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <div
      id={id}
      hidden={!open}
      className="border-border bg-background/95 absolute inset-x-0 top-full border-b p-4 shadow-md backdrop-blur-md md:hidden"
    >
      <div className="flex flex-col items-start gap-4">
        <Link
          href="/careers"
          onClick={onClose}
          className="text-foreground focus-visible:ring-primary rounded-md text-sm font-medium focus-visible:ring-2 focus-visible:outline-none"
        >
          {t("nav.careers")}
        </Link>
        <div className="flex flex-col items-start gap-3">
          <ThemeToggle />
          <LocaleToggle />
        </div>
      </div>
    </div>
  );
}
