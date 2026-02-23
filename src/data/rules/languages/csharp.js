/** C# rules */
export const RULE_CSHARP = `## C# Standards
- Nullable reference types enabled; avoid null when possible
- async/await for all I/O; ConfigureAwait(false) in library code
- Use records for DTOs; init-only properties where appropriate
- Minimal APIs or controller-based — consistent per project
- Use dependency injection (constructor injection only)`;
