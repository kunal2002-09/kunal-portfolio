"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import type { Project } from "@/content/projects";

import styles from "./ProjectCard.module.css";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      className={`${styles.card} glass`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.18 }}
    >
      <div className={styles.meta}>
        <p className={styles.title}>{project.title}</p>
        <p className={styles.type}>{project.type}</p>
        <p className={styles.description}>{project.description}</p>
      </div>
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className={styles.footer}>
        <div className={styles.tech}>
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className={styles.links}>
          <Link href={`/projects/${project.slug}`} className={styles.link}>
            Case study <ArrowUpRight size={16} />
          </Link>
          {project.links?.repo && (
            <a href={project.links.repo} target="_blank" rel="noreferrer" className={styles.link}>
              Code <ArrowUpRight size={16} />
            </a>
          )}
          {project.links?.live && (
            <a href={project.links.live} target="_blank" rel="noreferrer" className={styles.link}>
              Live <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
