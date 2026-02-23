/** Axum rules */
export const RULE_AXUM = `## Axum Standards
- Extract types (Path, Query, Json) for all handler inputs
- Shared state via Arc<AppState>
- Error types implement IntoResponse
- Tower middleware for auth, logging, rate-limiting
- Organize routes in feature modules`;
