/**
 * ARCHITECTURE — universal foundation.
 * Applies to all languages and stacks.
 */

export const RULES_ARCHITECTURE = `## 🧱 ARCHITECTURE
- Strict separation of concerns: presentation / business logic / data access.
- Dependency injection over direct instantiation; testability first.
- Single Responsibility: one purpose per file, class, and function.
- Fail fast — validate all inputs at every system boundary.
- Immutability by default; mutate state only when semantically required.
- Define explicit public API surfaces for all modules; hide implementation details.
- Don't repeat yourself (DRY principle)
- Keep it simple, stupid (KISS principle)
- SOLID principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion `;
