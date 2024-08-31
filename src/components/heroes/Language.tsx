"use client";
import classNames from "classnames";
import React from "react";

const LanguageItemButton = ({
  language,
  active,
  onClick,
}: {
  language: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    className={classNames(
      "px-3 rounded-full text-sm",
      active && "bg-primary bg-opacity-20 font-bold"
    )}
    onClick={onClick}
  >
    {language}
  </button>
);

export default function Language() {
  const [language, setLanguage] = React.useState<"fr" | "en">("fr");
  const handleChangeLanguage = (lang: "fr" | "en") => {
    setLanguage(lang);
  };
  return (
    <div className="flex absolute lg:top-20 sm:top-10 sm:right-0 lg:left-[calc(50%_-_44px)] w-fit z-30 items-center justify-center border-primary border border-opacity-30 rounded-full">
      <LanguageItemButton
        active={language === "fr"}
        language="FR"
        onClick={() => handleChangeLanguage("fr")}
      />
      <LanguageItemButton
        active={language === "en"}
        language="EN"
        onClick={() => handleChangeLanguage("en")}
      />
    </div>
  );
}
