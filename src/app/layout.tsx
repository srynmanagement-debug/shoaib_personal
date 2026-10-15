import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Suheb Naik — Real Estate • Development • Investment | Goa",
    template: "%s | Suheb Naik — Goa Real Estate",
  },
  description:
    "Suheb Naik — Construction professional and real estate developer in Goa. 'What can this land become?' Exploring low-density residential, hospitality, and land opportunities.",
  keywords: [
    "Suheb Naik",
    "Goa Real Estate",
    "Goa Land Development",
    "Memaar",
    "Goa Property Investment",
    "Goa Construction Management",
    "Luxury Real Estate Goa",
    "Assagao",
    "North Goa Land",
  ],
  authors: [{ name: "Suheb Naik" }],
  creator: "Suheb Naik",
  metadataBase: new URL("https://suhebnaik.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suhebnaik.com",
    title: "Suheb Naik — Real Estate • Development • Investment",
    description:
      "Building Opportunities. What can this land become? Construction and development advisory across Goa.",
    siteName: "Suheb Naik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suheb Naik — Real Estate • Development • Investment",
    description: "Building Opportunities in Goa Real Estate & Development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col bg-ivory text-charcoal font-sans antialiased selection:bg-charcoal selection:text-ivory">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
