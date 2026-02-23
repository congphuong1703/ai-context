/** Next.js (App Router) rules */
export const RULE_NEXTJS = `## Next.js (App Router)
- Server Components by default — 'use client' ONLY for DOM/hooks/browser APIs
- Route structure: app/(group)/page.tsx — colocate related components
- loading.tsx, error.tsx, not-found.tsx for every route segment
- generateMetadata() on every page for SEO
- Server Actions for mutations — never POST to own API from server
- next/image for all images (no raw <img>); next/link for all navigation
- Route Handlers: app/api/[route]/route.ts with Zod validation`;
