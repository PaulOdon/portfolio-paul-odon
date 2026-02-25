"use client";
import { useEffect, useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Github, Linkedin } from "../icons";
import Image from "next/image";
import Link from "next/link";
import WhatsappIcon from "../footer/WhatsappIcon";

const ROLES = [
  "Développeur React / Next.js",
  "Développeur Vue / Nuxt.js",
  "Développeur Fullstack JS",
  "Développeur Mobile",
];

const STATS = [
  { value: "4+", label: "ans d'expérience" },
  { value: "25+", label: "technologies" },
];

export default function Heroes() {
  const [isVisible, setIsVisible] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 55);
      } else {
        timeout = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1));
        }, 28);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24 hero-glow relative overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Colonne photo */}
          <div
            className={`md:col-span-2 flex justify-center order-1 md:order-1 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="relative">
              {/* Glow ambient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/25 to-accent/20 blur-3xl scale-125 pointer-events-none" />
              {/* Anneaux décoratifs */}
              <div className="absolute -inset-3 rounded-full border border-primary/15" />
              <div className="absolute -inset-6 rounded-full border border-gray-800/40" />
              {/* Photo */}
              <Image
                alt="Photo de Paul Odon ANDRIANANTENAINA, développeur full stack"
                src="/Paul.jpg"
                width={220}
                height={220}
                className="relative rounded-full border-4 border-primary/70 shadow-2xl shadow-primary/20"
                priority
              />
              {/* Badge disponibilité */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/95 border border-gray-800 px-3 py-1.5 rounded-full whitespace-nowrap text-xs shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-glow-green animate-pulse" />
                {/* <span className="text-gray-300 font-medium">
                  Disponible pour missions
                </span> */}
              </div>
            </div>
          </div>

          {/* Colonne texte */}
          <div className="md:col-span-3 flex flex-col gap-5 text-center md:text-left order-2 md:order-2">
            {/* Accroche + nom */}
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <span className="text-xs font-medium tracking-[0.2em] text-gray-600 uppercase">
                Salut, je suis
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Paul{" "}
                </span>
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  Odon
                </span>
              </h1>
            </div>

            {/* Typewriter */}
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <p className="text-base md:text-lg font-medium text-accent min-h-[1.75rem] flex items-center justify-center md:justify-start gap-0.5">
                {displayed}
                <span className="w-0.5 h-5 bg-accent inline-block animate-pulse ml-0.5" />
              </p>
            </div>

            {/* Bio courte */}
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
                Ingénieur développeur passionné par la conception de plateformes
                web & mobiles modernes, spécialisé dans l&apos;écosystème{" "}
                <span className="text-gray-200 font-medium">
                  JavaScript / TypeScript
                </span>
                .
              </p>
            </div>

            {/* Réseaux + stats */}
            <div
              className={`flex flex-col gap-4 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              {/* Icônes réseaux */}
              <div className="flex items-center gap-2.5 justify-center md:justify-start">
                <a
                  href="https://www.linkedin.com/in/paul-odon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil LinkedIn"
                  className="p-2.5 rounded-full bg-gray-900 border border-gray-800 hover:border-accent/50 hover:bg-accent/10 text-gray-400 hover:text-accent transition-all duration-300"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/PaulOdon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil GitHub"
                  className="p-2.5 rounded-full bg-gray-900 border border-gray-800 hover:border-gray-500 hover:bg-gray-800 text-gray-400 hover:text-white transition-all duration-300"
                >
                  <Github />
                </a>
                <a
                  href="https://wa.me/261342862206"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="p-2.5 rounded-full bg-gray-900 border border-gray-800 hover:border-green-500/50 hover:bg-green-500/10 text-gray-400 hover:text-green-400 transition-all duration-300"
                >
                  <WhatsappIcon />
                </a>
              </div>

              {/* Stats rapides */}
              <div className="flex items-center gap-6 justify-center md:justify-start">
                {STATS.map(({ value, label }, i) => (
                  <div key={label} className="flex items-center gap-6">
                    <div>
                      <p className="text-xl font-bold text-white">{value}</p>
                      <p className="text-xs text-gray-600 mt-0.5">{label}</p>
                    </div>
                    {i < STATS.length - 1 && (
                      <div className="w-px h-8 bg-gray-800" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-3 justify-center md:justify-start transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <a
                href="/CV-Paul_Odon.pdf"
                download="CV-Paul_Odon"
                className="group bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-full flex items-center font-semibold gap-2 justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 text-sm"
              >
                <ArrowDownTrayIcon className="w-4 group-hover:animate-bounce" />
                Télécharger mon CV
              </a>
              <Link
                href="https://calendly.com/paulodon/meet-me"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-700 text-gray-300 hover:border-accent/60 hover:text-accent px-6 py-3 rounded-full flex items-center font-medium gap-2 justify-center transition-all duration-300 hover:scale-105 text-sm"
              >
                Me programmer un meet
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down */}
      <button
        onClick={() => {
          const el = document.getElementById("skills");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Aller à la section suivante"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 focus:outline-none cursor-pointer ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "900ms" }}
      >
        {/* <span className="text-xs text-gray-700 tracking-widest uppercase">Scroll</span> */}
        <svg
          className="w-4 h-4 text-gray-700 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </section>
  );
}
