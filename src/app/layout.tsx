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
      <body
        className={
          inter.className +
          "h-screen flex lg:flex-row md:flex-col sm:flex-col justify-center bg-black"
        }
      >
        {children}
      </body>
    </html>
  );
}
