import Link from "next/link";
import { GuideCard } from "./GuideCard";
import { copy, guideCards, pathFor, type Locale } from "./i18n";
import { HazardEmblem, SiteFooter, SiteHeader } from "./SiteChrome";

const statuses = [
  ["confirmed", "Confirmed", "Online Co-op", "Steam lists online co-op, and the official party size is 2–4 players."],
  ["unavailable", "Design decision", "No Public Matchmaking", "The base game has no public matchmaking or in-game lobby list."],
  ["watch", "In development", "Local Couch Co-op", "Local multiplayer was still in development at the latest verified check."],
];

export function HomePage({ locale }: { locale: Locale }) {
  const c = copy[locale].home;
  return <><SiteHeader locale={locale} route="home"/><main id="main-content">
    <section className="home-hero"><div className="hero-grid"/><div className="hero-orbit hero-orbit--one"/><div className="hero-orbit hero-orbit--two"/><div className="hero-content shell-wide"><HazardEmblem large/><p className="eyebrow"><span>◈</span>{c.eyebrow}<span>◈</span></p><h1>{c.title.replace("Machine Party", "")}<span>Machine Party</span></h1><p className="hero-lead">{c.lead}</p><div className="hero-actions"><Link className="button button--gold" href={pathFor(locale,"how-to-play")}>{c.primary}</Link><Link className="button button--outline" href={`${locale === "en" ? "" : `/${locale}`}/minigames/`}>{c.secondary}</Link></div></div></section>
    <div className="shell-wide hero-facts"><div className="fact-strip">{c.facts.map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></div>
    <section className="home-section shell-wide home-intro"><Heading kicker={c.introKicker} title={c.introTitle} deck={c.introDeck}/><div className="intro-layout"><div className="intro-copy"><p>{c.intro1}</p><p>{c.intro2}</p><Link className="text-link" href={pathFor(locale,"how-to-play")}>{c.introLink} →</Link></div><dl className="quick-facts"><Fact label="Developers" value="Mike Klubnika & GDeavid"/><Fact label="Publisher" value="Oro Interactive"/><Fact label="Genre" value="Action · Indie · Horror"/><Fact label="Checked" value="August 4, 2026"/></dl></div></section>
    <section className="home-section home-section--tinted"><div className="shell-wide"><Heading center kicker={c.manualKicker} title={c.manualTitle} deck={c.manualDeck}/><div className="guide-grid guide-grid--four">{guideCards.slice(0,4).map(card => <GuideCard key={card.title} locale={locale} {...card}/>)}</div></div></section>
    <section className="home-section shell-wide"><Heading kicker={c.statusKicker} title={c.statusTitle} deck={c.statusDeck}/><div className="status-grid">{statuses.map(([tone,label,title,body]) => <article key={title} className={`status-card status-card--${tone}`}><span>{label}</span><h3>{title}</h3><p>{body}</p></article>)}</div><div className="inline-links"><Link href={`${locale === "en" ? "" : `/${locale}`}/guides/online-multiplayer/`}>Online Multiplayer</Link><Link href={`${locale === "en" ? "" : `/${locale}`}/guides/local-couch-coop/`}>Local Co-op</Link><Link href={`${locale === "en" ? "" : `/${locale}`}/guides/max-players/`}>Max Players</Link></div></section>
    <section className="home-section home-section--tinted"><div className="shell-wide split-feature"><div className="simulation-visual"><span>15</span><small>lethal programs</small></div><div><Heading kicker={c.archiveKicker} title={c.archiveTitle} deck={c.archiveDeck}/><Link className="button button--gold" href={`${locale === "en" ? "" : `/${locale}`}/minigames/`}>Explore Minigames</Link></div></div></section>
    <section className="home-section shell-wide"><Heading center kicker={c.everyKicker} title={c.everyTitle}/><div className="guide-grid guide-grid--three">{guideCards.map(card => <GuideCard key={card.title} locale={locale} {...card}/>)}</div><div className="center-link"><Link className="text-link" href={pathFor(locale,"guides")}>View all guides →</Link></div></section>
    <section className="home-section home-faq shell-wide"><Heading kicker={c.faqKicker} title={c.faqTitle}/><div className="faq-list"><details open><summary>How many people can play Machine Party?</summary><p>The verified player range is 2–4.</p></details><details><summary>Does Machine Party have online multiplayer?</summary><p>Yes. Online co-op is supported, but public matchmaking is not included.</p></details><details><summary>Can you play Machine Party locally?</summary><p>Local couch co-op was still in development at the latest check.</p></details><details><summary>Which platforms are confirmed?</summary><p>Windows and SteamOS/Linux are confirmed.</p></details></div></section>
    <section className="home-cta"><div className="shell-wide"><p>{c.ctaKicker}</p><h2>{c.ctaTitle}</h2><div className="hero-actions"><Link className="button button--gold" href={pathFor(locale,"guides")}>Open the Guide Hub</Link><a className="button button--outline" href="https://store.steampowered.com/app/4108000/Machine_Party/">Play on Steam</a></div></div></section>
  </main><SiteFooter locale={locale}/></>;
}

function Heading({ kicker, title, deck, center=false }: { kicker:string; title:string; deck?:string; center?:boolean }) { return <header className={`section-heading ${center ? "section-heading--center" : "section-heading--left"}`}><p>{kicker}</p><h2>{title}</h2>{deck && <div>{deck}</div>}</header>; }
function Fact({ label, value }: { label:string; value:string }) { return <div><dt>{label}</dt><dd>{value}</dd></div>; }
