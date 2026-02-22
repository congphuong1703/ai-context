"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { useWizardData } from "@/hooks/useWizardData";
import { useTranslations } from "next-intl";
import { DEFAULTS } from "@/data";
import { generateOutput } from "@/lib/generateRules";
import { Header } from "./Header";
import { TemplateStep } from "./TemplateStep";
import { ResultPanel } from "./ResultPanel";
import { Footer } from "./Footer";
import { ChevronRight } from "lucide-react";

const initialConfig = {
  language: null,
  convention: null,
  eslintRequired: null,
  prettierRequired: null,
  ide: null,
};

export function TemplatePage() {
  const t = useTranslations("common");
  const { data, loading } = useWizardData();
  const [selectedTemplateId, setSelectedTemplateId] = useState(null);
  const [config, setConfig] = useState(initialConfig);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState({});

  const applyConfig = useCallback((cfg) => {
    setConfig({
      language: cfg.language ?? DEFAULTS.language,
      convention: cfg.convention ?? DEFAULTS.convention,
      eslintRequired: cfg.eslintRequired ?? DEFAULTS.eslintRequired,
      prettierRequired: cfg.prettierRequired ?? DEFAULTS.prettierRequired,
      ide: cfg.ide ?? DEFAULTS.ide,
    });
  }, []);

  const handleSelectTemplate = (tmpl) => {
    setSelectedTemplateId(tmpl.id);
    applyConfig(tmpl.config);
  };

  const doGenerate = useCallback(() => {
    const out = generateOutput({
      language: config.language ?? DEFAULTS.language,
      convention: config.convention ?? DEFAULTS.convention,
      eslintRequired: config.eslintRequired ?? DEFAULTS.eslintRequired,
      prettierRequired: config.prettierRequired ?? DEFAULTS.prettierRequired,
      ide: config.ide ?? DEFAULTS.ide,
    });
    setResult(out);
  }, [config]);

  const copyText = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied((c) => ({ ...c, [key]: true }));
    setTimeout(() => setCopied((c) => ({ ...c, [key]: false })), 2000);
  };

  const download = () => {
    if (!result) return;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([result.content], { type: "text/plain" }));
    a.download = result.filename;
    a.click();
  };

  const startOver = () => {
    setResult(null);
    setSelectedTemplateId(null);
    setConfig(initialConfig);
  };

  const lang = config.language ?? DEFAULTS.language;
  const ide = config.ide ?? DEFAULTS.ide;
  const getL = () => data?.languages?.find((x) => x.id === lang)?.label ?? "";
  const getIDE = () => data?.ides?.find((x) => x.id === ide)?.label ?? "";

  if (loading && !data) {
    return (
      <>
        <Header />
        <div className="relative z-[1] pt-[62px] min-h-screen flex items-center justify-center">
          <div className="font-mono text-ink3">Loading...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="fixed w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(91,80,230,0.15)_0%,transparent_70%)] -top-[200px] -right-[200px] pointer-events-none z-0 animate-orb dark:bg-[radial-gradient(circle,rgba(108,99,255,0.12)_0%,transparent_70%)]" />
      <Header />
      <div className="relative z-[1] pt-[62px] min-h-screen flex flex-col">
        <div className="max-w-[960px] mx-auto px-6 pb-12 w-full flex-1 flex flex-col gap-10">
          {result ? (
            <div className="pt-8">
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
              <div className="pt-8">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm text-ink3 hover:text-ink transition-colors mb-6"
                >
                  ← {t("backToChoice")}
                </Link>
              </div>
              <div className="bg-surface border border-border rounded-2xl overflow-hidden shadow-xl">
                <TemplateStep selectedId={selectedTemplateId} onSelect={handleSelectTemplate} />
                <div className="flex items-center justify-end gap-3 px-6 sm:px-8 py-6 border-t border-border">
                  <button
                    type="button"
                    className="flex items-center gap-2 py-3 px-6 rounded-lg border-none bg-accent text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={doGenerate}
                    disabled={!selectedTemplateId}
                  >
                    {t("generateRules")}
                    <ChevronRight className="w-4 h-4" />
                  </button>
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
