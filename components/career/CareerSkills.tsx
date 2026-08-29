"use client";

import { useLocale } from "@/components/locale/LocaleProvider";
import { Badge } from "@/components/ui/Badge";
import type { CareerSkill } from "@/types/career";

export interface CareerSkillsProps {
  skills: CareerSkill[];
}

export function CareerSkills({ skills }: CareerSkillsProps) {
  const { locale } = useLocale();

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge key={skill.name.en} variant="outline">
          {skill.name[locale]}
        </Badge>
      ))}
    </div>
  );
}
