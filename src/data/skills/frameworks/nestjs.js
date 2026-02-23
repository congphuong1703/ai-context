/** NestJS agent skill — Universal Skill Standard (7 parts). */
export const SKILL_NESTJS = {
  metadata: {
    name: "NestJS",
    version: "1.0",
    author: "ai-context",
    tags: ["nestjs", "typescript", "framework"],
  },
  trigger: "When writing NestJS modules, controllers, services, guards, interceptors, or pipes.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Follow strict layering: Module → Controller → Service → Repository with no bypassing.",
    "Use class-validator and class-transformer on all DTOs with the ValidationPipe globally configured.",
    "Use Guards for authentication and authorization — never check auth inside service methods.",
    "Use Interceptors for cross-cutting concerns: logging, response transformation, caching.",
    "Use a global exception filter to produce a consistent error response envelope.",
    "Configure all environment variables through ConfigModule with a validation schema.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not put business logic in controllers — controllers only route to services.",
    "Do not use @Injectable() on a class that has no dependencies — it is unnecessary.",
    "Do not import services across feature modules directly — use proper module exports.",
    "Do not use @Res() to manually handle responses unless streaming or redirecting.",
  ],
  examples: [
    {
      input: "User wants a controller endpoint to update a user profile.",
      output:
        "@Patch('profile')\n@UseGuards(JwtAuthGuard)\nasync updateProfile(\n  @CurrentUser() user: User,\n  @Body() dto: UpdateProfileDto,\n): Promise<ProfileResponse> {\n  return this.userService.updateProfile(user.id, dto);\n}",
    },
  ],
};
