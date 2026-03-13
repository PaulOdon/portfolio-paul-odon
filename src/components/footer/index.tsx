"use client";
import React, { useState } from "react";
import { Github, Linkedin } from "../icons";
import { MapPinIcon, ClockIcon } from "@heroicons/react/20/solid";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import WhatsappIcon from "./WhatsappIcon";

export default function Contacts() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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
    <div className="flex flex-col w-full gap-10 px-4 lg:px-0">
      {/* Header */}
      <div className="text-center space-y-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
            Restons en Contact
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Une idée de projet ? Une collaboration ? N&apos;hésitez pas à me
          contacter !
        </p>
      </div>

      {/* Contact Cards */}
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Email Card */}
          <div className="group relative rounded-2xl border border-gray-800/60 p-6 overflow-hidden transition-all duration-500 hover:border-primary/40"
            style={{ background: "rgba(17, 17, 17, 0.5)" }}
          >
            <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(243,122,28,0.15), transparent 70%)" }}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20 group-hover:bg-primary/15 transition-colors duration-300">
                  <EnvelopeIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">Email</h3>
                  <p className="text-xs text-gray-500">Personnel</p>
                </div>
              </div>
              <div className="relative">
                <a
                  href="mailto:andrianantenainapaulodon@gmail.com"
                  className="block text-gray-300 hover:text-primary transition-colors text-sm break-all"
                >
                  andrianantenainapaulodon@gmail.com
                </a>
                <button
                  onClick={() =>
                    copyToClipboard(
                      "andrianantenainapaulodon@gmail.com",
                      "email",
                    )
                  }
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-primary transition-colors cursor-pointer"
                  title="Copier l'email"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  {copiedEmail ? (
                    <span className="text-green-400">Copié !</span>
                  ) : (
                    <span>Copier</span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="group relative rounded-2xl border border-gray-800/60 p-6 overflow-hidden transition-all duration-500 hover:border-accent/40"
            style={{ background: "rgba(17, 17, 17, 0.5)" }}
          >
            <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)" }}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-accent/10 rounded-xl border border-accent/20 group-hover:bg-accent/15 transition-colors duration-300">
                  <WhatsappIcon />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">Whatsapp</h3>
                  <p className="text-xs text-gray-500">Madagascar</p>
                </div>
              </div>
              <div className="relative">
                <a
                  href="tel:+261342862206"
                  className="block text-gray-300 hover:text-accent transition-colors text-sm"
                >
                  +261 34 28 622 06
                </a>
                <button
                  onClick={() => copyToClipboard("+261342862206", "phone")}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-accent transition-colors cursor-pointer"
                  title="Copier le numéro"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  {copiedPhone ? (
                    <span className="text-green-400">Copié !</span>
                  ) : (
                    <span>Copier</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Info row */}
        <div className="grid sm:grid-cols-2 gap-3 mt-4">
          <div className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-green-500/20 transition-colors duration-300">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <div>
              <span className="text-sm text-white font-medium">Localisation</span>
              <p className="text-xs text-gray-500">Anywhere, je travaille en remote</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-accent/20 transition-colors duration-300">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <div>
              <span className="text-sm text-white font-medium">Disponibilité</span>
              <p className="text-xs text-gray-500">Ouvert aux opportunités</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/paul-odon"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#0A66C2]/40 transition-all duration-300 hover:scale-105 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#0A66C2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Linkedin />
        </a>

        <a
          href="https://github.com/PaulOdon"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-gray-400/40 transition-all duration-300 hover:scale-105 overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Github />
        </a>
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
