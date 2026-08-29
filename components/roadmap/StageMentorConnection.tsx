"use client";

import { Bot } from "lucide-react";
import Link from "next/link";

import { useLocale } from "@/components/locale/LocaleProvider";
import { buttonClassName } from "@/components/ui/Button";
import { Text } from "@/components/ui/Typography";

export interface StageMentorConnectionProps {
  stageTitle: string;
}

/**
 * AI Mentor connection point — a navigation link only. No AI functionality
 * is implemented yet; this just marks where it will attach.
 */
export function StageMentorConnection({ stageTitle }: StageMentorConnectionProps) {
  const { t } = useLocale();

  return (
    <div className="bg-secondary/40 border-border flex flex-col items-start gap-3 rounded-xl border p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <div className="bg-secondary text-secondary-foreground flex size-9 shrink-0 items-center justify-center rounded-lg">
          <Bot aria-hidden="true" className="size-4" />
        </div>
        <div className="flex flex-col gap-1">
          <Text size="small" className="font-semibold">
            {t("roadmap.stage.mentor.title")}
          </Text>
          <Text size="small" muted>
            {t("roadmap.stage.mentor.description", { stage: stageTitle })}
          </Text>
        </div>
      </div>
      <Link href="/mentor" className={buttonClassName("outline", "sm")}>
        {t("roadmap.stage.mentor.cta")}
      </Link>
    </div>
  );
}
