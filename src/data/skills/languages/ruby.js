/** Ruby agent skill — Universal Skill Standard (7 parts). */
export const SKILL_RUBY = {
  metadata: { name: "Ruby", version: "1.0", author: "ai-context", tags: ["ruby", "language"] },
  trigger: "When writing, reviewing, or refactoring Ruby code.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Use frozen_string_literal: true magic comment at the top of every file.",
    "Prefer method objects or service objects for business logic over fat models.",
    "Use guard clauses (return early) instead of deep nesting.",
    "Use keyword arguments for methods with 3 or more parameters.",
    "Use symbol over string for hash keys when the key is a fixed identifier.",
    "Handle exceptions with specific rescue clauses — never bare rescue.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not use bare rescue — always rescue specific exception classes.",
    "Do not mutate method arguments unless explicitly documented.",
    "Do not define methods on Object or BasicObject.",
    "Do not use unless with else — invert the condition and use if/else.",
  ],
  examples: [
    {
      input: "User wants a service to place an order.",
      output:
        "class PlaceOrderService\n  def initialize(user:, product:, quantity:)\n    @user = user\n    @product = product\n    @quantity = quantity\n  end\n\n  def call\n    return Failure('INSUFFICIENT_STOCK') unless sufficient_stock?\n    order = Order.create!(user: @user, product: @product, quantity: @quantity)\n    Success(order)\n  rescue ActiveRecord::RecordInvalid => e\n    Failure(e.message)\n  end\nend",
    },
  ],
};
