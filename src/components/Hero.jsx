"use client";

import { useTranslations } from "next-intl";
import { FileCode, FolderRoot } from "lucide-react";
import { StatsCards } from "./StatsCards";

export function Hero() {
  const t = useTranslations("common");

  return (
    <div className="text-center py-8 sm:py-12 px-6 pb-6 relative animate-fade-up">
      <h1 className="text-[clamp(28px,4.5vw,48px)] font-black tracking-tight leading-[1.08] max-w-[800px] mx-auto mb-3">
        {t("heroTitle")}{" "}
        <em className="not-italic bg-linear-to-br from-accent to-green bg-clip-text text-transparent">
          {t("heroTitleHighlight")}
        </em>
        <br />
        {t("heroTitleSuffix")}
      </h1>
      <p className="text-sm sm:text-base text-ink2 max-w-[540px] mx-auto leading-[1.65] font-normal mb-6">
        {t("heroDesc")}
      </p>
      <section className="mb-6">
        <StatsCards />
      </section>
      {/* How it works — content only (title is in HomePage) */}
      <div className="max-w-xl mx-auto text-left">
        <ul className="space-y-2.5 text-sm text-ink2">
          <li className="flex gap-3 p-3 rounded-lg align-center bg-surface border border-border items-center">
            <span className="shrink-0 w-8 h-8 rounded-lg bg-accent/15 text-accent flex items-center justify-center align-center font-mono font-bold">
              1
            </span>
            <span>{t("howStep1")}</span>
          </li>
          <li className="flex gap-3 p-3 rounded-lg align-center bg-surface border border-border items-center">
            <span className="shrink-0 w-8 h-8 rounded-lg bg-accent/15 text-accent flex items-center justify-center font-mono font-bold">
              2
            </span>
            <span>{t("howStep2")}</span>
          </li>
          <li className="flex gap-3 p-3 rounded-lg align-center bg-surface border border-border items-center">
            <span className="shrink-0 w-8 h-8 rounded-lg bg-accent/15 text-accent flex items-center justify-center">
              3
            </span>
            <span>{t("howStep3")}</span>
          </li>
          <li className="flex gap-3 p-3 rounded-lg align-center bg-surface border border-border items-center">
            <span className="shrink-0 w-8 h-8 rounded-lg bg-accent/15 text-accent flex items-center justify-center">
              4
            </span>
            <span>{t("howStep4")}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
