import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#08090d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Narendra | Java Full Stack Developer & Software Engineer",
  description:
    "Portfolio of Narendra, Java Full Stack Developer & Software Engineer. Specializing in Java, Spring Boot, PostgreSQL, REST APIs, and React.js.",
  keywords: [
    "Narendra",
    "Java Full Stack Developer",
    "Software Engineer",
    "Spring Boot",
    "PostgreSQL",
    "React.js",
    "TypeScript",
    "Docker",
    "REST APIs",
    "Hexaware Technologies"
  ],
  authors: [{ name: "Narendra" }],
  openGraph: {
    title: "Narendra | Java Full Stack Developer & Software Engineer",
    description:
      "Software engineer who builds real products from backend architecture to polished frontend experiences.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark scroll-smooth overflow-x-hidden`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full w-full flex flex-col bg-[#090a0f] text-slate-100 font-sans selection:bg-blue-600/30 selection:text-white overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
