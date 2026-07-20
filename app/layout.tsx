import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luvia Marketing Digital — Estratégia e criatividade para marcas que querem crescer",
  description:
    "A Luvia é uma agência de marketing digital que une estratégia, design e performance para transformar marcas em referência. Conheça nossos serviços, portfólio e histórias de clientes.",
  keywords: [
    "agência de marketing digital",
    "marketing digital",
    "gestão de redes sociais",
    "branding",
    "tráfego pago",
    "Luvia",
  ],
  openGraph: {
    title: "Luvia Marketing Digital",
    description:
      "Estratégia, design e performance para marcas que querem crescer com identidade.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-ink font-body antialiased">{children}</body>
    </html>
  );
}
