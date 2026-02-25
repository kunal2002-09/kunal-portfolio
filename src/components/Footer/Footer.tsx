import Link from "next/link";

import { siteConfig } from "@/content/site";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className="container">
        <div className={styles.inner}>
          <div>
            <p className={styles.title}>{siteConfig.name}</p>
            <p className={styles.subtitle}>{siteConfig.description}</p>
          </div>
          <div className={styles.links}>
            <Link href={siteConfig.socials.github} target="_blank" rel="noreferrer">
              GitHub
            </Link>
            <Link href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </Link>
            <Link href={siteConfig.socials.twitter} target="_blank" rel="noreferrer">
              X/Twitter
            </Link>
          </div>
        </div>
        <p className={styles.meta}>© {new Date().getFullYear()} {siteConfig.name}</p>
      </div>
    </footer>
  );
}
