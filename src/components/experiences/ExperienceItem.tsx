"use client";
import React, { useState } from "react";
import TechnoItem from "./TechnoItem";
import Image from "next/image";
import { ExperienceDTO } from "./ExperienceDTO";
import { parseExperienceTitle, ParsedExperience } from "./ExperienceParser";
import classNames from "classnames";
import Link from "next/link";

export type ExperienceItemProps = {
  experience: ExperienceDTO;
};

export default function ExperienceItem({
  experience,
}: {
  experience: ExperienceDTO;
}) {
  const { title, blabla, technologies, url, logo } = experience;
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const parsed = parseExperienceTitle(title as string);
  const { company, position, startDate, endDate, duration, type } = parsed;

  const shouldTruncate = blabla && blabla.length > 200;
  const displayText =
    isExpanded || !shouldTruncate ? blabla : blabla?.substring(0, 200) + "...";
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "freelance":
        return (
          <div className="flex items-center gap-1.5 bg-green-500/10 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            Freelance
          </div>
        );
      case "internship":
        return (
          <div className="flex items-center gap-1.5 bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full text-xs font-medium">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            Stage
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                clipRule="evenodd"
              />
            </svg>
            CDI
          </div>
        );
    }
  };

  return (
    <div className="group">
      {/* Enhanced Card */}
      <div className="bg-gradient-to-br from-dark-gray/90 to-darker-gray/90 backdrop-blur-md rounded-2xl border border-gray-800/60 hover:border-primary/40 transition-all duration-500 group-hover:transform group-hover:scale-[1.01] hover:shadow-2xl overflow-hidden">
        {/* Card Header */}
        <div className="p-5 pb-3 border-b border-gray-800/50">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-base md:text-lg font-bold text-white group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {position}
                </h3>
                {getTypeIcon(type)}
              </div>

              <div className="flex items-center gap-2 text-accent font-semibold text-sm mb-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4h1m4 0h1"
                  />
                </svg>
                {company}
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0v1m0-1h6M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2"
                    />
                  </svg>
                  {startDate} - {endDate}
                </div>
                {duration && (
                  <div className="flex items-center gap-1.5 bg-gray-700/30 px-2 py-1 rounded-full">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12,6 12,12 16,14" />
                    </svg>
                    {duration}
                  </div>
                )}
              </div>
            </div>

            {logo && !imageError && (
              <div className="flex-shrink-0 ml-4">
                <Image
                  src={logo}
                  alt={company}
                  width={50}
                  height={50}
                  className="rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 border border-gray-700/50"
                  onError={() => setImageError(true)}
                  onLoad={() => setImageLoaded(true)}
                  style={{
                    display: imageLoaded ? "block" : "none",
                  }}
                />
                {!imageLoaded && !imageError && (
                  <div className="w-[50px] h-[50px] bg-gray-700/50 animate-pulse rounded-xl border border-gray-700/50"></div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5">
          {/* Description with expand/collapse */}
          <div className="mb-4">
            <p className="text-gray-300 leading-relaxed text-sm">
              {displayText ?? "Description non disponible"}
            </p>
            {shouldTruncate && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-accent hover:text-accent-light text-sm font-medium transition-colors duration-300 flex items-center gap-1"
              >
                {isExpanded ? "Voir moins" : "Lire plus"}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
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
              </button>
            )}
          </div>

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div className="mb-3">
              <h4 className="text-xs font-semibold text-gray-500 mb-2 flex items-center gap-1.5">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                Technologies utilisées
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {technologies.map((tech) => (
                  <TechnoItem key={tech} text={tech} />
                ))}
              </div>
            </div>
          )}

          {/* Project Link */}
          {url && (
            <div className="pt-3 border-t border-gray-700/50">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-accent-light/10 hover:from-accent/20 hover:to-accent-light/20 border border-accent/30 hover:border-accent/50 text-accent hover:text-accent-light px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Voir le détails
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
