/** Next.js agent skill — Universal Skill Standard (7 parts). */
export const SKILL_NEXTJS = {
  metadata: {
    name: "Next.js App Router",
    version: "1.0",
    author: "ai-context",
    tags: ["nextjs", "react", "framework"],
  },
  trigger:
    "When writing Next.js code using the App Router. Keywords: page, layout, Server Component, Server Action, Route Handler.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Default to Server Components — only add 'use client' when you need state, effects, event listeners, or browser APIs.",
    "Fetch data directly in async Server Components with await — never useEffect for data fetching.",
    "Create loading.tsx, error.tsx, and not-found.tsx for every route segment.",
    "Add generateMetadata() to every page.tsx for SEO.",
    "Use Server Actions for form mutations — never create an API route just to handle a form POST.",
    "Use next/image for all images and next/link for all internal navigation.",
    "Call revalidatePath() or revalidateTag() after every mutation that affects cached data.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not use useEffect to fetch data in App Router — that is a Pages Router pattern.",
    "Do not use getServerSideProps or getStaticProps — those are Pages Router only.",
    "Do not add 'use client' to components that do not need client-side features.",
    "Do not fetch from your own API routes inside Server Components — call the function directly.",
  ],
  examples: [
    {
      input: "User wants a product listing page with data from an API.",
      output:
        "// app/products/page.tsx (Server Component — no 'use client')\nexport default async function ProductsPage() {\n  const products = await fetchProducts() // direct async call\n  return <ProductList items={products} />\n}\nexport async function generateMetadata() { return { title: 'Products' } }",
    },
  ],
};
