"use client";

import Link from "next/link";

import { useLocale } from "@/components/locale/LocaleProvider";
import { buttonClassName } from "@/components/ui/Button";
import { Heading, Text } from "@/components/ui/Typography";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="from-primary/5 relative overflow-hidden bg-gradient-to-b via-transparent to-transparent">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 sm:py-28">
        <Heading level={1}>{t("home.hero.title")}</Heading>
        <Text muted className="max-w-xl text-base sm:text-lg">
          {t("home.hero.subtitle")}
        </Text>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Link href="/careers" className={buttonClassName("gradient", "lg")}>
            {t("home.hero.primaryCta")}
          </Link>
          <a href="#learning-journey" className={buttonClassName("outline", "lg")}>
            {t("home.hero.secondaryCta")}
          </a>
        </div>
      </div>
    </section>
  );
}
