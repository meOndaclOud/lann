"use client";

import { CareerHero } from "@/components/career/CareerHero";
import { CareerInfoSection } from "@/components/career/CareerInfoSection";
import { CareerProgression } from "@/components/career/CareerProgression";
import { CareerSkills } from "@/components/career/CareerSkills";
import { useLocale } from "@/components/locale/LocaleProvider";
import { Text } from "@/components/ui/Typography";
import { getCareerBySlug } from "@/content/careers";
import type { CareerSlug } from "@/types/career";

export interface CareerDetailViewProps {
  slug: CareerSlug;
}

/**
 * Looks the career up itself (rather than receiving the full object as a
 * prop) because `Career.icon` is a component reference — passing it from
 * the server-component route down through the RSC boundary isn't allowed.
 * The slug is the only thing that needs to cross that boundary.
 */
export function CareerDetailView({ slug }: CareerDetailViewProps) {
  const { locale, t } = useLocale();
  const career = getCareerBySlug(slug);

  if (!career) return null;

  return (
    <>
      <CareerHero career={career} />

      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-12 sm:px-6">
        <CareerInfoSection title={t("career.detail.roleIntroduction")}>
          <Text muted>{career.roleIntroduction[locale]}</Text>
        </CareerInfoSection>

        <CareerInfoSection title={t("career.detail.whyThisCareer")}>
          <Text muted>{career.whyThisCareer[locale]}</Text>
        </CareerInfoSection>

        <CareerInfoSection title={t("career.detail.myanmarContext")}>
          <Text muted>{career.myanmarContext[locale]}</Text>
        </CareerInfoSection>

        <CareerInfoSection title={t("career.detail.whoIsThisFor")}>
          <Text muted>{career.whoIsThisFor[locale]}</Text>
        </CareerInfoSection>

        <CareerInfoSection title={t("career.detail.skills")}>
          <CareerSkills skills={career.skills} />
        </CareerInfoSection>

        <CareerInfoSection title={t("career.detail.progression")}>
          <CareerProgression progression={career.careerProgression} />
        </CareerInfoSection>
      </div>
    </>
  );
}
