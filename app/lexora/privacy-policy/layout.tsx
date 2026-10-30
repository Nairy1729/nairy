import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Lexora — Offline-First Word Puzzle",
  description:
    "Official Privacy Policy for Lexora, an offline-first word puzzle mobile game on PhonePe Appstore. 100% on-device gameplay, zero tracking, zero third-party ads, and no remote data collection.",
  keywords: [
    "Lexora",
    "Lexora Privacy Policy",
    "Word Puzzle Game",
    "Offline Word Game",
    "PhonePe Appstore Privacy Policy",
    "Android Privacy Policy",
    "Narendra Kumar",
    "No Data Collection App"
  ],
  authors: [{ name: "Narendra Kumar" }],
  alternates: {
    canonical: "https://knairy.ink/lexora/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Lexora — Offline-First Word Puzzle",
    description:
      "100% on-device gameplay, zero tracking, zero third-party ads, and no remote data collection. Official PhonePe Appstore Privacy Policy for Lexora.",
    url: "https://knairy.ink/lexora/privacy-policy",
    siteName: "Narendra Portfolio",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Lexora — Offline-First Word Puzzle",
    description:
      "100% offline gameplay, zero tracking, zero third-party ads. Official Privacy Policy for Lexora.",
  },
};

export default function LexoraPrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
