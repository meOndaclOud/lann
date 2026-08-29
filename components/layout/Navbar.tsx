"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { LocaleToggle } from "@/components/locale/LocaleToggle";
import { useLocale } from "@/components/locale/LocaleProvider";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const MOBILE_MENU_ID = "mobile-nav-menu";

export function Navbar() {
  const { t } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-border bg-background/80 sticky top-0 z-40 border-b backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="focus-visible:ring-primary rounded-md text-lg font-semibold tracking-tight focus-visible:ring-2 focus-visible:outline-none"
        >
          {t("common.appName")}
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6">
            <Link
              href="/careers"
              className="text-foreground/80 hover:text-foreground focus-visible:ring-primary rounded-md text-sm font-medium focus-visible:ring-2 focus-visible:outline-none"
            >
              {t("nav.careers")}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <LocaleToggle />
            <ThemeToggle />
          </div>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls={MOBILE_MENU_ID}
          aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="border-border text-foreground focus-visible:ring-primary inline-flex size-9 items-center justify-center rounded-lg border transition-colors focus-visible:ring-2 focus-visible:outline-none md:hidden"
        >
          {menuOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>

        <MobileMenu id={MOBILE_MENU_ID} open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </header>
  );
}
