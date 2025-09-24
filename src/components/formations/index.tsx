import React from "react";
import { MapPinIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

export default function Formations() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-dark-gray/90 to-darker-gray/90 backdrop-blur-md rounded-2xl border border-gray-800/60 hover:border-primary/40 transition-all duration-500 group overflow-hidden">
        <div className="p-6">
          {/* Header avec logo ENI simulé */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start gap-4">
              <div>
                <h3 className="text-md md:text-lg font-bold text-white group-hover:text-primary transition-colors duration-300 mb-2">
                  Licence et master 2 en Informatique
                </h3>

                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  <MapPinIcon className="w-4 h-4" />
                  <span>École Nationale d'Informatique (ENI)</span>
                </div>
              </div>
            </div>

            {/* Badge année */}
            <div className="bg-gradient-to-r from-accent/10 to-accent-light/10 border border-accent/30 rounded-lg px-3 py-1">
              <div className="flex items-center gap-1.5">
                <CalendarIcon className="w-4 h-4 text-accent" />
                <span className="text-accent font-semibold text-sm">2021</span>
              </div>
            </div>
          </div>

          {/* Détails de la formation */}
          <div className="space-y-4">
            {/* Spécialisation */}
            <div className="bg-gray-800/30 rounded-lg py-4">
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                Spécialisation
              </h4>
              <p className="text-gray-300 text-sm">
                <span className="text-accent font-medium">
                  Informatique Générale
                </span>{" "}
                - Génie Logiciel et Base de données
              </p>
            </div>

            {/* Compétences acquises */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-white text-sm flex items-center gap-2">
                  <PlusCircleIcon className="w-4 h-4 text-accent" />
                  Génie Logiciel
                </h4>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Architecture logicielle</li>
                  <li>• Développement d'applications</li>
                  <li>• Méthodologies Agile/SCRUM</li>
                  <li>• Tests et qualité logicielle</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-white text-sm flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.79 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.79 4 8 4s8-1.79 8-4M4 7c0-2.21 3.79-4 8-4s8 1.79 8 4"
                    />
                  </svg>
                  Base de données
                </h4>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Modélisation de données</li>
                  <li>• Administration SGBD</li>
                  <li>• Optimisation de requêtes</li>
                  <li>• Big Data et NoSQL</li>
                </ul>
              </div>
            </div>

            {/* À propos de l'ENI */}
            <div className="pt-4 border-t border-gray-700/30">
              <div className="flex items-start gap-3">
                <div>
                  <a
                    href="https://eni.mg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-xs text-accent hover:text-accent-light transition-colors"
                  >
                    <span>Découvrir l'ENI</span>
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
    </div>
  );
}
