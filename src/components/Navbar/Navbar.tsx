"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import { siteConfig } from "@/content/site";

import styles from "./Navbar.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={styles.wrapper}>
      <div className="container">
        <div className={styles.inner}>
          <Link href="/" className={styles.brand} aria-label={`${siteConfig.name} home`}>
            <span className={styles.dot} />
            <span className={styles.name}>{siteConfig.name}</span>
          </Link>
          <nav className={styles.nav} aria-label="Primary">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(styles.link, pathname === link.href && styles.active)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className={styles.actions}>
            <ThemeToggle />
            <Link href="/contact" className="button button-primary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
