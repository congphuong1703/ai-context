/**
 * Rules by library. One file per library; aggregate here.
 */
import { RULE_TAILWIND } from "./tailwind";
import { RULE_SHADCN } from "./shadcn";
import { RULE_ZOD } from "./zod";
import { RULE_REACT_QUERY } from "./react-query";
import { RULE_ZUSTAND } from "./zustand";
import { RULE_PYDANTIC } from "./pydantic";
import { RULE_PYTEST } from "./pytest";
import { RULE_BLACK } from "./black";
import { RULE_RUFF } from "./ruff";

export const RULES_BY_LIBRARY = {
  tailwind: RULE_TAILWIND,
  shadcn: RULE_SHADCN,
  zod: RULE_ZOD,
  "react-query": RULE_REACT_QUERY,
  zustand: RULE_ZUSTAND,
  pydantic: RULE_PYDANTIC,
  pytest: RULE_PYTEST,
  black: RULE_BLACK,
  ruff: RULE_RUFF,
};
