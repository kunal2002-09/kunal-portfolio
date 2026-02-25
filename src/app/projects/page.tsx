"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import ProjectCard from "@/components/Project/ProjectCard";
import Section from "@/components/Section/Section";
import { projects } from "@/content/projects";
import { buildMetadata } from "@/lib/seo";

import styles from "./projects.module.css";

const metadata = buildMetadata({
  title: "Projects",
  description: "Selected engineering projects with case studies.",
});

const filterTags = ["Fintech", "SaaS", "Full-stack", "Backend", "Frontend"];

export default function ProjectsPage() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((project) => project.tags.includes(active));
  }, [active]);

  return (
    <Section
      eyebrow="Projects"
      title="Things I've built"
      description="Filter by focus area to explore the work. Each project includes a short case study."
    >
      <div className={styles.filters} role="toolbar" aria-label="Filter projects">
        <button
          className={`${styles.chip} ${active === "All" ? styles.active : ""}`}
          onClick={() => setActive("All")}
          aria-pressed={active === "All"}
        >
          All
        </button>
        {filterTags.map((tag) => (
          <button
            key={tag}
            className={`${styles.chip} ${active === tag ? styles.active : ""}`}
            onClick={() => setActive(tag)}
            aria-pressed={active === tag}
          >
            {tag}
          </button>
        ))}
      </div>
      <motion.div
        className={styles.grid}
        layout
        transition={{ layout: { duration: 0.2, ease: "easeInOut" } }}
      >
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </motion.div>
    </Section>
  );
}
