import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "../components/HomePage";
import { locales, type Locale } from "../components/i18n";

const seo = {
  fr: { title: "Guide Machine Party : mini-jeux, coop et codes", description: "Guide indépendant vérifié de Machine Party : 15 mini-jeux, coop en ligne et locale pour 2 à 4 joueurs, plateformes, liens officiels et état des codes." },
  "pt-br": { title: "Guia de Machine Party: minijogos, coop e códigos", description: "Guia independente e verificado de Machine Party: 15 minijogos, coop online e local para 2–4 pessoas, plataformas, links oficiais e status dos códigos." },
} as const;

export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{
  const {locale}=await params;
  if(locale !== "fr" && locale !== "pt-br") return {};
  return { title: { absolute: seo[locale].title }, description: seo[locale].description, alternates: { canonical: `/${locale}/`, languages: { en: "/", fr: "/fr/", "pt-BR": "/pt-br/" } }, openGraph: { title: seo[locale].title, description: seo[locale].description, locale: locale === "fr" ? "fr_FR" : "pt_BR", images: [{ url: "/og-machine-party-guide.png", width: 1200, height: 630 }] } };
}

export default async function Page({params}:{params:Promise<{locale:string}>}){ const {locale}=await params; if(!locales.includes(locale as Locale)||locale==="en") notFound(); return <HomePage locale={locale as Locale}/>; }
