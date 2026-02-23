/** Gin rules */
export const RULE_GIN = `## Gin Standards
- Route groups by resource using router.Group()
- Middleware for auth, logging, recovery — never inline
- ShouldBindJSON + struct tags for request binding
- Consistent JSON error: { "error": "...", "code": "..." }
- Thin handlers — delegate all logic to service layer`;
