import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.machineparty.buzz"),
  title: {
    default: "Machine Party Guide: Minigames, Co-op & Codes",
    template: "%s | Machine Party Guide",
  },
  description:
    "Verified independent Machine Party guide covering 15 minigames, 2–4 player online and couch co-op, platforms, official links, and redeem-code status.",
  keywords: [
    "Machine Party",
    "Machine Party guide",
    "Machine Party minigames",
    "Machine Party multiplayer",
    "Machine Party couch co-op",
    "Machine Party codes",
  ],
  alternates: {
    canonical: "/",
    languages: { en: "/", fr: "/fr/", "pt-BR": "/pt-br/" },
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Machine Party Guide: Minigames, Co-op & Codes",
    description:
      "Verified guide to the lethal 2–4 player party game, including online and couch co-op, official links, and code status.",
    images: [
      {
        url: "/og-machine-party-guide.png",
        width: 1200,
        height: 630,
        alt: "Original industrial-horror artwork for the independent Machine Party guide",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-machine-party-guide.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "hsl(42 82% 69%)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body>
        {children}

        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
