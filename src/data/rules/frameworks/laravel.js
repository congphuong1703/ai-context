/** Laravel rules */
export const RULE_LARAVEL = `## Laravel Standards
- Thin controllers, fat services/actions — no business logic in controllers
- Form Request classes for ALL validation
- API Resource/Collection for all responses — never return models
- Policy classes for all authorization
- Jobs for async/heavy operations
- Sanctum for SPA auth; no custom token logic`;
