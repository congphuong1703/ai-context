/** FastAPI rules */
export const RULE_FASTAPI = `## FastAPI Standards
- Pydantic v2 for all request/response schemas
- Depends() for dependency injection (DB, auth, config)
- Router files per feature domain; mount in main.py
- HTTPException with detail dicts for all errors
- lifespan context manager for startup/shutdown
- All endpoints documented with docstrings (auto-renders OpenAPI)`;
