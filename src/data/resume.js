export const NAV = [
  { id: "intro", label: "Introduction" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

export const SKILLS = [
  {
    cat: "Languages",
    items: ["TypeScript", "JavaScript", "C#", "Java", "Go"],
  },
  {
    cat: "Frameworks & Runtimes",
    items: [
      "Node.js",
      "Bun",
      "NestJS",
      "Express.js",
      "ASP.NET Core",
      "Spring Boot",
      "Go Fiber",
    ],
  },
  {
    cat: "Databases",
    items: ["PostgreSQL", "MySQL", "Clickhouse", "MongoDB"],
  },
  {
    cat: "Messaging & Caching",
    items: ["Redis", "RabbitMQ", "Firebase Cloud Messaging"],
  },
  {
    cat: "Auth & Security",
    items: ["Keycloak", "LDAP", "OAuth2", "JWT"],
  },
  {
    cat: "Infrastructure & DevOps",
    items: ["GCP", "Docker", "Kubernetes", "GitHub Actions", "GitLab CI"],
  },
  {
    cat: "Architecture & Patterns",
    items: [
      "Macro-services",
      "Event-Driven Architecture",
      "Domain-Driven Design (DDD)",
      "CQRS",
      "RESTful APIs",
    ],
  },
];

export const EXPERIENCE = [
  {
    period: "Nov 2023\nPresent",
    type: "Full-time",
    current: true,
    title: "Backend Engineer",
    company: "PT. Neural Technologies Indonesia",
    desc: "Led the backend architecture and delivery for 3 phases of the Benchmark Solution Service, managing 2 engineers and 4 interns, and engineering core APIs powering 7+ enterprise dashboards across 30+ regions. Architected a comprehensive User Access Management (UAM) service integrated with Apache Superset and Keycloak, and independently managed Nginx reverse proxy deployment pipelines. Led the migration of the Open Signal Winning Benchmark service from Node.js to .NET 8, optimizing FBB data aggregation and reducing API latency from 10s to 0.5s. Developed core backend services for RTE 5G Insight and SOC Smartcare for real-time network monitoring.",
    stack: [
      "C#",
      "ASP.NET Core",
      "Node.js",
      "PostgreSQL",
      "Elasticsearch",
      "Keycloak",
      "Nginx",
    ],
  },
  {
    period: "Nov 2025\nMar 2026",
    type: "Freelance",
    title: "Backend Engineer",
    company: "PT. Partner Transformasi Informatika",
    desc: "Architected and developed robust backend APIs for the Selatour Umrah platform using Bun, NestJS, and Supabase Self-Hosted. Delivered the platform MVP within a strict 4-month timeline, enabling comprehensive admin management and seamless mobile booking workflows.",
    stack: [
      "Bun",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Supabase Self-Hosted",
    ],
  },
  {
    period: "Oct 2023\nDec 2023",
    type: "Freelance",
    title: "Backend Engineer",
    company: "PT. Inti Teknologi Bersama",
    desc: "Directed the backend architecture using NestJS and TypeScript, reducing system complexity and improving team development efficiency through a modular service architecture. Implemented the core backend engine and relational database for a vehicle trading and spare parts marketplace (blimobil.id), completing the MVP within 2 months.",
    stack: [
      "NestJS",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Modular Architecture",
    ],
  },
  {
    period: "Jul 2022\nOct 2023",
    type: "Full-time",
    title: "Backend Engineer",
    company: "KMPlus Consulting",
    desc: "Engineered the backend architecture for a Spotlight-like Search Engine Service using NestJS and TypeScript, enhancing search response performance and indexing efficiency. Improved scalability by decoupling monolithic backend functionality into independently managed macro-service modules. Owned end-to-end backend development for a talent and learning management platform serving 2,000+ active users.",
    stack: [
      "NestJS",
      "TypeScript",
      "Express.js",
      "JavaScript",
      "MySQL",
      "Macro-services",
    ],
  },
  {
    period: "Apr 2022\nJul 2022",
    type: "Internship",
    title: "Backend Engineer Intern",
    company: "KMPlus Consulting",
    desc: "Developed Repository Services and redesigned the database schema for Knowledge Management System (KMS) applications. Minimized database query overhead and improved media retrieval performance through schema optimization and efficient data querying techniques.",
    stack: ["Express.js", "JavaScript", "TypeScript", "Node.js", "PostgreSQL"],
  },
];

export const FREELANCE_EXPERIENCE = EXPERIENCE.filter(
  (entry) => entry.type === "Freelance",
);
export const EMPLOYMENT_EXPERIENCE = EXPERIENCE.filter(
  (entry) => entry.type !== "Freelance",
);

export const PROJECTS = [
  {
    name: "Benchmark Solution Service (PT. Neural Technologies)",
    category: "Telco Analytics",
    status: "Deployed",
    desc: "Architected the core backend and centralized User Access Management (UAM) for an enterprise telco analytics suite. Led the system migration from Node.js to .NET 8, reducing API latency from 10s to 0.5s. Engineered the Phase 3 Seamless Analysis module to track user transition patterns between mobile and fixed-line networks.",
    stack: [
      "C#",
      "ASP.NET Core",
      "Elasticsearch",
      "PostgreSQL",
      "RESTful APIs",
      "Telco Analytics",
    ],
  },
  {
    name: "Portaverse Platform (KMPlus Consulting)",
    category: "Learning & Talent Management System",
    status: "Deployed",
    desc: "Architected an Enterprise Learning Management System (LMS) from scratch, designing database structures to support video progress tracking and gamification. Engineered a 360-Degree Talent Assessment backend and resolved architectural edge cases involving asynchronous evaluation timelines.",
    stack: [
      "TypeScript",
      "NestJS",
      "Express.js",
      "JavaScript",
      "MySQL",
      "RESTful APIs",
    ],
  },
  {
    name: "Selatour Umrah Platform",
    category: "Travel & Booking",
    status: "MVP Delivered",
    desc: "Architected and developed robust backend APIs to support complex admin management and seamless mobile booking workflows. Delivered the platform MVP within a strict 3-month timeline.",
    stack: [
      "Bun",
      "NestJS",
      "PostgreSQL",
      "Self-hosted Supabase",
      "RESTful APIs",
    ],
  },
  {
    name: "blimobil.id Vehicle Marketplace",
    category: "E-Commerce / Marketplace",
    status: "MVP Delivered",
    desc: "Directed the core backend architecture for a comprehensive vehicle trading and spare parts marketplace. Accelerated product delivery by building the core backend engine and relational database schema within 2 months.",
    stack: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Modular Architecture",
    ],
  },
];

export const CERTS = [
  {
    year: "2024",
    name: "Problem Solving and REST API (Intermediate), C# (Basic) — HackerRank",
  },
  {
    year: "2023",
    name: "SQL (Intermediate) — HackerRank",
  },
  {
    year: "2022",
    name: "SQL, JavaScript, Python and Problem Solving (Basic) — HackerRank",
  },
  {
    year: "2022",
    name: "Certificate of Completion and Assessment, Kampus Merdeka Program — Binar Academy Wave 2",
  },
];

export const NON_FORMAL_EDUCATION = {
  title: "Backend Javascript Student",
  school: "Binar Academy by Kampus Merdeka",
  period: "Feb 2022 – Jul 2022",
  meta: "Independent Study · GPA 4.6/5.0",
  desc: "Built and deployed the backend for a second-hand marketplace platform with RESTful APIs, authentication and profile management using Node.js, Express.js, Sequelize and PostgreSQL, deployed on Heroku.",
  stack: ["Node.js", "Express.js", "Sequelize", "PostgreSQL", "Heroku"],
};

export const FORMAL_EDUCATION = {
  title: "Bachelor of Engineering in Software Engineering",
  school: "University of Muhammadiyah Prof. Dr. Hamka",
  period: "2019 – 2023",
  meta: "GPA 3.69 / 4.00",
};
