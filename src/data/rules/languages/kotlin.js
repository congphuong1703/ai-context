/** Kotlin rules */
export const RULE_KOTLIN = `## Kotlin Standards
- Coroutines for all async — Flow for streams, suspend for one-shot
- data class for DTOs; sealed class/interface for state modeling
- Avoid !! null assertion — use let, Elvis, requireNotNull()
- Extension functions in dedicated utility files
- Result<T> or custom sealed types for fallible operations`;
