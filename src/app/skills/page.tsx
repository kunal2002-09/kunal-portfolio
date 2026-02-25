import Section from "@/components/Section/Section";
import Card from "@/components/Card/Card";
import { skills } from "@/content/skills";
import { buildMetadata } from "@/lib/seo";

import styles from "./skills.module.css";

export const metadata = buildMetadata({
  title: "Skills",
  description: "Technical skills across frontend, backend, and platform."
});

export default function SkillsPage() {
  return (
    <Section
      eyebrow="Skills"
      title="Tools I reach for"
      description="A focused set of technologies for shipping reliable products end-to-end."
    >
      <div className={styles.grid}>
        {skills.map((category) => (
          <Card key={category.name} title={category.name}>
            <div className={styles.pills}>
              {category.items.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
