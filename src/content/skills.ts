export type SkillCategory = {
  name: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "SQL (MySQL, PostgreSQL)", "HTML5", "CSS3", "Bash"]
  },
  {
    name: "Frontend",
    items: [
      "React",
      "Redux",
      "Next.js (SSR/ISR)",
      "Material UI",
      "Chakra UI",
      "Styled Components",
      "React Query",
      "Axios",
      "Framer Motion",
      "Chart.js",
      "Recharts"
    ]
  },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "JWT", "RBAC", "Webhooks", "CRON Jobs"]
  },
  {
    name: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase Firestore"]
  },
  {
    name: "Cloud & DevOps",
    items: ["AWS (EC2, S3, RDS, Lambda, API Gateway, ECS)", "Docker", "CI/CD", "GitHub Actions"]
  },
  {
    name: "Testing & Tools",
    items: ["Jest", "Postman", "Swagger", "Git", "Lighthouse"]
  },
  {
    name: "Core CS",
    items: ["Data Structures & Algorithms", "OOPs", "System Design", "Scalable Systems"]
  }
];
