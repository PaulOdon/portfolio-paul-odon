"use client";
import React from "react";
import { EPXERIENCE_LIST } from "./experienceList";
import ExperienceItem from "./ExperienceItem";

export default function Experiences() {
  const [visibleCount, setVisibleCount] = React.useState(3);
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };
  const handleShowLess = () => {
    setVisibleCount((prevCount) => prevCount - 3);
  };
  return (
    <div className="flex flex-col w-full gap-6">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
          Expériences professionnelles
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
      </div>

      {/* Timeline */}
      <div className="flex flex-col gap-4 relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-8 border-l-2 border-gradient-to-b from-primary to-accent h-full top-[20px] opacity-30"></div>
        <div className="absolute left-4 md:left-8 w-0.5 bg-gradient-to-b from-primary via-accent to-primary h-full top-[20px]"></div>

        {EPXERIENCE_LIST.slice(0, visibleCount).map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>

      {/* Show More/Less Buttons */}
      <div className="w-full flex justify-center gap-4">
        {visibleCount < EPXERIENCE_LIST.length && (
          <button
            className="group bg-gradient-to-r from-accent to-accent-light text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
            onClick={handleShowMore}
          >
            Voir plus d'expériences
            <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
        {visibleCount > 3 && (
          <button
            className="group border-2 border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            onClick={handleShowLess}
          >
            Voir moins
            <svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
