"use client";

import { useTranslations } from "next-intl";
import { Header } from "./Header";
import { ChoiceStep } from "./ChoiceStep";
import { StatsCards } from "./StatsCards";
import { Hero } from "./Hero";
import { Footer } from "./Footer";

export function HomePage() {
  const t = useTranslations("common");

  return (
    <>
      <div className="fixed w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(91,80,230,0.15)_0%,transparent_70%)] -top-[200px] -right-[200px] pointer-events-none z-0 animate-orb dark:bg-[radial-gradient(circle,rgba(108,99,255,0.12)_0%,transparent_70%)]" />
      <Header />
      <div className="relative z-1 pt-[62px] min-h-screen flex flex-col">
        <div className="max-w-[960px] mx-auto px-6 pb-12 w-full flex-1 flex flex-col gap-4">
          <section>
            <Hero />
          </section>
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-ink tracking-tight mb-6 text-center">
              {t("choiceSectionTitle")}
            </h2>
            <ChoiceStep />
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
