import React from "react";

export default function About() {
  return (
    <div className="bg-gradient-to-r backdrop-blur-sm rounded-2xl p-6">
      <p className="text-gray-300 leading-relaxed text-sm md:text-base font-light">
        Développeur{" "}
        <span className="text-primary font-semibold">Fullstack JavaScript</span>{" "}
        avec plus de{" "}
        <span className="text-primary font-semibold">
          4 années d'expérience
        </span>{" "}
        dans la conception et le développement d'applications web et mobiles.
        Passionné par les technologies modernes comme{" "}
        <span className="text-accent-light">React</span>,{" "}
        <span className="text-accent-light">Next.js</span>, et{" "}
        <span className="text-accent-light">Node.js</span> et le design web, je
        me spécialise dans la création de solutions innovantes et performantes
        pour des projets variés, allant des plateformes de gestion aux
        applications mobiles. Mon objectif est de continuer à développer des
        solutions qui combinent efficacité, scalabilité, et expérience
        utilisateur optimale.
      </p>
    </div>
  );
}
