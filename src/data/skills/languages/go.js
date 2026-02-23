/** Go agent skill — Universal Skill Standard (7 parts). */
export const SKILL_GO = {
  metadata: { name: "Go", version: "1.0", author: "ai-context", tags: ["go", "language"] },
  trigger: "When writing, reviewing, or refactoring Go code.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Handle all errors explicitly — never discard with _.",
    "Wrap errors with context using %w: fmt.Errorf('operation description: %w', err).",
    "Pass context.Context as the first parameter of all IO-bound functions.",
    "Define interfaces in the consumer package, not the provider package.",
    "Keep interfaces small — 1 to 3 methods maximum.",
    "Follow Go naming conventions: URL not Url, HTTP not Http, ID not Id.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not discard errors with _ unless the function signature guarantees no error.",
    "Do not use context.Background() inside business logic — propagate from caller.",
    "Do not define large interfaces — keep them focused on 1-3 methods.",
    "Do not log an error AND return it — choose one to avoid double logging.",
    "Do not use panic in library code — return errors.",
  ],
  examples: [
    {
      input: "User wants a repository function to get a user by ID.",
      output:
        'func (r *UserRepository) GetByID(ctx context.Context, id int64) (*User, error) {\n    var user User\n    err := r.db.QueryRowContext(ctx, queryGetUser, id).Scan(&user.ID, &user.Name, &user.Email)\n    if errors.Is(err, sql.ErrNoRows) {\n        return nil, fmt.Errorf("get user %d: %w", id, ErrNotFound)\n    }\n    if err != nil {\n        return nil, fmt.Errorf("get user %d from db: %w", id, err)\n    }\n    return &user, nil\n}',
    },
  ],
};
