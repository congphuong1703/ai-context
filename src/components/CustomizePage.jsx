"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useWizardData } from "@/hooks/useWizardData";
import { useTranslations } from "next-intl";
import { TOTAL_STEPS, getDefaultConventionForLanguage } from "@/data";
import { generateOutput } from "@/lib/generateRules";
import { Header } from "./Header";
import { StepIndicator } from "./StepIndicator";
import { StepLanguage, StepFramework, StepConvention, StepIDE } from "./WizardSteps";
import { ResultPanel } from "./ResultPanel";
import { Footer } from "./Footer";

const initialConfig = {
  language: null,
  framework: null,
  frameworks: [],
  convention: null,
  eslintRequired: null,
  prettierRequired: null,
  ide: null,
  libraries: [],
};

export function CustomizePage() {
  const t = useTranslations("common");
  const { data, loading } = useWizardData();
  const [step, setStep] = useState(0);
  const [config, setConfig] = useState(initialConfig);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState({});

  const set = useCallback((key, val) => {
    setConfig((c) => ({ ...c, [key]: c[key] === val ? null : val }));
  }, []);

  useEffect(() => {
    if (!config.language || config.convention != null) return;
    const defaultConv = getDefaultConventionForLanguage(config.language);
    setConfig((c) => ({ ...c, convention: defaultConv }));
  }, [config.language, config.convention]);

  const doGenerate = useCallback(() => {
    const out = generateOutput({
      language: config.language,
      framework: config.framework,
      frameworks: config.frameworks,
      convention: config.convention,
      eslintRequired: config.eslintRequired,
      prettierRequired: config.prettierRequired,
      ide: config.ide,
      libraries: config.libraries,
    });
    setResult(out);
  }, [config]);

  const next = () => {
    if (step < TOTAL_STEPS - 1) setStep((s) => s + 1);
    else doGenerate();
  };

  const skip = () => {
    if (step < TOTAL_STEPS - 1) setStep((s) => s + 1);
    else doGenerate();
  };

  const back = () => setStep((s) => Math.max(0, s - 1));

  const copyText = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied((c) => ({ ...c, [key]: true }));
    setTimeout(() => setCopied((c) => ({ ...c, [key]: false })), 2000);
  };

  const download = (content = result?.content, filename = result?.filename) => {
    if (!result || content == null) return;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([content], { type: "text/plain" }));
    a.download = filename ?? result.filename;
    a.click();
  };

  const startOver = () => {
    setResult(null);
    setStep(0);
    setConfig(initialConfig);
  };

  const getL = () =>
    config.language ? (data?.languages?.find((x) => x.id === config.language)?.label ?? "") : "";
  const getIDE = () =>
    config.ide ? (data?.ides?.find((x) => x.id === config.ide)?.label ?? "") : "";

  const isResult = !!result;
  const common = { config, set, data, stepIndex: step, totalSteps: TOTAL_STEPS };

  const renderStepContent = () => {
    if (step === 0) return <StepLanguage {...common} />;
    if (step === 1) return <StepFramework {...common} />;
    if (step === 2) return <StepConvention {...common} />;
    if (step === 3) return <StepIDE {...common} />;
    return null;
  };

  if (loading && !data) {
    return (
      <>
        <Header />
        <div className="relative z-1 pt-[62px] min-h-screen flex items-center justify-center">
          <div className="font-mono text-ink3">Loading...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="fixed w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(91,80,230,0.15)_0%,transparent_70%)] -top-[200px] -right-[200px] pointer-events-none z-0 animate-orb dark:bg-[radial-gradient(circle,rgba(108,99,255,0.12)_0%,transparent_70%)]" />
      <Header />
      <div className="relative z-1 pt-[62px] min-h-screen flex flex-col">
        <div className="mx-auto px-6 pb-12 w-full flex-1 flex flex-col gap-5">
          {isResult ? (
            <div className="pt-10">
              <ResultPanel
                result={result}
                config={config}
                getL={getL}
                getIDE={getIDE}
                copied={copied}
                onCopy={copyText}
                onDownload={download}
                onStartOver={startOver}
              />
            </div>
          ) : (
            <>
              <div className="pt-10">
                {step === 0 ? (
                  <Link
                    href="/"
                    className="inline-flex items-center text-sm text-ink3 hover:text-ink transition-colors"
                  >
                    ← {t("backToChoice")}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={back}
                    className="inline-flex items-center text-sm text-ink3 hover:text-ink transition-colors cursor-pointer"
                  >
                    ← {t("back")}
                  </button>
                )}
              </div>
              <StepIndicator step={step} />
              <div className="overflow-hidden">
                {renderStepContent()}
                <div className="flex items-center justify-between py-6 px-6 sm:px-8 border-t border-border gap-3 flex-wrap">
                  <button
                    type="button"
                    className="flex items-center gap-2 py-2.5 px-5 rounded-lg border-[1.5px] border-border2 bg-transparent text-ink2 font-sans text-sm font-semibold hover:border-ink3 hover:text-ink disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                    onClick={step === 0 ? undefined : back}
                    disabled={step === 0}
                    tabIndex={step === 0 ? -1 : 0}
                  >
                    ← {t("back")}
                  </button>
                  <span className="font-mono text-sm text-ink3 order-3 w-full sm:w-auto text-center sm:order-2">
                    {step + 1} / {TOTAL_STEPS}
                  </span>
                  <div className="flex items-center gap-2 order-2 sm:order-3">
                    <button
                      type="button"
                      className="flex items-center gap-2 py-2.5 px-4 rounded-lg border-[1.5px] border-border2 bg-transparent text-ink3 font-sans text-sm font-semibold hover:border-ink2 hover:text-ink2 transition-all cursor-pointer"
                      onClick={skip}
                    >
                      {t("skip")}
                    </button>
                    <button
                      type="button"
                      className="flex items-center gap-2 py-3 px-7 rounded-lg border-none bg-accent text-white font-sans text-sm font-bold hover:opacity-90 hover:-translate-y-px disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all tracking-tight cursor-pointer"
                      onClick={next}
                    >
                      {step === TOTAL_STEPS - 1 ? `✦ ${t("generateRules")}` : `${t("continue")} →`}
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
