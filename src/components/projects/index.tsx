"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  logo?: string;
  captures?: string[];
  type: "SaaS" | "Web App" | "Mobile" | "Plateforme";
  year: string;
};

const PROJECTS: Project[] = [
  {
    id: -1,
    title: "CashPoint",
    description:
      "Application mobile de gestion de transactions mobile money (MVola, Airtel Money, Orange Money). Centralisation des historiques, tri intelligent, sauvegarde automatique par email, sécurité par PIN/empreinte digitale et mode hors ligne.",
    technologies: [
      "React Native",
      "Next.js",
      "Nest.js",
      "TypeScript",
      "TailwindCSS",
      "Redux",
      "PostgreSQL",
    ],
    url: "https://cash-point.space",
    logo: "https://cash-point.space/favicon.ico",
    captures: ["/cashpoint.png"],
    type: "Mobile",
    year: "2024",
  },
  {
    id: 0,
    title: "PDF Sign",
    description:
      "Application web de signature électronique de documents PDF. Dessin de signature, annotations texte, paraphe multi-pages, export PDF signé. Intégration Stripe pour les abonnements.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "pdf-lib",
      "react-pdf",
      "Stripe",
    ],
    url: "https://pdfsign.site/",
    logo: "https://pdfsign.site/favicon.ico",
    captures: ["/pdfsign1.png", "/pdfsign2.png"],
    type: "Web App",
    year: "2025",
  },
  {
    id: 3,
    title: "An-Tsoratra",
    description:
      "Plateforme numérique de gestion du quotidien : contenu, rédaction, statistiques et outils utilisateur. Dashboard interactif, espace utilisateur et application mobile CashPoint.",
    technologies: [
      "React",
      "Vue.js",
      "Next.js",
      "Nuxt.js",
      "Nest.js",
      "TailwindCSS",
      "Redux",
      "Pinia",
      "PWA",
    ],
    url: "https://an-tsoratra.com/",
    logo: "https://an-tsoratra.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FtopLeft1.f906a76a.png&w=750&q=75",
    captures: ["/antsoratra.png"],
    type: "Plateforme",
    year: "2024",
  },
  {
    id: 1,
    title: "Medical Place",
    description:
      "Plateforme SaaS multi-tenant pour le secteur médical : gestion des établissements de santé, cartographie interactive, calendrier médical, annuaire et visualisation de données.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "TailwindCSS",
      "OpenLayers",
      "Shadcn",
    ],
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
    technologies: [
      "React",
      "Next.js",
      "Nest.js",
      "React Native",
      "RTK Query",
      "TypeScript",
      "PostgreSQL",
      "Firebase",
    ],
    url: "https://www.soka.club/",
    logo: "https://www.soka.club/new-design/logo_soka.png",
    captures: ["/sokaweb.png", "/sokalive.png"],
    type: "Mobile",
    year: "2022–2024",
  },
  {
    id: 4,
    title: "OIM-CUA & Renault",
    description:
      "Applications web et mobiles pour la Commune Urbaine d'Antananarivo (gestion urbaine) et pour Renault (gestion et traçabilité). Conception des maquettes et développement fullstack.",
    technologies: [
      "React",
      "Vue.js",
      "Vite",
      "Spring Boot",
      "GCP Maps",
      "TailwindCSS",
      "MongoDB",
      "TypeScript",
    ],
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
    technologies: [
      "React",
      "Angular",
      "Next.js",
      "Nest.js",
      "MongoDB",
      "Redux",
      "MaterialUI",
      "TypeScript",
      "Figma",
    ],
    url: "https://object-if.online",
    logo: "https://object-if.online/_next/image?url=%2Flogo.png&w=64&q=75",
    captures: ["/vente.png"],
    type: "Web App",
    year: "2022–2023",
  },
  {
    id: 6,
    title: "Facilypost / Facilyapp",
    description:
      "Plateforme web de gestion des courriers (Facilypost) et application mobile pour les coursiers (Facilyapp). Conception UX, intégration frontend et développement backend.",
    technologies: [
      "Next.js",
      "Nest.js",
      "React Native",
      "TypeScript",
      "MariaDB",
      "Prisma",
      "Redux",
      "MaterialUI",
    ],
    type: "Mobile",
    year: "2021–2022",
  },
];

const ALL_TYPES = ["Tous", "SaaS", "Web App", "Mobile", "Plateforme"] as const;

const typeColors: Record<string, { badge: string; color: string }> = {
  SaaS: {
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    color: "243, 158, 28",
  },
  "Web App": {
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    color: "59, 130, 246",
  },
  Mobile: {
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    color: "16, 185, 129",
  },
  Plateforme: {
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    color: "139, 92, 246",
  },
};

function Logo({ project, size = 44 }: { project: Project; size?: number }) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (!project.logo || error) {
    return (
      <div
        className="rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <span
          className="font-bold text-gray-600"
          style={{ fontSize: size * 0.35 }}
        >
          {project.title.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <>
      {!loaded && (
        <div
          className="rounded-xl bg-white/[0.04] border border-white/[0.06] animate-pulse"
          style={{ width: size, height: size }}
        />
      )}
      <Image
        src={project.logo}
        alt={project.title}
        width={size}
        height={size}
        className="rounded-xl border border-white/[0.06] object-contain bg-white/[0.04] p-1"
        onError={() => setError(true)}
        onLoad={() => setLoaded(true)}
        style={{
          display: loaded ? "block" : "none",
          width: size,
          height: size,
        }}
        unoptimized
      />
    </>
  );
}

/* ─── Captures gallery (right side) ─── */
function CapturesGallery({ project }: { project: Project }) {
  const color = typeColors[project.type];
  const galleryRef = useRef<HTMLDivElement>(null);
  const [captureIndex, setCaptureIndex] = useState(0);
  const captures = project.captures ?? [];

  const scrollCapture = (dir: "prev" | "next") => {
    if (!galleryRef.current || captures.length === 0) return;
    const newIdx =
      dir === "next"
        ? (captureIndex + 1) % captures.length
        : (captureIndex - 1 + captures.length) % captures.length;
    setCaptureIndex(newIdx);
    const children = galleryRef.current.children;
    if (children[newIdx]) {
      (children[newIdx] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  // No captures - show logo placeholder
  if (captures.length === 0) {
    return (
      <div className="relative w-full h-full min-h-[180px] md:min-h-[260px] rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(${color.color},0.3), transparent 70%)`,
          }}
        />
        <div className="relative flex flex-col items-center gap-3">
          <Logo project={project} size={48} />
          <span className="text-[10px] text-gray-700 font-mono">
            Aperçu bientôt disponible
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[180px] md:min-h-[260px] flex flex-col gap-3">
      {/* Gallery scroll */}
      <div className="relative flex-1 rounded-xl overflow-hidden border border-white/[0.04] bg-white/[0.02]">
        <div
          ref={galleryRef}
          className="flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {captures.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full h-full snap-center flex items-center justify-center p-3"
            >
              <Image
                src={src}
                alt={`${project.title} capture ${i + 1}`}
                width={600}
                height={400}
                className="rounded-lg object-contain max-h-full w-auto"
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* Nav overlay buttons */}
        {captures.length > 1 && (
          <>
            <button
              onClick={() => scrollCapture("prev")}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center hover:bg-black/80 transition-colors focus:outline-none cursor-pointer z-10"
              aria-label="Capture précédente"
            >
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scrollCapture("next")}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center hover:bg-black/80 transition-colors focus:outline-none cursor-pointer z-10"
              aria-label="Capture suivante"
            >
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Capture dots */}
      {captures.length > 1 && (
        <div className="flex items-center justify-center gap-1.5">
          {captures.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCaptureIndex(i);
                const children = galleryRef.current?.children;
                if (children?.[i]) {
                  (children[i] as HTMLElement).scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center",
                  });
                }
              }}
              className={`rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                i === captureIndex
                  ? "w-5 h-1.5 bg-primary"
                  : "w-1.5 h-1.5 bg-gray-800 hover:bg-gray-600"
              }`}
              aria-label={`Capture ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Project card (split layout) ─── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const color = typeColors[project.type];

  return (
    <div className="group card-glow flex-shrink-0 w-[85vw] sm:w-[90vw] md:w-[820px] lg:w-[900px] snap-center">
      <div className="relative rounded-2xl bg-[#0a0a0a] overflow-hidden h-full">
        {/* Top accent line */}
        <div
          className="h-px w-full opacity-40 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(${color.color},0.5), transparent)`,
          }}
        />

        <div className="flex flex-col md:flex-row h-full">
          {/* ─── Mobile: Captures on top ─── */}
          <div className="md:hidden p-4 pb-0">
            <CapturesGallery project={project} />
          </div>

          {/* ─── Left: Description ─── */}
          <div className="flex-1 p-5 sm:p-7 md:p-9 flex flex-col gap-4 md:gap-5 min-w-0">
            {/* Meta */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <span className="text-[10px] font-mono text-gray-700 tracking-widest">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="w-4 sm:w-5 h-px bg-gray-800" />
              <span
                className={`text-[10px] px-2 sm:px-2.5 py-0.5 rounded-full border font-semibold uppercase tracking-widest ${color.badge}`}
              >
                {project.type}
              </span>
              <span className="text-[10px] text-gray-700 font-mono">
                {project.year}
              </span>
            </div>

            {/* Title + logo */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Logo project={project} size={36} />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed flex-1">
              {project.description}
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2 sm:px-2.5 py-1 rounded-full bg-white/[0.02] text-gray-600 border border-white/[0.04] group-hover:bg-white/[0.05] group-hover:text-gray-500 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 6 && (
                <span className="text-[11px] px-2 sm:px-2.5 py-1 rounded-full bg-white/[0.02] text-gray-700 border border-white/[0.04]">
                  +{project.technologies.length - 6}
                </span>
              )}
            </div>

            {/* CTA */}
            <div className="pt-3 border-t border-white/[0.04]">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-gray-600 hover:text-white transition-all duration-500 group/link"
                >
                  <span
                    className="w-0 group-hover/link:w-6 h-px transition-all duration-500"
                    style={{ background: `rgba(${color.color}, 0.5)` }}
                  />
                  Voir le projet
                  <svg
                    className="w-4 h-4 -rotate-45 group-hover/link:rotate-0 transition-transform duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm text-gray-700">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Privé
                </span>
              )}
            </div>
          </div>

          {/* ─── Desktop: Captures on right ─── */}
          <div className="hidden md:block md:w-[380px] lg:w-[420px] flex-shrink-0 p-5 pl-0">
            <CapturesGallery project={project} />
          </div>
        </div>
      </div>
    </div>
  );
}

const AUTO_SCROLL_INTERVAL = 5000;

export default function Projects() {
  const [filter, setFilter] = useState<string>("Tous");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const filtered =
    filter === "Tous" ? PROJECTS : PROJECTS.filter((p) => p.type === filter);

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.children;
    if (!cards[index]) return;
    const card = cards[index] as HTMLElement;
    const scrollLeft =
      card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;
    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    setActiveIndex(index);
  }, []);

  const scrollPrev = useCallback(() => {
    const newIndex = activeIndex <= 0 ? filtered.length - 1 : activeIndex - 1;
    scrollToIndex(newIndex);
  }, [activeIndex, filtered.length, scrollToIndex]);

  const scrollNext = useCallback(() => {
    const newIndex = activeIndex >= filtered.length - 1 ? 0 : activeIndex + 1;
    scrollToIndex(newIndex);
  }, [activeIndex, filtered.length, scrollToIndex]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cards = container.children;
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;
      let closest = 0;
      let closestDist = Infinity;
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i] as HTMLElement;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(containerCenter - cardCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      }
      setActiveIndex(closest);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [filtered]);

  useEffect(() => {
    if (isPaused || filtered.length <= 1) return;
    const interval = setInterval(() => {
      const nextIndex =
        activeIndex >= filtered.length - 1 ? 0 : activeIndex + 1;
      scrollToIndex(nextIndex);
    }, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(interval);
  }, [activeIndex, filtered.length, isPaused, scrollToIndex]);

  useEffect(() => {
    setActiveIndex(0);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [filter]);

  return (
    <div
      className="flex flex-col w-full gap-12 relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-50" />

      {/* Header */}
      <div className="relative text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Projets Réalisés
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
      </div>

      {/* Filters + nav */}
      <div className="relative flex flex-col sm:flex-row items-center sm:justify-between gap-4 max-w-5xl mx-auto w-full px-4">
        {/* Filters - scrollable on mobile */}
        <div
          className="flex items-center gap-1 overflow-x-auto scrollbar-hidden bg-white/[0.02] backdrop-blur-sm border border-white/[0.04] rounded-2xl p-1.5 max-w-full"
          style={{ scrollbarWidth: "none" }}
        >
          {ALL_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`relative px-3 sm:px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 focus:outline-none whitespace-nowrap flex-shrink-0 ${
                filter === type
                  ? "bg-white text-black shadow-lg shadow-white/10"
                  : "text-gray-500 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {type}
              {type !== "Tous" && (
                <span
                  className={`ml-1 ${filter === type ? "text-black/40" : "text-gray-700"}`}
                >
                  {PROJECTS.filter((p) => p.type === type).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Nav arrows */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-gray-700 mr-2">
            {String(activeIndex + 1).padStart(2, "0")}/
            {String(filtered.length).padStart(2, "0")}
          </span>
          <button
            onClick={scrollPrev}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.12] flex items-center justify-center transition-all duration-300 focus:outline-none cursor-pointer"
            aria-label="Projet précédent"
          >
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.12] flex items-center justify-center transition-all duration-300 focus:outline-none cursor-pointer"
            aria-label="Projet suivant"
          >
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-4 md:w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-4 md:w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hidden snap-x snap-mandatory px-[calc(50%-45vw)] md:px-[calc(50%-410px)] lg:px-[calc(50%-450px)] py-4"
          style={{ scrollbarWidth: "none" }}
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="relative flex items-center justify-center gap-2">
        {filtered.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Projet ${i + 1}`}
            className={`rounded-full transition-all duration-500 focus:outline-none cursor-pointer ${
              i === activeIndex
                ? "w-8 h-2 bg-primary"
                : "w-2 h-2 bg-gray-800 hover:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
