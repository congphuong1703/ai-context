/**
 * ERROR HANDLING — universal foundation.
 * Applies to all languages and stacks.
 */

export const RULES_ERROR_HANDLING = `## 🚨 ERROR HANDLING
- Never swallow errors silently.
- Typed errors with codes — avoid generic "something failed" messages.
- Log with full context: operation, input, expected vs actual.
- Handle errors at the appropriate boundary; propagate otherwise.
- User-facing errors: clear message, zero internal detail exposed.`;
