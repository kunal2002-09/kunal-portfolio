import { ReactNode } from "react";

import styles from "./Card.module.css";

type CardProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  href?: string;
};

export default function Card({ title, subtitle, children, href }: CardProps) {
  const content = (
    <article className={`${styles.card} glass`}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      {children && <div className={styles.body}>{children}</div>}
    </article>
  );

  if (href) {
    return (
      <a href={href} className={styles.link} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
