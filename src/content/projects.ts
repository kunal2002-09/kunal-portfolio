export type ProjectLink = {
  live?: string;
  repo?: string;
};

export type Project = {
  slug: string;
  title: string;
  type: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  impact: string;
  ownership: string[];
  tags: string[];
  techStack: string[];
  links?: ProjectLink;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "pensionbox",
    title: "PensionBox",
    type: "Fintech platform (Individual + Corporate NPS)",
    description: "India’s smart pension platform digitizing NPS for individuals and enterprises.",
    overview:
      "Led product engineering for PensionBox—digital NPS for individuals and corporate employers. Focused on secure onboarding, compliance automation, and responsive web experiences serving high-volume usage.",
    problem:
      "Users and employers faced fragmented pension journeys, slow onboarding, and manual compliance processes.",
    solution:
      "Built Next.js + Node services for seamless KYC, payroll-based contributions, and automated compliance workflows; added corporate self-serve flows and observability for reliability.",
    impact:
      "150k+ users on production; 100+ corporate clients onboarded; corporate onboarding time cut to ~15–20 minutes; real-time notifications via FCM with ~40% lower latency.",
    ownership: [
      "End-to-end web experience (React/Next.js) and performance tuning for Core Web Vitals.",
      "Designed and shipped backend services (Node/Express/MySQL) with auth, RBAC, and audit trails.",
      "Implemented FCM real-time notifications and reliability tooling."
    ],
    tags: ["Fintech", "Full-stack", "SaaS"],
    techStack: ["React", "Next.js", "Redux", "Node.js", "Express", "MySQL", "AWS", "REST APIs"],
    links: {
      live: "https://pensionbox.in"
    },
    highlights: [
      "Scaled platform from MVP to 150k+ users with secure, compliant flows.",
      "Corporate NPS digitization with automated employer registration and employee onboarding.",
      "Real-time notification pipeline using FCM, cutting latency by ~40%."
    ]
  },
  {
    slug: "rise",
    title: "Rise",
    type: "Restaurant POS SaaS",
    description: "Cloud-based POS with QR menus, analytics, and automated ops for restaurants.",
    overview:
      "Designed and led the core architecture for a multi-tenant POS SaaS deployed across restaurants. Delivered QR-driven diner experiences, analytics, and operational automations with reliable cloud ops.",
    problem:
      "Restaurants needed faster table turnover, accurate analytics, and dependable deployments without manual ops.",
    solution:
      "Built modular Next.js/Node services with multi-tenant data isolation, payments, inventory, analytics, and QR menus; automated deployments on AWS with ECS, ALB, Route 53, and CI/CD.",
    impact:
      "Live across 12+ restaurants; table turnover improved ~15%; order handling time reduced ~30%; deployment effort down ~90% via CI/CD and blue/green releases.",
    ownership: [
      "Architected scalable codebase and tenancy model.",
      "Implemented payments, inventory, analytics, and QR menu experiences.",
      "Set up AWS infra (ECS/ALB) and CI/CD for zero-downtime deployments."
    ],
    tags: ["SaaS", "Full-stack"],
    techStack: ["React", "Next.js", "Node.js", "Express", "MongoDB", "AWS", "Docker", "CI/CD"],
    links: {
      live: "https://getrise.in/"
    },
    highlights: [
      "Multi-tenant POS with QR-based ordering and analytics.",
      "Order ops module (“My Captain”) cut handling time by ~30%.",
      "CI/CD on AWS reduced manual deployment effort by ~90%."
    ]
  },
  {
    slug: "qkart-backend",
    title: "QKart Backend",
    type: "E-commerce APIs",
    description: "Secure REST backend for carts, checkout, and orders with JWT auth.",
    overview:
      "Backend for an e-commerce experience focused on robustness and auth. Provides cart, checkout, and order flows with JWT-based security.",
    problem: "Needed reliable APIs to support concurrent shoppers with secure authentication.",
    solution:
      "Built Express/Mongo services with JWT auth, cart and order orchestration, and validation; added tests to guard core flows.",
    impact: "Improved API reliability through unit/integration tests; supports concurrent user load.",
    ownership: [
      "Designed REST resources and JWT auth.",
      "Implemented cart, checkout, and order workflows.",
      "Added test coverage for critical endpoints."
    ],
    tags: ["Backend"],
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "REST APIs"],
    links: {
      repo: "https://github.com/kunal2002-09/qkart-backend"
    },
    highlights: [
      "JWT-based authentication and authorization.",
      "Cart, checkout, and order management APIs.",
      "Unit and integration tests improving reliability."
    ]
  },
  {
    slug: "xboard",
    title: "XBoard",
    type: "News Feed Web App",
    description: "Responsive news feed consuming external REST APIs.",
    overview:
      "Lightweight news reader that fetches and renders stories responsively with client-side performance optimizations.",
    problem: "Needed fast, responsive news consumption UI backed by external APIs.",
    solution:
      "Built a Bootstrap-based frontend consuming REST APIs with debounced fetches and optimized rendering.",
    impact: "Improved perceived performance and responsiveness for end users.",
    ownership: [
      "Implemented UI and API integration for news feed.",
      "Optimized client rendering and fetch patterns."
    ],
    tags: ["Frontend"],
    techStack: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    links: {
      live: "https://kunal-mehla-xboard.netlify.app/"
    },
    highlights: [
      "Responsive layout for mobile/desktop.",
      "Optimized API usage to reduce redundant calls."
    ]
  },
  {
    slug: "qtrip",
    title: "QTrip",
    type: "Travel Discovery",
    description: "Travel discovery app with dynamic filtering and persisted preferences.",
    overview:
      "Travel discovery experience with search and filters; stores preferences locally for better UX.",
    problem: "Travelers needed quick filtering and saved preferences across sessions.",
    solution:
      "Implemented dynamic filters and search with localStorage persistence for user choices.",
    impact: "Enhanced user experience with faster repeat visits and tailored results.",
    ownership: [
      "Built search/filter UI and state management.",
      "Added localStorage persistence for preferences."
    ],
    tags: ["Frontend"],
    techStack: ["JavaScript", "HTML", "CSS"],
    links: {
      live: "https://kunal-mehla-qtripdyanmic.netlify.app/"
    },
    highlights: [
      "Dynamic filtering and search for destinations.",
      "Preference persistence via localStorage."
    ]
  }
];
