import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-serif", display: "swap" });
const sans = Jost({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const title = "Gídia — Comunicação & Marketing | Locução, rosto de marca e conteúdo";
const description =
  "Presença que comunica. Voz que transforma. Locução e narração, vídeos publicitários, rosto de marca e criação de conteúdo para marcas em Angola.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  themeColor: "#0A0908",
  keywords: ["Gídia de Jesus", "locução Angola", "narração", "rosto de marca", "criação de conteúdo", "marketing Lubango"],
  icons: { icon: "/favicon.png", apple: "/android-chrome-512x512.png" },
  openGraph: { title, description, url: site.url, siteName: "Gídia", images: [{ url: "/og.jpg", width: 1200, height: 630 }], locale: "pt_AO", type: "website" },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
