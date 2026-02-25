"use client";
import React from "react";
import { EPXERIENCE_LIST } from "./experienceList";
import ExperienceItem from "./ExperienceItem";
import { parseExperienceTitle } from "./ExperienceParser";
import { useRef } from "react";

const topTechnologies = [
  "Next.js", "Nuxt.js", "Nest.js", "React Native",
  "Postgresql", "Typescript", "Vite", "React", "Vue",
];

export default function Experiences() {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [showMobileDetail, setShowMobileDetail] = React.useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTimeline = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: direction === "right" ? 300 : -300, behavior: "smooth" });
  };

  const parsedList = EPXERIENCE_LIST.map((exp) =>
    parseExperienceTitle(exp.title as string)
  );

  const handleSelect = (i: number) => {
    setSelectedIndex(i);
    setModalOpen(true);
    setShowMobileDetail(true);
  };

  const closeModal = () => setModalOpen(false);

  const closeMobileDetail = () => {
    setShowMobileDetail(false);
    setSelectedIndex(null);
  };

  return (
    <div className="flex flex-col w-full gap-8">
      {/* Section Header — masqué sur mobile quand le détail est affiché */}
      <div className={`text-center space-y-4 ${showMobileDetail ? "hidden md:block" : ""}`}>
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
        <p className="text-xs text-gray-600">Cliquez sur une expérience pour voir les détails</p>
      </div>

      {/* Horizontal Timeline — Desktop seulement */}
      <div className="relative w-full hidden md:block">
        {/* Fade edges + nav buttons */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10" />

        {/* Left button */}
        <button
          onClick={() => scrollTimeline("left")}
          aria-label="Défiler vers la gauche"
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-gray-900/80 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-200 focus:outline-none"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right button */}
        <button
          onClick={() => scrollTimeline("right")}
          aria-label="Défiler vers la droite"
          className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-gray-900/80 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-200 focus:outline-none"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="overflow-x-auto pb-2 scrollbar-hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
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
                    {/* Top label — even indices */}
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

                    {/* Connector top */}
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
                      {i > 0 && (
                        <div className="absolute right-1/2 left-0 top-1/2 -translate-y-1/2 h-px bg-gray-700" />
                      )}
                      {i < EPXERIENCE_LIST.length - 1 && (
                        <div className="absolute left-1/2 right-0 top-1/2 -translate-y-1/2 h-px bg-gray-700" />
                      )}
                      <button
                        onClick={() => handleSelect(i)}
                        aria-label={`Voir ${position} chez ${company}`}
                        className={`relative z-10 w-4 h-4 rounded-full border-2 transition-all duration-300 focus:outline-none ${
                          isSelected
                            ? "bg-accent border-accent shadow-lg shadow-accent/40 scale-125"
                            : "bg-gray-900 border-gray-600 hover:border-accent/60 hover:scale-110"
                        }`}
                      />
                    </div>

                    {/* Connector bottom */}
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
                      onClick={() => handleSelect(i)}
                      className={`mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium border transition-all duration-300 focus:outline-none ${
                        isSelected
                          ? "text-accent border-accent/50 bg-accent/10"
                          : "text-gray-500 border-gray-700 hover:text-gray-300 hover:border-gray-500"
                      }`}
                    >
                      {startDate}
                    </button>

                    {/* Bottom label — odd indices */}
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

      {/* Vertical Timeline — Mobile seulement, masqué quand le détail est affiché */}
      {!showMobileDetail && (
        <div className="relative md:hidden px-4">
          <div className="absolute left-7 top-0 bottom-0 w-px bg-gray-700" />
          <div className="flex flex-col">
            {EPXERIENCE_LIST.map((exp, i) => {
              const { position, company, startDate, endDate } = parsedList[i];
              const isSelected = selectedIndex === i;

              return (
                <button
                  key={exp.id ?? i}
                  onClick={() => handleSelect(i)}
                  className="relative flex items-start gap-4 pl-10 py-4 text-left focus:outline-none group"
                  aria-label={`Voir ${position} chez ${company}`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-[19px] top-5 w-4 h-4 rounded-full border-2 flex-shrink-0 transition-all duration-300 z-10 ${
                      isSelected
                        ? "bg-accent border-accent shadow-lg shadow-accent/40 scale-125"
                        : "bg-gray-900 border-gray-600 group-hover:border-accent/60 group-hover:scale-110"
                    }`}
                  />
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm font-semibold leading-snug transition-colors duration-300 ${
                        isSelected ? "text-accent" : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {position}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{company}</p>
                    <p className="text-xs text-gray-600 mt-0.5">
                      {startDate} — {endDate}
                    </p>
                  </div>
                  <svg
                    className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-colors duration-300 ${
                      isSelected ? "text-accent" : "text-gray-700 group-hover:text-gray-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Vue détail Mobile — remplace la liste, pas de modal */}
      {showMobileDetail && selectedIndex !== null && (
        <div className="md:hidden flex flex-col gap-4">
          <button
            onClick={closeMobileDetail}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none self-start"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux expériences
          </button>
          <ExperienceItem experience={EPXERIENCE_LIST[selectedIndex]} />
        </div>
      )}

      {/* Modal — Desktop seulement, ferme au clic extérieur */}
      {modalOpen && selectedIndex !== null && (
        <div
          className="hidden md:flex fixed inset-0 z-50 items-center justify-center bg-black/75 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              aria-label="Fermer"
              className="absolute top-3 right-3 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-gray-800/90 border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200 focus:outline-none"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Wrapper pour bloquer le débordement horizontal du hover scale */}
            <div className="overflow-hidden rounded-2xl">
              <ExperienceItem experience={EPXERIENCE_LIST[selectedIndex]} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
