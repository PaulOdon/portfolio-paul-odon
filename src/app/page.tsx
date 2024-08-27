import { Github, Linkedin } from "@/components/icons";
import { ArrowDownTrayIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between bg-black h-full text-white overflow-y-auto overflow-x-hidden">
      <div className="flex h-screen w-1/2 items-center justify-center flex-col gap-8">
        <Image
          alt="Photo de Paul Odon"
          src={"/Paul.jpg"}
          width={200}
          height={200}
          className="rounded-full border-4 border-primary"
        />

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">
            Salut! Je suis <span className="text-primary">Paul Odon</span>
          </h1>

          <h2 className="text-3xl font-bold">
            Ingénieur développeur fullstackJs
          </h2>
        </div>

        {/* download CV and book a meet */}
        <div className="flex items-center gap-4">
          <button className="bg-primary bg-opacity-20 text-primary border border-primary border-opacity-20 px-4 py-2 rounded-full flex items-center font-medium gap-1">
            <ArrowDownTrayIcon className="w-5" />
            Télécharger mon CV
          </button>
          <button className="border border-green-600 px-4 py-2 rounded-full flex items-center font-medium text-green-600 gap-1">
            <VideoCameraIcon className="w-5 text-green-600" />
            Me programmer un meet
          </button>
        </div>

        {/* profile sur le plateforme */}
        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/paul-odon-andrianantenaina-17ab07175/"
            className="bg-white rounded-full bg-opacity-15"
          >
            <Image src={Linkedin} alt="LinkedIn" width={32} height={32} />
          </a>
          <a
            href="https://github.com/PaulOdon"
            className="bg-white bg-opacity-15 rounded-full"
          >
            <Image src={Github} alt="Github" width={32} height={32} />
          </a>
        </div>
      </div>
      <div className="flex h-screen w-1/2 overflow-y-auto overflow-x-hidden flex-col gap-8">
        <div>
          <h3>A propos de moi</h3>
          <p>Long texte à propos de moi</p>
        </div>
        <div className="w-full border border-primary"></div>

        <div>
          <h3>Expériences</h3>
          Expériences item
        </div>

        <div className="w-full border border-primary"></div>
        <div>
          <h3>Portfolio</h3>
          Portfolio item
        </div>

        <div className="w-full border border-primary"></div>
        <div>
          <h3>Formations</h3>
          Formations item
        </div>

        <div className="w-full border border-primary"></div>
        <div>
          <h3>Contacts</h3>
          contact item
        </div>
      </div>
    </main>
  );
}
