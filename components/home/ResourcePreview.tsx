"use client";

import { BookOpen } from "lucide-react";
import Link from "next/link";

import { useLocale } from "@/components/locale/LocaleProvider";
import { Badge } from "@/components/ui/Badge";
import { buttonClassName } from "@/components/ui/Button";
import { Heading, Text } from "@/components/ui/Typography";

export function ResourcePreview() {
  const { t } = useLocale();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="bg-secondary text-secondary-foreground flex size-10 items-center justify-center rounded-lg">
            <BookOpen aria-hidden="true" className="size-5" />
          </div>
          <Heading level={2}>{t("home.resources.title")}</Heading>
          <Text muted>{t("home.resources.subtitle")}</Text>
          <Link href="/resources" className={buttonClassName("outline", "md", "self-start")}>
            {t("home.resources.cta")}
          </Link>
        </div>

        {/* Plain static block, not the interactive Card — this is an
            illustrative, non-clickable example, not a real resource. */}
        <div
          aria-label={t("home.resources.exampleLabel")}
          className="border-border bg-card text-card-foreground flex flex-col gap-4 rounded-xl border p-6 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <Badge variant="outline">{t("home.resources.exampleLabel")}</Badge>
            <Badge variant="secondary">Free</Badge>
          </div>
          <Heading level={3} className="text-base">
            {t("home.resources.exampleTitle")}
          </Heading>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Course</Badge>
            <Badge variant="outline">Burmese</Badge>
            <Badge variant="outline">Beginner</Badge>
          </div>
          <Text size="small" muted>
            {t("home.resources.exampleCaption")}
          </Text>
        </div>
      </div>
    </section>
  );
}
