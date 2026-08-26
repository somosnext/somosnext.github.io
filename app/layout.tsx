import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://drabeatrizdemarchi.vercel.app";
const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const socialImage = `${assetBase}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dra. Beatriz Demarchi | Harmonização Facial e Íntima",
  description:
    "Harmonização facial e íntima feminina com naturalidade, planejamento e atendimento humanizado em Dourados, MS.",
  openGraph: {
    title: "Dra. Beatriz Demarchi",
    description: "Harmonização Facial & Íntima em Dourados, MS",
    images: [socialImage],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Beatriz Demarchi",
    description: "Harmonização Facial & Íntima em Dourados, MS",
    images: [socialImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${serif.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
