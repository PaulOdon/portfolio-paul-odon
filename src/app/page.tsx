import Contacts from "@/components/footer";
import Experiences from "@/components/experiences";
import Formations from "@/components/formations";
import Heroes from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollToNext from "@/components/ScrollToNext";
import ScrollToTop from "@/components/ScrollToTop";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Global ambient orbs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-primary/[0.02] blur-[100px] animate-float-slow" />
        <div className="absolute top-2/3 -right-48 w-[500px] h-[500px] rounded-full bg-accent/[0.02] blur-[120px] animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/[0.015] blur-[100px] animate-float" />
      </div>

      {/* Hero Section */}
      <AnimatedSection id="home" animation="fade-down">
        <Heroes />
      </AnimatedSection>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16 pb-8">
        {/* Projets Section */}
        <AnimatedSection
          id="projects"
          animation="fade-up"
          delay={100}
          className="lg:min-h-screen lg:flex lg:items-center"
        >
          <section className="py-6 px-4 w-full">
            <Projects />
          </section>
          <ScrollToNext targetId="experiences" />
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent animate-shimmer" />

        {/* Experiences Section */}
        <AnimatedSection
          id="experiences"
          animation="fade-up"
          delay={100}
          className="lg:min-h-screen lg:flex lg:items-center"
        >
          <section className="py-6 px-4 w-full">
            <Experiences />
          </section>
          <ScrollToNext targetId="skills" />
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent animate-shimmer" />

        {/* Compétences Section */}
        <AnimatedSection
          id="skills"
          animation="fade-up"
          delay={100}
          className="lg:min-h-screen lg:flex lg:items-center"
        >
          <section className="py-6 px-4 w-full">
            <Skills />
          </section>
          <ScrollToNext targetId="formations" />
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent animate-shimmer" />

        {/* Formations Section */}
        <AnimatedSection
          id="formations"
          animation="fade-up"
          delay={100}
          className="lg:min-h-screen lg:flex lg:items-center"
        >
          <section className="w-full">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent mb-2 animate-text-shimmer">
                Formation
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </div>
            <Formations />
          </section>
          <ScrollToNext targetId="contact" />
        </AnimatedSection>
      </div>

      {/* Contact Section */}
      <AnimatedSection
        id="contact"
        animation="slide-up"
        delay={100}
        className="lg:min-h-screen lg:flex lg:items-center"
      >
        <section className="py-8 mt-8 w-full">
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
