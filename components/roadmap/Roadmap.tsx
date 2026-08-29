"use client";

import { RoadmapStageNode } from "@/components/roadmap/RoadmapStageNode";
import type { RoadmapStage, StageStatus } from "@/types/roadmap";

export interface RoadmapProps {
  careerSlug: string;
  stages: RoadmapStage[];
  statuses: Map<string, StageStatus>;
}

const DOT_STATUS_CLASS: Record<StageStatus, string> = {
  locked: "bg-muted border-border",
  available: "bg-secondary border-secondary",
  in_progress: "bg-primary border-primary",
  completed: "bg-primary border-primary",
};

/**
 * Desktop: alternating left/right cards connected by a vertical line.
 * Mobile: a simple top-to-bottom stack (ARCHITECTURE.md §34).
 */
export function Roadmap({ careerSlug, stages, statuses }: RoadmapProps) {
  return (
    <div className="relative">
      {/* Connector line: left-aligned on mobile, centered on desktop. */}
      <div className="bg-border absolute inset-y-0 left-4 w-px md:left-1/2 md:-translate-x-1/2" />

      <ol className="flex flex-col gap-8">
        {stages.map((stage, index) => {
          const status = statuses.get(stage.slug) ?? "locked";
          const onLeft = index % 2 === 0;
          const node = (
            <RoadmapStageNode careerSlug={careerSlug} stage={stage} status={status} index={index} />
          );

          return (
            <li
              key={stage.slug}
              className="grid grid-cols-[2rem_1fr] items-start gap-4 md:grid-cols-[1fr_2rem_1fr] md:gap-6"
            >
              {/* Dot: first column on mobile, centered column on desktop. */}
              <div className="flex justify-center pt-6 md:order-2">
                <span
                  className={`size-3 shrink-0 rounded-full border-2 ${DOT_STATUS_CLASS[status]}`}
                  aria-hidden="true"
                />
              </div>

              {/* Mobile: card always in the second column. */}
              <div className="md:hidden">{node}</div>

              {/* Desktop: alternate which side the card renders on. */}
              <div className="hidden md:order-1 md:block">{onLeft ? node : null}</div>
              <div className="hidden md:order-3 md:block">{onLeft ? null : node}</div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
