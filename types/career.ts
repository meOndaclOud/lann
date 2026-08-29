import type { LucideIcon } from "lucide-react";

export interface LocalizedText {
  en: string;
  mm: string;
}

export interface CareerSkill {
  name: LocalizedText;
}

export type CareerSlug =
  | "full-stack-development"
  | "mobile-app-development"
  | "software-engineering"
  | "ui-ux-design"
  | "data-analysis"
  | "cloud-devops"
  | "cybersecurity";

export interface Career {
  slug: CareerSlug;
  icon: LucideIcon;
  name: LocalizedText;
  shortDescription: LocalizedText;
  roleIntroduction: LocalizedText;
  whyThisCareer: LocalizedText;
  myanmarContext: LocalizedText;
  whoIsThisFor: LocalizedText;
  careerProgression: LocalizedText;
  skills: CareerSkill[];
}
