"use client";

import { motion } from "framer-motion";

import styles from "./CoreExpertise.module.css";

const groups = [
  {
    title: "Frontend Engineering",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Redux", "React Query", "Framer Motion"]
  },
  {
    title: "Backend Systems",
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "Webhooks", "JWT", "RBAC", "CRON Jobs"]
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS", "Docker", "CI/CD", "ECS", "Lambda", "S3", "API Gateway", "GitHub Actions"]
  },
  {
    title: "Data Layer",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase Firestore"]
  },
  {
    title: "Engineering Foundations",
    skills: ["System Design", "Scalable Systems", "Performance Optimization", "Data Structures & Algorithms"]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.35, ease: "easeOut" }
  })
};

const pillVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.04 * i, duration: 0.25, ease: "easeOut" }
  })
};

export default function CoreExpertise() {
  return (
    <section className={styles.wrapper} id="core-expertise">
      <div className={styles.glow} aria-hidden />
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Core Expertise</p>
          <div>
            <h2 className={styles.title}>Technologies I use to build scalable fintech and SaaS systems</h2>
            <p className={styles.subtitle}>
              A focused toolkit I rely on to ship resilient, observable, and performant products.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {groups.map((group, idx) => (
            <motion.article
              className={styles.card}
              key={group.title}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className={styles.cardHeader}>{group.title}</div>
              <div className={styles.pills}>
                {group.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    className={styles.pill}
                    custom={skillIdx}
                    variants={pillVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
