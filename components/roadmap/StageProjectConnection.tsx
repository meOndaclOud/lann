"use client";

import { FolderGit2 } from "lucide-react";
import Link from "next/link";

import { useLocale } from "@/components/locale/LocaleProvider";
import { buttonClassName } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import type { LocalizedText } from "@/types/career";

export interface StageProjectConnectionProps {
  description: LocalizedText;
}

/** Project connection point — describes what connects here, never a fabricated project. */
export function StageProjectConnection({ description }: StageProjectConnectionProps) {
  const { locale, t } = useLocale();

  return (
    <EmptyState
      icon={FolderGit2}
      title={t("roadmap.stage.project.title")}
      description={description[locale]}
      action={
        <Link href="/projects" className={buttonClassName("outline", "sm")}>
          {t("roadmap.stage.project.cta")}
        </Link>
      }
    />
  );
}
