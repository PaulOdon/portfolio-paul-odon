"use client";
import React, { useEffect, useRef, useState } from "react";
import { MapPinIcon, CalendarIcon } from "@heroicons/react/24/outline";

export default function Formations() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="max-w-5xl mx-auto relative">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent/[0.04] blur-3xl animate-float-slow" />
        <div className="absolute -bottom-10 -left-20 w-40 h-40 rounded-full bg-primary/[0.04] blur-3xl animate-float-reverse" />
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical accent line - desktop */}
        <div
          className="absolute left-6 md:left-8 top-0 bottom-0 w-px hidden md:block transition-all duration-1000"
          style={{
            background: isVisible
              ? "linear-gradient(to bottom, #3B82F6, #F37A1C, transparent)"
              : "transparent",
          }}
        />

        {/* Main Card */}
        <div
          className={`relative md:ml-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Timeline dot */}
          <div className="absolute -left-[2.55rem] top-8 hidden md:flex items-center justify-center">
            <div
              className="w-4 h-4 rounded-full border-4 border-black transition-all duration-700"
              style={{
                background: isVisible ? "#3B82F6" : "#374151",
                boxShadow: isVisible ? "0 0 20px rgba(59,130,246,0.4)" : "none",
              }}
            />
            <div
              className="absolute w-8 h-8 rounded-full bg-accent/20"
              style={{
                animation: isVisible ? "glowPulse 3s ease-in-out infinite" : "none",
              }}
            />
          </div>

          <div className="card-glow group">
            <div className="relative p-6 md:p-8">
              {/* Subtle grid background */}
              <div className="absolute inset-0 dot-grid opacity-30 rounded-2xl" />

              {/* Top row */}
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2.5 bg-accent/10 rounded-xl border border-accent/20 transition-all duration-500"
                      style={{
                        boxShadow: isVisible ? "0 0 15px rgba(59,130,246,0.1)" : "none",
                      }}
                    >
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      Licence et Master 2 en Informatique
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-primary font-medium text-sm ml-1">
                    <MapPinIcon className="w-4 h-4" />
                    <span>École Nationale d&apos;Informatique (ENI)</span>
                  </div>
                </div>

                <div
                  className="flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 shrink-0 transition-all duration-500"
                  style={{
                    animation: isVisible ? "staggerIn 0.6s ease-out 0.3s both" : "none",
                  }}
                >
                  <CalendarIcon className="w-4 h-4 text-accent" />
                  <span className="text-accent font-bold text-sm">2021</span>
                </div>
              </div>

              {/* Specialisation */}
              <div
                className="relative z-10 mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] transition-all duration-300 hover:border-accent/20 hover:bg-white/[0.05]"
                style={{ animation: isVisible ? "staggerIn 0.5s ease-out 0.2s both" : "none" }}
              >
                <p className="text-sm text-gray-300">
                  <span className="text-accent font-semibold">Informatique Générale</span>
                  {" "}&mdash; Génie Logiciel et Base de données
                </p>
              </div>

              {/* Skills grid */}
              <div className="relative z-10 grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Génie Logiciel",
                    color: "#3B82F6",
                    items: [
                      "Architecture logicielle",
                      "Développement d'applications",
                      "Méthodologies Agile/SCRUM",
                      "Tests et qualité logicielle",
                    ],
                    delay: 0.3,
                  },
                  {
                    title: "Base de données",
                    color: "#F37A1C",
                    items: [
                      "Modélisation de données",
                      "Administration SGBD",
                      "Optimisation de requêtes",
                      "Big Data et NoSQL",
                    ],
                    delay: 0.45,
                  },
                ].map((block) => (
                  <div
                    key={block.title}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] transition-all duration-300 group/block"
                    style={{
                      animation: isVisible ? `staggerIn 0.5s ease-out ${block.delay}s both` : "none",
                    }}
                  >
                    <h4 className="font-semibold text-white text-sm flex items-center gap-2 mb-3">
                      <span
                        className="w-2 h-2 rounded-full transition-shadow duration-300"
                        style={{
                          background: block.color,
                          boxShadow: `0 0 8px ${block.color}40`,
                        }}
                      />
                      {block.title}
                    </h4>
                    <ul className="text-gray-400 text-xs space-y-2.5">
                      {block.items.map((item, i) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 group-hover/block:text-gray-300 transition-colors duration-300"
                          style={{
                            animation: isVisible
                              ? `staggerIn 0.3s ease-out ${block.delay + i * 0.08}s both`
                              : "none",
                          }}
                        >
                          <span className="w-1 h-1 rounded-full bg-gray-600 group-hover/block:bg-gray-500 transition-colors" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Link */}
              <div className="relative z-10 mt-6 flex justify-end">
                <a
                  href="https://eni.mg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-accent transition-all duration-300 group/link"
                >
                  <span>Découvrir l&apos;ENI</span>
                  <svg
                    className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
