import { notFound } from "next/navigation";

import ProjectDetails from "@/components/Project/ProjectDetails";
import { projects } from "@/content/projects";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return buildMetadata({ title: "Project" });

  return buildMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`
  });
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project!} />;
}
