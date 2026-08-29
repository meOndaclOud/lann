"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { useLocale } from "@/components/locale/LocaleProvider";
import { buttonClassName } from "@/components/ui/Button";
import { Heading, Text } from "@/components/ui/Typography";
import type { Career } from "@/types/career";

export interface CareerHeroProps {
  career: Career;
}

export function CareerHero({ career }: CareerHeroProps) {
  const { locale, t } = useLocale();
  const Icon = career.icon;

  return (
    <section className="from-primary/5 bg-gradient-to-b via-transparent to-transparent">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <Link
          href="/careers"
          className="text-muted-foreground hover:text-foreground focus-visible:ring-primary mb-6 inline-flex items-center gap-1.5 rounded-md text-sm font-medium focus-visible:ring-2 focus-visible:outline-none"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          {t("career.detail.backToCareers")}
        </Link>

        <div className="flex flex-col items-start gap-4">
          <div className="bg-secondary text-secondary-foreground flex size-12 items-center justify-center rounded-xl">
            <Icon aria-hidden="true" className="size-6" />
          </div>
          <Heading level={1}>{career.name[locale]}</Heading>
          <Text muted className="max-w-2xl text-base sm:text-lg">
            {career.shortDescription[locale]}
          </Text>
          <Link
            href={`/learning-paths/${career.slug}`}
            className={buttonClassName("gradient", "lg")}
          >
            {t("career.detail.viewRoadmap")}
          </Link>
        </div>
      </div>
    </section>
  );
}
