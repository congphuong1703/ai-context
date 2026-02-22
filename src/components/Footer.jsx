"use client";

import { useTranslations } from "next-intl";
import { Heart, Github } from "lucide-react";

export function Footer() {
  const t = useTranslations("common");

  return (
    <footer className="mt-auto border-t border-border bg-surface/50">
      <div className="max-w-[960px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink3">
        <div className="flex items-center gap-1.5">
          <span>{t("footerMadeWith")}</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          <span>·</span>
          <a
            href="https://github.com/congphuong1703/ai-context"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <Github className="w-4 h-4" />
            {t("footerGitHub")}
          </a>
        </div>
        <div>{t("footerLicense")}</div>
      </div>
    </footer>
  );
}
