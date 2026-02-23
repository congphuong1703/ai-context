/** Spring Boot agent skill — Universal Skill Standard (7 parts). */
export const SKILL_SPRING = {
  metadata: {
    name: "Spring Boot",
    version: "1.0",
    author: "ai-context",
    tags: ["spring", "java", "kotlin", "framework"],
  },
  trigger: "When writing Spring Boot controllers, services, repositories, or configuration.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Follow strict layering: Controller → Service → Repository → Entity with no layer skipping.",
    "Create separate Request DTO and Response DTO for every endpoint — never expose the JPA Entity.",
    "Add @Valid to every @RequestBody parameter and Bean Validation annotations to all DTO fields.",
    "Place @Transactional on the service layer only — never on controllers or repositories.",
    "Add @Transactional(readOnly = true) on all read-only service methods.",
    "Use JOIN FETCH or @EntityGraph to prevent N+1 queries — never FetchType.EAGER.",
    "Handle all exceptions in a global @RestControllerAdvice with a consistent error response shape.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not place @Transactional on a controller or repository method.",
    "Do not return a JPA Entity from any public service method.",
    "Do not call @Transactional methods from within the same class — proxy is bypassed.",
    "Do not use FetchType.EAGER — use LAZY and load explicitly when needed.",
    "Do not hardcode any configuration value — use application.yml + environment variables.",
  ],
  examples: [
    {
      input: "User wants a service method to create a new order.",
      output:
        '@Service\n@Transactional(readOnly = true)\npublic class OrderService {\n  @Transactional\n  public OrderResponse createOrder(Long userId, CreateOrderRequest req) {\n    User user = userRepo.findById(userId).orElseThrow(() -> new NotFoundException("USER"));\n    Order order = orderMapper.toEntity(req, user);\n    return orderMapper.toResponse(orderRepo.save(order));\n  }\n}',
    },
  ],
};
