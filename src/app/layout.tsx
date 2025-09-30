import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Regent - Operational Excellence, Perfected",
    template: "%s - Regent"
  },
  description: "Transform your golf facility's beverage service from outdated cart operations to sophisticated on-course ordering that matches your club's standards.",
  keywords: [
    "golf facility operations",
    "beverage cart technology", 
    "golf course ordering system",
    "golf club management",
    "on-course beverage service",
    "golf facility revenue optimization",
    "golf cart ordering app",
    "golf course technology"
  ],
  authors: [{ name: "Regent" }],
  creator: "Regent",
  publisher: "Regent",
  metadataBase: new URL("https://regentops.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Regent - Operational Excellence, Perfected",
    description: "Transform your golf facility's beverage service from outdated cart operations to sophisticated on-course ordering that matches your club's standards.",
    url: "https://regentops.com",
    siteName: "Regent",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Regent Golf Operations Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regent - Operational Excellence, Perfected",
    description: "Transform your golf facility's beverage service from outdated cart operations to sophisticated on-course ordering that matches your club's standards.",
    images: ["/og-image.png"],
    creator: "@regent",
  },
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
  verification: {
    google: "google-site-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <StructuredData type="service" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
