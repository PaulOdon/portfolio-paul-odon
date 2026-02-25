"use client";
import React, { useState } from "react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  logo?: string;
  type: "SaaS" | "Web App" | "Mobile" | "Plateforme";
  year: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Medical Place",
    description:
      "Plateforme SaaS multi-tenant pour le secteur médical : gestion des établissements de santé, cartographie interactive, calendrier médical, annuaire et visualisation de données.",
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "TailwindCSS", "OpenLayers", "Shadcn"],
    url: "https://medical-place.com/territoire-de-sant%C3%A9",
    logo: "https://i.postimg.cc/VNPfZDGg/Design-sans-titre-6.png",
    type: "SaaS",
    year: "2025",
  },
  {
    id: 2,
    title: "SOKA Club",
    description:
      "Plateforme de pronostics de matchs de football avec application mobile React Native (SOKA Live) et version PWA. Gestion des paris, résultats en temps réel, back-office.",
    technologies: ["React", "Next.js", "Nest.js", "React Native", "RTK Query", "TypeScript", "PostgreSQL", "Firebase"],
    url: "https://www.soka.club/",
    logo: "https://www.soka.club/new-design/logo_soka.png",
    type: "Mobile",
    year: "2022–2024",
  },
  {
    id: 3,
    title: "An-Tsoratra",
    description:
      "Plateforme numérique de gestion du quotidien : contenu, rédaction, statistiques et outils utilisateur. Dashboard interactif, espace utilisateur et application mobile CashPoint.",
    technologies: ["React", "Vue.js", "Next.js", "Nuxt.js", "Nest.js", "TailwindCSS", "Redux", "Pinia", "PWA"],
    url: "https://an-tsoratra.com/",
    logo: "https://an-tsoratra.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FtopLeft1.f906a76a.png&w=750&q=75",
    type: "Plateforme",
    year: "2024",
  },
  {
    id: 4,
    title: "OIM-CUA & Renault",
    description:
      "Applications web et mobiles pour la Commune Urbaine d'Antananarivo (gestion urbaine) et pour Renault (gestion et traçabilité). Conception des maquettes et développement fullstack.",
    technologies: ["React", "Vue.js", "Vite", "Spring Boot", "GCP Maps", "TailwindCSS", "MongoDB", "TypeScript"],
    url: "https://etechconsulting-mg.com/",
    logo: "https://etechconsulting-mg.com/web/image/website/1/logo/etech?unique=bf3a896",
    type: "Web App",
    year: "2022–2025",
  },
  {
    id: 5,
    title: "Object-if",
    description:
      "Plateforme de tirage d'articles au hasard. Développement fullstack et design UI/UX : intégration frontend, back-office, déploiement continu. Conception sur Figma.",
    technologies: ["React", "Angular", "Next.js", "Nest.js", "MongoDB", "Redux", "MaterialUI", "TypeScript", "Figma"],
    url: "https://object-if.online",
    logo: "https://object-if.online/_next/image?url=%2Flogo.png&w=64&q=75",
    type: "Web App",
    year: "2022–2023",
  },
  {
    id: 6,
    title: "Facilypost / Facilyapp",
    description:
      "Plateforme web de gestion des courriers (Facilypost) et application mobile pour les coursiers (Facilyapp). Conception UX, intégration frontend et développement backend.",
    technologies: ["Next.js", "Nest.js", "React Native", "TypeScript", "MariaDB", "Prisma", "Redux", "MaterialUI"],
    type: "Mobile",
    year: "2021–2022",
  },
];

const ALL_TYPES = ["Tous", "SaaS", "Web App", "Mobile", "Plateforme"] as const;

const typeBadgeColor: Record<string, string> = {
  SaaS: "bg-accent/15 text-accent border-accent/30",
  "Web App": "bg-primary/15 text-primary border-primary/30",
  Mobile: "bg-glow-green/15 text-glow-green border-glow-green/30",
  Plateforme: "bg-glow-orange/15 text-glow-orange border-glow-orange/30",
};

function ProjectCard({ project }: { project: Project }) {
  const [logoError, setLogoError] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  return (
    <div className="group bg-gradient-to-br from-dark-gray/90 to-darker-gray/90 backdrop-blur-md rounded-2xl border border-gray-800/60 hover:border-primary/40 transition-all duration-400 hover:shadow-xl hover:shadow-primary/10 flex flex-col overflow-hidden">
      {/* Card header */}
      <div className="p-5 pb-3 border-b border-gray-800/50">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h3 className="text-base font-bold text-white group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${typeBadgeColor[project.type]}`}>
                {project.type}
              </span>
            </div>
            <span className="text-xs text-gray-600">{project.year}</span>
          </div>

          {/* Logo */}
          {project.logo && !logoError && (
            <div className="flex-shrink-0">
              <Image
                src={project.logo}
                alt={project.title}
                width={44}
                height={44}
                className="rounded-xl border border-gray-700/50 object-contain bg-white/5"
                onError={() => setLogoError(true)}
                onLoad={() => setLogoLoaded(true)}
                style={{ display: logoLoaded ? "block" : "none" }}
                unoptimized
              />
              {!logoLoaded && !logoError && (
                <div className="w-11 h-11 rounded-xl border border-gray-700/50 bg-gray-700/50 animate-pulse" />
              )}
            </div>
          )}

          {/* Fallback icon if no logo */}
          {(!project.logo || logoError) && (
            <div className="flex-shrink-0 w-11 h-11 rounded-xl border border-gray-700/50 bg-gray-800/50 flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="p-5 flex-1 flex flex-col gap-4">
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded-md bg-gray-800/60 text-gray-500 border border-gray-700/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span className="text-xs px-2 py-0.5 rounded-md bg-gray-800/60 text-gray-600 border border-gray-700/30">
              +{project.technologies.length - 6}
            </span>
          )}
        </div>

        {/* Link */}
        <div className="mt-auto pt-2">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors duration-200 group/link"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Voir le projet
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-gray-600 cursor-default">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Accès privé
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<string>("Tous");

  const filtered =
    filter === "Tous"
      ? PROJECTS
      : PROJECTS.filter((p) => p.type === filter);

  return (
    <div className="flex flex-col w-full gap-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
            Projets Réalisés
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        <p className="text-sm text-gray-500 max-w-lg mx-auto">
          Une sélection de projets web, mobile et SaaS développés en freelance ou en équipe
        </p>
      </div>

      {/* Filtres */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {ALL_TYPES.map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 focus:outline-none ${
              filter === type
                ? "bg-white/10 text-white border-white/20"
                : "text-gray-500 border-gray-700 hover:text-gray-300 hover:border-gray-500"
            }`}
          >
            {type}
            {type !== "Tous" && (
              <span className="ml-1.5 text-gray-600">
                ({PROJECTS.filter((p) => p.type === type).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto w-full">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Stats */}
      <div className="flex items-center justify-center gap-8 py-4 border-t border-gray-800/50 max-w-lg mx-auto w-full flex-wrap">
        {[
          { label: "Projets", value: PROJECTS.length + "+" },
          { label: "Années d'expérience", value: "4+" },
          { label: "Technologies", value: "25+" },
        ].map(({ label, value }) => (
          <div key={label} className="text-center">
            <p className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {value}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
