"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeKey = "ai-context-theme";
const LocaleKey = "ai-context-locale";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [theme, setThemeState] = useState("light");
  const [locale, setLocaleState] = useState("en");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const t = localStorage.getItem(ThemeKey);
    const l = localStorage.getItem(LocaleKey);
    const timer = setTimeout(() => {
      if (t === "light" || t === "dark") setThemeState(t);
      if (l === "vi" || l === "en") setLocaleState(l);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const html = document.documentElement;
    html.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const setTheme = (value) => {
    setThemeState(value);
    if (typeof window !== "undefined") localStorage.setItem(ThemeKey, value);
  };

  const setLocale = (value) => {
    setLocaleState(value);
    if (typeof window !== "undefined") localStorage.setItem(LocaleKey, value);
  };

  return (
    <AppContext.Provider value={{ theme, setTheme, locale, setLocale }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
