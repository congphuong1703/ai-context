"use client";

import { OptionCard, OptionCardIcon, OptionCardCheck } from "./OptionCard";
import { DeviconImg } from "./DeviconImg";
import { DEFAULTS, CONVENTIONS } from "@/data";
import { useTranslations } from "next-intl";
import { Code2 } from "lucide-react";
import { CONVENTION_ICONS, CONVENTION_SECTION_ICONS, IDE_ICONS } from "@/lib/optionIcons";
import {
  getLanguageIconUrl,
  getIdeIconUrl,
  getFrameworkIconUrl,
  getLibraryIconUrl,
} from "@/lib/devicon";

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
                    className="w-10! h-10! text-sm!"
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

function toggleInArray(arr, id) {
  if (!Array.isArray(arr)) return [id];
  return arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id];
}

export function StepFramework({ config, set, data, stepIndex, totalSteps }) {
  const t = useTranslations("common");
  const fwList =
    (data?.frameworks && config.language ? (data.frameworks[config.language] ?? []) : []) || [];
  const frameworks = Array.isArray(config.frameworks)
    ? config.frameworks
    : config.framework
      ? [config.framework]
      : [];
  const selectedLibraries = Array.isArray(config.libraries) ? config.libraries : [];
  const availableLibraries = (data?.libraries ?? []).filter(
    (library) =>
      !library.languages ||
      library.languages.length === 0 ||
      (config.language && library.languages.includes(config.language))
  );

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
      <div className="px-6 sm:px-8 pb-8 space-y-8">
        <section>
          <h3 className="text-sm font-semibold text-ink2 mb-3">
            {t("stepFrameworksMulti") ?? "Frameworks (chọn nhiều)"}
          </h3>
          {fwList.length === 0 ? (
            <p className="text-sm text-ink3 py-4">
              {config.language ? t("stepFrameworkDesc") : t("stepFrameworkSelectLanguageFirst")}
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {fwList.map((fw) => {
                const selected = frameworks.includes(fw.id);
                return (
                  <OptionCard
                    key={fw.id}
                    selected={selected}
                    onClick={() => set("frameworks", toggleInArray(frameworks, fw.id))}
                    className="p-4!"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {getFrameworkIconUrl(fw.id) ? (
                        <DeviconImg
                          type="framework"
                          id={fw.id}
                          className="w-10 h-10 shrink-0"
                          alt=""
                        />
                      ) : null}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <div className="text-sm font-bold text-ink tracking-tight">
                            {fw.label}
                          </div>
                          <OptionCardCheck selected={selected} />
                        </div>
                        {fw.desc ? (
                          <div className="text-sm text-ink3 mt-1 leading-[1.4] font-normal">
                            {fw.desc}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </OptionCard>
                );
              })}
            </div>
          )}
        </section>
        {availableLibraries.length > 0 && (
          <section>
            <h3 className="text-sm font-semibold text-ink2 mb-3">
              {t("stepLibraries") ?? "Libraries (chọn nhiều)"}
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {availableLibraries.map((library) => {
                const isLibrarySelected = selectedLibraries.includes(library.id);
                return (
                  <OptionCard
                    key={library.id}
                    selected={isLibrarySelected}
                    onClick={() => set("libraries", toggleInArray(selectedLibraries, library.id))}
                    className="p-4!"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {getLibraryIconUrl(library.id) ? (
                        <DeviconImg
                          type="library"
                          id={library.id}
                          className="w-10 h-10 shrink-0"
                          alt=""
                        />
                      ) : null}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <div className="text-sm font-bold text-ink tracking-tight">
                            {library.label}
                          </div>
                          <OptionCardCheck selected={isLibrarySelected} />
                        </div>
                        {library.desc ? (
                          <div className="text-sm text-ink3 mt-1 leading-[1.4] font-normal">
                            {library.desc}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </OptionCard>
                );
              })}
            </div>
          </section>
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
                  <div className="text-sm text-ink3 mt-1 leading-[1.4] font-normal">{c.desc}</div>
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
              <div className="text-sm text-ink3 mt-1">{t("rulesMustESLint")}</div>
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
              <div className="text-sm text-ink3 mt-1">{t("eslintOptionalDesc")}</div>
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
              <div className="text-sm text-ink3 mt-1">{t("rulesMustPrettier")}</div>
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
              <div className="text-sm text-ink3 mt-1">{t("prettierOptionalDesc")}</div>
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
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
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
                <div className="text-sm text-ink3 mt-1 leading-[1.4] font-normal">{ide.desc}</div>
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
