import React from "react";

export default function Formations() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-dark-gray/80 to-darker-gray/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50">
        <div className="flex items-start gap-4">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg border-2 border-black flex-shrink-0 mt-1"></div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Master 2 en Informatique (Équivalent Ingénieur)
            </h3>
            <p className="text-primary font-semibold mb-2">
              ENI Fianarantsoa • 2021
            </p>
            <p className="text-gray-300 text-sm">
              Parcours Informatique Générale - Spécialisation Génie Logiciel et
              Base de données
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
