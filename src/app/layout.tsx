import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "N.Hauser — Engenharia e Estruturas",
  description: "Soluções em engenharia e estruturas metálicas com precisão, qualidade e compromisso em cada detalhe.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
