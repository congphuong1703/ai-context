"use client";

import { OptionCard, OptionCardIcon, OptionCardCheck } from "./OptionCard";
import { DeviconImg } from "./DeviconImg";
import { DEFAULTS } from "@/data/steps";
import { CONVENTIONS } from "@/data/conventions";
import { useTranslations } from "next-intl";
import { Code2 } from "lucide-react";
import { CONVENTION_ICONS, CONVENTION_SECTION_ICONS, IDE_ICONS } from "@/lib/optionIcons";
import { getLanguageIconUrl, getIdeIconUrl, getFrameworkIconUrl } from "@/lib/devicon";

function stepNum(step, total, t) {
  return t("stepNum", { step: step + 1, total });
}

export function StepLanguage({ config, set, data, stepIndex, totalSteps }) {
  const t = useTranslations("common");
  const list = data?.languages?.length ? data.languages : [];
  if (list.length === 0) return null;
  return (
    <>
      <div className="pt-8 px-6 sm:px-8 pb-0">
        <div className="font-mono text-[11px] text-accent tracking-[0.15em] uppercase mb-2">
          {stepNum(stepIndex, totalSteps, t)}
        </div>
        <div className="text-[22px] sm:text-[26px] font-extrabold tracking-tight mb-1.5">
          {t("stepLanguage")}
        </div>
        <div className="text-sm text-ink2 font-normal mb-8">{t("stepLanguageDesc")}</div>
      </div>
      <div className="px-6 sm:px-8 pb-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {list.map((lang) => (
            <OptionCard
              key={lang.id}
              selected={config.language === lang.id}
              onClick={() => set("language", config.language === lang.id ? null : lang.id)}
              className="p-4!"
            >
              <div className="flex items-center gap-3 mb-2">
                {getLanguageIconUrl(lang.id) ? (
                  <DeviconImg type="language" id={lang.id} className="w-10 h-10 shrink-0" alt="" />
                ) : (
                  <OptionCardIcon
                    selected={config.language === lang.id}
                    color={lang.color}
                    className="w-10! h-10! text-xs!"
                  >
                    {lang.icon}
                  </OptionCardIcon>
                )}
                <Code2 className="w-4 h-4 text-ink3 shrink-0" aria-hidden />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-bold text-ink tracking-tight">{lang.label}</div>
                <OptionCardCheck selected={config.language === lang.id} />
              </div>
            </OptionCard>
          ))}
        </div>
      </div>
    </>
  );
}

export function StepFramework({ config, set, data, stepIndex, totalSteps }) {
  const t = useTranslations("common");
  const list =
    (data?.frameworks && config.language ? (data.frameworks[config.language] ?? []) : []) || [];

  return (
    <>
      <div className="pt-8 px-6 sm:px-8 pb-0">
        <div className="font-mono text-[11px] text-accent tracking-[0.15em] uppercase mb-2">
          {stepNum(stepIndex, totalSteps, t)}
        </div>
        <div className="text-[22px] sm:text-[26px] font-extrabold tracking-tight mb-1.5">
          {t("stepFramework")}
        </div>
        <div className="text-sm text-ink2 font-normal mb-8">{t("stepFrameworkDesc")}</div>
      </div>
      <div className="px-6 sm:px-8 pb-8">
        {list.length === 0 ? (
          <p className="text-sm text-ink3 py-4">
            {config.language ? t("stepFrameworkDesc") : t("stepFrameworkSelectLanguageFirst")}
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {list.map((fw) => (
              <OptionCard
                key={fw.id}
                selected={config.framework === fw.id}
                onClick={() => set("framework", config.framework === fw.id ? null : fw.id)}
                className="p-4!"
              >
                <div className="flex items-center gap-3 mb-2">
                  {getFrameworkIconUrl(fw.id) ? (
                    <DeviconImg type="framework" id={fw.id} className="w-10 h-10 shrink-0" alt="" />
                  ) : null}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="text-sm font-bold text-ink tracking-tight">{fw.label}</div>
                      <OptionCardCheck selected={config.framework === fw.id} />
                    </div>
                    {fw.desc ? (
                      <div className="text-xs text-ink3 mt-1 leading-[1.4] font-normal">
                        {fw.desc}
                      </div>
                    ) : null}
                  </div>
                </div>
              </OptionCard>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export function StepConvention({ config, set, data, stepIndex, totalSteps }) {
  const t = useTranslations("common");
  const list = data?.conventions?.length ? data.conventions : CONVENTIONS;
  const NamingIcon = CONVENTION_SECTION_ICONS.naming;
  const ESLintIcon = CONVENTION_SECTION_ICONS.eslint;
  const PrettierIcon = CONVENTION_SECTION_ICONS.prettier;
  return (
    <>
      <div className="pt-8 px-6 sm:px-8 pb-0">
        <div className="font-mono text-[11px] text-accent tracking-[0.15em] uppercase mb-2">
          {stepNum(stepIndex, totalSteps, t)}
        </div>
        <div className="text-[22px] sm:text-[26px] font-extrabold tracking-tight mb-1.5">
          {t("stepConvention")}
        </div>
        <div className="text-sm text-ink2 font-normal mb-8">{t("stepConventionDesc")}</div>
      </div>
      <div className="px-6 sm:px-8 pb-8 space-y-8">
        <section>
          <h3 className="flex items-center gap-2 text-sm font-semibold text-ink2 mb-4">
            <NamingIcon className="w-4 h-4 text-accent" />
            {t("conventionNaming")}
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {list.map((c) => {
              const Icon = CONVENTION_ICONS[c.id];
              return (
                <OptionCard
                  key={c.id}
                  selected={config.convention === c.id}
                  onClick={() => set("convention", config.convention === c.id ? null : c.id)}
                  className="p-4!"
                >
                  {Icon ? (
                    <div className="w-9 h-9 rounded-lg bg-surface2 text-accent flex items-center justify-center mb-2">
                      <Icon className="w-4 h-4" />
                    </div>
                  ) : null}
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-bold text-ink tracking-tight font-mono">
                      {c.label}
                    </div>
                    <OptionCardCheck selected={config.convention === c.id} />
                  </div>
                  <div className="text-xs text-ink3 mt-1 leading-[1.4] font-normal">{c.desc}</div>
                </OptionCard>
              );
            })}
          </div>
        </section>
        <section>
          <h3 className="flex items-center gap-2 text-sm font-semibold text-ink2 mb-4">
            <ESLintIcon className="w-4 h-4 text-accent" />
            {t("conventionESLint")}
          </h3>
          <div className="grid grid-cols-2 gap-3 max-w-md">
            <OptionCard
              selected={config.eslintRequired === true}
              onClick={() => set("eslintRequired", true)}
              className="p-4!"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-ink">{t("eslintRequired")}</span>
                <OptionCardCheck selected={config.eslintRequired === true} />
              </div>
              <div className="text-xs text-ink3 mt-1">{t("rulesMustESLint")}</div>
            </OptionCard>
            <OptionCard
              selected={config.eslintRequired === false}
              onClick={() => set("eslintRequired", false)}
              className="p-4!"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-ink">{t("eslintOptional")}</span>
                <OptionCardCheck selected={config.eslintRequired === false} />
              </div>
              <div className="text-xs text-ink3 mt-1">{t("eslintOptionalDesc")}</div>
            </OptionCard>
          </div>
        </section>
        <section>
          <h3 className="flex items-center gap-2 text-sm font-semibold text-ink2 mb-4">
            <PrettierIcon className="w-4 h-4 text-accent" />
            {t("conventionPrettier")}
          </h3>
          <div className="grid grid-cols-2 gap-3 max-w-md">
            <OptionCard
              selected={config.prettierRequired === true}
              onClick={() => set("prettierRequired", true)}
              className="p-4!"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-ink">{t("prettierRequired")}</span>
                <OptionCardCheck selected={config.prettierRequired === true} />
              </div>
              <div className="text-xs text-ink3 mt-1">{t("rulesMustPrettier")}</div>
            </OptionCard>
            <OptionCard
              selected={config.prettierRequired === false}
              onClick={() => set("prettierRequired", false)}
              className="p-4!"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-ink">{t("prettierOptional")}</span>
                <OptionCardCheck selected={config.prettierRequired === false} />
              </div>
              <div className="text-xs text-ink3 mt-1">{t("prettierOptionalDesc")}</div>
            </OptionCard>
          </div>
        </section>
      </div>
    </>
  );
}

export function StepIDE({ config, set, data, stepIndex, totalSteps }) {
  const t = useTranslations("common");
  const list = data?.ides?.length ? data.ides : [];
  if (list.length === 0) return null;
  return (
    <>
      <div className="pt-8 px-6 sm:px-8 pb-0">
        <div className="font-mono text-[11px] text-accent tracking-[0.15em] uppercase mb-2">
          {stepNum(stepIndex, totalSteps, t)}
        </div>
        <div className="text-[22px] sm:text-[26px] font-extrabold tracking-tight mb-1.5">
          {t("stepIDE")}
        </div>
        <div className="text-sm text-ink2 font-normal mb-8">{t("stepIDEDesc")}</div>
      </div>
      <div className="px-6 sm:px-8 pb-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {list.map((ide) => {
            const iconUrl = getIdeIconUrl(ide.id);
            const Icon = IDE_ICONS[ide.id];
            return (
              <OptionCard
                key={ide.id}
                selected={config.ide === ide.id}
                onClick={() => set("ide", config.ide === ide.id ? null : ide.id)}
                className="p-4!"
              >
                {iconUrl ? (
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-2 p-1.5">
                    <DeviconImg type="ide" id={ide.id} className="w-6 h-6" alt="" />
                  </div>
                ) : Icon ? (
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-2">
                    <Icon className="w-5 h-5" />
                  </div>
                ) : null}
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm font-bold text-ink tracking-tight">{ide.label}</div>
                  <OptionCardCheck selected={config.ide === ide.id} />
                </div>
                <div className="text-xs text-ink3 mt-1 leading-[1.4] font-normal">{ide.desc}</div>
                <div className="font-mono text-[10px] text-ink3 mt-2 py-1.5 px-2 bg-surface2 rounded inline-block">
                  {ide.file}
                </div>
              </OptionCard>
            );
          })}
        </div>
      </div>
    </>
  );
}
