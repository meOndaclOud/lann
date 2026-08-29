"use client";

import Link from "next/link";

import { useLocale } from "@/components/locale/LocaleProvider";
import { buttonClassName } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Heading, Text } from "@/components/ui/Typography";
import { getCareerBySlug } from "@/content/careers";

const PREVIEW_SLUGS = [
  "software-engineering",
  "cloud-devops",
  "data-analysis",
  "ui-ux-design",
] as const;

export function CareerPathPreview() {
  const { locale, t } = useLocale();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-8 flex flex-col gap-2">
        <Heading level={2}>{t("home.careers.title")}</Heading>
        <Text muted>{t("home.careers.subtitle")}</Text>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PREVIEW_SLUGS.map((slug) => {
          const career = getCareerBySlug(slug);
          if (!career) return null;
          const Icon = career.icon;

          return (
            <Link key={slug} href={`/careers/${slug}`} className="rounded-xl">
              <Card className="flex h-full flex-col gap-3">
                <div className="bg-secondary text-secondary-foreground flex size-10 items-center justify-center rounded-lg">
                  <Icon aria-hidden="true" className="size-5" />
                </div>
                <Heading level={3} className="text-base">
                  {career.name[locale]}
                </Heading>
                <Text size="small" muted>
                  {career.shortDescription[locale]}
                </Text>
              </Card>
            </Link>
          );
        })}
      </div>

      <Link href="/careers" className={buttonClassName("outline", "md", "mt-8")}>
        {t("home.careers.cta")}
      </Link>
    </section>
  );
}
