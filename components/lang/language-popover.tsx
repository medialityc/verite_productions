"use client";
import * as React from "react";
import { useI18NContext } from "../../locales";
import { useTranslationClient } from "../../locales/client";
import PanamaFlag from "../assets/spain-flag";
import UnitedKingDom from "../assets/united-kingdom-flag";
import SpainFlag from "../assets/spain-flag";

const otherLocales = [
  {
    code: "es",
    name: "Español",
  },
  {
    code: "en",
    name: "English",
  },
];

export function LocaleSwitcher() {
  const { language: lang } = useI18NContext();
  const [selectedLanguage, setSelectedLanguage] = React.useState(
    otherLocales.find(option => option.code === lang)?.code ??
      otherLocales[0].code
  );
  const { onChangeLang } = useTranslationClient();

  const currentLang =
    otherLocales.find(option => option.code === lang) ?? otherLocales[0];

  const onHandleChangeLang = (newLang: string) => {
    setSelectedLanguage(newLang);
    onChangeLang(newLang);
  };
  return (
    <button
      className="w-16"
      onClick={() =>
        onHandleChangeLang(currentLang.code === "es" ? "en" : "es")
      }
    >
      {currentLang.code === "es" ? <SpainFlag /> : <UnitedKingDom />}
    </button>
  );
}
