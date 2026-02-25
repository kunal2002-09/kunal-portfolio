import CoreExpertise from "@/components/CoreExpertise/CoreExpertise";
import ProjectCard from "@/components/Project/ProjectCard";
import Section from "@/components/Section/Section";
import { projects } from "@/content/projects";
import { buildMetadata } from "@/lib/seo";
import Hero from "./Hero";

import styles from "./page.module.css";

export const metadata = buildMetadata({
  title: "Portfolio",
  description: "Product-minded engineer building reliable web experiences."
});

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero />
      <CoreExpertise />

      <Section
        eyebrow="Featured Work"
        title="Projects that move the needle"
        description="A sample of recent builds focused on data products, design systems, and developer platforms."
      >
        <div className={styles.grid}>
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="About"
        title="Builder with product sense"
        description="I own features end-to-end—from discovery and API design to instrumentation and safe rollout."
      >
        <div className={styles.snapshot}>
          <div className="glass">
            <h3>Product-first</h3>
            <p>
              Partner with design and stakeholders to define outcomes; ship quickly with flags,
              observability, and guardrails.
            </p>
          </div>
          <div className="glass">
            <h3>Systems thinking</h3>
            <p>
              Prefer strong primitives (design tokens, platform APIs, workflows) that scale across
              teams without regressions.
            </p>
          </div>
          <div className="glass">
            <h3>Reliability</h3>
            <p>
              Instrumentation, tests, and staged rollouts by default; focus on Core Web Vitals and
              operational excellence.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
