"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Laptop, Moon, Sun } from "lucide-react";

import styles from "./ThemeToggle.module.css";

const order: Array<"system" | "light" | "dark"> = ["system", "light", "dark"];

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={styles.placeholder} aria-hidden />;
  }

  const current = (theme ?? "system") as (typeof order)[number];
  const currentIndex = order.indexOf(current);
  const next = order[(currentIndex + 1) % order.length];

  const icon =
    resolvedTheme === "dark" ? (
      <Moon size={18} />
    ) : resolvedTheme === "light" ? (
      <Sun size={18} />
    ) : (
      <Laptop size={18} />
    );

  const label = `Switch theme (next: ${next})`;

  return (
    <button className={styles.toggle} onClick={() => setTheme(next)} aria-label={label}>
      {icon}
      <span className={styles.text}>{current.toUpperCase()}</span>
    </button>
  );
}
