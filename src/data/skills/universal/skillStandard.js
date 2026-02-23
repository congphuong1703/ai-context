/**
 * Universal Skill Standard — mọi skill phải có đủ 7 thành phần.
 *
 * Cấu trúc bắt buộc:
 * 1. metadata     → name, version, author, tags
 * 2. trigger      → khi nào AI dùng skill này
 * 3. prerequisites → cần biết gì / đọc gì trước
 * 4. process      → các bước theo thứ tự cố định
 * 5. output       → format output trông như thế nào
 * 6. constraints  → không được làm gì trong skill này
 * 7. examples     → input → output mẫu cụ thể
 */

export const SKILL_PARTS = [
  "metadata",
  "trigger",
  "prerequisites",
  "process",
  "output",
  "constraints",
  "examples",
];

/**
 * @typedef {Object} SkillMetadata
 * @property {string} name
 * @property {string} [version]
 * @property {string} [author]
 * @property {string[]} [tags]
 */

/**
 * @typedef {Object} Skill
 * @property {SkillMetadata} metadata
 * @property {string} trigger
 * @property {string} prerequisites
 * @property {string[]} process
 * @property {string} output
 * @property {string[]} constraints
 * @property {{ input: string; output: string }[]} examples
 */

/**
 * Render one skill (7 parts) to markdown for the generated rules file.
 * @param {Skill} skill
 * @returns {string}
 */
const DEFAULT_PREREQUISITES = "Read this rules file and the relevant rules section above.";
const DEFAULT_OUTPUT = "Code and changes that follow the process; brief summary when requested.";

export function formatSkillToMarkdown(skill) {
  if (!skill || !skill.metadata || !skill.metadata.name) return "";

  const { metadata, trigger, prerequisites, process, output, constraints, examples } = skill;
  const lines = [];
  const t = (v) => (v != null && String(v).trim() !== "" ? String(v) : null);
  const triggerText = t(trigger) ?? "When using or suggesting code for this context.";
  const prereqText = t(prerequisites) ?? DEFAULT_PREREQUISITES;
  const outputText = t(output) ?? DEFAULT_OUTPUT;

  lines.push("### " + (metadata.name || "Skill"));
  if (metadata.version) lines.push("- **Version:** " + metadata.version);
  if (metadata.author) lines.push("- **Author:** " + metadata.author);
  if (metadata.tags && metadata.tags.length) lines.push("- **Tags:** " + metadata.tags.join(", "));
  lines.push("");

  lines.push("#### 1. Trigger");
  lines.push(triggerText);
  lines.push("");

  lines.push("#### 2. Prerequisites");
  lines.push(prereqText);
  lines.push("");

  lines.push("#### 3. Process");
  if (Array.isArray(process) && process.length) {
    process.forEach((step, i) => lines.push(i + 1 + ". " + (step != null ? step : "")));
  } else if (process != null) {
    lines.push(String(process));
  } else {
    lines.push("- See rules section above.");
  }
  lines.push("");

  lines.push("#### 4. Output");
  lines.push(outputText);
  lines.push("");

  lines.push("#### 5. Constraints");
  if (Array.isArray(constraints) && constraints.length) {
    constraints.forEach((c) => lines.push("- " + (c != null ? c : "")));
  } else if (constraints != null) {
    lines.push("- " + constraints);
  } else {
    lines.push("- Follow the rules section above.");
  }
  lines.push("");

  lines.push("#### 6. Examples");
  if (Array.isArray(examples) && examples.length) {
    examples.forEach((ex, i) => {
      if (ex && (ex.input != null || ex.output != null)) {
        lines.push("**Example " + (i + 1) + "**");
        lines.push("- Input: " + (ex.input != null ? ex.input : ""));
        lines.push("- Output: " + (ex.output != null ? ex.output : ""));
        lines.push("");
      }
    });
  }
  if (!Array.isArray(examples) || !examples.length) {
    lines.push("- See project and rules above for context.");
  }

  return lines.join("\n").trim();
}

/**
 * Validate skill object has all 7 parts (Universal Skill Standard).
 * @param {unknown} skill
 * @returns {{ valid: boolean; missing: string[] }}
 */
export function validateSkill(skill) {
  const missing = [];
  if (!skill || typeof skill !== "object") {
    return { valid: false, missing: ["skill must be an object"] };
  }
  if (!skill.metadata || typeof skill.metadata !== "object") missing.push("metadata");
  else if (!skill.metadata.name) missing.push("metadata.name");
  if (skill.trigger == null || String(skill.trigger).trim() === "") missing.push("trigger");
  if (skill.prerequisites == null || String(skill.prerequisites).trim() === "")
    missing.push("prerequisites");
  if (skill.process == null) missing.push("process");
  else if (!Array.isArray(skill.process)) missing.push("process (array)");
  if (skill.output == null || String(skill.output).trim() === "") missing.push("output");
  if (skill.constraints == null) missing.push("constraints");
  else if (!Array.isArray(skill.constraints)) missing.push("constraints (array)");
  if (skill.examples == null || !Array.isArray(skill.examples)) missing.push("examples (array)");
  return { valid: missing.length === 0, missing };
}

const DEFAULT_METADATA = {
  version: "1.0",
  author: "ai-context",
};

/**
 * Build a full 7-part skill from minimal input (defaults for missing parts).
 * @param {Object} opts
 * @param {string} opts.name - skill name (metadata.name)
 * @param {string[]} [opts.tags] - metadata.tags
 * @param {string} opts.trigger
 * @param {string} [opts.prerequisites]
 * @param {string[]} opts.process
 * @param {string} [opts.output]
 * @param {string[]} opts.constraints
 * @param {{ input: string; output: string }[]} [opts.examples]
 */
export function makeSkill(opts) {
  const {
    name,
    tags = [],
    trigger,
    prerequisites = "Read this rules file and the relevant rules section above.",
    process,
    output = "Code and changes that follow the process; brief summary when requested.",
    constraints,
    examples = [],
  } = opts;

  return {
    metadata: { name, ...DEFAULT_METADATA, tags },
    trigger,
    prerequisites,
    process: Array.isArray(process) ? process : [process],
    output,
    constraints: Array.isArray(constraints) ? constraints : [constraints],
    examples: Array.isArray(examples) ? examples : [],
  };
}

/**
 * Build a compact 7-part skill from one process bullet (for framework/library/convention).
 */
export function makeCompactSkill(name, id, category, processBullet) {
  return makeSkill({
    name: "Skill: " + name,
    tags: [id, category],
    trigger: "When using or suggesting code for " + name + ".",
    process: [processBullet],
    constraints: ["Follow the " + name + " rules section above."],
  });
}

export const SKILL_STANDARD = {
  parts: SKILL_PARTS,
  formatSkillToMarkdown,
  validateSkill,
  makeSkill,
  makeCompactSkill,
};
