import { pathFor, type Locale, type RouteKey } from "./i18n";

export function GuideCard({ locale, tone, kicker, title, description, route, href, openLabel }: { locale: Locale; tone: string; kicker: string; title: string; description: string; route?: RouteKey; href?: string; openLabel: string }) {
  const target = route ? pathFor(locale, route) : `${locale === "en" ? "" : `/${locale}`}${href}`;
  return <a className={`guide-card guide-card--${tone}`} href={target}><span className="guide-card__kicker">{kicker}</span><h3>{title}</h3><p>{description}</p><span className="guide-card__link">{openLabel} <b>→</b></span></a>;
}
