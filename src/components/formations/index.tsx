"use client";
import React from "react";
import { MapPinIcon, CalendarIcon } from "@heroicons/react/24/outline";

export default function Formations() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Timeline line */}
      <div className="relative">
        {/* Vertical accent line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-primary to-transparent hidden md:block" />

        {/* Main Card */}
        <div className="relative md:ml-16">
          {/* Timeline dot */}
          <div className="absolute -left-[2.55rem] top-8 hidden md:flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-accent border-4 border-black shadow-lg shadow-accent/30" />
            <div className="absolute w-8 h-8 rounded-full bg-accent/20 animate-ping" style={{ animationDuration: "3s" }} />
          </div>

          <div className="card-glow group">
            <div className="relative p-6 md:p-8">
              {/* Top row: degree + year badge */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-accent/10 rounded-lg border border-accent/20">
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

                <div className="flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 shrink-0">
                  <CalendarIcon className="w-4 h-4 text-accent" />
                  <span className="text-accent font-bold text-sm">2021</span>
                </div>
              </div>

              {/* Specialisation badge */}
              <div className="mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <p className="text-sm text-gray-300">
                  <span className="text-accent font-semibold">Informatique Générale</span>
                  {" "}&mdash; Génie Logiciel et Base de données
                </p>
              </div>

              {/* Skills grid */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-accent/20 transition-colors duration-300">
                  <h4 className="font-semibold text-white text-sm flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Génie Logiciel
                  </h4>
                  <ul className="text-gray-400 text-xs space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-600" />
                      Architecture logicielle
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-600" />
                      Développement d&apos;applications
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-600" />
                      Méthodologies Agile/SCRUM
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-600" />
                      Tests et qualité logicielle
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-primary/20 transition-colors duration-300">
                  <h4 className="font-semibold text-white text-sm flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Base de données
                  </h4>
                  <ul className="text-gray-400 text-xs space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-600" />
                      Modélisation de données
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-600" />
                      Administration SGBD
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-600" />
                      Optimisation de requêtes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-600" />
                      Big Data et NoSQL
                    </li>
                  </ul>
                </div>
              </div>

              {/* Link */}
              <div className="mt-6 flex justify-end">
                <a
                  href="https://eni.mg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-accent transition-colors duration-300 group/link"
                >
                  <span>Découvrir l&apos;ENI</span>
                  <svg
                    className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-0.5"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
