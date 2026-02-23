/** Streamlit agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_STREAMLIT = makeCompactSkill(
  "Streamlit",
  "streamlit",
  "framework",
  "Keep state minimal; use session_state and caching appropriately; avoid long-running ops in reruns."
);
