import type { Metadata } from "next";
import { Sora, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shopsense.app"),
  title: {
    default: "ShopSense - AI Product Discovery for Shopify | Agentic Commerce",
    template: "%s | ShopSense",
  },
  description: "Turn your Shopify catalog into intelligent conversations. ShopSense helps customers find products with natural language, answers questions from your knowledge base, and drives more sales.",
  keywords: [
    "Shopify AI",
    "Product Discovery",
    "Agentic Commerce",
    "AI Shopping Assistant",
    "E-commerce AI",
    "Natural Language Search",
    "Semantic Search",
    "Shopify Apps",
    "Conversational Commerce",
    "AI Chatbot for Shopify",
  ],
  authors: [{ name: "ShopSense" }],
  creator: "ShopSense",
  publisher: "ShopSense",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shopsense.app",
    title: "ShopSense - AI Product Discovery for Shopify",
    description: "Agentic commerce that understands what your customers want. Natural language product discovery for Shopify stores.",
    siteName: "ShopSense",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ShopSense - AI Product Discovery Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopSense - AI Product Discovery for Shopify",
    description: "Agentic commerce that understands what your customers want. Natural language product discovery for Shopify stores.",
    images: ["/logo.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={`${sora.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
