import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://machine-party-guide.com"),
  title: {
    default: "Machine Party Wiki: Minigames, Multiplayer & Guides",
    template: "%s | Machine Party Wiki",
  },
  description:
    "Independent Machine Party guide covering minigames, multiplayer, platforms, and beginner help.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Machine Party Wiki: Minigames, Multiplayer & Guides",
    description: "Independent field guide to the lethal 2–4 player party game.",
    images: [{ url: "/og-machine-party.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-machine-party.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
