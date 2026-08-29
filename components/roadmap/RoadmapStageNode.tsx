"use client";

import { Clock, GraduationCap } from "lucide-react";
import Link from "next/link";

import { RoadmapStatusBadge } from "@/components/roadmap/RoadmapStatusBadge";
import { useLocale } from "@/components/locale/LocaleProvider";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Heading, Text } from "@/components/ui/Typography";
import type { TranslationKey } from "@/i18n";
import type { RoadmapStage, StageStatus } from "@/types/roadmap";

const DIFFICULTY_LABEL_KEY: Record<RoadmapStage["difficulty"], TranslationKey> = {
  beginner: "roadmap.difficulty.beginner",
  junior: "roadmap.difficulty.junior",
  intermediate: "roadmap.difficulty.intermediate",
  advanced: "roadmap.difficulty.advanced",
};

export interface RoadmapStageNodeProps {
  careerSlug: string;
  stage: RoadmapStage;
  status: StageStatus;
  index: number;
}

export function RoadmapStageNode({ careerSlug, stage, status, index }: RoadmapStageNodeProps) {
  const { locale, t } = useLocale();

  return (
    <Link
      href={`/learning-paths/${careerSlug}/${stage.slug}`}
      className="focus-visible:ring-primary block rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <Card className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <span className="text-muted-foreground text-xs font-medium">
            {stage.isMilestone ? (
              <GraduationCap aria-hidden="true" className="size-4" />
            ) : (
              index + 1
            )}
          </span>
          <RoadmapStatusBadge status={status} />
        </div>
        <Heading level={3} className="text-base">
          {stage.title[locale]}
        </Heading>
        <Text size="small" muted>
          {stage.description[locale]}
        </Text>
        <div className="mt-1 flex flex-wrap items-center gap-2">
          <Badge variant="outline">{t(DIFFICULTY_LABEL_KEY[stage.difficulty])}</Badge>
          {stage.estimatedHours > 0 && (
            <Badge variant="outline" className="gap-1">
              <Clock aria-hidden="true" className="size-3.5" />
              {t("roadmap.stage.estimatedHours", { hours: stage.estimatedHours })}
            </Badge>
          )}
        </div>
      </Card>
    </Link>
  );
}
