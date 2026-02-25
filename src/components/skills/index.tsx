"use client";
import React from "react";

type Skill = { name: string };

type Category = {
  id: string;
  label: string;
  icon: React.ReactNode;
  skills: Skill[];
};

const categories: Category[] = [
  {
    id: "frontend",
    label: "Frontend",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Vue.js" },
      { name: "Nuxt.js" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "Redux / RTK Query" },
      { name: "Zustand" },
      { name: "Vite" },
      { name: "Shadcn/UI" },
      { name: "Pinia" },
    ],
  },
  {
    id: "backend",
    label: "Backend & Base de données",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    skills: [
      { name: "Nest.js" },
      { name: "Node.js" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "MySQL / MariaDB" },
      { name: "Prisma" },
      { name: "REST API" },
      { name: "Spring Boot" },
      { name: "DRF (Django)" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    skills: [
      { name: "React Native" },
      { name: "Swift / iOS" },
      { name: "PWA" },
      { name: "Firebase" },
      { name: "Android Studio" },
    ],
  },
  {
    id: "tools",
    label: "Outils & Méthodes",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    skills: [
      { name: "Figma" },
      { name: "Git / GitLab / GitHub" },
      { name: "Vercel" },
      { name: "Supabase" },
      { name: "GCP Maps" },
      { name: "Docker (notions)" },
      { name: "Agile / SCRUM" },
      { name: "ClickUp" },
      { name: "OpenLayers" },
    ],
  },
  {
    id: "management",
    label: "Soft Skills & Management",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    skills: [
      { name: "Gestion de projet" },
      { name: "Gestion d'équipe" },
      { name: "Étude de projet" },
      { name: "Conception & idéation SaaS" },
      { name: "Marketing" },
      { name: "Autodidacte" },
    ],
  },
];

export default function Skills() {
  return (
    <div className="flex flex-col w-full gap-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
            Compétences
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        <p className="text-sm text-gray-500 max-w-lg mx-auto">
          4+ ans d&apos;expérience full stack — écosystème JavaScript /
          TypeScript
        </p>
      </div>

      {/* Grid des catégories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto w-full">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`bg-gray-900/50 rounded-2xl border border-gray-800/60 hover:border-gray-700/60 p-5 transition-colors duration-300 ${
              cat.id === "management" ? "md:col-span-2" : ""
            }`}
          >
            {/* Card header */}
            <div className="flex items-center gap-2 mb-4 text-gray-400">
              {cat.icon}
              <h3 className="text-sm font-semibold text-gray-300">
                {cat.label}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-2.5 py-1 rounded-lg text-xs text-gray-400 bg-gray-800/60 border border-gray-700/40"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
