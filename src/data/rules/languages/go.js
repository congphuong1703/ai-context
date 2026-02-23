/** Go rules */
export const RULE_GO = `## Go Standards
- Handle ALL errors explicitly — never discard with _
- context.Context as first param on all IO-bound functions
- Interfaces define behavior — not structs
- Table-driven tests with t.Run
- errors.Is / errors.As for error comparison`;
