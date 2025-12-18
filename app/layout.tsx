import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pampas Travel",
  description:
    "Explora Pampas, Pallasca: naturaleza andina, costumbres ancestrales, rutas turísticas y experiencias auténticas en la sierra de Áncash.",
  metadataBase: new URL("https://pampastravel.vercel.app/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
