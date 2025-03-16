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
    <div className="flex flex-col w-full gap-4 my-10">
      <h2 className="text-3xl font-medium text-center">
        Projets et expériences professionnels
      </h2>

      <div className="flex flex-col gap-8 relative">
        {EPXERIENCE_LIST.slice(0, visibleCount).map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>

      <div className="w-full flex gap-2">
        <button
          className="text-sm bg-orange-500 text-white px-2 py-1 rounded-full"
          onClick={handleShowMore}
        >
          Voir plus
        </button>
        {visibleCount > 3 && (
          <button
            className="text-white px-2 py-1 rounded-full"
            onClick={handleShowLess}
          >
            Voir moins
          </button>
        )}
      </div>
    </div>
  );
}
