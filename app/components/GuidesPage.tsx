import { GuideCard } from "./GuideCard";
import { copy, guideCards, type Locale } from "./i18n";
import { SiteFooter, SiteHeader } from "./SiteChrome";

export function GuidesPage({ locale }: { locale: Locale }) {
  const c = copy[locale].guides;
  return <><SiteHeader locale={locale} route="guides"/><main id="main-content" className="hub-page shell-wide"><header className="section-heading section-heading--center"><p>{c.kicker}</p><h1>{c.title}</h1><div>{c.deck}</div></header><div className="hub-filter">{c.filters.map(x => <span key={x}>{x}</span>)}</div><div className="guide-grid guide-grid--three">{guideCards.map(card => <GuideCard key={card.title} locale={locale} {...card}/>)}</div></main><SiteFooter locale={locale}/></>;
}
