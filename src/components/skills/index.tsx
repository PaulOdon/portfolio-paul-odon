"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

type Skill = { name: string };

type Category = {
  id: string;
  label: string;
  icon: React.ReactNode;
  accent: string;
  accentRgb: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    id: "frontend",
    label: "Frontend",
    accent: "#3B82F6",
    accentRgb: "59,130,246",
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
    label: "Backend & BDD",
    accent: "#10B981",
    accentRgb: "16,185,129",
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
    accentRgb: "245,158,11",
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
    accentRgb: "139,92,246",
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
    label: "Soft Skills",
    accent: "#EC4899",
    accentRgb: "236,72,153",
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

const totalSkills = categories.reduce((acc, cat) => acc + cat.skills.length, 0);

function SkillTag({ name, accent, accentRgb, delay, isVisible }: {
  name: string;
  accent: string;
  accentRgb: string;
  delay: number;
  isVisible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 cursor-default select-none"
      style={{
        animation: isVisible ? `staggerIn 0.4s ease-out ${delay}ms both` : "none",
        color: hovered ? accent : "#9CA3AF",
        background: hovered ? `rgba(${accentRgb}, 0.1)` : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? `rgba(${accentRgb}, 0.3)` : "rgba(255,255,255,0.06)"}`,
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? `0 4px 15px rgba(${accentRgb}, 0.15)` : "none",
      }}
    >
      {/* Shine effect on hover */}
      <span
        className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      >
        <span
          className="absolute inset-0"
          style={{
            background: `linear-gradient(105deg, transparent 40%, rgba(${accentRgb}, 0.08) 45%, rgba(${accentRgb}, 0.15) 50%, rgba(${accentRgb}, 0.08) 55%, transparent 60%)`,
            animation: hovered ? "shimmer 1.5s ease-in-out" : "none",
          }}
        />
      </span>
      <span className="relative z-10">{name}</span>
    </span>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [isVisible, setIsVisible] = useState(false);
  const [skillsKey, setSkillsKey] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const activeCat = categories.find((c) => c.id === activeTab)!;

  const handleTabChange = useCallback((id: string) => {
    setActiveTab(id);
    setSkillsKey((k) => k + 1);
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col w-full gap-8 relative">
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
          4+ ans d&apos;expérience full stack — <span className="text-gray-400">{totalSkills} technologies</span> maîtrisées
        </p>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-[280px_1fr] gap-6">
          {/* Category tabs - sidebar on desktop, horizontal scroll on mobile */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hidden">
            {categories.map((cat, i) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleTabChange(cat.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 shrink-0 relative overflow-hidden ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{
                    transitionDelay: `${i * 80}ms`,
                    background: isActive ? `rgba(${cat.accentRgb}, 0.1)` : "rgba(255,255,255,0.02)",
                    border: `1px solid ${isActive ? `rgba(${cat.accentRgb}, 0.3)` : "rgba(255,255,255,0.05)"}`,
                  }}
                >
                  {/* Active indicator bar */}
                  <div
                    className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full transition-all duration-300"
                    style={{
                      background: isActive ? cat.accent : "transparent",
                      boxShadow: isActive ? `0 0 8px ${cat.accent}` : "none",
                    }}
                  />
                  <div
                    className="p-2 rounded-lg transition-all duration-300"
                    style={{
                      background: `rgba(${cat.accentRgb}, ${isActive ? 0.2 : 0.08})`,
                      color: isActive ? cat.accent : "#6B7280",
                    }}
                  >
                    {cat.icon}
                  </div>
                  <div className="hidden md:block">
                    <p
                      className="text-sm font-medium transition-colors duration-300"
                      style={{ color: isActive ? "#E5E7EB" : "#6B7280" }}
                    >
                      {cat.label}
                    </p>
                    <p className="text-xs text-gray-600">{cat.skills.length} techs</p>
                  </div>
                  {/* Skill count badge - mobile */}
                  <span
                    className="md:hidden text-xs font-medium transition-colors duration-300 whitespace-nowrap"
                    style={{ color: isActive ? "#D1D5DB" : "#6B7280" }}
                  >
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Skills display panel */}
          <div
            className={`relative rounded-2xl border p-6 overflow-hidden transition-all duration-500 min-h-[260px] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: "300ms",
              background: "rgba(17, 17, 17, 0.5)",
              borderColor: `rgba(${activeCat.accentRgb}, 0.15)`,
            }}
          >
            {/* Corner glow */}
            <div
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl pointer-events-none transition-colors duration-700"
              style={{
                background: `radial-gradient(circle, rgba(${activeCat.accentRgb}, 0.08), transparent 70%)`,
              }}
            />
            <div
              className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full blur-3xl pointer-events-none transition-colors duration-700"
              style={{
                background: `radial-gradient(circle, rgba(${activeCat.accentRgb}, 0.05), transparent 70%)`,
              }}
            />

            {/* Dot grid */}
            <div className="absolute inset-0 dot-grid opacity-40 rounded-2xl" />

            {/* Panel header */}
            <div className="relative z-10 flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full transition-all duration-500"
                  style={{
                    background: activeCat.accent,
                    boxShadow: `0 0 12px rgba(${activeCat.accentRgb}, 0.5)`,
                  }}
                />
                <h3 className="text-lg font-semibold text-white">{activeCat.label}</h3>
              </div>
              <span
                className="text-xs font-medium px-2.5 py-1 rounded-full transition-all duration-500"
                style={{
                  color: activeCat.accent,
                  background: `rgba(${activeCat.accentRgb}, 0.1)`,
                  border: `1px solid rgba(${activeCat.accentRgb}, 0.2)`,
                }}
              >
                {activeCat.skills.length} technologies
              </span>
            </div>

            {/* Skills tags */}
            <div key={skillsKey} className="relative z-10 flex flex-wrap gap-2.5">
              {activeCat.skills.map((skill, i) => (
                <SkillTag
                  key={`${activeCat.id}-${skill.name}`}
                  name={skill.name}
                  accent={activeCat.accent}
                  accentRgb={activeCat.accentRgb}
                  delay={i * 60}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
