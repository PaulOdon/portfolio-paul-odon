import Contacts from "@/components/contacts";
import Experiences from "@/components/experiences";
import Formations from "@/components/formations";
import Heroes from "@/components/heroes";
import Portfolio from "@/components/portfolio";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col justify-between text-white  max-w-screen-lg px-5 gap-5">
      {/* hero */}
      <Heroes />

      <Experiences />

      {/* <Portfolio /> */}

      {/* <div className="flex flex-col w-full gap-2">
        <h3 className="text-3xl font-medium">Formations</h3>
        <Formations />
      </div> */}

      <div className="flex flex-col w-full gap-2 items-center">
        <Contacts />
      </div>
    </main>
  );
}
