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

const absoluteUrl = (path: string) => new URL(path, siteConfig.siteUrl).toString();
const siteTitle =
  "EFORCE Eletrônica Automotiva em Juína-MT | ABS, Airbag, Chaves e Módulos";
const siteDescription =
  "Eletrônica Automotiva em Juína - MT com especialistas em ABS, Airbag, Chaves Codificadas, Programação de Módulos e Scanner Automotivo Profissional.";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: siteConfig.fullName,
  url: siteConfig.siteUrl,
  description: siteDescription,
  telephone: siteConfig.phone,
  image: absoluteUrl("/images/fachada-noite.jpeg"),
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.state,
    addressCountry: siteConfig.country,
  },
  areaServed: {
    "@type": "City",
    name: siteConfig.city,
  },
  sameAs: [siteConfig.instagramHref, siteConfig.facebookHref],
  knowsAbout: [
    "Eletrônica Automotiva em Juína - MT",
    "Especialista em ABS",
    "Especialista em Airbag",
    "Chaves Codificadas",
    "Programação de Módulos",
    "Scanner Automotivo Profissional",
    ...services.map((service) => service.title),
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de eletrônica automotiva",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        areaServed: `${siteConfig.city} - ${siteConfig.state}`,
      },
    })),
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.fullName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/fachada-noite.jpeg",
        width: 1200,
        height: 630,
        alt: "Fachada da EFORCE Eletrônica Automotiva em Juína-MT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/fachada-noite.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
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
