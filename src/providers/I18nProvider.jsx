"use client";

import { NextIntlClientProvider } from "next-intl";
import { useApp } from "@/providers/AppProvider";
import en from "@/messages/en.json";
import vi from "@/messages/vi.json";

const messagesMap = { en, vi };

export function I18nProvider({ children }) {
  const { locale } = useApp();
  const messages = messagesMap[locale] ?? messagesMap.en;
  const timeZone =
    typeof Intl !== "undefined" && Intl.DateTimeFormat
      ? Intl.DateTimeFormat().resolvedOptions().timeZone
      : "UTC";

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      {children}
    </NextIntlClientProvider>
  );
}
