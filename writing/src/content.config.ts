import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

// Filename is the URL slug; files starting with _ are ignored.
const posts = defineCollection({
  loader: glob({ base: "./src/posts", pattern: "**/[^_]*.md" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
