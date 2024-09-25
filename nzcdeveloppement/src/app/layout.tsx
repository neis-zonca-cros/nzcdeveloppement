import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NZC Développement", }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#172329" />
        <link rel="icon" href="/rocket.svg"/> 
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
