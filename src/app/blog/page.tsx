import PostCard from "@/components/Blog/PostCard";
import Section from "@/components/Section/Section";
import { getBlogPosts } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";

import styles from "./blog.module.css";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Notes on engineering, DX, and product."
});

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <Section
      eyebrow="Writing"
      title="Blog"
      description="MDX-powered posts. Add new files to `src/content/blog` to publish."
    >
      <div className={styles.grid}>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </Section>
  );
}
