import Contacts from "@/components/footer";
import Experiences from "@/components/experiences";
import Formations from "@/components/formations";
import Heroes from "@/components/hero";
import Portfolio from "@/components/portfolio";
import AnimatedSection from "@/components/AnimatedSection";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <AnimatedSection id="home" animation="fade-down">
        <Heroes />
      </AnimatedSection>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8 pb-8">
        {/* Experiences Section */}
        <AnimatedSection id="experiences" animation="fade-up" delay={100}>
          <section className="py-6 px-4">
            <Experiences />
          </section>
        </AnimatedSection>

        {/* Formations Section */}
        <AnimatedSection id="formations" animation="fade-up" delay={200}>
          <section>
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
                Formation
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </div>
            <Formations />
          </section>
        </AnimatedSection>
      </div>

      {/* Contact Section */}
      <AnimatedSection id="contact" animation="slide-up" delay={300}>
        <section className="py-8">
          <div className="max-w-5xl mx-auto">
            <Contacts />
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
