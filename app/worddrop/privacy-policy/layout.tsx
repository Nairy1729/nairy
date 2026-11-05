import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | WordDrop – Daily Vocabulary",
  description:
    "Official Privacy Policy for WordDrop – Daily Vocabulary Android application. 100% offline-first, zero tracking, zero advertisements, and no remote data collection.",
  keywords: [
    "WordDrop",
    "WordDrop Privacy Policy",
    "Daily Vocabulary App",
    "Offline Vocabulary Android",
    "Lock Screen Word App",
    "Android Privacy Policy",
    "Narendra Kumar",
    "Zero Tracking App"
  ],
  authors: [{ name: "Narendra Kumar" }],
  alternates: {
    canonical: "https://knairy.ink/worddrop/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | WordDrop – Daily Vocabulary",
    description:
      "100% on-device daily vocabulary learning, zero tracking, zero third-party ads, and no internet permissions. Official Privacy Policy for WordDrop.",
    url: "https://knairy.ink/worddrop/privacy-policy",
    siteName: "Narendra Portfolio",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | WordDrop – Daily Vocabulary",
    description:
      "100% offline vocabulary app, zero tracking, zero third-party ads. Official Privacy Policy for WordDrop.",
  },
};

export default function WordDropPrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
