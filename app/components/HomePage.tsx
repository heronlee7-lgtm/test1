import { GuideCard } from "./GuideCard";
import { copy, guideCards, officialLinks, pathFor, type Locale } from "./i18n";
import { HazardEmblem, SiteFooter, SiteHeader } from "./SiteChrome";

export function HomePage({ locale }: { locale: Locale }) {
  const c = copy[locale].home;
  const cards = guideCards[locale];
  const prefix = locale === "en" ? "" : `/${locale}`;

  return <><SiteHeader locale={locale} route="home"/><main id="main-content">
    <section className="home-hero"><div className="hero-grid"/><div className="hero-orbit hero-orbit--one"/><div className="hero-orbit hero-orbit--two"/><div className="hero-content shell-wide"><HazardEmblem large/><p className="eyebrow"><span>◈</span>{c.eyebrow}<span>◈</span></p><h1>{c.titlePrefix}<span>{c.titleGame}</span></h1><p className="hero-lead">{c.lead}</p><div className="hero-actions"><a className="button button--gold" href={pathFor(locale,"how-to-play")}>{c.primary}</a><a className="button button--outline" href={`${prefix}/minigames/`}>{c.secondary}</a></div></div></section>
    <div className="shell-wide hero-facts"><div className="fact-strip">{c.facts.map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></div>

    <section className="home-section shell-wide home-intro"><Heading kicker={c.introKicker} title={c.introTitle} deck={c.introDeck}/><div className="intro-layout"><div className="intro-copy"><p>{c.intro1}</p><p>{c.intro2}</p><a className="text-link" href={pathFor(locale,"how-to-play")}>{c.introLink} →</a></div><aside className="home-sidebar" aria-label={c.codesTitle}><dl className="quick-facts">{c.factsLabels.map((label, index) => <Fact key={label} label={label} value={c.factsValues[index]}/>)}</dl><section className="code-card"><p>{c.codesTitle}</p><strong>{c.codesStatus}</strong><span>{c.codesBody}</span><small>{c.codesChecked}</small></section><section className="official-links"><p>{c.officialTitle}</p><a href={officialLinks.website}>{c.officialLabels[0]} <b>↗</b></a><a href={officialLinks.discord}>{c.officialLabels[1]} <b>↗</b></a><a href={officialLinks.youtube}>{c.officialLabels[2]} <b>↗</b></a></section></aside></div></section>

    <section className="home-section home-section--tinted"><div className="shell-wide"><Heading center kicker={c.manualKicker} title={c.manualTitle} deck={c.manualDeck}/><div className="guide-grid guide-grid--four">{cards.slice(0,4).map(card => <GuideCard key={card.title} locale={locale} openLabel={copy[locale].guides.open} {...card}/>)}</div></div></section>
    <section className="home-section shell-wide"><Heading kicker={c.statusKicker} title={c.statusTitle} deck={c.statusDeck}/><div className="status-grid">{c.statuses.map(([tone,label,title,body]) => <article key={title} className={`status-card status-card--${tone}`}><span>{label}</span><h3>{title}</h3><p>{body}</p></article>)}</div><div className="inline-links"><a href={`${prefix}/guides/online-multiplayer/`}>{c.statusLinks[0]}</a><a href={`${prefix}/guides/local-couch-coop/`}>{c.statusLinks[1]}</a><a href={`${prefix}/guides/max-players/`}>{c.statusLinks[2]}</a></div></section>
    <section className="home-section home-section--tinted"><div className="shell-wide split-feature"><div className="simulation-visual"><span>15</span><small>{c.archiveLabel}</small></div><div><Heading kicker={c.archiveKicker} title={c.archiveTitle} deck={c.archiveDeck}/><a className="button button--gold" href={`${prefix}/minigames/`}>{c.archiveButton}</a></div></div></section>
    <section className="home-section shell-wide"><Heading center kicker={c.everyKicker} title={c.everyTitle}/><div className="guide-grid guide-grid--three">{cards.map(card => <GuideCard key={card.title} locale={locale} openLabel={copy[locale].guides.open} {...card}/>)}</div><div className="center-link"><a className="text-link" href={pathFor(locale,"guides")}>{c.viewGuides} →</a></div></section>
    <section className="home-section home-faq shell-wide"><Heading kicker={c.faqKicker} title={c.faqTitle}/><div className="faq-list">{c.faqs.map(([question,answer], index) => <details key={question} open={index === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
    <section className="home-cta"><div className="shell-wide"><p>{c.ctaKicker}</p><h2>{c.ctaTitle}</h2><div className="hero-actions"><a className="button button--gold" href={pathFor(locale,"guides")}>{c.ctaPrimary}</a><a className="button button--outline" href={officialLinks.steam}>{c.ctaSecondary}</a></div></div></section>
  </main><SiteFooter locale={locale}/></>;
}

function Heading({ kicker, title, deck, center=false }: { kicker:string; title:string; deck?:string; center?:boolean }) { return <header className={`section-heading ${center ? "section-heading--center" : "section-heading--left"}`}><p>{kicker}</p><h2>{title}</h2>{deck && <div>{deck}</div>}</header>; }
function Fact({ label, value }: { label:string; value:string }) { return <div><dt>{label}</dt><dd>{value}</dd></div>; }
