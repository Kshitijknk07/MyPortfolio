export interface TechItem {
  name: string;
  icon: string;
  description: string;
  category: string;
}

export const frontendTech: TechItem[] = [
  {
    name: "React",
    icon: "/assets/images/tech/react.svg",
    description:
      "A JavaScript library for building user interfaces with a component-based architecture.",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: "/assets/images/tech/typescript.svg",
    description:
      "A strongly typed programming language that builds on JavaScript, giving better tooling at any scale.",
    category: "Language",
  },
  {
    name: "Tailwind CSS",
    icon: "/assets/images/tech/tailwind.svg",
    description:
      "A utility-first CSS framework for rapidly building custom user interfaces.",
    category: "Styling",
  },
  // Add more frontend technologies
];

export const backendTech: TechItem[] = [
  {
    name: "Node.js",
    icon: "/assets/images/tech/nodejs.svg",
    description:
      "A JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications.",
    category: "Backend",
  },
  {
    name: "Express",
    icon: "/assets/images/tech/express.svg",
    description:
      "A minimal and flexible Node.js web application framework that provides a robust set of features.",
    category: "Backend",
  },
  // Add more backend technologies
];

export const databaseTech: TechItem[] = [
  {
    name: "MongoDB",
    icon: "/assets/images/tech/mongodb.svg",
    description:
      "A document-based, distributed database built for modern application developers.",
    category: "Database",
  },
  {
    name: "PostgreSQL",
    icon: "/assets/images/tech/postgresql.svg",
    description:
      "A powerful, open source object-relational database system with over 30 years of active development.",
    category: "Database",
  },
  // Add more database technologies
];

export const devOpsTech: TechItem[] = [
  {
    name: "Docker",
    icon: "/assets/images/tech/docker.svg",
    description:
      "A platform for developing, shipping, and running applications in containers.",
    category: "DevOps",
  },
  {
    name: "GitHub Actions",
    icon: "/assets/images/tech/github.svg",
    description:
      "Automate, customize, and execute your software development workflows in your GitHub repository.",
    category: "CI/CD",
  },
  // Add more DevOps technologies
];
