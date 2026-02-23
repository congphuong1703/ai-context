/** TypeScript agent skill — Universal Skill Standard (7 parts). */
export const SKILL_TYPESCRIPT = {
  metadata: {
    name: "TypeScript",
    version: "1.0",
    author: "ai-context",
    tags: ["typescript", "language"],
  },
  trigger: "When writing, reviewing, or refactoring TypeScript code.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Enable strict mode in tsconfig — non-negotiable before writing any code.",
    "Replace any with unknown and narrow with type guards; infer types from Zod schemas.",
    "Use interface for object shapes, type for unions/intersections/mapped types.",
    "Validate all external input with Zod at every boundary: API response, form, env var.",
    "Use as const + keyof typeof instead of enum.",
    "All public functions must have explicit return types.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not use any — use unknown and narrow explicitly.",
    "Do not use non-null assertion (!) without a SAFETY comment.",
    "Do not duplicate TypeScript types when Zod schema already defines the shape — use z.infer<>.",
    "Do not use enum — use as const object with keyof typeof pattern.",
  ],
  examples: [
    {
      input: "User wants to validate API response from a payment gateway.",
      output:
        "const PaymentSchema = z.object({ id: z.string().uuid(), status: z.enum(['success','failed']), amount: z.number().int().positive() }); type Payment = z.infer<typeof PaymentSchema>; const result = PaymentSchema.safeParse(response);",
    },
  ],
};
