import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

type BuildMetadataArgs = {
  title?: string;
  description?: string;
  path?: string;
};

export const buildMetadata = ({ title, description, path }: BuildMetadataArgs = {}): Metadata => {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.title}`;
  const pageDescription = description ?? siteConfig.description;
  const absoluteUrl = new URL(path ?? "/", siteConfig.url).toString();

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: absoluteUrl
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: absoluteUrl,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.defaultOg, width: 1200, height: 630 }]
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [siteConfig.defaultOg]
    }
  };
};
