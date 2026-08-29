"use client";

import { useEffect } from "react";

import { LocaleToggle } from "@/components/locale/LocaleToggle";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export interface MobileMenuProps {
  id: string;
  open: boolean;
  onClose: () => void;
}

/**
 * Disclosure panel for the mobile "Top Navigation + Mobile Menu" pattern
 * (ARCHITECTURE.md §33). Holds the same theme/locale controls the desktop
 * navbar shows inline, since no destination routes exist yet to list here.
 */
export function MobileMenu({ id, open, onClose }: MobileMenuProps) {
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
      <div className="flex flex-col items-start gap-3">
        <ThemeToggle />
        <LocaleToggle />
      </div>
    </div>
  );
}
