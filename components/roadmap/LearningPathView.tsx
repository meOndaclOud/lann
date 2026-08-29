"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { CareerInfoSection } from "@/components/career/CareerInfoSection";
import { useLocale } from "@/components/locale/LocaleProvider";
import { Roadmap } from "@/components/roadmap/Roadmap";
import { SkillsProgression } from "@/components/roadmap/SkillsProgression";
import { StartingPointSelector } from "@/components/roadmap/StartingPointSelector";
import { Heading, Text } from "@/components/ui/Typography";
import { getCareerBySlug } from "@/content/careers";
import { getRoadmapByCareerSlug } from "@/content/roadmaps";
import { computeStageStatuses } from "@/lib/roadmap/status";
import type { CareerSlug } from "@/types/career";
import type { StartingPoint } from "@/types/roadmap";

export interface LearningPathViewProps {
  slug: CareerSlug;
}

/**
 * Looks career + roadmap content up itself — see the note in
 * CareerDetailView about why component references (icons) can't cross the
 * server/client boundary as props.
 */
export function LearningPathView({ slug }: LearningPathViewProps) {
  const { locale, t } = useLocale();
  const [startingPoint, setStartingPoint] = useState<StartingPoint>("nothing");

  const career = getCareerBySlug(slug);
  const roadmap = getRoadmapByCareerSlug(slug);

  if (!career || !roadmap) return null;

  const Icon = career.icon;
  const statuses = computeStageStatuses(roadmap.stages, startingPoint);

  return (
    <>
      <section className="from-primary/5 bg-gradient-to-b via-transparent to-transparent">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
          <Link
            href={`/careers/${career.slug}`}
            className="text-muted-foreground hover:text-foreground focus-visible:ring-primary mb-6 inline-flex items-center gap-1.5 rounded-md text-sm font-medium focus-visible:ring-2 focus-visible:outline-none"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            {t("career.detail.backToCareers")}
          </Link>

          <div className="flex flex-col items-start gap-4">
            <div className="bg-secondary text-secondary-foreground flex size-12 items-center justify-center rounded-xl">
              <Icon aria-hidden="true" className="size-6" />
            </div>
            <Heading level={1}>{roadmap.title[locale]}</Heading>
            <Text muted className="max-w-2xl text-base sm:text-lg">
              {roadmap.description[locale]}
            </Text>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-12 sm:px-6">
        <CareerInfoSection title={t("career.detail.roleIntroduction")}>
          <Text muted>{career.roleIntroduction[locale]}</Text>
        </CareerInfoSection>

        <CareerInfoSection title={t("career.detail.myanmarContext")}>
          <Text muted>{career.myanmarContext[locale]}</Text>
        </CareerInfoSection>

        <CareerInfoSection title={t("career.detail.whoIsThisFor")}>
          <Text muted>{career.whoIsThisFor[locale]}</Text>
        </CareerInfoSection>

        <CareerInfoSection title={t("learningPath.skillsProgression.title")}>
          <SkillsProgression stages={roadmap.stages} />
        </CareerInfoSection>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Heading level={2}>{t("roadmap.title")}</Heading>
            <Text muted>{t("roadmap.subtitle")}</Text>
          </div>

          <StartingPointSelector value={startingPoint} onChange={setStartingPoint} />

          <Roadmap careerSlug={career.slug} stages={roadmap.stages} statuses={statuses} />
        </div>
      </div>
    </>
  );
}
