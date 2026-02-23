/** Rust rules */
export const RULE_RUST = `## Rust Standards
- Result<T, E> for all fallible operations — propagate with ?
- Avoid clone() unless semantically correct
- thiserror for library errors; anyhow for application errors
- tracing for structured logging
- Unit tests in same file as implementation via #[test]`;
