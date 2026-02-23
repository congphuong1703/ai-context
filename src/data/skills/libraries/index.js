/**
 * Agent skills by library — mỗi file một skill (7 phần). Aggregate here.
 */
import { SKILL_TAILWIND } from "./tailwind";
import { SKILL_SHADCN } from "./shadcn";
import { SKILL_ANT_DESIGN } from "./ant-design";
import { SKILL_ANT_DESIGN_VUE } from "./ant-design-vue";
import { SKILL_PINIA } from "./pinia";
import { SKILL_ZOD } from "./zod";
import { SKILL_REACT_QUERY } from "./react-query";
import { SKILL_ZUSTAND } from "./zustand";
import { SKILL_PYDANTIC } from "./pydantic";
import { SKILL_PYTEST } from "./pytest";
import { SKILL_BLACK } from "./black";
import { SKILL_RUFF } from "./ruff";

export const SKILLS_AGENT_BY_LIBRARY = {
  tailwind: SKILL_TAILWIND,
  shadcn: SKILL_SHADCN,
  "ant-design": SKILL_ANT_DESIGN,
  "ant-design-vue": SKILL_ANT_DESIGN_VUE,
  pinia: SKILL_PINIA,
  zod: SKILL_ZOD,
  "react-query": SKILL_REACT_QUERY,
  zustand: SKILL_ZUSTAND,
  pydantic: SKILL_PYDANTIC,
  pytest: SKILL_PYTEST,
  black: SKILL_BLACK,
  ruff: SKILL_RUFF,
};
