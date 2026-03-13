"use client";
import React, { useState, useEffect, useRef } from "react";

type Skill = { name: string };

type Category = {
  id: string;
  label: string;
  icon: React.ReactNode;
  accent: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    id: "frontend",
    label: "Frontend",
    accent: "#3B82F6",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      { name: "React" }, { name: "Next.js" }, { name: "Vue.js" }, { name: "Nuxt.js" },
      { name: "TypeScript" }, { name: "TailwindCSS" }, { name: "Redux / RTK Query" },
      { name: "Zustand" }, { name: "Vite" }, { name: "Shadcn/UI" }, { name: "Pinia" },
    ],
  },
  {
    id: "backend",
    label: "Backend & Base de données",
    accent: "#10B981",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    skills: [
      { name: "Nest.js" }, { name: "Node.js" }, { name: "PostgreSQL" }, { name: "MongoDB" },
      { name: "MySQL / MariaDB" }, { name: "Prisma" }, { name: "REST API" },
      { name: "Spring Boot" }, { name: "DRF (Django)" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    accent: "#F59E0B",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      { name: "React Native" }, { name: "Swift / iOS" }, { name: "PWA" },
      { name: "Firebase" }, { name: "Android Studio" },
    ],
  },
  {
    id: "tools",
    label: "Outils & Méthodes",
    accent: "#8B5CF6",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    skills: [
      { name: "Figma" }, { name: "Git / GitLab / GitHub" }, { name: "Vercel" },
      { name: "Supabase" }, { name: "GCP Maps" }, { name: "Docker (notions)" },
      { name: "Agile / SCRUM" }, { name: "ClickUp" }, { name: "OpenLayers" },
    ],
  },
  {
    id: "management",
    label: "Soft Skills & Management",
    accent: "#EC4899",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    skills: [
      { name: "Gestion de projet" }, { name: "Gestion d'équipe" },
      { name: "Étude de projet" }, { name: "Conception & idéation SaaS" },
      { name: "Marketing" }, { name: "Autodidacte" },
    ],
  },
];

function SkillCard({ cat, index }: { cat: Category; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 120);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative rounded-2xl border border-gray-800/60 p-5 transition-all duration-700 overflow-hidden ${
        cat.id === "management" ? "md:col-span-2" : ""
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{
        background: "rgba(17, 17, 17, 0.5)",
        borderColor: isHovered ? `${cat.accent}35` : undefined,
      }}
    >
      {/* Mouse-follow glow */}
      <div
        className="absolute w-64 h-64 rounded-full blur-3xl transition-opacity duration-500 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          background: `radial-gradient(circle, ${cat.accent}12, transparent 70%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Card header */}
      <div className="flex items-center gap-3 mb-4 relative z-10">
        <div
          className="p-2.5 rounded-xl transition-all duration-500"
          style={{
            background: `${cat.accent}${isHovered ? "20" : "10"}`,
            color: cat.accent,
            boxShadow: isHovered ? `0 0 20px ${cat.accent}15` : "none",
          }}
        >
          {cat.icon}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-200">{cat.label}</h3>
          <p className="text-xs text-gray-600">{cat.skills.length} technologies</p>
        </div>
      </div>

      {/* Skills with stagger */}
      <div className="flex flex-wrap gap-2 relative z-10">
        {cat.skills.map((skill, i) => (
          <span
            key={skill.name}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-400 bg-white/[0.03] border border-white/[0.06] hover:text-white transition-all duration-300 cursor-default"
            style={{
              animation: isVisible ? `staggerIn 0.4s ease-out ${i * 50}ms both` : "none",
              ...(isHovered ? {
                borderColor: `${cat.accent}20`,
                background: `${cat.accent}08`,
              } : {}),
            }}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="flex flex-col w-full gap-8 relative">
      {/* Background floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 -left-32 w-64 h-64 rounded-full bg-blue-500/[0.03] blur-3xl animate-float" />
        <div className="absolute bottom-20 -right-32 w-80 h-80 rounded-full bg-purple-500/[0.03] blur-3xl animate-float-reverse" />
      </div>

      {/* Header */}
      <div className="text-center space-y-3">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent mb-2 animate-text-shimmer">
            Compétences
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        <p className="text-sm text-gray-500 max-w-lg mx-auto">
          4+ ans d&apos;expérience full stack — écosystème JavaScript / TypeScript
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto w-full">
        {categories.map((cat, i) => (
          <SkillCard key={cat.id} cat={cat} index={i} />
        ))}
      </div>
    </div>
  );
}
