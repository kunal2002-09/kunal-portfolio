"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

import styles from "./Section.module.css";

type SectionProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  id?: string;
};

export default function Section({ title, description, eyebrow, children, id }: SectionProps) {
  return (
    <section className={styles.section} id={id}>
      <div className="container">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4 }}
          className={styles.header}
        >
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <div>
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.description}>{description}</p>}
          </div>
        </motion.div>
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
}
