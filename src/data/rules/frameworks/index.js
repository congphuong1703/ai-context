/**
 * Rules by framework. One file per framework; aggregate here.
 */
import { RULE_NEXTJS } from "./nextjs";
import { RULE_REACT } from "./react";
import { RULE_VUENUXT } from "./vuenuxt";
import { RULE_NESTJS } from "./nestjs";
import { RULE_SPRING } from "./spring";
import { RULE_LARAVEL } from "./laravel";
import { RULE_FASTAPI } from "./fastapi";
import { RULE_LANGCHAIN } from "./langchain";
import { RULE_GIN } from "./gin";
import { RULE_AXUM } from "./axum";

export const RULES_BY_FRAMEWORK = {
  nextjs: RULE_NEXTJS,
  react: RULE_REACT,
  vuenuxt: RULE_VUENUXT,
  nestjs: RULE_NESTJS,
  spring: RULE_SPRING,
  laravel: RULE_LARAVEL,
  fastapi: RULE_FASTAPI,
  langchain: RULE_LANGCHAIN,
  gin: RULE_GIN,
  axum: RULE_AXUM,
};
