import { getCollection } from "astro:content";

export const publishedPosts = async () => {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  return posts.toSorted(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );
};

export const isoDate = (date: Date) => date.toISOString().slice(0, 10);
