"use client";

import { CheckCircle2, CircleDot, Lock, PlayCircle, type LucideIcon } from "lucide-react";

import { useLocale } from "@/components/locale/LocaleProvider";
import { Badge, type BadgeVariant } from "@/components/ui/Badge";
import type { TranslationKey } from "@/i18n";
import type { StageStatus } from "@/types/roadmap";

const STATUS_ICON: Record<StageStatus, LucideIcon> = {
  locked: Lock,
  available: CircleDot,
  in_progress: PlayCircle,
  completed: CheckCircle2,
};

const STATUS_BADGE_VARIANT: Record<StageStatus, BadgeVariant> = {
  locked: "outline",
  available: "secondary",
  in_progress: "default",
  completed: "secondary",
};

const STATUS_LABEL_KEY: Record<StageStatus, TranslationKey> = {
  locked: "roadmap.status.locked",
  available: "roadmap.status.available",
  in_progress: "roadmap.status.inProgress",
  completed: "roadmap.status.completed",
};

export interface RoadmapStatusBadgeProps {
  status: StageStatus;
}

/** Status is always shown with both an icon and text — never color alone (ARCHITECTURE.md §23). */
export function RoadmapStatusBadge({ status }: RoadmapStatusBadgeProps) {
  const { t } = useLocale();
  const Icon = STATUS_ICON[status];

  return (
    <Badge variant={STATUS_BADGE_VARIANT[status]} className="gap-1">
      <Icon aria-hidden="true" className="size-3.5" />
      {t(STATUS_LABEL_KEY[status])}
    </Badge>
  );
}
