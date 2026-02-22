/**
 * TESTING — universal foundation.
 * Applies to all languages and stacks.
 */

export const RULES_TESTING = `## 🧪 TESTING
- Unit tests for all business logic — no exceptions.
- Mock all external services in unit tests (DB, HTTP, filesystem).
- Test naming: "should [expected behavior] when [condition]".
- Cover: happy path, null/empty/boundary values, auth failures, concurrency.
- Integration tests for all API endpoints.`;
