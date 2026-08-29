"use client";

import { CareerCard } from "@/components/career/CareerCard";
import { useLocale } from "@/components/locale/LocaleProvider";
import { Heading, Text } from "@/components/ui/Typography";
import { CAREERS } from "@/content/careers";

export default function CareersPage() {
  const { t } = useLocale();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8 flex flex-col gap-2">
        <Heading level={1}>{t("career.listing.title")}</Heading>
        <Text muted className="max-w-2xl">
          {t("career.listing.subtitle")}
        </Text>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CAREERS.map((career) => (
          <CareerCard key={career.slug} career={career} />
        ))}
      </div>
    </div>
  );
}
