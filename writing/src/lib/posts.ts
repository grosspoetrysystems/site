import { getCollection } from "astro:content";

/** Published posts, newest first. Drafts never reach the build output. */
export const publishedPosts = async () => {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  return posts.toSorted(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );
};

export const isoDate = (date: Date) => date.toISOString().slice(0, 10);
