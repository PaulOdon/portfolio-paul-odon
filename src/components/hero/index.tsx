"use client";
import { useEffect, useState } from "react";
import { ArrowDownTrayIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { Github, Linkedin } from "../icons";
import Image from "next/image";
import About from "../about";
import Link from "next/link";
import WhatsappIcon from "../footer/WhatsappIcon";

export default function Heroes() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="h-screen flex items-center justify-center py-8 px-4 hero-glow">
      <div className="max-w-4xl mx-auto text-center">
        {/* Photo - Animation 1 */}
        <div
          className={`flex justify-center mb-6 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <Image
            alt="Photo de Paul Odon ANDRIANANTENAINA, développeur full stack"
            src={"/Paul.jpg"}
            width={150}
            height={150}
            className="rounded-full border-4 border-primary"
            priority
          />
        </div>

        {/* Main Title - Animation 2 */}
        <div className="mb-6 space-y-3">
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Salut! Je suis{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Paul Odon
            </span>
          </h1>

          {/* Subtitle - Animation 3 */}
          <h2
            className={`text-base md:text-lg lg:text-xl font-medium text-gray-300 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Ingénieur développeur web/mobile
          </h2>
        </div>

        {/* Social Links - Animation 4 */}
        <div
          className={`flex items-center justify-center gap-6 mb-6 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <a
            href="https://www.linkedin.com/in/paul-odon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil LinkedIn de Paul Odon"
            className="p-3 rounded-full bg-dark-gray hover:bg-primary transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/PaulOdon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil GitHub de Paul Odon"
            className="p-3 rounded-full bg-dark-gray hover:bg-primary transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <Github />
          </a>
        </div>

        {/* About Section - Animation 5 */}
        <div
          className={`mb-6 max-w-3xl mx-auto transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <About />
        </div>

        {/* CTA Buttons - Animation 6 */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <a
            href="/CV-Paul_Odon.pdf"
            download={"CV-Paul_Odon"}
            className="group bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-full flex items-center font-semibold gap-3 justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl min-w-[200px]"
          >
            <ArrowDownTrayIcon className="w-5 group-hover:animate-bounce" />
            Télécharger mon CV
          </a>
          <Link
            href="https://calendly.com/paulodon/meet-me"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-full flex items-center font-semibold gap-3 justify-center transition-all duration-300 transform hover:scale-105 min-w-[200px]"
          >
            <VideoCameraIcon className="w-5 group-hover:animate-pulse" />
            Me programmer un meet
          </Link>
          <a
            href="https://wa.me/261342862206"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter Paul Odon sur WhatsApp"
            className="group border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-full flex items-center font-semibold gap-3 justify-center transition-all duration-300 transform hover:scale-105 min-w-[200px]"
          >
            <WhatsappIcon />
            +261 34 28 622 06
          </a>
        </div>
      </div>
    </section>
  );
}
