"use client";
import { Github, Linkedin } from "@/components/icons";
import { ArrowDownTrayIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import Scrollbars from "react-custom-scrollbars-2";

const TechnoItem = ({ text }: { text: string }) => {
  return (
    <span className="bg-primary bg-opacity-10 rounded-full p-2 w-fit h-fit">
      {text ?? "Text"}
    </span>
  );
};

export default function Home() {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <main className="flex flex-col justify-between bg-black text-white  max-w-screen-lg flex-1 overflow-x-hidden px-10">
      {/* hero */}
      <div className="flex flex-col items-center justify-center gap-8 py-8">
        <Image
          alt="Photo de Paul Odon"
          src={"/Paul.jpg"}
          width={200}
          height={200}
          className="rounded-full border-4 border-primary"
        />

        <div className="flex flex-col justify-center gap-2 w-full text-center">
          <h1 className="text-5xl font-semibold ">
            Salut! Je suis <span className="text-primary">Paul Odon</span>
          </h1>

          <h2 className="text-xl font-bold">
            Ingénieur développeur fullstackJs
          </h2>
        </div>

        {/* download CV and book a meet */}
        <div className="flex flex-row sm:flex-col md:flex-col lg:flex-row gap-4 justify-center w-full">
          <button className="bg-primary bg-opacity-20 text-primary border border-primary border-opacity-20 px-4 py-2 rounded-full flex items-center font-medium gap-1 justify-center">
            <ArrowDownTrayIcon className="w-5" />
            Télécharger mon CV
          </button>
          <button className="border border-green-600 px-4 py-2 rounded-full flex items-center font-medium text-green-600 gap-1 justify-center">
            <VideoCameraIcon className="w-5 text-green-600" />
            Me programmer un meet
          </button>
        </div>

        {/* profile sur le plateforme */}
        <div className="flex gap-2 w-full justify-center">
          <a href="https://www.linkedin.com/in/paul-odon-andrianantenaina-17ab07175/">
            <Linkedin />
          </a>
          <a href="https://github.com/PaulOdon">
            <Github />
          </a>
        </div>
      </div>

      {/* container content */}
      <div className="flex flex-col w-full gap-16 py-8">
        <div className="flex flex-col w-full gap-2">
          <h3 className="text-3xl font-medium">A propos de moi</h3>
          <p className="tracking-wide font-light text-justify pr-3">
            Développeur Fullstack JavaScript avec plus de 3 années
            d&#39;expérience dans la conception et le développement
            d&#39;applications web et mobiles. Passionné par les technologies
            modernes comme React, Next.js, et Node.js et le design web, je me
            spécialise dans la création de solutions innovantes et performantes
            pour des projets variés, allant des plateformes de gestion aux
            applications mobiles. Mon objectif est de continuer à développer des
            solutions qui combinent efficacité, scalabilité, et expérience
            utilisateur optimale.
          </p>
        </div>

        <div className="flex flex-col w-full gap-4">
          <h3 className="text-3xl font-medium">Expériences professionnels</h3>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col relative">
              <div className="min-w-4 min-h-4 w-fit rounded-r-full bg-gray-400 absolute -left-1.5 top-1"></div>
              <h2 className="font-semibold text-gray-400 px-3">
                Développeur FullstackJs et Développeur Mobile - Indépendant
                (Novembre 2023 - Présent)
              </h2>
              <div className="font-thin tracking-wide p-3 text-justify flex gap-2">
                <p>
                  Je travaille en tant que développeur Fullstack JavaScript
                  indépendant, où nous avons conçu et développé une plateforme
                  de pronostics de matchs de football appelée SOKA. Nous avons
                  également créé l&#39;application mobile SOKA Live avec React
                  Native, tout en développant une version web en Progressive Web
                  App (PWA). J&#39;ai aussi participé à l&#39;intégration du
                  front-end, au développement du back-office, ainsi qu&#39;à la
                  conception de bases de données, en utilisant des technologies
                  telles que React, Redux, RTK Query, TypeScript, PostgreSQL,
                  Nest.js, Next.js, et Tailwind CSS.
                </p>
              </div>

              <div className="text-xs gap-1 w-full flex flex-wrap px-3">
                <TechnoItem text="React" />
                <TechnoItem text="Redux" />
                <TechnoItem text="RTK Query" />
                <TechnoItem text="TypeScript" />
                <TechnoItem text="PostgreSQL" />
                <TechnoItem text="Nest.js" />
                <TechnoItem text="Next.js" />
                <TechnoItem text="Tailwind CSS" />
              </div>
            </div>

            <div className="flex flex-col relative">
              <div className="min-w-4 min-h-4 w-fit rounded-r-full bg-gray-400 absolute -left-1.5 top-1"></div>
              <h2 className="font-semibold text-gray-400 px-3">
                Développeur Fullstack JAVA/React - Etech Consulting (Septembre
                2022 - Présent)
              </h2>
              <div className="font-thin tracking-wide p-3 text-justify flex gap-2">
                <p>
                  Chez Etech Consulting, j&#39;interviens principalement en tant
                  que développeur Fullstack Java/React. J&#39;ai contribué au
                  développement d&#39;applications web et mobiles pour la
                  Commune Urbaine d&#39;Antananarivo (OIM-CUA), et à des projets
                  de gestion et de traçabilité pour Renault. J&#39; ai participé
                  à la conception des maquettes graphiques avec Figma et
                  travaillé sur le développement frontend de plusieurs grandes
                  applications, en utilisant des outils et technologies comme
                  React, Vite, Redux, TypeScript, MongoDB, Tailwind CSS, et
                  Google Cloud Platform Maps (GCP Maps).
                </p>
              </div>

              <div className="text-xs gap-1 w-full flex flex-wrap px-3">
                <TechnoItem text="React" />
                <TechnoItem text="Vite" />
                <TechnoItem text="Redux" />
                <TechnoItem text="TypeScript" />
                <TechnoItem text="MongoDB" />
                <TechnoItem
                  text="Google Cloud Platform
                  Maps"
                />
                <TechnoItem text="Spring boot" />
                <TechnoItem text="Tailwind CSS" />
              </div>
            </div>

            <div className="flex flex-col relative">
              <div className="min-w-4 min-h-4 w-fit rounded-r-full bg-gray-400 absolute -left-1.5 top-1"></div>
              <h2 className="font-semibold text-gray-400 px-3">
                Développeur FullstackJs et Designer - Object-if (Août 2023 -
                Novembre 2023)
              </h2>
              <div className="font-thin tracking-wide p-3 text-justify flex gap-2">
                <p>
                  Durant mon passage chez Object-if, j&#39;ai travaillé comme
                  développeur Fullstack et designer. J&#39;ai participé à la
                  conception et au développement d&#39;une plateforme de tirage
                  d&#39;articles au hasard, en prenant en charge
                  l&#39;intégration du front-end et le développement du
                  back-office. J&#39;ai également fait la gestion de projet et
                  contribué à la mise en place des environnements de déploiement
                  continu. Les technologies utilisées incluent React, Redux,
                  TypeScript, MongoDB, MaterialUI, Angular, Next.js, et Nest.js,
                  et j&#39;ai également utilisé des outils comme Figma, ClickUp,
                  et GitLab.
                </p>
              </div>

              <div className="text-xs gap-1 w-full flex flex-wrap px-3">
                <TechnoItem text="React" />
                <TechnoItem text="Redux" />
                <TechnoItem text="MongoDB" />
                <TechnoItem text="MaterialUI" />
                <TechnoItem text="Angular" />
                <TechnoItem text="TypeScript" />
                <TechnoItem text="Next.js" />
                <TechnoItem text="Nest.js" />
                <TechnoItem text="MongoDB" />
                <TechnoItem text="Figma" />
                <TechnoItem text="ClickUp" />
                <TechnoItem text="GitLab" />
              </div>
            </div>

            {showMore && (
              <>
                <div className="flex flex-col relative">
                  <div className="min-w-4 min-h-4 w-fit rounded-r-full bg-gray-400 absolute -left-1.5 top-1"></div>
                  <h2 className="font-semibold text-gray-400 px-3">
                    Développeur FullstackJs et Designer - Object-if (Octobre
                    2022 - Février 2023)
                  </h2>
                  <div className="font-thin tracking-wide p-3 text-justify flex gap-2">
                    <p>
                      J&#39;ai travaillé sur un projet personnel pour la
                      conception et le développement d&#39;une plateforme de
                      gestion de portfolios. J&#39;ai conçu les maquettes
                      graphiques à l&#39;aide de Figma et j&#39;ai intégré la
                      partie front-end tout en participant au développement du
                      back-end. Les technologies que j&#39;ai utilisées incluent
                      React, Redux, TypeScript, MySQL, et MaterialUI. J&#39;ai
                      également utilisé des outils comme Vercel pour le
                      déploiement.
                    </p>
                  </div>

                  <div className="text-xs gap-1 w-full flex flex-wrap px-3">
                    <TechnoItem text="React" />
                    <TechnoItem text="Redux" />
                    <TechnoItem text="MySQL" />
                    <TechnoItem text="MaterialUI" />
                    <TechnoItem text="TypeScript" />
                    <TechnoItem text="Next.js" />
                    <TechnoItem text="Vercel" />
                  </div>
                </div>

                <div className="flex flex-col relative">
                  <div className="min-w-4 min-h-4 w-fit rounded-r-full bg-gray-400 absolute -left-1.5 top-1"></div>
                  <h2 className="font-semibold text-gray-400 px-3">
                    Développeur Fullstack Javascript - Indépendant (Avril 2022 -
                    Août 2022)
                  </h2>
                  <div className="font-thin tracking-wide p-3 text-justify flex gap-2">
                    <p>
                      J&#39;ai collaboré en tant que développeur indépendant
                      pour l&#39;ONG Voakajy, où j&#39;ai analysé, conçu et
                      développé des applications de gestion couvrant divers
                      aspects tels que les ressources humaines, la logistique,
                      la comptabilité, et la finance. J&#39;ai aussi conçu la
                      maquette graphique du système avec Figma. Les technologies
                      que j&#39;ai employées comprennent Next.js, Nest.js,
                      TypeScript, MongoDB, Redux, et Microservices.
                    </p>
                  </div>

                  <div className="text-xs gap-1 w-full flex flex-wrap px-3">
                    <TechnoItem text="React" />
                    <TechnoItem text="Redux" />
                    <TechnoItem text="MongoDB" />
                    <TechnoItem text="MaterialUI" />
                    <TechnoItem text="TypeScript" />
                    <TechnoItem text="Next.js" />
                    <TechnoItem text="Nest.js" />
                  </div>
                </div>

                <div className="flex flex-col relative">
                  <div className="min-w-4 min-h-4 w-fit rounded-r-full bg-gray-400 absolute -left-1.5 top-1"></div>
                  <h2 className="font-semibold text-gray-400 px-3">
                    Développeur iOS - Livenexx (Octobre 2021 - Octobre 2022)
                  </h2>
                  <div className="font-thin tracking-wide p-3 text-justify flex gap-2">
                    <p>
                      J&#39;ai travaillé comme développeur iOS chez Livenexx, où
                      j&#39;ai développé et maintenu des applications mobiles en
                      utilisant Swift. Mon rôle consistait à concevoir et
                      implémenter des fonctionnalités en utilisant des
                      technologies telles que Alamofire pour la gestion des
                      requêtes réseau et Storyboard pour la conception
                      d&#39;interfaces utilisateur. J&#39;ai également participé
                      à l&#39;optimisation des performances des applications et
                      à la résolution de bugs, tout en collaborant avec les
                      équipes backend et design pour garantir une intégration
                      fluide des fonctionnalités.
                    </p>
                  </div>

                  <div className="text-xs gap-1 w-full flex flex-wrap px-3">
                    <TechnoItem text="Swift" />
                    <TechnoItem text="Alamofire" />
                    <TechnoItem text="Storyboard" />
                  </div>
                </div>

                <div className="flex flex-col relative">
                  <div className="min-w-4 min-h-4 w-fit rounded-r-full bg-gray-400 absolute -left-1.5 top-1"></div>
                  <h2 className="font-semibold text-gray-400 px-3">
                    Développeur FullstackJs - Indépendant (Novembre 2021 - Mars
                    2022)
                  </h2>
                  <div className="font-thin tracking-wide p-3 text-justify flex gap-2">
                    <p>
                      J&#39;ai conçu et développé une plateforme web de gestion
                      des courriers appelée Facilypos et ai participé au
                      développement de l&#39;application mobile associée pour le
                      coursier, nommée Facilyapp. Pour ce projet, j&#39;ai
                      utilisé des technologies telles que Next.js, Nest.js,
                      TypeScript, MariaDB, Prisma, et React Native. J&#39;ai
                      également employé des outils comme VsCode, Android Studio,
                      et GitLab pour gérer le code et les environnements de
                      développement.
                    </p>
                  </div>

                  <div className="text-xs gap-1 w-full flex flex-wrap px-3">
                    <TechnoItem text="React" />
                    <TechnoItem text="Redux" />
                    <TechnoItem text="MariaDB" />
                    <TechnoItem text="MaterialUI" />
                    <TechnoItem text="Prisma" />
                    <TechnoItem text="React Native" />
                    <TechnoItem text="GitLab" />
                    <TechnoItem text="Android Studio" />
                    <TechnoItem text="VsCode" />
                    <TechnoItem text="Next.js" />
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="w-full">
            <button
              className="text-blue-700 underline text-sm"
              onClick={() => setShowMore(!showMore)}
            >
              Voir {showMore ? "moins" : "plus"} de mes éxpériences
              professionnels
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full gap-2">
          <h3 className="text-3xl font-medium">Portfolio</h3>
          Portfolio item
        </div>

        <div className="flex flex-col w-full gap-2">
          <h3 className="text-3xl font-medium">Formations</h3>
          Formations item
        </div>

        <div className="flex flex-col w-full gap-2">
          <h3 className="text-3xl font-medium">Contacts</h3>
          contact item
        </div>
      </div>
    </main>
  );
}
