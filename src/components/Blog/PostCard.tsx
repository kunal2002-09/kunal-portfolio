"use client";

import Link from "next/link";
import { Calendar, Clock3 } from "lucide-react";
import { motion } from "framer-motion";

import type { BlogPostMeta } from "@/lib/mdx";

import styles from "./PostCard.module.css";

type Props = {
  post: BlogPostMeta;
};

export default function PostCard({ post }: Props) {
  return (
    <motion.article
      className={`${styles.card} glass`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.18 }}
    >
      <div className={styles.header}>
        <p className={styles.date}>
          <Calendar size={16} /> {post.date}
        </p>
        <p className={styles.reading}>
          <Clock3 size={16} /> {post.readingTime.text}
        </p>
      </div>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.summary}>{post.summary}</p>
      <div className={styles.tags}>
        {post.tags?.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/blog/${post.slug}`} className={styles.link}>
        Read article →
      </Link>
    </motion.article>
  );
}
