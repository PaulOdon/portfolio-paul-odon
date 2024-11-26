import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paul Odon",
  description: "Ce site présente Paul Odon ANDRIANANTENAINA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Paul Odon",
              jobTitle: "Ingénieur développeur web/mobile",
              url: "https://paul-odon.xyz",
              sameAs: [
                "https://www.linkedin.com/in/paul-odon/",
                "https://github.com/PaulOdon",
              ],
            }),
          }}
        />
      </head>
      <body
        className={
          inter.className +
          "h-screen flex lg:flex-row md:flex-col sm:flex-col justify-center bg-black relative"
        }
      >
        <div className="absolute top-10 left-1/3 w-96 h-56 bg-gradient-to-r from-blue-400 to-purple-600 blur-3xl opacity-50 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-green-800 to-blue-900 blur-2xl opacity-40 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-600 blur-3xl opacity-30 rounded-full"></div>

        <div className="relative z-10 flex items-center justify-center h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
