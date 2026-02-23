/**
 * Prompt templates / skills for the generated rules file.
 */
import { TEMPLATE_IMPLEMENT } from "./implement";
import { TEMPLATE_REVIEW } from "./review";
import { TEMPLATE_REFACTOR } from "./refactor";
import { TEMPLATE_DEBUG } from "./debug";
import { TEMPLATE_TEST } from "./test";

export const SKILLS_PROMPT_TEMPLATES = {
  implement: TEMPLATE_IMPLEMENT,
  review: TEMPLATE_REVIEW,
  refactor: TEMPLATE_REFACTOR,
  debug: TEMPLATE_DEBUG,
  test: TEMPLATE_TEST,
};
