import { ArrowDownTrayIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { Github, Linkedin } from "../icons";
import Image from "next/image";
import Language from "./Language";
import About from "../about";
import Link from "next/link";
import WhatsappIcon from "../contacts/WhatsappIcon";

export default function Heroes() {
  return (
    <section className="h-screen flex items-center justify-center py-8 px-4 hero-glow">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Image
            alt="Photo de Paul Odon"
            src={"/Paul.jpg"}
            width={150}
            height={150}
            className="rounded-full border-4 border-primary"
          />
        </div>

        {/* Main Title */}
        <div className="mb-6 space-y-3">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
            Salut! Je suis{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Paul Odon
            </span>
          </h1>

          <h2 className="text-base md:text-lg lg:text-xl font-medium text-gray-300 max-w-2xl mx-auto">
            Ingénieur développeur web/mobile confirmé
          </h2>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <a
            href="https://www.linkedin.com/in/paul-odon"
            target="_blank"
            className="p-3 rounded-full bg-dark-gray hover:bg-primary transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/PaulOdon"
            target="_blank"
            className="p-3 rounded-full bg-dark-gray hover:bg-primary transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <Github />
          </a>
        </div>

        {/* About Section */}
        <div className="mb-6 max-w-3xl mx-auto">
          <About />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            className="group border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-full flex items-center font-semibold gap-3 justify-center transition-all duration-300 transform hover:scale-105 min-w-[200px]"
          >
            <VideoCameraIcon className="w-5 group-hover:animate-pulse" />
            Me programmer un meet
          </Link>
          <button className="group border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-full flex items-center font-semibold gap-3 justify-center transition-all duration-300 transform hover:scale-105 min-w-[200px]">
            <WhatsappIcon />
            +261 34 28 622 06
          </button>
        </div>
      </div>
    </section>
  );
}
