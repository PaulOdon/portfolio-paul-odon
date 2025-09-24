import Contacts from "@/components/contacts";
import Experiences from "@/components/experiences";
import Formations from "@/components/formations";
import Heroes from "@/components/heroes";
import Portfolio from "@/components/portfolio";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <Heroes />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8 pb-8">
        {/* Experiences Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl -z-10"></div>
          <div className="py-6 px-4">
            <Experiences />
          </div>
        </section>

        {/* Formations Section */}
        <section>
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
              Formation
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          <Formations />
        </section>
      </div>

      {/* Contact Section */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto">
          <Contacts />
        </div>
      </section>
    </main>
  );
}
