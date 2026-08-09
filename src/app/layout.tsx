import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { LanguageProvider } from "@/i18n/LanguageContext";

import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";
import { Terminal } from "@/components/ui/Terminal";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rvkhmnv.dev"),
  title: "rvkhmnv | Full-Stack Web Developer",
  description: "Проектирую и разрабатываю веб-приложения любой сложности: от эффектного и динамичного UI до надежной серверной архитектуры.",
  keywords: ["rvkhmnv", "разработка сайта", "веб разработчик Ташкент", "Next.js", "Full Stack"],
  authors: [{ name: "rvkhmnv" }],
  creator: "rvkhmnv",
  openGraph: {
    title: "rvkhmnv | Full-Stack Web Developer",
    description: "Проектирую и разрабатываю веб-приложения любой сложности: от эффектного и динамичного UI до надежной серверной архитектуры.",
    url: "https://rvkhmnv.uz", // Note: Change this to actual domain
    siteName: "rvkhmnv Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Create this in public folder
        width: 1200,
        height: 630,
        alt: "rvkhmnv - Full-Stack Developer",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "rvkhmnv | Full-Stack Web Developer",
    description: "Проектирую и разрабатываю веб-приложения любой сложности.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "rvkhmnv",
    url: "https://rvkhmnv.uz",
    jobTitle: "Full-Stack Web Developer",
    description: "Проектирую и разрабатываю веб-приложения любой сложности: от эффектного и динамичного UI до надежной серверной архитектуры.",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-on-surface selection:bg-primary/30 selection:text-primary transition-colors duration-300 md:cursor-none">
        <NoiseOverlay />
        <Preloader />
        <Terminal />
        <CustomCursor />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
          <AnimatedBackground />
          <LanguageProvider>
          <ScrollProgress />
          <SmoothScroll>
            <Navbar />
            {children}
          </SmoothScroll>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
