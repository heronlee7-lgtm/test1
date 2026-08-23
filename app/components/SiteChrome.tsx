"use client";

import Link from "next/link";
import { useState } from "react";
import { copy, localeNames, locales, officialLinks, pathFor, type Locale, type RouteKey } from "./i18n";

export function HazardEmblem({ large = false }: { large?: boolean }) {
  return (
    <span className={`hazard-emblem ${large ? "hazard-emblem--large" : "hazard-emblem--small"}`} aria-hidden="true">
      <svg viewBox="0 0 120 120" focusable="false">
        <defs><linearGradient id={large ? "dial-large" : "dial-small"} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f4ca68"/><stop offset=".5" stopColor="#bd554f"/><stop offset="1" stopColor="#4bb8a8"/></linearGradient></defs>
        <circle cx="60" cy="60" r="52" fill="none" stroke={`url(#${large ? "dial-large" : "dial-small"})`} strokeWidth="3"/>
        <circle cx="60" cy="60" r="38" fill="#0d0918" stroke="#7a6748" strokeWidth="1.5"/>
        <path d="M60 25 88 78H32Z" fill="none" stroke="#f4ca68" strokeWidth="4" strokeLinejoin="round"/>
        <circle cx="60" cy="66" r="5" fill="#e36b58"/>
        <path d="M60 43v15" stroke="#f8f0d8" strokeWidth="5" strokeLinecap="round"/>
      </svg>
    </span>
  );
}

function LanguageSwitcher({ locale, route }: { locale: Locale; route: RouteKey }) {
  return <div className="language-switcher" role="group" aria-label="Select language"><details><summary><span>{localeNames[locale]}</span><span aria-hidden="true">▾</span></summary><div className="language-switcher__options">{locales.map(item => <Link key={item} href={pathFor(item, route)} aria-current={item === locale ? "page" : undefined}>{localeNames[item]}</Link>)}</div></details></div>;
}

export function SiteHeader({ locale, route }: { locale: Locale; route: RouteKey }) {
  const c = copy[locale];
  const [open, setOpen] = useState(false);
  const prefix = locale === "en" ? "" : `/${locale}`;
  const links = [`${prefix}/guides/`, `${prefix}/minigames/`, `${prefix}/guides/online-multiplayer/`, `${prefix}/platforms/`];
  const sublinks = [`${prefix}/guides/how-to-play/`, `${prefix}/guides/max-players/`, `${prefix}/guides/online-multiplayer/`, `${prefix}/guides/local-couch-coop/`, `${prefix}/minigames/`, `${prefix}/platforms/`];
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header">
      <div className="header-primary shell-wide">
        <Link className="brand" aria-label="Machine Party Home" href={pathFor(locale, "home")}><HazardEmblem/><span><strong>Machine Party</strong><small>{c.brandTag}</small></span></Link>
        <a className="steam-button" href={officialLinks.steam}> {c.steam}</a>
        <nav className="desktop-primary-nav" aria-label="Primary navigation">{c.nav.map((label, i) => <Link key={label} href={links[i]}>{label}</Link>)}</nav>
        <div className="desktop-language"><LanguageSwitcher locale={locale} route={route}/></div>
        <div className="mobile-actions"><LanguageSwitcher locale={locale} route={route}/><div className="mobile-menu"><button type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label="Open navigation" onClick={() => setOpen(v => !v)}><span/><span/></button>{open && <nav id="mobile-navigation">{c.nav.map((label, i) => <Link key={label} href={links[i]} onClick={() => setOpen(false)}>{label}</Link>)}</nav>}</div></div>
      </div>
      <div className="header-secondary"><nav className="shell-wide" aria-label="Guides">{c.subnav.map((label, i) => <Link key={label} href={sublinks[i]}>{label}</Link>)}</nav></div>
    </header>
  </>;
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const prefix = locale === "en" ? "" : `/${locale}`;
  const l = c.footer.links;
  return <footer className="site-footer"><div className="footer-grid shell-wide"><div className="footer-brand"><Link className="brand" href={`${prefix}/`}><HazardEmblem/><span><strong>Machine Party</strong><small>Independent guide · 2026</small></span></Link><p>{c.footer.disclaimer}</p><a className="footer-steam" href={officialLinks.steam}>{c.footer.buy} →</a></div><FooterGroup title={c.footer.groups[0]} links={[[l[0],`${prefix}/guides/how-to-play/`],[l[1],`${prefix}/guides/`],[l[2],`${prefix}/minigames/`]]}/><FooterGroup title={c.footer.groups[1]} links={[[l[3],officialLinks.website],[l[4],officialLinks.discord],[l[5],officialLinks.youtube]]}/><FooterGroup title={c.footer.groups[2]} links={[[l[6],`${prefix}/about/`],[l[7],`${prefix}/contact/`],[l[8],`${prefix}/privacy/`],[l[9],`${prefix}/terms/`]]}/></div><section className="native-ad-banner" aria-label={c.footer.ad}><p>{c.footer.ad}</p><div className="native-ad-banner__slot"/></section><div className="footer-bottom shell-wide"><span>© 2026 Machine Party Independent Guide</span><span>{localeNames[locale]}</span></div></footer>;
}

function FooterGroup({ title, links }: { title: string; links: string[][] }) { return <div className="footer-group"><h2>{title}</h2><ul>{links.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul></div>; }
