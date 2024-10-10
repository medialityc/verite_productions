"use client";

import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { useCallback } from "react";
import {
  UseTranslationOptions,
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";

import { getOptions } from "./config-lang";
import { useI18NContext } from "./context";
import { languages } from "./lang";

const runsOnServerSide = typeof window === "undefined";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, _: string) => import(`./langs/${language}.json`),
    ),
  )
  .init({
    ...getOptions(),
    lng: undefined,
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? languages : [],
  });

export function useTranslationClient(
  ns?: string,
  options?: UseTranslationOptions<any>,
) {
  const { t, i18n } = useTranslationOrg(ns, options);
  const { language, changeLanguage } = useI18NContext();

  const onChangeLang = useCallback(
    (newLang: string) => {
      i18n.changeLanguage(newLang);
      changeLanguage(newLang);
    },
    [i18n, changeLanguage],
  );
  if (i18n.resolvedLanguage !== language) i18n.changeLanguage(language);

  return { t, onChangeLang };
}
