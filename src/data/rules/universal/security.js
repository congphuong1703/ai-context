/**
 * SECURITY — universal foundation.
 * Applies to all languages and stacks.
 */

export const RULES_SECURITY = `## 🔐 SECURITY
- Never log secrets,passwords, API keys, tokens, or PII.
- Validate AND sanitize all external input (body, query, headers, env).
- Parameterized queries only — zero SQL string interpolation.
- Least privilege for every credential, role, and service account.
- Rate-limit all public-facing endpoints.
- CORS: explicit allowlist only — no wildcard in production.
- Authentication before business logic, not after.`;
