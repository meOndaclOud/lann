"use client";

import { ArrowRight } from "lucide-react";

import { useLocale } from "@/components/locale/LocaleProvider";
import { Badge } from "@/components/ui/Badge";
import type { LocalizedText } from "@/types/career";

export interface CareerProgressionProps {
  progression: LocalizedText;
}

export function CareerProgression({ progression }: CareerProgressionProps) {
  const { locale } = useLocale();
  const stages = progression[locale].split("→").map((stage) => stage.trim());

  return (
    <div className="flex flex-wrap items-center gap-2">
      {stages.map((stage, index) => (
        <div key={stage} className="flex items-center gap-2">
          <Badge variant={index === stages.length - 1 ? "default" : "secondary"}>{stage}</Badge>
          {index < stages.length - 1 && (
            <ArrowRight aria-hidden="true" className="text-muted-foreground size-4" />
          )}
        </div>
      ))}
    </div>
  );
}
