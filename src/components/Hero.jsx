"use client";

import { useTranslations } from "next-intl";
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
      <StatsCards />
    </div>
  );
}
