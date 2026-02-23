/** Spring Boot rules */
export const RULE_SPRING = `## Spring Boot Standards
- Controller → Service → Repository → Entity — strict layering
- DTOs for ALL request/response — never expose JPA entities directly
- @Valid on all @RequestBody; Bean Validation annotations
- @Transactional on service layer ONLY
- Global @RestControllerAdvice for exception handling
- All config via application.yml + environment variables`;
