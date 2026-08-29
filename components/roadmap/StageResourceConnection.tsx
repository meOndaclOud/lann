"use client";

import { BookOpen } from "lucide-react";
import Link from "next/link";

import { useLocale } from "@/components/locale/LocaleProvider";
import { buttonClassName } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import type { LocalizedText } from "@/types/career";

export interface StageResourceConnectionProps {
  description: LocalizedText;
}

/** Resource connection point — describes what connects here, never a fabricated resource. */
export function StageResourceConnection({ description }: StageResourceConnectionProps) {
  const { locale, t } = useLocale();

  return (
    <EmptyState
      icon={BookOpen}
      title={t("roadmap.stage.resources.title")}
      description={description[locale]}
      action={
        <Link href="/resources" className={buttonClassName("outline", "sm")}>
          {t("roadmap.stage.resources.cta")}
        </Link>
      }
    />
  );
}
