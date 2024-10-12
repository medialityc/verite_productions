"use client";
import * as React from "react";
import { useI18NContext } from "../../locales";
import { useTranslationClient } from "../../locales/client";

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
  const { onChangeLang } = useTranslationClient();

  const currentLang =
    otherLocales.find((option) => option.code === lang) ?? otherLocales[0];

  const onHandleChangeLang = (newLang: string) => {
    onChangeLang(newLang);
  };

  return (
    <select
      className="select-language"
      value={currentLang.code}
      onChange={(e) => onHandleChangeLang(e.target.value)}
    >
      {otherLocales.map((locale) => (
        <option key={locale.code} value={locale.code}>
          {locale.name}
        </option>
      ))}
    </select>
  );
}
