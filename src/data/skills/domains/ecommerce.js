/** E-Commerce agent skill — Universal Skill Standard (7 parts). */
export const SKILL_ECOMMERCE = {
  metadata: {
    name: "E-Commerce",
    version: "1.0",
    author: "ai-context",
    tags: ["ecommerce", "payments", "domain"],
  },
  trigger: "When building e-commerce features: cart, checkout, orders, payments, inventory.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Make payment flows idempotent — check order status before retrying a charge.",
    "Deduct inventory only after payment is confirmed — not at cart add or checkout initiation.",
    "Store all prices as integers (cents or smallest currency unit) — never floating-point.",
    "Use a state machine for order status with explicit valid transitions only.",
    "Merge guest cart into user cart on login without data loss.",
    "Validate stock availability at checkout, not just at cart add.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not store prices as floats — use integers (cents) to avoid rounding errors.",
    "Do not deduct inventory before payment is confirmed.",
    "Do not allow arbitrary order status transitions — enforce a state machine.",
    "Do not process payments without idempotency keys.",
  ],
  examples: [
    {
      input: "User wants to implement checkout flow.",
      output:
        "1. Lock inventory temporarily. 2. Create order in PENDING state. 3. Charge payment with idempotency key. 4. On success: confirm order → deduct inventory → send confirmation. 5. On failure: release lock → mark order FAILED → return error.",
    },
  ],
};
