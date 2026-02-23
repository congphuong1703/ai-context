/** Kotlin agent skill — Universal Skill Standard (7 parts). */
export const SKILL_KOTLIN = {
  metadata: { name: "Kotlin", version: "1.0", author: "ai-context", tags: ["kotlin", "language"] },
  trigger: "When writing, reviewing, or refactoring Kotlin code.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Use coroutines for all async operations — Flow for streams, suspend for one-shot.",
    "Use data class for DTOs, sealed class/interface for state and result modeling.",
    "Replace !! null assertion with let, Elvis operator, or requireNotNull().",
    "Use Result<T> or custom sealed types for all fallible operations.",
    "Use extension functions in dedicated utility files — not scattered in business logic.",
    "Ensure every coroutine is tied to an appropriate structured concurrency scope.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not use !! null assertion operator in any non-test code.",
    "Do not use GlobalScope for coroutines — use structured concurrency.",
    "Do not share mutable state between coroutines without synchronization.",
    "Do not use Java-style null checks when Kotlin idioms (let, Elvis) are available.",
  ],
  examples: [
    {
      input: "User wants to fetch user profile and orders concurrently.",
      output:
        'suspend fun getUserDashboard(userId: Long): DashboardData = coroutineScope {\n    val profile = async { userRepo.findById(userId) ?: throw NotFoundException("USER") }\n    val orders = async { orderRepo.findByUserId(userId) }\n    DashboardData(profile = profile.await(), orders = orders.await())\n}',
    },
  ],
};
