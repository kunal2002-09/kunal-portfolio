export type Experience = {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
  tech?: string;
};

export const experience: Experience[] = [
  {
    company: "PensionBox (Zerodha Group) — Fintech",
    role: "Product Engineer",
    dates: "Apr 2023 – Present",
    bullets: [
      "Built and scaled a production fintech platform from MVP to 150,000+ users with high reliability, security, and regulatory compliance.",
      "Developed high-performance, responsive UIs using React & Next.js, improving page load times and Core Web Vitals across key journeys.",
      "Designed and implemented backend services with Node.js & Express, including real-time notifications via Firebase Cloud Messaging, reducing delivery latency by ~40%.",
      "Architected a B2B Corporate NPS platform onboarding 100+ corporate clients; cut employer onboarding time to ~15–20 minutes through automation and self-serve workflows."
    ],
    tech: "React, Next.js, Redux, Node.js, Express, MySQL, AWS, REST APIs"
  },
  {
    company: "RISE — IT Services / SaaS",
    role: "Founding Product Engineer (Tech Lead)",
    dates: "Sep 2024 – Jul 2025",
    bullets: [
      "Designed core system architecture for a cloud-based, multi-tenant POS SaaS platform deployed across 12+ restaurants.",
      "Built payments, inventory, analytics, and QR-based digital menus, increasing table turnover by ~15% and enabling data-driven decisions.",
      "Developed the “My Captain” operations module, reducing average order handling time by ~30% via workflow optimization and automation.",
      "Deployed and operated services on AWS (ECS, ALB, Route 53) with CI/CD supporting zero-downtime deployments, cutting manual deployment effort by ~90%."
    ],
    tech: "React, Next.js, Node.js, Express, MongoDB, AWS, Docker, CI/CD"
  }
];

export const education = {
  degree: "BCA, Deenbandhu Chhotu Ram University of Science and Technology, Sonipat",
  graduation: "Graduated July 2023",
  coursework: ["Data Structures", "Algorithms", "Databases", "Operating Systems"]
};

export const certifications = [
  {
    name: "Crio.Do – Full Stack Developer Track (FDT)"
  }
];
