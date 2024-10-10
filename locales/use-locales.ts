"use client";

import { useI18NContext } from "./context";
import { allLangs, defaultLang } from "./config-lang";

export function useLocales() {
  const { language } = useI18NContext();

  const currentLang =
    allLangs.find((lang) => lang.value === language) || defaultLang;

  return {
    allLangs,
    currentLang,
  };
}
