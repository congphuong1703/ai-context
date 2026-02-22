"use client";

import { useTranslations } from "next-intl";
import { STACK_TEMPLATES } from "@/data/templates";
import { TEMPLATE_ICONS } from "@/lib/optionIcons";
import { OptionCard, OptionCardCheck } from "./OptionCard";

export function TemplateStep({ selectedId, onSelect }) {
  const t = useTranslations("common");

  return (
    <div className="pt-8 px-6 sm:px-8 pb-8">
      <p className="text-sm text-ink2 mb-6 text-center">{t("templateChooseDesc")}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {STACK_TEMPLATES.map((tmpl) => {
          const Icon = TEMPLATE_ICONS[tmpl.id];
          return (
            <OptionCard
              key={tmpl.id}
              selected={selectedId === tmpl.id}
              onClick={() => onSelect(tmpl)}
              className="p-5!"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    {Icon ? <Icon className="w-5 h-5" /> : null}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink">{tmpl.name}</div>
                    <div className="text-xs text-ink3 mt-0.5 font-mono">{tmpl.desc}</div>
                  </div>
                </div>
                <OptionCardCheck selected={selectedId === tmpl.id} />
              </div>
            </OptionCard>
          );
        })}
      </div>
    </div>
  );
}
