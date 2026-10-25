import rss from "@astrojs/rss";
import type { APIContext } from "astro";

import { publishedPosts } from "../lib/posts";

export const GET = async (context: APIContext) => {
  const posts = await publishedPosts();
  return rss({
    title: "Gross Poetry Systems · Writing",
    description: "Notes from Gross Poetry Systems.",
    site: new URL(import.meta.env.BASE_URL, context.site),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `${post.id}/`,
    })),
  });
};
