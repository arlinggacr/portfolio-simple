export const NAV = [
  { id: "intro", label: "Introduction" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

export const SKILLS = [
  {
    cat: "Languages",
    items: ["TypeScript", "JavaScript", "Go", "C#", "Java", "Python", "Rust"],
  },
  {
    cat: "Frameworks",
    items: [
      "ASP.NET Core",
      "NestJS",
      "Express.js",
      "Spring Boot",
      "Fiber",
      "FastAPI",
      "Axum & Tokio Environment",
    ],
  },
  { cat: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  {
    cat: "Cloud/DevOps",
    items: ["GCP", "Docker", "Kubernetes", "RabbitMQ", "Git"],
  },
  { cat: "Auth", items: ["Keycloak", "OAuth2", "JWT"] },
];

export const EXPERIENCE = [
  {
    period: "Nov 2023\nPresent",
    type: "Full-time",
    current: true,
    title: "Backend Engineer",
    company: "PT. Neural Technologies Indonesia",
    desc: "Led backend architecture for Phase 2 of the Benchmark Solution Service, managing 2 backend engineers and mentoring 4 interns. Built APIs for Ookla and OpenSignal dashboards, Interactive Maps, Activity Tracking, and other telco analytics dashboards used across 30+ regions in Indonesia. Also supported RTE 5G Insight, Smartcare SOC, 5G Auto Provisioning, LDAP authentication, Elasticsearch logging, and real-time network monitoring.",
    stack: [
      "ASP.NET Core",
      "NestJS",
      "C#",
      "TypeScript",
      "Keycloak",
      "LDAP",
      "Elasticsearch",
    ],
  },
  {
    period: "Nov 2025\nMar 2026",
    type: "Freelance",
    title: "Backend Engineer",
    company: "PT. Partner Transformasi Informatika",
    desc: "Architected and developed scalable backend APIs for the Selatour Umrah platform using Bun, NestJS, and Supabase Self Hosted. Delivered the platform MVP within 3 months, enabling admin management and mobile booking workflows.",
    stack: ["NestJS", "Bun", "TypeScript", "Supabase Self Hosted"],
  },
  {
    period: "Oct 2023\nDec 2023",
    type: "Freelance",
    title: "Backend Engineer",
    company: "PT. Inti Teknologi Bersama",
    desc: "Directed backend architecture with NestJS and TypeScript through a modular service architecture. Implemented the core backend and database for blimobil.id, a vehicle trading and spare parts marketplace, completing the majority of the MVP within 2 months.",
    stack: ["NestJS", "TypeScript", "Digital Ocean", "Firebase", "PostgreSQL"],
  },
  {
    period: "Jul 2022\nOct 2023",
    type: "Full-time",
    title: "Backend Engineer",
    company: "KMPlus Consulting",
    desc: "Improved scalability by separating backend functionality into independently managed macro services. Owned backend development for a talent and learning platform used by 2,000+ users, and engineered a Spotlight-like Search Engine Service with improved search response performance and indexing efficiency.",
    stack: [
      "NestJS",
      "Express.js",
      "Javascript",
      "TypeScript",
      "Macroservices",
      "Redis",
      "Digital Ocean",
      "Firebase",
      "PostgreSQL",
    ],
  },
  {
    period: "Apr 2022\nJul 2022",
    type: "Internship",
    title: "Software Engineer Intern",
    company: "KMPlus Consulting",
    desc: "Developed Repository Services and redesigned the database schema for KMS Applications, reducing query overhead and improving media retrieval performance.",
    stack: ["Express.js", "Javascript", "TypeScript", "Node.js", "PostgreSQL"],
  },
];

export const FREELANCE_EXPERIENCE = EXPERIENCE.filter((entry) => entry.type === "Freelance");
export const EMPLOYMENT_EXPERIENCE = EXPERIENCE.filter((entry) => entry.type !== "Freelance");

export const PROJECTS = [
  {
    name: "iNics — Healthcare SaaS Platform",
    category: "Healthcare SaaS",
    status: "Built",
    desc: "Multi-tenant healthcare SaaS platform for hospital and patient management, with role-based access control and a scalable API architecture.",
    stack: ["NestJS", "PostgreSQL", "GCP"],
  },
  {
    name: "Habit Tracker App",
    category: "Systems / Rust",
    status: "In development",
    desc: "High-performance habit tracking backend focused on clean architecture, concurrency, and efficient data handling.",
    stack: ["Rust", "Axum", "PostgreSQL"],
  },
];

export const CERTS = [
  {
    year: "2024",
    name: "Problem Solving (Intermediate), REST API (Intermediate), C# (Basic) — HackerRank",
  },
  { year: "2023", name: "SQL (Intermediate) — HackerRank" },
  {
    year: "2022",
    name: "SQL, JavaScript, Python, Problem Solving (Basic) — HackerRank",
  },
  {
    year: "2022",
    name: "Certificate of Completion — Binar Academy (Kampus Merdeka Wave 2)",
  },
];

export const NON_FORMAL_EDUCATION = {
  title: "Backend Javascript Student",
  school: "Binar Academy by Kampus Merdeka",
  period: "Feb 2022 – Jul 2022",
  meta: "Independent Study · GPA 4.6 / 5.0",
  desc: "Built and deployed the backend for a second-hand marketplace platform with RESTful APIs, authentication, and profile management.",
  stack: ["Node.js", "Express.js", "Sequelize", "PostgreSQL", "Heroku"],
};
