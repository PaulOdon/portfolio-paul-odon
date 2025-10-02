import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paul Odon ANDRIANANTENAINA | Développeur Full Stack Web & Mobile",
  description:
    "Ingénieur développeur full stack spécialisé en React, Vue.js, Next.js, Nuxt.js, Nest.js et React Native. Découvrez mon parcours, mes projets et mes compétences en développement web et mobile.",
  keywords: [
    "Paul Odon",
    "développeur full stack",
    "développeur web",
    "développeur mobile",
    "React",
    "Vue.js",
    "Next.js",
    "Nuxt.js",
    "Nest.js",
    "React Native",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "ingénieur logiciel",
    "développeur freelance",
    "Madagascar",
  ],
  authors: [{ name: "Paul Odon ANDRIANANTENAINA" }],
  creator: "Paul Odon ANDRIANANTENAINA",
  publisher: "Paul Odon ANDRIANANTENAINA",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://paul-odon.xyz",
    title: "Paul Odon ANDRIANANTENAINA | Développeur Full Stack",
    description:
      "Ingénieur développeur full stack spécialisé en React, Vue.js, Next.js, Nuxt.js, Nest.js et React Native.",
    siteName: "Portfolio Paul Odon",
    images: [
      {
        url: "https://paul-odon.xyz/Paul.jpg",
        width: 1200,
        height: 630,
        alt: "Paul Odon ANDRIANANTENAINA - Développeur Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul Odon ANDRIANANTENAINA | Développeur Full Stack",
    description:
      "Ingénieur développeur full stack spécialisé en React, Vue.js, Next.js et React Native.",
    images: ["https://paul-odon.xyz/Paul.jpg"],
  },
  alternates: {
    canonical: "https://paul-odon.xyz",
  },
  verification: {
    google: "votre-code-verification-google",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Paul Odon ANDRIANANTENAINA",
              alternateName: "Paul Odon",
              jobTitle: "Ingénieur développeur Full Stack web/mobile",
              description:
                "Développeur full stack spécialisé en React, Vue.js, Next.js, Nuxt.js, Nest.js et React Native",
              url: "https://paul-odon.xyz",
              image: "https://paul-odon.xyz/Paul.jpg",
              email: "paulodon@example.com",
              telephone: "+261342862206",
              address: {
                "@type": "PostalAddress",
                addressCountry: "Madagascar",
              },
              sameAs: [
                "https://www.linkedin.com/in/paul-odon/",
                "https://github.com/PaulOdon",
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
                "PostgreSQL",
                "Node.js",
                "Full Stack Development",
                "Web Development",
                "Mobile Development",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className + " bg-black"}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
