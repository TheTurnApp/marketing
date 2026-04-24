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
    default: "The Turn — On-Course Ordering for Modern Golf Clubs",
    template: "%s - The Turn"
  },
  description: "The Turn is on-course beverage and F&B ordering for golf clubs. Give members a beautifully simple way to order — and your team the tools to deliver effortlessly.",
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
  authors: [{ name: "The Turn" }],
  creator: "The Turn",
  publisher: "The Turn",
  metadataBase: new URL("https://trytheturn.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Turn — On-Course Ordering for Modern Golf Clubs",
    description: "On-course beverage and F&B ordering for golf clubs. Give members a beautifully simple way to order — and your team the tools to deliver effortlessly.",
    url: "https://trytheturn.com",
    siteName: "The Turn",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Turn — On-Course Ordering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Turn — On-Course Ordering for Modern Golf Clubs",
    description: "On-course beverage and F&B ordering for golf clubs. Give members a beautifully simple way to order — and your team the tools to deliver effortlessly.",
    images: ["/og-image.png"],
    creator: "@trytheturn",
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
