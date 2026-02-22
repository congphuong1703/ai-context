"use client";

import { useTranslations } from "next-intl";

const STEPS = [{ key: "howStep1" }, { key: "howStep2" }, { key: "howStep3" }, { key: "howStep4" }];

export function HowItWorks() {
  const t = useTranslations("common");

  return (
    <div className="max-w-xl mx-auto text-left">
      <ul className="space-y-2.5 text-sm text-ink2">
        {STEPS.map(({ key }, i) => (
          <li
            key={key}
            className="flex gap-3 p-3 rounded-lg bg-surface border border-border items-center"
          >
            <span className="shrink-0 w-8 h-8 rounded-lg bg-accent/15 text-accent flex items-center justify-center font-mono font-bold">
              {i + 1}
            </span>
            <span>{t(key)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
