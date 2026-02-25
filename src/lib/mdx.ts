import fs from "fs";
import path from "path";
import { ComponentType } from "react";

import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_PATH = path.join(process.cwd(), "src", "content", "blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags?: string[];
  readingTime: {
    minutes: number;
    text: string;
  };
};

export const getBlogSlugs = (): string[] =>
  fs
    .readdirSync(BLOG_PATH)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(".mdx", ""));

export const getBlogPosts = (): BlogPostMeta[] => {
  const slugs = getBlogSlugs();

  const posts = slugs.map((slug) => {
    const source = fs.readFileSync(path.join(BLOG_PATH, `${slug}.mdx`), "utf-8");
    const { data, content } = matter(source);
    const reading = readingTime(content);

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      summary: data.summary as string,
      tags: (data.tags as string[]) ?? [],
      readingTime: { minutes: Math.ceil(reading.minutes), text: reading.text }
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getPostBySlug = async (
  slug: string
): Promise<{ meta: BlogPostMeta | null; Component: ComponentType | null }> => {
  try {
    const source = fs.readFileSync(path.join(BLOG_PATH, `${slug}.mdx`), "utf-8");
    const { data, content } = matter(source);
    const reading = readingTime(content);

    const { default: Component } = await import(`@/content/blog/${slug}.mdx`);

    const meta: BlogPostMeta = {
      slug,
      title: data.title as string,
      date: data.date as string,
      summary: data.summary as string,
      tags: (data.tags as string[]) ?? [],
      readingTime: { minutes: Math.ceil(reading.minutes), text: reading.text }
    };

    return { meta, Component };
  } catch (error) {
    return { meta: null, Component: null };
  }
};
