"use client";

import { Users } from "lucide-react";
import Link from "next/link";

import { useLocale } from "@/components/locale/LocaleProvider";
import { Badge } from "@/components/ui/Badge";
import { buttonClassName } from "@/components/ui/Button";
import { Heading, Text } from "@/components/ui/Typography";

export function CommunityPreview() {
  const { t } = useLocale();

  const categories = [
    t("home.community.question"),
    t("home.community.discussion"),
    t("home.community.resourceShare"),
    t("home.community.projectShowcase"),
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <div className="bg-secondary text-secondary-foreground flex size-10 items-center justify-center rounded-lg">
          <Users aria-hidden="true" className="size-5" />
        </div>
        <Heading level={2}>{t("home.community.title")}</Heading>
        <Text muted>{t("home.community.subtitle")}</Text>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Badge key={category} variant="outline">
              {category}
            </Badge>
          ))}
        </div>
        <Link href="/community" className={buttonClassName("outline", "md")}>
          {t("home.community.cta")}
        </Link>
      </div>
    </section>
  );
}
