"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import type { Project } from "@/content/projects";

import styles from "./ProjectDetails.module.css";

type Props = {
  project: Project;
};

export default function ProjectDetails({ project }: Props) {
  return (
    <div className="container">
      <Link href="/projects" className={styles.back}>
        <ArrowLeft size={16} /> Back to projects
      </Link>
      <motion.article
        className={`${styles.wrapper} glass`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>{project.type}</p>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.description}>{project.description}</p>
          </div>
          <div className={styles.links}>
            {project.links?.live && (
              <Link href={project.links.live} target="_blank" className="button button-primary">
                Live <ExternalLink size={16} />
              </Link>
            )}
            {project.links?.repo && (
              <Link href={project.links.repo} target="_blank" className="button button-secondary">
                Repository <ExternalLink size={16} />
              </Link>
            )}
          </div>
        </header>

        <section className={styles.section}>
          <h3>Overview</h3>
          <p>{project.overview}</p>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h3>Problem</h3>
          <p>{project.problem}</p>
        </section>

        <section className={styles.section}>
          <h3>Solution</h3>
          <p>{project.solution}</p>
        </section>

        <section className={styles.section}>
          <h3>Impact</h3>
          <p>{project.impact}</p>
        </section>

        <section className={styles.section}>
          <h3>Highlights</h3>
          <ul className={styles.list}>
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h3>What I owned</h3>
          <ul className={styles.list}>
            {project.ownership.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h3>Tech stack</h3>
          <div className={styles.tags}>
            {project.techStack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h3>Links</h3>
          <div className={styles.linksList}>
            {project.links?.live && (
              <Link href={project.links.live} target="_blank" className={styles.link}>
                Live product
              </Link>
            )}
            {project.links?.repo && (
              <Link href={project.links.repo} target="_blank" className={styles.link}>
                Repository
              </Link>
            )}
          </div>
        </section>
      </motion.article>
    </div>
  );
}
