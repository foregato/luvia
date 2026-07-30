import type { Metadata } from "next";
import { Fraunces, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Luvia — Social Media & Marketing Digital",
  description:
    "Luvia é uma agência de social media, marketing digital e criação de conteúdo. Estratégia, produção e resultado para a sua marca nas redes sociais.",
  icons: {
    icon: "/images/logo/logodaluviaSF.png",
    apple: "/images/logo/logodaluviaSF.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fraunces.variable} ${inter.variable} ${spaceMono.variable} bg-paper font-body text-ink antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}