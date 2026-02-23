/** Swift rules */
export const RULE_SWIFT = `## Swift Standards
- Swift 5+; prefer value types (struct, enum) over classes
- async/await for concurrency; actors for shared mutable state
- Optionals: use guard let / if let; avoid force unwrap
- SwiftLint for style; XCTest or Quick for tests`;
