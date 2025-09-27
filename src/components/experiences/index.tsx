"use client";
import React from "react";
import { EPXERIENCE_LIST } from "./experienceList";
import ExperienceItem from "./ExperienceItem";
import { parseExperiences } from "./ExperienceParser";

export default function Experiences() {
  const [visibleCount, setVisibleCount] = React.useState(3);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };
  const handleShowLess = () => {
    setVisibleCount((prevCount) => prevCount - 3);
  };

  // Parse experiences and get statistics
  const parsedExperiences = parseExperiences(EPXERIENCE_LIST);
  const totalExperiences = EPXERIENCE_LIST.length;
  const freelanceCount = parsedExperiences.filter(
    (exp) => exp.type === "freelance"
  ).length;
  const fullTimeCount = parsedExperiences.filter(
    (exp) => exp.type === "fulltime"
  ).length;
  const allTechnologies = Array.from(
    new Set(EPXERIENCE_LIST.flatMap((exp) => exp.technologies || []))
  );
  const topTechnologies = [
    "Next.js",
    "Nuxt.js",
    "Nest.js",
    "React Native",
    "Postgresql",
    "Typescript",
    "Vite",
    "React",
    "Vue",
  ];
  return (
    <div className="flex flex-col w-full gap-6">
      {/* Enhanced Section Header */}
      <div className="text-center space-y-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
            Parcours Professionnel
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Experience Statistics */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-4 border border-primary/20">
            <div className="text-2xl font-bold text-primary">{totalExperiences}</div>
            <div className="text-sm text-gray-400">Expériences</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-2xl p-4 border border-green-500/20">
            <div className="text-2xl font-bold text-green-400">{freelanceCount}</div>
            <div className="text-sm text-gray-400">Freelance</div>
          </div>
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-4 border border-accent/20">
            <div className="text-2xl font-bold text-accent">{fullTimeCount}</div>
            <div className="text-sm text-gray-400">CDI/CDD</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-2xl p-4 border border-purple-500/20">
            <div className="text-2xl font-bold text-purple-400">{allTechnologies.length}</div>
            <div className="text-sm text-gray-400">Technologies</div>
          </div>
        </div> */}

        {/* Top Technologies Preview - Compact */}
        {topTechnologies.length > 0 && (
          <div className="flex items-center justify-center gap-1.5 flex-wrap text-xs">
            <span className="text-gray-500">Stack principal:</span>
            {topTechnologies.slice(0, 8).map((tech) => (
              <span
                key={tech}
                className="bg-gray-800/40 text-gray-400 px-2 py-0.5 rounded-md border border-gray-700/30 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Experiences Grid */}
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-4">
          {EPXERIENCE_LIST.slice(0, visibleCount).map((experience, index) => (
            <div
              key={experience.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ExperienceItem experience={experience} />
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Navigation - Mobile Responsive */}
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-3 px-4">
        {visibleCount < EPXERIENCE_LIST.length && (
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              className="group relative bg-gradient-to-r from-accent to-accent-light text-white px-6 sm:px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 overflow-hidden w-full sm:w-auto text-sm sm:text-base"
              onClick={handleShowMore}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Voir plus</span>
              <svg
                className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span className="absolute -right-1 sm:-right-2 top-1/2 transform -translate-y-1/2 bg-white/20 text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full">
                +{EPXERIENCE_LIST.length - visibleCount}
              </span>
            </button>

            <div className="text-center text-xs sm:text-sm text-gray-400">
              <span className="font-medium">{visibleCount}</span> sur{" "}
              <span className="font-medium">{EPXERIENCE_LIST.length}</span>
            </div>
          </div>
        )}

        {visibleCount > 3 && (
          <button
            className="group border-2 border-gray-600/50 hover:border-gray-400 text-gray-400 hover:text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm w-full sm:w-auto text-sm sm:text-base"
            onClick={handleShowLess}
          >
            Voir moins
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-y-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
