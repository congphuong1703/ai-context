"use client";

import { useTranslations } from "next-intl";
import { LANGUAGES, CONVENTIONS, IDES, STACK_TEMPLATES } from "@/data";
import { Code2, LayoutTemplate, Type, Bot } from "lucide-react";

const STATS = [
  { key: "languagesCount", count: () => LANGUAGES.length, icon: Code2 },
  { key: "templatesCount", count: () => STACK_TEMPLATES.length, icon: LayoutTemplate },
  { key: "conventionsCount", count: () => CONVENTIONS.length, icon: Type },
  { key: "toolsCount", count: () => IDES.length, icon: Bot },
];

export function StatsCards() {
  const t = useTranslations("common");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {STATS.map(({ key, count, icon: Icon }) => (
        <div
          key={key}
          className="group rounded-xl border border-border bg-surface p-4 flex items-center gap-3 transition-all duration-200 cursor-pointer hover:border-accent/40 hover:bg-accent/5 hover:shadow-md hover:-translate-y-0.5"
        >
          <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-accent/20">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold text-ink tabular-nums">{count()}</div>
            <div className="text-sm text-ink3 font-medium">{t(key)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
