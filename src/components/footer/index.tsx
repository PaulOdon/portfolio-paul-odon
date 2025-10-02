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
    <div className="flex flex-col w-full gap-8">
      {/* Enhanced Section Header */}
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

      {/* Contact Cards Grid */}
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid gap-4 md:gap-6">
          {/* Main Contact Card */}
          <div className="bg-gradient-to-br from-dark-gray/90 to-darker-gray/90 backdrop-blur-md rounded-2xl border border-gray-800/60 hover:border-primary/40 transition-all duration-500 group overflow-hidden">
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                      <EnvelopeIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm">
                        Email
                      </h3>
                      <p className="text-xs text-gray-500">Personnel</p>
                    </div>
                  </div>
                  <div className="relative">
                    <a
                      href="mailto:andrianantenainapaulodon@gmail.com"
                      className="block text-gray-300 hover:text-primary transition-colors text-sm break-all group-hover:text-primary/80"
                    >
                      andrianantenainapaulodon@gmail.com
                    </a>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          "andrianantenainapaulodon@gmail.com",
                          "email"
                        )
                      }
                      className="absolute -right-1 top-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/10 rounded"
                      title="Copier l'email"
                    >
                      <svg
                        className="w-4 h-4 text-gray-400 hover:text-primary"
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
                    </button>
                    {copiedEmail && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded border border-green-500/30">
                        Copié !
                      </div>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-accent/10 rounded-lg border border-accent/20">
                      <WhatsappIcon />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm">
                        Whatsapp
                      </h3>
                      <p className="text-xs text-gray-500">Madagascar</p>
                    </div>
                  </div>
                  <div className="relative">
                    <a
                      href="tel:+261342862206"
                      className="block text-gray-300 hover:text-accent transition-colors text-sm group-hover:text-accent/80"
                    >
                      +261 34 28 622 06
                    </a>
                    <button
                      onClick={() => copyToClipboard("+261342862206", "phone")}
                      className="absolute -right-1 top-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent/10 rounded"
                      title="Copier le numéro"
                    >
                      <svg
                        className="w-4 h-4 text-gray-400 hover:text-accent"
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
                    </button>
                    {copiedPhone && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded border border-green-500/30">
                        Copié !
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Location */}
            <div className="bg-gradient-to-br from-dark-gray/60 to-darker-gray/60 backdrop-blur-sm rounded-xl p-4 border border-gray-800/40 hover:border-green-500/30 transition-all duration-300 group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/10 rounded-lg border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                  <MapPinIcon className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">
                    Localisation
                  </h4>
                  <p className="text-xs text-gray-400">
                    Anywhere, je traille en remote
                  </p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-dark-gray/60 to-darker-gray/60 backdrop-blur-sm rounded-xl p-4 border border-gray-800/40 hover:border-blue-500/30 transition-all duration-300 group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                  <ClockIcon className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">
                    Disponibilité
                  </h4>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-xs text-gray-400">
                      Ouvert aux opportunités
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-lg font-semibold text-gray-300">Réseaux Sociaux</h3>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/paul-odon"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 rounded-2xl bg-gradient-to-br from-dark-gray/80 to-darker-gray/80 border border-gray-800/50 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Linkedin />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-primary/20 text-primary text-xs px-2 py-1 rounded border border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-bottom-12">
              LinkedIn
            </div>
          </a>

          <a
            href="https://github.com/PaulOdon"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 rounded-2xl bg-gradient-to-br from-dark-gray/80 to-darker-gray/80 border border-gray-800/50 hover:border-gray-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-600/10 to-gray-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Github />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-600/20 text-gray-300 text-xs px-2 py-1 rounded border border-gray-600/30 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-bottom-12">
              GitHub
            </div>
          </a>
        </div>
      </div>

      {/* Enhanced Footer */}
      <div className="pt-8 border-t border-gray-800/50 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-gray-400 text-sm">Portfolio Paul Odon - 2025</p>
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <span>Version 0.7</span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-600">
            Développeur FullStack passionné par la création d&apos;expériences
            numériques exceptionnelles
          </p>
        </div>
      </div>
    </div>
  );
}
