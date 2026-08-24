import EnArticle from "../../content/en/how-to-play.mdx";
import FrArticle from "../../content/fr/how-to-play.mdx";
import PtArticle from "../../content/pt-br/how-to-play.mdx";
import { pathFor, type Locale } from "./i18n";
import { SiteFooter, SiteHeader } from "./SiteChrome";

const Article = { en: EnArticle, fr: FrArticle, "pt-br": PtArticle };
const heads = {
  en: { crumb:"How to Play", eyebrow:"Operator training", title:"How to Play Machine Party: Beginner Guide", deck:"Practical beginner advice for online or couch co-op, changing round instructions, fifteen minigames, and Arcade mode.", checked:"Checked 2026-08-24", quick:"Quick answer", answer:"Machine Party supports online and couch co-op for 2–4 players. Read every briefing, identify the immediate hazard, and use Arcade mode for ten random simulations without the intro and outro.", related:"Continue the briefing", relatedTitle:"Related Guides" },
  fr: { crumb:"Comment jouer", eyebrow:"Formation opérateur", title:"Comment jouer à Machine Party : guide débutant", deck:"Conseils pour la coop en ligne ou locale, les règles changeantes, les quinze mini-jeux et le mode Arcade.", checked:"Vérifié le 24-08-2026", quick:"Réponse rapide", answer:"Machine Party propose la coop en ligne et locale pour 2 à 4 joueurs. Lisez chaque briefing et choisissez le mode Arcade pour dix simulations aléatoires sans introduction ni conclusion.", related:"Continuer le briefing", relatedTitle:"Guides associés" },
  "pt-br": { crumb:"Como jogar", eyebrow:"Treinamento do operador", title:"Como jogar Machine Party: guia iniciante", deck:"Conselhos para coop online ou local, regras variáveis, quinze minijogos e modo Arcade.", checked:"Verificado em 24-08-2026", quick:"Resposta rápida", answer:"Machine Party oferece coop online e local para 2–4 pessoas. Leia cada briefing e use o modo Arcade para dez simulações aleatórias sem introdução nem encerramento.", related:"Continue o briefing", relatedTitle:"Guias relacionados" },
};

export function ArticlePage({ locale }: { locale: Locale }) {
  const h = heads[locale]; const Body = Article[locale]; const prefix = locale === "en" ? "" : `/${locale}`;
  return <><SiteHeader locale={locale} route="how-to-play"/><main id="main-content" className="article-shell"><header className="article-header"><nav className="breadcrumbs"><ol><li><a href={pathFor(locale,"home")}>Machine Party</a></li><li><a href={pathFor(locale,"guides")}>Guides</a></li><li>{h.crumb}</li></ol></nav><p className="article-eyebrow"><span>◈</span>{h.eyebrow}<span>◈</span></p><h1>{h.title}</h1><p className="article-deck">{h.deck}</p><p className="article-date">{h.checked}</p></header><div className="article-divider">◈</div><article className="article-body"><div className="quick-answer"><span>{h.quick}</span><div><p>{h.answer}</p></div></div><Body/></article><section className="related-guides"><p>{h.related}</p><h2>{h.relatedTitle}</h2><div><Related href={`${prefix}/guides/max-players/`} title="Machine Party Max Players" text="The confirmed group-size limit."/><Related href={`${prefix}/minigames/`} title="Machine Party Minigames" text="The fifteen simulations and their formats."/><Related href={`${prefix}/guides/online-multiplayer/`} title="Online Multiplayer" text="Co-op, lobbies, and group planning."/></div></section></main><SiteFooter locale={locale}/></>;
}
function Related({ href,title,text }:{href:string;title:string;text:string}) { return <a href={href}><strong>{title}</strong><span>{text}</span><b>→</b></a>; }
