import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";
import "./institutional.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "N.Hauser — Engenharia e Estruturas",
    template: "%s | N.Hauser",
  },
  description: "Engenharia e estruturas metálicas em Lontras, Santa Catarina. Galpões, coberturas, mezaninos, escadas, guarda-corpos e corrimãos.",
  keywords: ["engenharia", "estruturas metálicas", "galpões", "coberturas", "mezaninos", "Lontras", "Santa Catarina"],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon", sizes: "64x64", type: "image/png" }],
    shortcut: "/icon",
    apple: "/icon",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "N.Hauser — Engenharia e Estruturas",
    title: "N.Hauser — Engenharia e Estruturas",
    description: "Projetos estruturais e soluções sob medida, do planejamento à execução.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "N.Hauser — Engenharia e Estruturas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "N.Hauser — Engenharia e Estruturas",
    description: "Engenharia e estruturas metálicas em Lontras, Santa Catarina.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
