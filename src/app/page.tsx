import About from "@/components/about";
import Experiences from "@/components/experiences";
import Heroes from "@/components/heroes";
import Portfolio from "@/components/portfolio";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row justify-between bg-black text-white  max-w-screen-xl flex-1 overflow-x-hidden relative">
      {/* hero */}
      <Heroes />

      {/* container content */}
      <div className="flex flex-col w-full lg:w-1/2 lg:fixed lg:right-0 gap-16 py-10 lg:pr-20 lg:pl-10 h-full overflow-y-auto px-10">
        <About />

        <Experiences />

        <Portfolio />

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
