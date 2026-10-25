import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

// One Markdown file per post in src/posts/. The filename (minus .md) is the URL slug.
// Files starting with _ are ignored; set `draft: true` to keep a post out of the build.
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
