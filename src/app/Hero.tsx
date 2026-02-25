"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Send, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

import styles from "./page.module.css";

const highlights = [
  { label: "VERIFIED SKILLS", value: "40+" },
  { label: "PROFESSIONAL PROJECTS", value: "6" },
  { label: "DSA PROBLEMS SOLVED", value: "125+" },
  { label: "Users served", value: "150k+", detail: "PensionBox production users" },
  { label: "Clients onboarded", value: "100+", detail: "Corporate NPS employers" },
  { label: "Delivery latency", value: "~40% ↓", detail: "FCM notification latency" },
  { label: "Table turnover", value: "~15% ↑", detail: "Rise restaurant ops" },
];

type Highlight = (typeof highlights)[number];

function titleCase(label: string) {
  return label
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

type HeroMiniStatsProps = {
  items: Highlight[];
};

function HeroMiniStats({ items }: HeroMiniStatsProps) {
  return (
    <div className={styles.miniStats}>
      {items.map((item, index) => (
        <div key={item.label} className={styles.miniCard} aria-label={titleCase(item.label)}>
          {index > 0 && <span className={styles.divider} aria-hidden />}
          <div className={styles.miniContent}>
            <p className={styles.miniValue}>{item.value}</p>
            <p className={styles.miniLabel}>{titleCase(item.label)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const router = useRouter();
  const goProjects = () => router.push("/projects");
  const goContact = () => router.push("/contact");
  const goEmail = () => {
    window.location.href = "mailto:kunalmehla323@gmail.com";
  };

  const mini = highlights.slice(0, 3);
  const metrics = highlights.slice(3);

  return (
    <section className={styles.hero}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.heroContent}
        >
          <div className={styles.badge}>
            <Sparkles size={16} />
            Full-Stack Software Engineer · Bengaluru
          </div>
          <h1 className={styles.title}>
            Full-stack engineer building fintech & SaaS products with <span>Next.js</span> and{" "}
            <span>Node.js</span>.
          </h1>
          <p className={styles.subtitle}>
            Full-Stack Software Engineer with 3+ years of hands-on experience building and scaling
            production-grade fintech and SaaS products. Strong in React, Next.js, Node.js, REST
            APIs, and AWS with a bias for measurable impact.
          </p>
          <div className={styles.actions}>
            <button type="button" className="button button-primary" onClick={goProjects}>
              View Projects <ArrowRight size={18} />
            </button>
            <button type="button" className="button button-secondary" onClick={goContact}>
              Contact <Send size={18} />
            </button>
            <button type="button" className="button button-secondary" onClick={goEmail}>
              <Mail size={16} /> Email
            </button>
          </div>
          <HeroMiniStats items={mini} />
        </motion.div>

        <div className={styles.highlights}>
          {metrics.map((item) => (
            <div key={item.label} className="glass">
              <p className={styles.metricValue}>{item.value}</p>
              <p className={styles.metricLabel}>{item.label}</p>
              <p className={styles.metricDetail}>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
