import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Montserrat({ subsets: ["latin"] });

const BASE_URL = "https://paulodon.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Paul Odon | Développeur Full Stack Web & Mobile",
    template: "%s | Paul Odon",
  },

  description:
    "Ingénieur développeur Full Stack JavaScript avec 4+ ans d'expérience. Spécialisé en React, Vue.js, Next.js, Nuxt.js, Nest.js et React Native. Disponible pour missions freelance — web, mobile, SaaS.",

  keywords: [
    "Paul Odon",
    "Paul Odon ANDRIANANTENAINA",
    "développeur full stack",
    "développeur web",
    "développeur mobile",
    "développeur freelance",
    "développeur freelance Madagascar",
    "ingénieur logiciel",
    "React",
    "Vue.js",
    "Next.js",
    "Nuxt.js",
    "Nest.js",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "PostgreSQL",
    "TailwindCSS",
    "Supabase",
    "frontend developer",
    "fullstack developer",
    "développeur JavaScript",
    "développeur TypeScript",
    "développeur SaaS",
    "portfolio développeur",
    "web developer Madagascar",
    "applications web",
    "applications mobiles",
  ],

  authors: [{ name: "Paul Odon ANDRIANANTENAINA", url: BASE_URL }],
  creator: "Paul Odon ANDRIANANTENAINA",
  publisher: "Paul Odon ANDRIANANTENAINA",
  applicationName: "Portfolio Paul Odon",
  category: "technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    title: "Paul Odon | Développeur Full Stack Web & Mobile",
    description:
      "Ingénieur développeur Full Stack JavaScript avec 4+ ans d'expérience. Spécialisé en React, Vue.js, Next.js et React Native. Disponible pour missions freelance.",
    siteName: "Portfolio Paul Odon",
    images: [
      {
        url: "/Paul.jpg",
        width: 1200,
        height: 630,
        alt: "Paul Odon ANDRIANANTENAINA - Développeur Full Stack Web & Mobile",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Paul Odon | Développeur Full Stack Web & Mobile",
    description:
      "Ingénieur développeur Full Stack JavaScript avec 4+ ans d'expérience. Spécialisé en React, Vue.js, Next.js et React Native.",
    images: ["/Paul.jpg"],
  },

  alternates: {
    canonical: BASE_URL,
    languages: {
      "fr-FR": BASE_URL,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/paul-icon.png", sizes: "192x192" }],
    other: [{ rel: "mask-icon", url: "/paul-icon.svg" }],
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      name: "Portfolio Paul Odon",
      url: BASE_URL,
      description:
        "Portfolio de Paul Odon ANDRIANANTENAINA, ingénieur développeur Full Stack Web & Mobile",
      inLanguage: "fr-FR",
      author: { "@id": `${BASE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${BASE_URL}/#profilepage`,
      url: BASE_URL,
      name: "Paul Odon | Développeur Full Stack Web & Mobile",
      description:
        "Ingénieur développeur Full Stack JavaScript avec 4+ ans d'expérience, spécialisé en React, Vue.js, Next.js, Nuxt.js, Nest.js et React Native.",
      inLanguage: "fr-FR",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#person` },
      mainEntity: { "@id": `${BASE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Paul Odon ANDRIANANTENAINA",
      alternateName: "Paul Odon",
      jobTitle: "Ingénieur développeur Full Stack Web & Mobile",
      description:
        "Développeur Full Stack JavaScript avec 4+ ans d'expérience, spécialisé en React, Vue.js, Next.js, Nuxt.js, Nest.js et React Native. Disponible pour missions freelance.",
      url: BASE_URL,
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}/Paul.jpg`,
        width: 220,
        height: 220,
      },
      telephone: "+261342862206",
      address: {
        "@type": "PostalAddress",
        addressCountry: "MG",
        addressLocality: "Antananarivo",
        addressRegion: "Madagascar",
      },
      sameAs: [
        "https://www.linkedin.com/in/paul-odon/",
        "https://github.com/PaulOdon",
        "https://wa.me/261342862206",
        "https://calendly.com/paulodon/meet-me",
      ],
      knowsAbout: [
        "React",
        "Vue.js",
        "Next.js",
        "Nuxt.js",
        "Nest.js",
        "React Native",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "TailwindCSS",
        "Supabase",
        "Swift",
        "Full Stack Development",
        "Web Development",
        "Mobile Development",
        "SaaS Architecture",
      ],
      knowsLanguage: [
        { "@type": "Language", name: "Français" },
        { "@type": "Language", name: "English" },
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Développeur Full Stack JavaScript",
        occupationLocation: {
          "@type": "Country",
          name: "Madagascar",
        },
        skills: "React, Vue.js, Next.js, Nuxt.js, Nest.js, React Native, TypeScript",
      },
      worksFor: {
        "@type": "Organization",
        name: "Freelance / Indépendant",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#F37A1C" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className + " bg-black"}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
