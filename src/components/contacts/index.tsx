import React from "react";
import { Github, Linkedin } from "../icons";
import { LinkIcon } from "@heroicons/react/20/solid";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";

export default function Contacts() {
  return (
    <div className="text-center">
      {/* Section Title */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
          Contactez-moi
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-br from-dark-gray/50 to-darker-gray/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/30 hover:border-primary/30 transition-all duration-300 group">
          <LinkIcon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <p className="text-lg font-semibold text-white mb-2">Email</p>
          <a
            href="mailto:andrianantenainapaulodon@gmail.com"
            className="text-gray-300 hover:text-primary transition-colors text-sm md:text-base break-all"
          >
            andrianantenainapaulodon@gmail.com
          </a>
        </div>

        <div className="bg-gradient-to-br from-dark-gray/50 to-darker-gray/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/30 hover:border-accent/30 transition-all duration-300 group">
          <DevicePhoneMobileIcon className="w-8 h-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <p className="text-lg font-semibold text-white mb-2">Téléphone</p>
          <a
            href="tel:+261342862206"
            className="text-gray-300 hover:text-accent transition-colors text-sm md:text-base"
          >
            +261 34 28 622 06
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mb-4">
        <a
          href="https://www.linkedin.com/in/paul-odon"
          target="_blank"
          className="p-4 rounded-full bg-gradient-to-r from-dark-gray to-darker-gray hover:from-primary hover:to-primary-light transition-all duration-300 transform hover:scale-110 shadow-lg group"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/PaulOdon"
          target="_blank"
          className="p-4 rounded-full bg-gradient-to-r from-dark-gray to-darker-gray hover:from-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:scale-110 shadow-lg group"
        >
          <Github />
        </a>
      </div>

      {/* Footer */}
      <div className="pt-8 border-t border-gray-800/50">
        <p className="text-gray-500 text-sm">Portfolio v0.3</p>
      </div>
    </div>
  );
}
