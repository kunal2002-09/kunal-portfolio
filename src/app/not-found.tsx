import Link from "next/link";
import { ArrowLeftCircle } from "lucide-react";

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={`${styles.wrapper} container`}>
      <div className="glass">
        <p className={styles.code}>404</p>
        <h1>Page not found</h1>
        <p className={styles.description}>
          The page you’re looking for doesn’t exist. Try heading back to the projects.
        </p>
        <Link href="/" className="button button-primary">
          <ArrowLeftCircle size={18} /> Go home
        </Link>
      </div>
    </div>
  );
}
