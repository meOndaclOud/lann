"use client";

import {
  BookOpen,
  Compass,
  MessageCircleQuestion,
  TrendingUp,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { useLocale } from "@/components/locale/LocaleProvider";
import { Heading, Text } from "@/components/ui/Typography";
import type { TranslationKey } from "@/i18n";

interface JourneyStep {
  icon: LucideIcon;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
}

const STEPS: JourneyStep[] = [
  {
    icon: Compass,
    titleKey: "home.journey.step1.title",
    descriptionKey: "home.journey.step1.description",
  },
  {
    icon: BookOpen,
    titleKey: "home.journey.step2.title",
    descriptionKey: "home.journey.step2.description",
  },
  {
    icon: Wrench,
    titleKey: "home.journey.step3.title",
    descriptionKey: "home.journey.step3.description",
  },
  {
    icon: MessageCircleQuestion,
    titleKey: "home.journey.step4.title",
    descriptionKey: "home.journey.step4.description",
  },
  {
    icon: TrendingUp,
    titleKey: "home.journey.step5.title",
    descriptionKey: "home.journey.step5.description",
  },
];

export function LearningJourney() {
  const { t } = useLocale();

  return (
    <section id="learning-journey" className="bg-muted/40 scroll-mt-20 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-2">
          <Heading level={2}>{t("home.journey.title")}</Heading>
          <Text muted>{t("home.journey.subtitle")}</Text>
        </div>

        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map(({ icon: Icon, titleKey, descriptionKey }, index) => (
            <li key={titleKey} className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-full">
                  <Icon aria-hidden="true" className="size-4" />
                </div>
                <Text size="small" muted>
                  {index + 1}
                </Text>
              </div>
              <Heading level={3} className="text-base">
                {t(titleKey)}
              </Heading>
              <Text size="small" muted>
                {t(descriptionKey)}
              </Text>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
