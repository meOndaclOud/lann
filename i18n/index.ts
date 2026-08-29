import en from "./en.json";
import mm from "./mm.json";

import type { Locale } from "@/types/locale";

export type TranslationKey = keyof typeof en;

export const dictionaries: Record<Locale, Record<TranslationKey, string>> = { en, mm };

export const locales: Locale[] = ["en", "mm"];

export function getDictionary(locale: Locale): Record<TranslationKey, string> {
  return dictionaries[locale];
}
