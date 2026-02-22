"use client";

import { STEPS } from "@/data";
import { useTranslations } from "next-intl";
import { Code2, Layers, Type, Bot, CheckCircle } from "lucide-react";

const STEP_ICONS = [Code2, Layers, Type, Bot, CheckCircle];

export function StepIndicator({ step }) {
  const t = useTranslations("common");
  const stepLabels = [
    t("stepLanguage"),
    t("stepFramework"),
    t("stepConvention"),
    t("stepIDE"),
    t("stepResult"),
  ];

  return (
    <div className="flex items-center justify-center gap-0 mb-12 relative overflow-x-auto pb-1 min-w-0">
      {STEPS.map((s, i) => {
        const Icon = STEP_ICONS[i] || CheckCircle;
        const label = stepLabels[i] ?? s.label;
        return (
          <div
            key={s.id}
            className={`flex flex-col items-center gap-2 relative flex-1 max-w-[100px] sm:max-w-[120px] z-[1] min-w-[60px] ${i < step ? "done" : ""} ${i === step ? "active" : ""}`}
          >
            <div
              className={`
                w-9 h-9 sm:w-[38px] sm:h-[38px] rounded-full border-[1.5px] flex items-center justify-center transition-all duration-300 relative z-[1]
                ${
                  i < step
                    ? "border-green bg-green/15 text-green"
                    : i === step
                      ? "border-accent bg-accent/15 text-accent shadow-[0_0_0_4px_rgba(91,80,230,0.15)] dark:shadow-[0_0_0_4px_rgba(108,99,255,0.15)]"
                      : "border-border bg-surface2 text-ink3"
                }
              `}
            >
              {i < step ? (
                <CheckCircle className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              ) : (
                <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              )}
            </div>
            <div
              className={`text-[10px] sm:text-[11px] font-medium text-center whitespace-nowrap transition-colors duration-300 ${
                i === step ? "text-ink2" : "text-ink3"
              }`}
            >
              {label}
            </div>
            {i < STEPS.length - 1 && (
              <div
                className="absolute top-[18px] left-[calc(50%+18px)] right-[calc(-50%+18px)] h-px transition-colors duration-300 z-0"
                style={{ background: i < step ? "var(--accent)" : "var(--border)" }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
