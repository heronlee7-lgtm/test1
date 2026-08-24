import type { Metadata } from "next";
import keywordManifest from "../../keywords.json";
import { keywordArticlesA } from "./keywordArticlesA";
import { keywordArticlesB } from "./keywordArticlesB";
import { keywordArticlesC } from "./keywordArticlesC";

export const keywordArticles = {
  ...keywordArticlesA,
  ...keywordArticlesB,
  ...keywordArticlesC,
};

export type KeywordArticleKey = keyof typeof keywordArticles;

export function keywordMetadata(key: KeywordArticleKey): Metadata {
  const entry = keywordManifest.find(item => item.slug === key);
  if (!entry) throw new Error(`Missing keyword manifest entry: ${key}`);
  return {
    title: { absolute: entry.title },
    description: entry.description,
    keywords: [entry.keyword, "Machine Party", "Machine Party guide"],
    alternates: { canonical: entry.path },
    openGraph: {
      title: entry.title,
      description: entry.description,
      images: [{ url: "/og-machine-party-guide.png", width: 1200, height: 630 }],
      type: "article",
    },
    twitter: { card: "summary_large_image", title: entry.title, description: entry.description, images: ["/og-machine-party-guide.png"] },
  };
}

export function keywordEntry(key: KeywordArticleKey) {
  const entry = keywordManifest.find(item => item.slug === key);
  if (!entry) throw new Error(`Missing keyword manifest entry: ${key}`);
  return entry;
}
