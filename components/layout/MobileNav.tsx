"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

export interface MobileNavItem {
  href: string;
  label: string;
  icon?: ReactNode;
}

export interface MobileNavProps {
  items: MobileNavItem[];
}

/**
 * Bottom navigation bar for small screens. Populated with more items
 * (Roadmap, Learn, AI, Profile) as those routes are built in later phases —
 * see ARCHITECTURE.md §33.
 */
export function MobileNav({ items }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <nav className="border-border bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur-md md:hidden">
      <ul className="flex items-stretch justify-around">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-12 flex-col items-center justify-center gap-1 py-2 text-xs font-medium",
                  active ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
