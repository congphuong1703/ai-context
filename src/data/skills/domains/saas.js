/** SaaS / Multi-Tenant agent skill — Universal Skill Standard (7 parts). */
export const SKILL_SAAS = {
  metadata: {
    name: "SaaS / Multi-Tenant",
    version: "1.0",
    author: "ai-context",
    tags: ["saas", "multi-tenant", "domain"],
  },
  trigger:
    "When building multi-tenant SaaS features: tenant isolation, subscriptions, billing, onboarding.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Enforce tenant isolation at the database query level — RLS or explicit tenant_id scope on every query.",
    "Check subscription status on every protected API request — not just at login.",
    "Meter and log all billable actions with tenant attribution.",
    "Enforce plan limits with graceful degradation and clear user-facing messaging.",
    "Instrument the onboarding flow with analytics events for conversion tracking.",
    "Use separate database schemas or row-level security — never rely on application-level filtering alone.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not rely on UI-level tenant filtering — enforce at the query level.",
    "Do not cache subscription status longer than 5 minutes — it can change.",
    "Do not expose one tenant's data to another under any condition.",
    "Do not hard-delete tenant data — use soft delete with a retention policy.",
  ],
  examples: [
    {
      input: "User wants to fetch projects for the current tenant.",
      output:
        "// Every query scoped to tenant_id\nconst projects = await db.project.findMany({\n  where: { tenantId: ctx.tenant.id, deletedAt: null },\n  orderBy: { createdAt: 'desc' },\n  take: ctx.tenant.plan.maxProjects,\n})",
    },
  ],
};
