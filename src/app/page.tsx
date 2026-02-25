import Contacts from "@/components/footer";
import Experiences from "@/components/experiences";
import Formations from "@/components/formations";
import Heroes from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollToTop from "@/components/ScrollToTop";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <AnimatedSection id="home" animation="fade-down">
        <Heroes />
      </AnimatedSection>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16 pb-8">

        {/* Compétences Section */}
        <AnimatedSection id="skills" animation="fade-up" delay={100}>
          <section className="py-6 px-4">
            <Skills />
          </section>
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

        {/* Experiences Section */}
        <AnimatedSection id="experiences" animation="fade-up" delay={100}>
          <section className="py-6 px-4">
            <Experiences />
          </section>
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

        {/* Projets Section */}
        <AnimatedSection id="projects" animation="fade-up" delay={100}>
          <section className="py-6 px-4">
            <Projects />
          </section>
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

        {/* Formations Section */}
        <AnimatedSection id="formations" animation="fade-up" delay={100}>
          <section>
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
                Formation
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </div>
            <Formations />
          </section>
        </AnimatedSection>

      </div>

      {/* Contact Section */}
      <AnimatedSection id="contact" animation="slide-up" delay={100}>
        <section className="py-8 mt-8">
          <div className="max-w-5xl mx-auto">
            <Contacts />
          </div>
        </section>
      </AnimatedSection>

      {/* Bouton retour en haut */}
      <ScrollToTop />
    </main>
  );
}
