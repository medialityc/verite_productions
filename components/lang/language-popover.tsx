"use client";
import * as React from "react";

import SpainFlag from "../assets/spain-flag";
import UnitedKingDom from "../assets/united-kingdom-flag";
import { useI18NContext } from "../../locales";
import { useTranslationClient } from "../../locales/client";

const otherLocales = [
  {
    code: "es",
    name: "Español",
    icon: <SpainFlag />,
  },
  {
    code: "en",
    name: "English",
    icon: <UnitedKingDom />,
  },
];

export function LocaleSwitcher() {
  const { language: lang } = useI18NContext();
  const { onChangeLang } = useTranslationClient();

  const currentLang =
    otherLocales.find((option) => option.code === lang) ?? otherLocales[0];

  const onHandleChangeLang = (newLang: string) => {
    onChangeLang(newLang);
  };

  return (
    <select
      className="nice-select"
      value={currentLang.code}
      onChange={(e) => onHandleChangeLang(e.target.value)}
    >
      {otherLocales.map((locale) => (
        <option key={locale.code} value={locale.code}>
          {locale.name} {locale.icon}
        </option>
      ))}
    </select>
  );
}
