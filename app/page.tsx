"use client";

import Link from "next/link";

import { useLocale } from "@/components/locale/LocaleProvider";
import { Badge } from "@/components/ui/Badge";
import { buttonClassName } from "@/components/ui/Button";
import { Heading, Text } from "@/components/ui/Typography";

export default function FoundationPage() {
  const { t } = useLocale();

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4 px-4 py-16 text-center sm:px-6">
      <Badge variant="secondary" className="self-center">
        {t("home.foundationTitle")}
      </Badge>
      <Heading level={1}>{t("common.appName")}</Heading>
      <Text muted>{t("home.foundationNotice")}</Text>
      <Link href="/design-system" className={buttonClassName("primary", "lg", "self-center")}>
        {t("nav.designSystem")}
      </Link>
    </div>
  );
}
