import { z } from "zod";

/** Example: validate env or API response */
export const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url().optional().or(z.literal("")),
});

/** Example: validate form/API body */
export const exampleSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
});
