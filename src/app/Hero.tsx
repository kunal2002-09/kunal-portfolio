"use client";

import Link from "next/link";
import { ArrowRight, Mail, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import styles from "./page.module.css";

const highlights = [
  { label: "Users served", value: "150k+", detail: "PensionBox production users" },
  { label: "Clients onboarded", value: "100+", detail: "Corporate NPS employers" },
  { label: "Delivery latency", value: "~40% ↓", detail: "FCM notification latency" },
  { label: "Table turnover", value: "~15% ↑", detail: "Rise restaurant ops" }
];

export default function Hero() {
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
            production-grade fintech and SaaS products. Strong in React, Next.js, Node.js, REST APIs,
            and AWS with a bias for measurable impact.
          </p>
          <div className={styles.actions}>
            <Link href="/projects" className="button button-primary">
              View Projects <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="button button-secondary">
              Contact <Send size={18} />
            </Link>
            <a href="mailto:kunalmehla323@gmail.com" className="button button-secondary">
              <Mail size={16} /> Email
            </a>
          </div>
        </motion.div>

        <div className={styles.highlights}>
          {highlights.map((item) => (
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
