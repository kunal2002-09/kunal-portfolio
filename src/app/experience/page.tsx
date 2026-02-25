import Timeline from "@/components/Experience/Timeline";
import Section from "@/components/Section/Section";
import { certifications, education, experience } from "@/content/experience";
import { buildMetadata } from "@/lib/seo";

import styles from "./experience.module.css";

export const metadata = buildMetadata({
  title: "Experience",
  description: "Roles, impact, and highlights across teams.",
});

export default function ExperiencePage() {
  return (
    <Section
      eyebrow="Experience"
      title="Where I've contributed"
      description="A snapshot of roles focused on building reliable web platforms and empowering teams."
    >
      <Timeline items={experience} />
      <div className={styles.infoGrid}>
        <div className="glass">
          <h3>Education</h3>
          <p>{education.degree}</p>
          <p className={styles.muted}>{education.graduation}</p>
          <p className={styles.muted}>Coursework: {education.coursework.join(", ")}</p>
        </div>
        <div className="glass">
          <h3>Certifications</h3>
          <ul className={styles.list}>
            {certifications.map((cert) => (
              <li key={cert.name}>{cert.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
