/** FastAPI agent skill — Universal Skill Standard (7 parts). */
export const SKILL_FASTAPI = {
  metadata: {
    name: "FastAPI",
    version: "1.0",
    author: "ai-context",
    tags: ["fastapi", "python", "framework"],
  },
  trigger: "When writing FastAPI routes, schemas, dependencies, or application configuration.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Define Pydantic v2 request and response schemas before writing any route logic.",
    "Use Depends() for all dependency injection: database sessions, authentication, configuration.",
    "Organize routes into one router file per feature domain and mount all routers in main.py.",
    "Use the lifespan context manager for startup and shutdown events — not @app.on_event.",
    "Return HTTPException with a structured detail dict — not a plain string message.",
    "Document every endpoint with a docstring — FastAPI renders it automatically in OpenAPI.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not put business logic inside route functions — delegate to a service layer.",
    "Do not return raw dicts from endpoints — use Pydantic response models.",
    "Do not use @app.on_event — use the lifespan context manager.",
    "Do not catch all exceptions with a bare except — handle specific exception types.",
  ],
  examples: [
    {
      input: "User wants a route to create a new user.",
      output:
        '@router.post("/users", response_model=UserResponse, status_code=201)\nasync def create_user(\n    body: CreateUserRequest,\n    db: AsyncSession = Depends(get_db),\n    _: None = Depends(require_admin),\n) -> UserResponse:\n    """Create a new user account. Requires admin role."""\n    return await user_service.create(db, body)',
    },
  ],
};
