import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/features/theme/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gian PC — Backend Engineer",
  description: "Backend Engineer especializado en Java, Spring Boot y AWS Serverless.",
  keywords: ["Java", "Backend", "AWS", "Spring Boot", "Next.js"],
  authors: [{ name: "Gian PC" }],
  openGraph: {
    title: "Gian PC — Backend Engineer",
    description: "Backend Engineer especializado en Java, Spring Boot y AWS Serverless.",
    url: "https://gianpc.com",
    siteName: "gianpc.com",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}