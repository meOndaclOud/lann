"use client";

import { FolderGit2 } from "lucide-react";
import Link from "next/link";

import { useLocale } from "@/components/locale/LocaleProvider";
import { Badge } from "@/components/ui/Badge";
import { buttonClassName } from "@/components/ui/Button";
import { Heading, Text } from "@/components/ui/Typography";

export function ProjectPreview() {
  const { t } = useLocale();

  return (
    <section className="bg-muted/40 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Plain static block, not the interactive Card — illustrative,
              non-clickable example, not a real project. */}
          <div
            aria-label={t("home.projects.exampleLabel")}
            className="border-border bg-card text-card-foreground order-2 flex flex-col gap-4 rounded-xl border p-6 shadow-sm lg:order-1"
          >
            <Badge variant="outline" className="self-start">
              {t("home.projects.exampleLabel")}
            </Badge>
            <Heading level={3} className="text-base">
              {t("home.projects.exampleTitle")}
            </Heading>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Beginner</Badge>
              <Badge variant="outline">Portfolio-ready</Badge>
            </div>
            <Text size="small" muted>
              {t("home.projects.exampleCaption")}
            </Text>
          </div>

          <div className="order-1 flex flex-col gap-4 lg:order-2">
            <div className="bg-secondary text-secondary-foreground flex size-10 items-center justify-center rounded-lg">
              <FolderGit2 aria-hidden="true" className="size-5" />
            </div>
            <Heading level={2}>{t("home.projects.title")}</Heading>
            <Text muted>{t("home.projects.subtitle")}</Text>
            <Link href="/projects" className={buttonClassName("outline", "md", "self-start")}>
              {t("home.projects.cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
