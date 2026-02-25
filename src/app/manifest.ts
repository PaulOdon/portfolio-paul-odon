import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Paul Odon | Développeur Full Stack Web & Mobile",
    short_name: "Paul Odon",
    description:
      "Portfolio de Paul Odon ANDRIANANTENAINA, ingénieur développeur Full Stack Web & Mobile spécialisé en React, Vue.js, Next.js et React Native.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#F37A1C",
    orientation: "portrait-primary",
    scope: "/",
    lang: "fr",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/paul-icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/paul-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
    categories: ["portfolio", "technology", "developer"],
  };
}
