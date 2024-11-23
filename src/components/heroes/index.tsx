import { ArrowDownTrayIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { Github, Linkedin } from "../icons";
import Image from "next/image";
import Language from "./Language";
import About from "../about";

export default function Heroes() {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-8 pt-8">
      {/* <Language /> */}

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
          Ingénieur développeur web/mobile confirmé
        </h2>
      </div>

      <div className="flex items-center gap-8">
        <a href="https://www.linkedin.com/in/paul-odon" target="_blank">
          <Linkedin />
        </a>
        <a href="https://github.com/PaulOdon" target="_blank">
          <Github />
        </a>
      </div>

      <About />

      {/* download CV and book a meet */}
      <div className="flex flex-row sm:flex-col md:flex-col lg:flex-row gap-4 justify-center w-full">
        <a
          href="/CV-Paul_Odon.pdf"
          download={"CV-Paul_Odon"}
          className="bg-primary bg-opacity-20 text-primary border border-primary border-opacity-20 px-4 py-2 rounded-full flex items-center font-medium gap-1 justify-center text-sm"
        >
          <ArrowDownTrayIcon className="w-5" />
          Télécharger mon CV
        </a>
        {/* <button className="border border-green-600 px-4 py-2 rounded-full flex items-center font-medium text-green-600 gap-1 justify-center text-sm">
          <VideoCameraIcon className="w-5 text-green-600" />
          Me programmer un meet
        </button> */}
      </div>
    </div>
  );
}
