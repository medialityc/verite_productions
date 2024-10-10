"use server";

import { cookies } from "next/headers";

import { getNextYear } from "./utils";
import { cookieI18Name, languages } from "./lang";

export async function updateCookieLanguage(lng: string) {
  if (languages.includes(lng)) {
    cookies().set(cookieI18Name, lng, { expires: getNextYear() });
  }
}
