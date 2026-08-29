"use client";

import { useLocale } from "@/components/locale/LocaleProvider";
import { Badge } from "@/components/ui/Badge";
import { Text } from "@/components/ui/Typography";
import type { TranslationKey } from "@/i18n";
import type { RoadmapStage, StageDifficulty } from "@/types/roadmap";

const DIFFICULTY_ORDER: StageDifficulty[] = ["beginner", "junior", "intermediate", "advanced"];

const DIFFICULTY_LABEL_KEY: Record<StageDifficulty, TranslationKey> = {
  beginner: "roadmap.difficulty.beginner",
  junior: "roadmap.difficulty.junior",
  intermediate: "roadmap.difficulty.intermediate",
  advanced: "roadmap.difficulty.advanced",
};

export interface SkillsProgressionProps {
  stages: RoadmapStage[];
}

/** Groups roadmap stages by difficulty to show how skills build up over the roadmap. */
export function SkillsProgression({ stages }: SkillsProgressionProps) {
  const { locale, t } = useLocale();

  return (
    <div className="flex flex-col gap-4">
      {DIFFICULTY_ORDER.map((difficulty) => {
        const stagesAtLevel = stages.filter(
          (stage) => stage.difficulty === difficulty && !stage.isMilestone,
        );
        if (stagesAtLevel.length === 0) return null;

        return (
          <div key={difficulty} className="flex flex-col gap-2">
            <Text size="small" className="font-semibold">
              {t(DIFFICULTY_LABEL_KEY[difficulty])}
            </Text>
            <div className="flex flex-wrap gap-2">
              {stagesAtLevel.map((stage) => (
                <Badge key={stage.slug} variant="outline">
                  {stage.title[locale]}
                </Badge>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
