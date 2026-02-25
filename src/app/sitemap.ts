import { MetadataRoute } from "next";

import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { getBlogPosts } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");

  const staticRoutes = ["/", "/projects", "/experience", "/skills", "/blog", "/contact"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date()
    })
  );

  const projectRoutes = projects.map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: new Date()
  }));

  const blogRoutes = getBlogPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date)
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
