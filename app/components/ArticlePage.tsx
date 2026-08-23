import Link from "next/link";
import EnArticle from "../../content/en/how-to-play.mdx";
import FrArticle from "../../content/fr/how-to-play.mdx";
import PtArticle from "../../content/pt-br/how-to-play.mdx";
import { pathFor, type Locale } from "./i18n";
import { SiteFooter, SiteHeader } from "./SiteChrome";

const Article = { en: EnArticle, fr: FrArticle, "pt-br": PtArticle };
const heads = {
  en: { crumb:"How to Play", eyebrow:"Operator training", title:"How to Play Machine Party: Beginner Guide", deck:"Practical beginner advice for party setup, changing round instructions, fifteen minigames, and Arcade mode.", checked:"Checked 2026-08-04", quick:"Quick answer", related:"Continue the briefing", relatedTitle:"Related Guides" },
  fr: { crumb:"Comment jouer", eyebrow:"Formation opérateur", title:"Comment jouer à Machine Party : guide débutant", deck:"Conseils pratiques pour former le groupe, comprendre les règles et choisir le mode Arcade.", checked:"Vérifié le 04-08-2026", quick:"Réponse rapide", related:"Continuer le briefing", relatedTitle:"Guides associés" },
  "pt-br": { crumb:"Como jogar", eyebrow:"Treinamento do operador", title:"Como jogar Machine Party: guia iniciante", deck:"Conselhos práticos para montar o grupo, entender cada rodada e usar o modo Arcade.", checked:"Verificado em 04-08-2026", quick:"Resposta rápida", related:"Continue o briefing", relatedTitle:"Guias relacionados" },
};

export function ArticlePage({ locale }: { locale: Locale }) {
  const h = heads[locale]; const Body = Article[locale]; const prefix = locale === "en" ? "" : `/${locale}`;
  return <><SiteHeader locale={locale} route="how-to-play"/><main id="main-content" className="article-shell"><header className="article-header"><nav className="breadcrumbs"><ol><li><Link href={pathFor(locale,"home")}>Machine Party</Link></li><li><Link href={pathFor(locale,"guides")}>Guides</Link></li><li>{h.crumb}</li></ol></nav><p className="article-eyebrow"><span>◈</span>{h.eyebrow}<span>◈</span></p><h1>{h.title}</h1><p className="article-deck">{h.deck}</p><p className="article-date">{h.checked}</p></header><div className="article-divider">◈</div><article className="article-body"><div className="quick-answer"><span>{h.quick}</span><div><p>Machine Party is an online party game for 2–4 players. Read every briefing, identify the immediate hazard, and use Arcade mode when your group wants a shorter random session.</p></div></div><Body/></article><section className="related-guides"><p>{h.related}</p><h2>{h.relatedTitle}</h2><div><Related href={`${prefix}/guides/max-players/`} title="Machine Party Max Players" text="The confirmed group-size limit."/><Related href={`${prefix}/minigames/`} title="Machine Party Minigames" text="The fifteen simulations and their formats."/><Related href={`${prefix}/guides/online-multiplayer/`} title="Online Multiplayer" text="Co-op, lobbies, and group planning."/></div></section></main><SiteFooter locale={locale}/></>;
}
function Related({ href,title,text }:{href:string;title:string;text:string}) { return <Link href={href}><strong>{title}</strong><span>{text}</span><b>→</b></Link>; }
