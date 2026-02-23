/** Zustand rules */
export const RULE_ZUSTAND = `## Zustand
- One store per domain or slice; avoid a single giant store
- Prefer \`subscribeWithSelector\` when subscribing to slices
- No side effects in \`set\`; use \`getState\` only when necessary`;
