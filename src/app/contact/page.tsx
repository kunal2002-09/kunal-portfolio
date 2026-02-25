"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";

import Section from "@/components/Section/Section";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

import styles from "./contact.module.css";

const metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch for collaborations or questions.",
});

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const message = formData.get("message")?.toString() ?? "";

    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    const subject = encodeURIComponent("Portfolio contact");
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <Section
      eyebrow="Contact"
      title="Let's talk"
      description="I’m open to collaborations, consulting, and sharing ideas. Drop a note and I’ll respond quickly."
    >
      <div className={styles.wrapper}>
        <motion.form
          className={`${styles.form} glass`}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <label className={styles.label}>
            Name
            <input className={styles.input} name="name" type="text" required placeholder="You" />
          </label>
          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              name="email"
              type="email"
              required
              placeholder="you@example.com"
            />
          </label>
          <label className={styles.label}>
            Message
            <textarea
              className={styles.textarea}
              name="message"
              rows={5}
              required
              placeholder="How can I help?"
            />
          </label>
          <button type="submit" className="button button-primary">
            <Send size={16} /> Send
          </button>
          {status === "sent" && <p className={styles.sent}>Thanks! Opening your email client.</p>}
          <p className={styles.fallback}>
            Prefer email? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
        </motion.form>

        <div className={`${styles.panel} glass`}>
          <h3>Elsewhere</h3>
          <p>Find my work and notes on these platforms.</p>
          <ul>
            <li>
              <Mail size={16} /> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>Phone: {siteConfig.phone}</li>
            <li>Location: {siteConfig.location}</li>
            <li>
              GitHub: <a href={siteConfig.socials.github}>{siteConfig.socials.github}</a>
            </li>
            <li>
              LinkedIn: <a href={siteConfig.socials.linkedin}>{siteConfig.socials.linkedin}</a>
            </li>
            <li>
              X/Twitter: <a href={siteConfig.socials.twitter}>{siteConfig.socials.twitter}</a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
