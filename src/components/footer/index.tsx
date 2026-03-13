"use client";
import React, { useState, useEffect, useRef } from "react";
import { Github, Linkedin } from "../icons";
import { MapPinIcon, ClockIcon } from "@heroicons/react/20/solid";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import WhatsappIcon from "./WhatsappIcon";

function ContactCard({
  children,
  accent,
  delay = 0,
}: {
  children: React.ReactNode;
  accent: string;
  delay?: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [delay]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative rounded-2xl border border-gray-800/60 p-6 overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{
        background: "rgba(17, 17, 17, 0.5)",
        borderColor: isHovered ? `${accent}35` : undefined,
      }}
    >
      {/* Mouse-follow glow */}
      <div
        className="absolute w-48 h-48 rounded-full blur-3xl transition-opacity duration-500 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          background: `radial-gradient(circle, ${accent}15, transparent 70%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function Contacts() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const copyToClipboard = async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error("Erreur lors de la copie:", err);
    }
  };

  return (
    <div ref={sectionRef} className="flex flex-col w-full gap-10 px-4 lg:px-0 relative">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-10 -left-40 w-80 h-80 rounded-full bg-primary/[0.03] blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 -right-40 w-96 h-96 rounded-full bg-accent/[0.03] blur-3xl animate-float-reverse" />
      </div>

      {/* Header */}
      <div className="text-center space-y-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent mb-2 animate-text-shimmer">
            Restons en Contact
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Une idée de projet ? Une collaboration ? N&apos;hésitez pas à me contacter !
        </p>
      </div>

      {/* Contact Cards */}
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Email */}
          <ContactCard accent="#F37A1C" delay={0}>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20">
                <EnvelopeIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Email</h3>
                <p className="text-xs text-gray-500">Personnel</p>
              </div>
            </div>
            <a
              href="mailto:andrianantenainapaulodon@gmail.com"
              className="block text-gray-300 hover:text-primary transition-colors text-sm break-all"
            >
              andrianantenainapaulodon@gmail.com
            </a>
            <button
              onClick={() =>
                copyToClipboard("andrianantenainapaulodon@gmail.com", "email")
              }
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-primary transition-colors cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {copiedEmail ? (
                <span className="text-green-400">Copié !</span>
              ) : (
                <span>Copier</span>
              )}
            </button>
          </ContactCard>

          {/* WhatsApp */}
          <ContactCard accent="#3B82F6" delay={100}>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-accent/10 rounded-xl border border-accent/20">
                <WhatsappIcon />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Whatsapp</h3>
                <p className="text-xs text-gray-500">Madagascar</p>
              </div>
            </div>
            <a
              href="tel:+261342862206"
              className="block text-gray-300 hover:text-accent transition-colors text-sm"
            >
              +261 34 28 622 06
            </a>
            <button
              onClick={() => copyToClipboard("+261342862206", "phone")}
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-accent transition-colors cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {copiedPhone ? (
                <span className="text-green-400">Copié !</span>
              ) : (
                <span>Copier</span>
              )}
            </button>
          </ContactCard>
        </div>

        {/* Info row */}
        <div className="grid sm:grid-cols-2 gap-3 mt-4">
          <div
            className={`flex items-center gap-3 px-5 py-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-green-500/20 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping opacity-30" />
            </div>
            <div>
              <span className="text-sm text-white font-medium">Localisation</span>
              <p className="text-xs text-gray-500">Anywhere, je travaille en remote</p>
            </div>
          </div>

          <div
            className={`flex items-center gap-3 px-5 py-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-accent/20 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2.5 h-2.5 bg-accent rounded-full animate-ping opacity-30" />
            </div>
            <div>
              <span className="text-sm text-white font-medium">Disponibilité</span>
              <p className="text-xs text-gray-500">Ouvert aux opportunités</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div
        className={`flex justify-center gap-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "400ms" }}
      >
        {[
          {
            href: "https://www.linkedin.com/in/paul-odon",
            label: "LinkedIn",
            accent: "#0A66C2",
            icon: <Linkedin />,
          },
          {
            href: "https://github.com/PaulOdon",
            label: "GitHub",
            accent: "#8B949E",
            icon: <Github />,
          },
        ].map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="group relative p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] transition-all duration-300 hover:scale-110 overflow-hidden"
            style={{
              boxShadow: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = `${social.accent}40`;
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 25px ${social.accent}15`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `${social.accent}08` }}
            />
            <div className="relative z-10">{social.icon}</div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-8 border-t border-white/[0.05]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            Portfolio Paul Odon &mdash; {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span>v0.8</span>
            <span className="w-1 h-1 bg-gray-700 rounded-full" />
            <span>Mise à jour: 22.02.2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
