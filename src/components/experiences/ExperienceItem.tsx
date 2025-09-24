"use client";
import React, { useState } from "react";
import TechnoItem from "./TechnoItem";
import Image from "next/image";
import { ExperienceDTO } from "./ExperienceDTO";
import classNames from "classnames";

export default function ExperienceItem({
  experience,
}: {
  experience: ExperienceDTO;
}) {
  const { title, blabla, technologies, url, logo } = experience;
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="flex flex-col relative group">
      {/* Timeline Dot */}
      <div className="absolute left-4 md:left-8 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg border-4 border-black -translate-x-1/2 top-6 z-10 group-hover:scale-125 transition-all duration-300"></div>

      {/* Card */}
      <div className="ml-12 md:ml-20 bg-gradient-to-br from-dark-gray/80 to-darker-gray/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-primary/30 transition-all duration-300 group-hover:transform group-hover:scale-[1.02] hover:shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
            {title ?? "Title"}
          </h3>
          {logo && !imageError && (
            <div className="flex-shrink-0 ml-4">
              <Image
                src={logo}
                alt={title || "Company logo"}
                width={60}
                height={60}
                className="rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
                onError={() => setImageError(true)}
                onLoad={() => setImageLoaded(true)}
                style={{
                  display: imageLoaded ? "block" : "none",
                }}
              />
              {!imageLoaded && !imageError && (
                <div className="w-[60px] h-[60px] bg-gray-700 animate-pulse rounded-lg"></div>
              )}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
          {blabla ?? "Description non disponible"}
        </p>

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <TechnoItem key={tech} text={tech} />
            ))}
          </div>
        )}

        {/* URL Link if available */}
        {url && (
          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent hover:text-accent-light transition-colors duration-300 text-sm font-medium"
            >
              Voir
              <svg
                className="w-4 h-4 ml-2"
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
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
