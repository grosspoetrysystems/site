import rss from "@astrojs/rss";
import type { APIContext } from "astro";

import { NAME, TAGLINE } from "../../../../src/lib/share";
import { publishedPosts } from "../../lib/posts";

export const GET = async (context: APIContext) => {
  const posts = await publishedPosts();
  return rss({
    title: `${NAME} · Writing`,
    description: TAGLINE,
    site: new URL("/writing/", context.site),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `${post.id}/`,
    })),
  });
};
