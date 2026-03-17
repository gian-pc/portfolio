import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/features/theme/ThemeProvider";
import { LanguageProvider } from "@/features/i18n/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://gianpc.com"),
  title: {
    default: "gianpc | Software Developer",
    template: "%s | gianpc",
  },
  description: "Software Developer enfocado en APIs backend, arquitectura moderna y entornos cloud.",
  keywords: [
    "Software Developer",
    "Backend Developer",
    "Spring Boot",
    "APIs REST",
    "AWS",
    "Microservices",
    "CI/CD",
    "Developer Peru",
  ],
  authors: [{ name: "Gian PC" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "gianpc | Software Developer",
    description: "Portfolio con proyectos de backend, arquitectura moderna y cloud.",
    url: "https://gianpc.com",
    siteName: "gianpc.com",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/og-cover.jpg?v=2",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "gianpc - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "gianpc | Software Developer",
    description: "Portfolio con proyectos de backend, arquitectura moderna y cloud.",
    images: ["/og-cover.jpg?v=2"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
