/** Gin agent skill — Universal Skill Standard (7 parts). */
export const SKILL_GIN = {
  metadata: { name: "Gin", version: "1.0", author: "ai-context", tags: ["gin", "go", "framework"] },
  trigger: "When writing Gin HTTP handlers, middleware, or router configuration.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Group routes by resource using router.Group() with a consistent URL prefix.",
    "Use middleware for auth, logging, and recovery — never inline these concerns in handlers.",
    "Bind and validate request bodies with ShouldBindJSON and struct tags.",
    "Return a consistent error JSON shape: { error: { code, message } }.",
    "Keep handlers thin — all business logic delegated to a service layer.",
    "Use context.Context from gin.Context for all downstream IO calls.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not write business logic inside handler functions.",
    "Do not use c.AbortWithError — use c.AbortWithStatusJSON for consistent error responses.",
    "Do not access c.Param or c.Query more than once — bind to a struct.",
    "Do not ignore the error from ShouldBindJSON.",
  ],
  examples: [
    {
      input: "User wants a handler to create an order.",
      output:
        'func (h *OrderHandler) Create(c *gin.Context) {\n    var req CreateOrderRequest\n    if err := c.ShouldBindJSON(&req); err != nil {\n        c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": gin.H{"code": "INVALID_INPUT", "message": err.Error()}})\n        return\n    }\n    order, err := h.service.PlaceOrder(c.Request.Context(), req)\n    if err != nil { handleError(c, err); return }\n    c.JSON(http.StatusCreated, order)\n}',
    },
  ],
};
