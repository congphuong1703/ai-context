/** Java rules */
export const RULE_JAVA = `## Java Standards
- Java 17+: records, sealed classes, pattern matching instanceof
- Constructor injection ONLY — no @Autowired on fields
- Optional<T> for return types only — never parameters or fields
- Stream API for collection transforms
- Never catch Exception/Throwable without justification + re-throw
- SOLID principles strictly applied`;
