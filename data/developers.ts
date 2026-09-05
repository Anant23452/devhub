import type { Developer } from "@/types/developer";

export const developers: Developer[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    username: "rahul-dev",
    role: "Frontend Developer",
    bio: "Building modern web experiences with React and Next.js.",
    location: "Noida, India",

    skills: ["React", "Next.js", "TypeScript"],

    github: "https://github.com/rahul-dev",
    linkedin: "https://linkedin.com/in/rahul-dev",

    interests: [
      "Frontend Architecture",
      "Open Source",
      "UI Engineering",
    ],

    lookingFor: "Looking for developers to build SaaS projects with.",

    projects: [
      {
        id: 1,
        title: "TaskFlow",
        description: "A productivity dashboard for managing tasks.",
        tech: ["Next.js", "TypeScript"],
      },
      {
        id: 2,
        title: "DevPortfolio",
        description: "A developer portfolio builder.",
        tech: ["React", "Tailwind"],
      },
    ],
  },

  {
    id: 2,
    name: "Priya Singh",
    username: "priya-codes",
    role: "Backend Developer",
    bio: "Interested in APIs, databases and scalable backend systems.",
    location: "Bengaluru, India",

    skills: ["Node.js", "Express", "MongoDB"],

    github: "https://github.com/priya-codes",
    linkedin: "https://linkedin.com/in/priya-codes",

    interests: [
      "Backend Systems",
      "Databases",
      "System Design",
    ],

    lookingFor: "Looking for frontend developers for full-stack projects.",

    projects: [
      {
        id: 1,
        title: "APIHub",
        description: "REST API platform for managing developer services.",
        tech: ["Node.js", "Express", "MongoDB"],
      },
    ],
  },

  {
    id: 3,
    name: "Arjun Patel",
    username: "arjun-builds",
    role: "Full Stack Developer",
    bio: "I enjoy turning ideas into complete web applications.",
    location: "Pune, India",

    skills: ["React", "Node.js", "MongoDB"],

    github: "https://github.com/arjun-builds",
    linkedin: "https://linkedin.com/in/arjun-builds",

    interests: [
      "Full Stack",
      "Startups",
      "Product Development",
    ],

    lookingFor: "Looking for collaborators for startup ideas.",

    projects: [
      {
        id: 1,
        title: "LaunchBoard",
        description: "A platform for tracking startup product launches.",
        tech: ["React", "Node.js"],
      },
    ],
  },
];