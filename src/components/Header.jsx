"use client";

import Link from "next/link";
import { useGitHubStars } from "@/hooks/useGitHubStars";
import { useApp } from "@/providers/AppProvider";
import { Star, Sun, Moon, Globe, Sparkles } from "lucide-react";

export function Header() {
  const { stars, loading } = useGitHubStars();
  const { theme, setTheme, locale, setLocale } = useApp();

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] h-[62px] flex items-center justify-between px-6 sm:px-8 bg-bg/90 backdrop-blur-xl border-b border-border">
      <Link
        href="/"
        className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-ink hover:opacity-90 transition-opacity"
      >
        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white">
          <Sparkles className="w-4 h-4" />
        </div>
        <span>AI</span>
        <span className="text-accent">Context</span>
      </Link>
      <div className="flex items-center gap-2 sm:gap-4 font-mono text-[11px] text-ink3">
        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-lg hover:bg-surface2 text-ink2 hover:text-ink transition-colors cursor-pointer"
          title={theme === "dark" ? "Light mode" : "Dark mode"}
          aria-label={theme === "dark" ? "Switch to light" : "Switch to dark"}
        >
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
        <button
          type="button"
          onClick={() => setLocale(locale === "en" ? "vi" : "en")}
          className="flex items-center gap-1.5 p-2 rounded-lg hover:bg-surface2 text-ink2 hover:text-ink transition-colors cursor-pointer"
          title={locale === "en" ? "Tiếng Việt" : "English"}
        >
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{locale === "en" ? "EN" : "VI"}</span>
        </button>
        <a
          href="https://github.com/congphuong1703/ai-context"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 p-2 rounded-lg hover:bg-surface2 hover:text-ink2 transition-colors"
        >
          {loading ? (
            <span className="w-4 h-4 rounded bg-border2 animate-pulse" />
          ) : (
            <>
              <Star className="w-4 h-4" />
              <span className="hidden sm:inline">Star</span>
              {stars != null && <span className="font-semibold text-ink2">{stars}</span>}
            </>
          )}
        </a>
      </div>
    </header>
  );
}
