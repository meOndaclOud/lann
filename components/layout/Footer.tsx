"use client";

import { useLocale } from "@/components/locale/LocaleProvider";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-border mt-auto border-t">
      <div className="text-muted-foreground mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm sm:px-6">
        <p className="text-foreground font-medium">{t("common.appName")}</p>
        <p>{t("footer.tagline")}</p>
        <p>{t("footer.rights", { year })}</p>
      </div>
    </footer>
  );
}
