/** SwiftUI agent skill — Universal Skill Standard (7 parts). */
import { makeCompactSkill } from "../universal/skillStandard";

export const SKILL_SWIFTUI = makeCompactSkill(
  "SwiftUI",
  "swiftui",
  "framework",
  "Use @State and ObservableObject; prefer value types; avoid unnecessary View updates."
);
