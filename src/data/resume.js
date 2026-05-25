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
    title: "Backend Engineer",
    company: "PT. Neural Technologies Indonesia",
    desc: "Led backend architecture for Phase 2 of the Benchmark Solution Service — APIs powering Ookla & OpenSignal dashboards, Executive Dashboard, and Activity Tracker across 30+ regions. Built CEI Outlook backend from scratch with Keycloak + Elasticsearch. Mentored 4 interns.",
    stack: [
      "ASP.NET Core",
      "NestJS",
      "C#",
      "TypeScript",
      "Keycloak",
      "Elasticsearch",
      "On Premise Servers",
    ],
  },
  {
    period: "Nov 2025\nMar 2026",
    type: "Freelance",
    title: "Backend Engineer",
    company: "PT. Partner Transformasi Informatika",
    desc: "Spearheaded backend for Selatour, an Umrah travel platform. Built scalable APIs for admin management and mobile app. Delivered MVP in 2 months.",
    stack: [
      "NestJS",
      "Bun",
      "TypeScript",
      "Supabase",
      "Firebase",
      "PostgreSQL",
    ],
  },
  {
    period: "Oct 2023\nDec 2023",
    type: "Freelance",
    title: "Backend Engineer",
    company: "PT. Inti Teknologi Bersama",
    desc: "Built core backend and database for blimobil.id, a vehicle trading and spare parts marketplace. Completed majority of MVP within 2 months.",
    stack: ["NestJS", "TypeScript", "Digital Ocean", "Firebase", "PostgreSQL"],
  },
  {
    period: "Jul 2022\nOct 2023",
    type: "Full-time",
    title: "Backend Engineer",
    company: "KMPlus Consulting",
    desc: "Orchestrated monolith-to-macroservices migration. Owned backend for a talent & learning platform with 2,000+ users. Built a Spotlight-like Search Engine Service.",
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
    title: "Backend Engineer Intern",
    company: "KMPlus Consulting",
    desc: "Developed Repository Services and redesigned database schema for KMS Applications, improving media management and query performance.",
    stack: ["Express.js", "Javascript", "TypeScript", "Node.js", "PostgreSQL"],
  },
];

export const PROJECTS = [
  {
    name: "iNics — Healthcare SaaS Platform",
    desc: "Multi-tenant platform for patient & hospital management with isolated tenant data, role-based access, and cloud-native deployment.",
    stack: ["NestJS", "PostgreSQL", "neon.tech", "GCP"],
  },
  {
    name: "Taproost — Link-in-Bio Platform",
    desc: "Customizable single-page link aggregator allowing users to create a branded landing page housing multiple links, with analytics tracking.",
    stack: ["NestJS", "Bun", "PostgreSQL", "neon.tech"],
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
