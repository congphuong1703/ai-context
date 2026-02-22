"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { LayoutTemplate, Sliders } from "lucide-react";
import { OptionCardCheck } from "./OptionCard";

export function ChoiceStep() {
  const t = useTranslations("common");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
      <Link href="/template" className="block w-full group cursor-pointer">
        <div className="w-full h-full p-6 sm:p-8 border-2 border-accent/30 bg-accent/5 hover:bg-accent/10 hover:border-accent/50 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] rounded-xl border-border text-left relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-accent/5 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity">
          <div className="flex items-start justify-between gap-4 relative z-[1]">
            <div className="flex items-start gap-4 min-w-0">
              <div className="w-14 h-14 rounded-2xl bg-accent/20 text-accent flex items-center justify-center shrink-0">
                <LayoutTemplate className="w-7 h-7" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-ink mb-1">
                  {t("startWithTemplate")}
                </div>
                <p className="text-sm text-ink3 leading-relaxed">{t("templateDesc")}</p>
              </div>
            </div>
            <OptionCardCheck selected={false} />
          </div>
        </div>
      </Link>
      <Link href="/customize" className="block w-full group cursor-pointer">
        <div className="w-full h-full p-6 sm:p-8 border-2 border-green/30 bg-green/5 hover:bg-green/10 hover:border-green/50 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] rounded-xl border-border text-left relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-green/5 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity">
          <div className="flex items-start justify-between gap-4 relative z-[1]">
            <div className="flex items-start gap-4 min-w-0">
              <div className="w-14 h-14 rounded-2xl bg-green/20 text-green flex items-center justify-center shrink-0">
                <Sliders className="w-7 h-7" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-ink mb-1">
                  {t("startCustomize")}
                </div>
                <p className="text-sm text-ink3 leading-relaxed">{t("customizeDesc")}</p>
              </div>
            </div>
            <OptionCardCheck selected={false} />
          </div>
        </div>
      </Link>
    </div>
  );
}
