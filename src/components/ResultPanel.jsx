"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Copy, Download, RotateCcw, Zap, FileText, Users } from "lucide-react";

export function ResultPanel({
  result,
  config,
  getL,
  getIDE,
  copied,
  onCopy,
  onDownload,
  onStartOver,
}) {
  const t = useTranslations("common");
  const [tab, setTab] = useState("rules");
  const rulesContent = result.rulesContent ?? result.content;
  const skillsContent = result.skillsContent ?? "";
  const promptsContent =
    result.promptsContent ?? (result.content.split("## 🤖 PROMPT TEMPLATES")[1] || "");
  const tabContent =
    tab === "rules" ? rulesContent : tab === "skills" ? skillsContent : promptsContent;
  const tabLineCount = (
    tab === "rules" ? rulesContent : tab === "skills" ? skillsContent : promptsContent
  ).split("\n").length;
  const downloadFilename =
    tab === "rules" ? result.filename : tab === "skills" ? "AGENTS.md" : "prompts.md";
  const npxPkg = "ai-contexts";
  const npxArgs = [];
  if (config.language != null) npxArgs.push(`--lang=${config.language}`);
  const fws = Array.isArray(config.frameworks)
    ? config.frameworks
    : config.framework
      ? [config.framework]
      : [];
  if (fws.length > 0) npxArgs.push(`--frameworks=${fws.join(",")}`);
  if (config.convention != null) npxArgs.push(`--convention=${config.convention}`);
  if (config.eslintRequired === true) npxArgs.push("--eslint");
  if (config.prettierRequired === true) npxArgs.push("--prettier");
  if (config.ide != null) npxArgs.push(`--ide=${config.ide}`);
  const libs = Array.isArray(config.libraries) ? config.libraries : [];
  if (libs.length > 0) npxArgs.push(`--libraries=${libs.join(",")}`);
  const npxCmd =
    npxArgs.length > 0
      ? `npx ${npxPkg}@latest init ${npxArgs.join(" ")}`
      : `npx ${npxPkg}@latest init`;

  const summaryChips = [
    getL() || null,
    fws.length > 0 ? fws.join(", ") : null,
    libs.length > 0 ? libs.join(", ") : null,
    config.convention ?? null,
    config.eslintRequired === true ? "ESLint" : null,
    config.prettierRequired === true ? "Prettier" : null,
    getIDE() || null,
  ].filter((s) => s != null && s !== "" && s !== "—");

  return (
    <div className="animate-fade-up">
      {summaryChips.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-5 p-4 px-5 bg-accent/10 border border-accent/20 rounded-[10px]">
          {summaryChips.map((s, i, arr) => (
            <span key={`${s}-${i}`} className="flex items-center gap-2">
              <span className="py-1 px-3 rounded-full bg-accent/20 border border-accent/30 text-sm font-semibold text-accent font-mono">
                {s}
              </span>
              {i < arr.length - 1 && <span className="text-ink3 text-sm">›</span>}
            </span>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_380px]">
        {/* Code panel */}
        <div className="bg-surface border border-border rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between py-3.5 px-5 border-b border-border bg-bg2">
            <div className="flex items-center gap-2.5 font-mono text-sm text-ink2">
              <span className="w-2 h-2 rounded-full bg-green" />
              <span className="font-semibold text-green">{downloadFilename}</span>
              <span className="text-ink3">{tabLineCount} lines</span>
            </div>
            <div className="flex gap-2">
              <button
                className={`flex items-center gap-1.5 py-1.5 px-3.5 rounded-md text-sm font-semibold transition-all cursor-pointer ${
                  copied.code
                    ? "bg-green text-white dark:text-black"
                    : "border border-border2 bg-transparent text-ink2 hover:border-ink3 hover:text-ink"
                }`}
                onClick={() => onCopy(tabContent, "code")}
              >
                {copied.code ? (
                  `✓ ${t("copied")}`
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> {t("copy")}
                  </>
                )}
              </button>
              <button
                className="flex items-center gap-1.5 py-1.5 px-3.5 rounded-md text-sm font-bold bg-accent text-white hover:opacity-90 transition-opacity cursor-pointer"
                onClick={() => onDownload(tabContent, downloadFilename)}
              >
                <Download className="w-3.5 h-3.5" /> {t("download")}
              </button>
            </div>
          </div>
          <div className="flex gap-1 p-3 pt-3 pl-4">
            {[
              { key: "rules", label: t("tabRules") },
              { key: "skills", label: t("tabSkills") },
            ].map(({ key, label }) => (
              <button
                key={key}
                className={`py-2 px-4 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  tab === key
                    ? "bg-surface2 text-ink"
                    : "bg-transparent text-ink3 hover:text-ink2 hover:bg-surface2"
                }`}
                onClick={() => setTab(key)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="overflow-y-auto max-h-[65vh] py-5 px-6">
            <pre className="font-mono text-sm leading-[1.8] text-ink2 whitespace-pre-wrap wrap-break-word">
              {tabContent}
            </pre>
          </div>
        </div>

        {/* Install panel */}
        <div className="flex flex-col gap-3.5">
          <InstallPanel
            result={result}
            config={config}
            getIDE={getIDE}
            npxCmd={npxCmd}
            copied={copied}
            onCopy={onCopy}
            onStartOver={onStartOver}
          />
        </div>
      </div>
    </div>
  );
}

function InstallPanel({ result, config, getIDE, npxCmd, copied, onCopy, onStartOver }) {
  const t = useTranslations("common");
  return (
    <>
      <div className="bg-surface border border-border rounded-xl overflow-hidden">
        <div className="flex items-center gap-2.5 py-3.5 px-4 border-b border-border">
          <div className="w-8 h-8 rounded-lg bg-green/20 text-green flex items-center justify-center">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-bold">{t("installViaNpx")}</div>
            <div className="text-sm text-ink3 font-normal">{t("installNpxDesc")}</div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between gap-3 py-3 px-3.5 rounded-lg bg-bg2 border border-border font-mono text-sm text-green break-all">
            <span>{npxCmd}</span>
            <button
              className={`py-1 px-2.5 rounded border text-[10px] font-mono shrink-0 transition-colors cursor-pointer ${
                copied.npx
                  ? "border-green text-green"
                  : "border-border2 text-ink3 hover:border-green hover:text-green"
              }`}
              onClick={() => onCopy(npxCmd, "npx")}
            >
              {copied.npx ? "✓" : "copy"}
            </button>
          </div>
          <p className="mt-3 text-sm text-ink3 leading-[1.6]">
            Run in your project root. Creates{" "}
            <code className="font-mono text-[11px] bg-surface2 px-1.5 py-0.5 rounded text-accent">
              {result.filename}
            </code>{" "}
            automatically.
          </p>
        </div>
      </div>

      <div className="bg-surface border border-border rounded-xl overflow-hidden">
        <div className="flex items-center gap-2.5 py-3.5 px-4 border-b border-border">
          <div className="w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-bold">{t("manualSetup")}</div>
            <div className="text-sm text-ink3 font-normal">{t("manualDesc")}</div>
          </div>
        </div>
        <div className="p-4">
          <ul className="flex flex-col gap-2.5 text-[13px] text-ink2 leading-relaxed">
            {[
              <>
                Click <strong>Copy</strong> or <strong>Download</strong> above
              </>,
              <>
                Place file at{" "}
                <code className="font-mono text-[11px] bg-surface2 px-1.5 py-0.5 rounded text-accent">
                  ./{result.filename}
                </code>{" "}
                in your project root
              </>,
              <>
                {getIDE() ? (
                  <>Open {getIDE()} — the file is auto-detected</>
                ) : (
                  <>Open your AI editor — the file is auto-detected</>
                )}
              </>,
              <>
                In AI Composer/Chat, type{" "}
                <code className="font-mono text-[11px] bg-surface2 px-1.5 py-0.5 rounded text-accent">
                  @{result.filename}
                </code>{" "}
                to explicitly include rules
              </>,
              <>Commit to git — it&apos;s a team contract 🤝</>,
            ].map((content, i) => (
              <li key={i} className="flex items-start gap-2.5 list-none">
                <span className="w-5 h-5 rounded-full bg-surface2 border border-border2 flex items-center justify-center font-mono text-[9px] font-semibold text-ink3 shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{content}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-surface border border-border rounded-xl overflow-hidden">
        <div className="flex items-center gap-2.5 py-3.5 px-4 border-b border-border">
          <div className="w-8 h-8 rounded-lg bg-accent2/20 text-accent2 flex items-center justify-center">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-bold">{t("teamSetup")}</div>
            <div className="text-sm text-ink3 font-normal">Share rules across your team</div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between gap-3 py-3 px-3.5 rounded-lg bg-bg2 border border-border font-mono text-sm text-green break-all mb-2.5">
            <span>git add {result.filename} && git commit -m &quot;chore: add AI rules&quot;</span>
            <button
              className={`py-1 px-2.5 rounded border text-[10px] font-mono shrink-0 transition-colors cursor-pointer ${
                copied.git
                  ? "border-green text-green"
                  : "border-border2 text-ink3 hover:border-green hover:text-green"
              }`}
              onClick={() =>
                onCopy(`git add ${result.filename} && git commit -m "chore: add AI rules"`, "git")
              }
            >
              {copied.git ? "✓" : "copy"}
            </button>
          </div>
          <p className="text-sm text-ink3 leading-[1.6]">
            Every teammate with {getIDE() ? `Cursor / ${getIDE()}` : "your AI editor"} will
            automatically use the same AI coding rules.
          </p>
        </div>
      </div>

      <button
        type="button"
        className="w-full flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg border-[1.5px] border-border2 bg-transparent text-ink2 font-sans text-sm font-semibold hover:border-ink3 hover:text-ink transition-colors cursor-pointer"
        onClick={onStartOver}
      >
        <RotateCcw className="w-4 h-4" /> {t("startOver")}
      </button>
    </>
  );
}
