/** Laravel agent skill — Universal Skill Standard (7 parts). */
export const SKILL_LARAVEL = {
  metadata: {
    name: "Laravel",
    version: "1.0",
    author: "ai-context",
    tags: ["laravel", "php", "framework"],
  },
  trigger: "When writing Laravel controllers, services, actions, Eloquent models, or policies.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Keep controllers thin — max 5 lines of logic per method, delegate to Action or Service classes.",
    "Use a Form Request class for all validation — never $request->validate() inside a controller.",
    "Return an API Resource or Resource Collection for all API responses — never return Eloquent models.",
    "Use Policy classes for all authorization — no inline Gate::allows() in controllers.",
    "Eager load relationships before looping over collections to prevent N+1 queries.",
    "Push all operations that take more than 200ms or call external services to a Queue job.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not put business logic in controllers — use Action or Service classes.",
    "Do not validate inside controller methods — use Form Request classes.",
    "Do not return Eloquent models directly from API endpoints — use API Resources.",
    "Do not use $guarded = [] in any production model.",
    "Do not make synchronous HTTP calls inside a web request — use queued jobs.",
  ],
  examples: [
    {
      input: "User wants a controller method to place an order.",
      output:
        "public function store(PlaceOrderRequest $request, PlaceOrderAction $action): OrderResource\n{\n    $order = $action->execute(auth()->user(), PlaceOrderData::fromRequest($request));\n    return new OrderResource($order);\n}",
    },
  ],
};
