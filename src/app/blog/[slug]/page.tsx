import { notFound } from "next/navigation";

import { getBlogSlugs, getPostBySlug } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";

import styles from "./post.module.css";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { meta } = await getPostBySlug(params.slug);

  if (!meta) {
    return buildMetadata({ title: "Blog" });
  }

  return buildMetadata({
    title: meta.title,
    description: meta.summary,
    path: `/blog/${meta.slug}`
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { meta, Component } = await getPostBySlug(params.slug);

  if (!meta || !Component) {
    notFound();
  }

  return (
    <article className={`${styles.article} container`}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{meta.date}</p>
        <h1>{meta.title}</h1>
        <p className={styles.summary}>{meta.summary}</p>
        <p className={styles.reading}>{meta.readingTime.text}</p>
        <div className={styles.tags}>
          {meta.tags?.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </header>
      <div className="prose">
        <Component />
      </div>
    </article>
  );
}
