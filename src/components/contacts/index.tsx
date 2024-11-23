import React from "react";
import { Github, Linkedin } from "../icons";
import { LinkIcon } from "@heroicons/react/20/solid";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";

export default function Contacts() {
  return (
    <div className="flex flex-col gap-4 text-white py-8">
      <div className="flex flex-col-reverse gap-4 items-center">
        <div className="flex items-center gap-1">
          <p>Portfolio v0.1</p>
        </div>
        <div className="flex items-center gap-1">
          <DevicePhoneMobileIcon width={16} />
          <p>+261 34 28 622 06</p>
        </div>
        <div className="flex items-center gap-1">
          <LinkIcon width={16} />
          <p>andrianantenainapaulodon@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
