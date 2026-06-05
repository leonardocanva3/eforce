import type { Metadata } from "next";
import { Bebas_Neue, Roboto_Condensed } from "next/font/google";
import { Footer, Header } from "@/components/layout";
import { FloatingWhatsApp } from "@/components/ui";
import { services } from "@/data/home";
import { siteConfig } from "@/data/site";
import "./globals.css";

const bodyFont = Roboto_Condensed({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: siteConfig.fullName,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  image: "/images/fachada-noite.jpeg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Juína",
    addressRegion: "MT",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "City",
    name: "Juína",
  },
  sameAs: [siteConfig.instagramHref, siteConfig.facebookHref],
  knowsAbout: services.map((service) => service.title),
};

export const metadata: Metadata = {
  title: "EFORCE Eletrônica Automotiva | Diagnóstico Automotivo em Juína-MT",
  description:
    "Especialistas em eletrônica automotiva, injeção eletrônica, módulos, ABS, chaves codificadas e diagnóstico avançado em Juína-MT.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable}`}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          type="application/ld+json"
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
