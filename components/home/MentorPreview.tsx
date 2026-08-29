"use client";

import { Bot, Sparkles } from "lucide-react";
import Link from "next/link";

import { useLocale } from "@/components/locale/LocaleProvider";
import { buttonClassName } from "@/components/ui/Button";
import { Heading, Text } from "@/components/ui/Typography";

export function MentorPreview() {
  const { t } = useLocale();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="bg-secondary text-secondary-foreground flex size-10 items-center justify-center rounded-lg">
            <Sparkles aria-hidden="true" className="size-5" />
          </div>
          <Heading level={2}>{t("home.mentor.title")}</Heading>
          <Text muted>{t("home.mentor.subtitle")}</Text>
          <Link href="/mentor" className={buttonClassName("outline", "md", "self-start")}>
            {t("home.mentor.cta")}
          </Link>
        </div>

        {/* Restrained glassmorphism — explicitly a sanctioned use case
            (INSTRUCTIONS.md §14 lists "AI Mentor"). Static illustration only,
            not a working chat. */}
        <div className="bg-card/70 border-border/60 flex flex-col gap-3 rounded-xl border p-6 shadow-lg backdrop-blur-md">
          <div className="flex justify-end">
            <p className="bg-primary text-primary-foreground max-w-[85%] rounded-2xl rounded-tr-sm px-4 py-2 text-sm">
              {t("home.mentor.chat.user")}
            </p>
          </div>
          <div className="flex items-start gap-2">
            <div className="bg-secondary text-secondary-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full">
              <Bot aria-hidden="true" className="size-4" />
            </div>
            <p className="bg-muted text-foreground max-w-[85%] rounded-2xl rounded-tl-sm px-4 py-2 text-sm">
              {t("home.mentor.chat.assistantExplain")}
            </p>
          </div>
          <div className="flex items-start gap-2">
            <div className="bg-secondary text-secondary-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full">
              <Bot aria-hidden="true" className="size-4" />
            </div>
            <p className="bg-muted text-foreground max-w-[85%] rounded-2xl rounded-tl-sm px-4 py-2 text-sm">
              {t("home.mentor.chat.assistantHint")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
