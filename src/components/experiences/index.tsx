"use client";
import React from "react";
import { EPXERIENCE_LIST } from "./experienceList";
import ExperienceItem from "./ExperienceItem";
import { parseExperienceTitle } from "./ExperienceParser";

const topTechnologies = [
  "Next.js", "Nuxt.js", "Nest.js", "React Native",
  "Postgresql", "Typescript", "Vite", "React", "Vue",
];

export default function Experiences() {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const parsedList = EPXERIENCE_LIST.map((exp) =>
    parseExperienceTitle(exp.title as string)
  );

  return (
    <div className="flex flex-col w-full gap-8">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
            Parcours Professionnel
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        <div className="flex items-center justify-center gap-1.5 flex-wrap text-xs">
          <span className="text-gray-500">Stack principal:</span>
          {topTechnologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-800/40 text-gray-400 px-2 py-0.5 rounded-md border border-gray-700/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Horizontal Timeline */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          <div className="min-w-max mx-auto px-12">
            <div className="flex">
              {EPXERIENCE_LIST.map((exp, i) => {
                const { position, company, startDate } = parsedList[i];
                const isSelected = selectedIndex === i;
                const isEven = i % 2 === 0;

                return (
                  <div
                    key={exp.id ?? i}
                    className="flex flex-col items-center"
                    style={{ width: "164px" }}
                  >
                    {/* Top label — shown for even indices */}
                    <div className="h-20 w-full flex flex-col justify-end pb-3 px-2 text-center">
                      {isEven && (
                        <>
                          <p
                            className={`text-xs font-semibold line-clamp-2 leading-tight transition-colors duration-300 ${
                              isSelected ? "text-accent" : "text-gray-300"
                            }`}
                          >
                            {position}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5 truncate">
                            {company}
                          </p>
                        </>
                      )}
                    </div>

                    {/* Connector line to top label */}
                    <div
                      className={`w-px transition-colors duration-300 ${
                        isEven
                          ? isSelected
                            ? "h-3 bg-accent/60"
                            : "h-3 bg-gray-700"
                          : "h-0"
                      }`}
                    />

                    {/* Dot + horizontal line */}
                    <div className="relative w-full h-6 flex justify-center items-center">
                      {/* Left line segment */}
                      {i > 0 && (
                        <div className="absolute right-1/2 left-0 top-1/2 -translate-y-1/2 h-px bg-gray-700" />
                      )}
                      {/* Right line segment */}
                      {i < EPXERIENCE_LIST.length - 1 && (
                        <div className="absolute left-1/2 right-0 top-1/2 -translate-y-1/2 h-px bg-gray-700" />
                      )}

                      {/* Dot */}
                      <button
                        onClick={() => setSelectedIndex(i)}
                        aria-label={`Voir ${position} chez ${company}`}
                        className={`relative z-10 w-4 h-4 rounded-full border-2 transition-all duration-300 focus:outline-none ${
                          isSelected
                            ? "bg-accent border-accent shadow-lg shadow-accent/40 scale-125"
                            : "bg-gray-900 border-gray-600 hover:border-accent/60 hover:scale-110"
                        }`}
                      />
                    </div>

                    {/* Connector line to bottom label */}
                    <div
                      className={`w-px transition-colors duration-300 ${
                        !isEven
                          ? isSelected
                            ? "h-3 bg-accent/60"
                            : "h-3 bg-gray-700"
                          : "h-0"
                      }`}
                    />

                    {/* Date chip */}
                    <button
                      onClick={() => setSelectedIndex(i)}
                      className={`mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium border transition-all duration-300 focus:outline-none ${
                        isSelected
                          ? "text-accent border-accent/50 bg-accent/10"
                          : "text-gray-500 border-gray-700 hover:text-gray-300 hover:border-gray-500"
                      }`}
                    >
                      {startDate}
                    </button>

                    {/* Bottom label — shown for odd indices */}
                    <div className="h-20 w-full flex flex-col justify-start pt-3 px-2 text-center">
                      {!isEven && (
                        <>
                          <p
                            className={`text-xs font-semibold line-clamp-2 leading-tight transition-colors duration-300 ${
                              isSelected ? "text-accent" : "text-gray-300"
                            }`}
                          >
                            {position}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5 truncate">
                            {company}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Selected Experience Detail */}
      <div className="max-w-5xl mx-auto w-full px-4">
        {/* Arrow indicator */}
        <div className="flex justify-center mb-3">
          <div className="flex flex-col items-center gap-1">
            <p className="text-xs text-gray-500">
              {parsedList[selectedIndex].position} — {parsedList[selectedIndex].company}
            </p>
            <svg
              className="w-4 h-4 text-accent animate-bounce"
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
          </div>
        </div>

        <ExperienceItem
          key={selectedIndex}
          experience={EPXERIENCE_LIST[selectedIndex]}
        />
      </div>
    </div>
  );
}
