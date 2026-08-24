import Link from "next/link";
import keywordManifest from "../../keywords.json";
import { GuideCard } from "./GuideCard";
import { copy, guideCards, type Locale } from "./i18n";
import { SiteFooter, SiteHeader } from "./SiteChrome";

export function GuidesPage({ locale }: { locale: Locale }) {
  const c = copy[locale].guides;
  return <><SiteHeader locale={locale} route="guides"/><main id="main-content" className="hub-page shell-wide"><header className="section-heading section-heading--center"><p>{c.kicker}</p><h1>{c.title}</h1><div>{c.deck}</div></header><div className="hub-filter">{c.filters.map(x => <span key={x}>{x}</span>)}</div><div className="guide-grid guide-grid--three">{guideCards[locale].map(card => <GuideCard key={card.title} locale={locale} openLabel={c.open} {...card}/>)}</div>{locale === "en" && <section className="keyword-index"><p>13 researched search intents</p><h2>Keyword Pages</h2><div>{keywordManifest.map(item => <Link key={item.slug} href={item.path}><span>{item.keyword}</span><strong>{item.title}</strong><b>→</b></Link>)}</div></section>}</main><SiteFooter locale={locale}/></>;
}
