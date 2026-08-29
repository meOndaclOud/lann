"use client";

import { ArrowLeft, ChevronLeft, ChevronRight, Clock, HelpCircle, Lock } from "lucide-react";
import Link from "next/link";

import { useLocale } from "@/components/locale/LocaleProvider";
import { RoadmapStatusBadge } from "@/components/roadmap/RoadmapStatusBadge";
import { StageMentorConnection } from "@/components/roadmap/StageMentorConnection";
import { StageProjectConnection } from "@/components/roadmap/StageProjectConnection";
import { StageResourceConnection } from "@/components/roadmap/StageResourceConnection";
import { Badge } from "@/components/ui/Badge";
import { buttonClassName } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Heading, Text } from "@/components/ui/Typography";
import { getRoadmapByCareerSlug } from "@/content/roadmaps";
import type { TranslationKey } from "@/i18n";
import { computeDefaultStageStatuses } from "@/lib/roadmap/status";
import type { CareerSlug } from "@/types/career";
import type { RoadmapStage } from "@/types/roadmap";

const DIFFICULTY_LABEL_KEY: Record<RoadmapStage["difficulty"], TranslationKey> = {
  beginner: "roadmap.difficulty.beginner",
  junior: "roadmap.difficulty.junior",
  intermediate: "roadmap.difficulty.intermediate",
  advanced: "roadmap.difficulty.advanced",
};

export interface StageDetailViewProps {
  careerSlug: CareerSlug;
  stageSlug: string;
}

/**
 * No in-page starting-point selection is available here (this route can be
 * reached directly, e.g. from a bookmark), so status is computed from the
 * deterministic "nothing completed yet" default — see lib/roadmap/status.ts.
 */
export function StageDetailView({ careerSlug, stageSlug }: StageDetailViewProps) {
  const { locale, t } = useLocale();
  const roadmap = getRoadmapByCareerSlug(careerSlug);

  if (!roadmap) return null;

  const stageIndex = roadmap.stages.findIndex((stage) => stage.slug === stageSlug);
  const stage = roadmap.stages[stageIndex];
  if (!stage) return null;

  const statuses = computeDefaultStageStatuses(roadmap.stages);
  const status = statuses.get(stage.slug) ?? "locked";
  const isLocked = status === "locked";

  const prerequisiteStage = roadmap.stages.find((candidate) =>
    stage.prerequisiteSlugs.includes(candidate.slug),
  );
  const previousStage = stageIndex > 0 ? roadmap.stages[stageIndex - 1] : undefined;
  const nextStage =
    stageIndex < roadmap.stages.length - 1 ? roadmap.stages[stageIndex + 1] : undefined;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-12 sm:px-6">
      <Link
        href={`/learning-paths/${careerSlug}`}
        className="text-muted-foreground hover:text-foreground focus-visible:ring-primary inline-flex items-center gap-1.5 self-start rounded-md text-sm font-medium focus-visible:ring-2 focus-visible:outline-none"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        {t("roadmap.stage.backToRoadmap")}
      </Link>

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <RoadmapStatusBadge status={status} />
          <Badge variant="outline">{t(DIFFICULTY_LABEL_KEY[stage.difficulty])}</Badge>
          {stage.estimatedHours > 0 && (
            <Badge variant="outline" className="gap-1">
              <Clock aria-hidden="true" className="size-3.5" />
              {t("roadmap.stage.estimatedHours", { hours: stage.estimatedHours })}
            </Badge>
          )}
        </div>
        <Heading level={1}>{stage.title[locale]}</Heading>
        <Text muted>{stage.description[locale]}</Text>
      </div>

      <Card className="flex flex-col gap-2">
        <Text size="small" className="font-semibold">
          {t("roadmap.stage.goal")}
        </Text>
        <Text muted size="small">
          {stage.goal[locale]}
        </Text>
      </Card>

      {isLocked ? (
        <Card className="flex flex-col items-start gap-4">
          <div className="flex items-start gap-3">
            <div className="bg-muted text-muted-foreground flex size-9 shrink-0 items-center justify-center rounded-lg">
              <Lock aria-hidden="true" className="size-4" />
            </div>
            <Text muted>
              {t("roadmap.stage.locked.explanation", {
                stage: stage.title[locale],
                prerequisite: prerequisiteStage?.title[locale] ?? "",
              })}
            </Text>
          </div>
          <Link href="/mentor" className={buttonClassName("outline", "sm")}>
            <HelpCircle aria-hidden="true" className="size-4" />
            {t("roadmap.stage.locked.askAi")}
          </Link>
        </Card>
      ) : (
        <>
          <Card className="flex flex-col gap-3">
            <Text size="small" className="font-semibold">
              {t("roadmap.stage.topics")}
            </Text>
            <ul className="flex flex-col gap-2">
              {stage.topics.map((topic) => (
                <li key={topic.en} className="text-foreground flex items-start gap-2 text-sm">
                  <span
                    className="bg-primary mt-2 size-1.5 shrink-0 rounded-full"
                    aria-hidden="true"
                  />
                  {topic[locale]}
                </li>
              ))}
            </ul>
          </Card>

          <StageResourceConnection description={stage.resourceConnection} />

          {stage.projectConnection && (
            <StageProjectConnection description={stage.projectConnection} />
          )}

          <StageMentorConnection stageTitle={stage.title[locale]} />
        </>
      )}

      <div className="border-border flex items-center justify-between border-t pt-6">
        {previousStage ? (
          <Link
            href={`/learning-paths/${careerSlug}/${previousStage.slug}`}
            className={buttonClassName("ghost", "sm")}
          >
            <ChevronLeft aria-hidden="true" className="size-4" />
            {previousStage.title[locale]}
          </Link>
        ) : (
          <span />
        )}
        {nextStage && (
          <Link
            href={`/learning-paths/${careerSlug}/${nextStage.slug}`}
            className={buttonClassName("ghost", "sm")}
          >
            {nextStage.title[locale]}
            <ChevronRight aria-hidden="true" className="size-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
