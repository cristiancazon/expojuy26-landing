import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollRestoration from "@/components/layout/ScrollRestoration";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ExpoJuy 2026 — Conectando Países, Creando Oportunidades",
  description:
    "La feria comercial e industrial más importante del Norte Argentino. 23 al 25 de octubre de 2026 en San Salvador de Jujuy.",
  keywords: [
    "ExpoJuy",
    "Jujuy",
    "emprendedores",
    "tecnología",
    "innovación",
    "economía del conocimiento",
    "expo",
    "Argentina",
    "NOA",
    "startups",
  ],
  authors: [{ name: "ExpoJuy 2026" }],
  openGraph: {
    title: "ExpoJuy 2026 — Conectando Países, Creando Oportunidades",
    description:
      "La feria comercial e industrial más importante del Norte Argentino. 23 al 25 de octubre de 2026.",
    url: "https://expojuy.com.ar",
    siteName: "ExpoJuy 2026",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ExpoJuy 2026 — Conectando Países, Creando Oportunidades",
    description:
      "La feria comercial e industrial más importante del Norte Argentino. 23 al 25 de octubre de 2026.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className={`${inter.className} antialiased`}>
        <ScrollRestoration />
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Saltar al contenido principal
        </a>

        <Navbar />

        <main id="main-content" role="main">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
