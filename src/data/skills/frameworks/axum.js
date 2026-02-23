/** Axum agent skill — Universal Skill Standard (7 parts). */
export const SKILL_AXUM = {
  metadata: {
    name: "Axum",
    version: "1.0",
    author: "ai-context",
    tags: ["axum", "rust", "framework"],
  },
  trigger: "When writing Axum route handlers, extractors, middleware, or application state.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Use typed extractors (Path, Query, Json, State) for all handler inputs.",
    "Share application state via Arc<AppState> injected through Extension or State.",
    "Implement IntoResponse on custom error types for automatic HTTP conversion.",
    "Use Tower middleware layers for cross-cutting concerns: auth, logging, rate limiting.",
    "Organize routes in feature-based modules with sub-routers merged into the main router.",
    "Use FromRequestParts for extractors that do not consume the body.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not use unwrap() in handler functions — use the ? operator with IntoResponse errors.",
    "Do not share mutable state without Arc<Mutex<>> or Arc<RwLock<>>.",
    "Do not put all routes in main.rs — organize into feature modules.",
    "Do not block the async runtime with synchronous IO — use spawn_blocking.",
  ],
  examples: [
    {
      input: "User wants a handler to fetch a user by ID.",
      output:
        'async fn get_user(\n    State(state): State<Arc<AppState>>,\n    Path(user_id): Path<Uuid>,\n    auth: AuthUser,\n) -> Result<Json<UserResponse>, AppError> {\n    let user = state.user_repo.find_by_id(user_id).await?\n        .ok_or(AppError::NotFound("user"))?;\n    Ok(Json(UserResponse::from(user)))\n}',
    },
  ],
};
