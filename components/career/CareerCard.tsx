"use client";

import Link from "next/link";

import { useLocale } from "@/components/locale/LocaleProvider";
import { Card } from "@/components/ui/Card";
import { Heading, Text } from "@/components/ui/Typography";
import type { Career } from "@/types/career";

export interface CareerCardProps {
  career: Career;
}

export function CareerCard({ career }: CareerCardProps) {
  const { locale, t } = useLocale();
  const Icon = career.icon;

  return (
    <Link
      href={`/careers/${career.slug}`}
      className="focus-visible:ring-primary rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <Card className="flex h-full flex-col gap-3">
        <div className="bg-secondary text-secondary-foreground flex size-10 items-center justify-center rounded-lg">
          <Icon aria-hidden="true" className="size-5" />
        </div>
        <Heading level={3} className="text-base">
          {career.name[locale]}
        </Heading>
        <Text size="small" muted className="flex-1">
          {career.shortDescription[locale]}
        </Text>
        <Text size="small" className="text-primary font-medium">
          {t("career.card.explore")}
        </Text>
      </Card>
    </Link>
  );
}
