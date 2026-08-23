import { officialLinks, type Locale } from "./i18n";
import { SiteFooter, SiteHeader } from "./SiteChrome";

export const infoKinds = ["about", "contact", "privacy", "terms"] as const;
export type InfoKind = (typeof infoKinds)[number];

const infoCopy = {
  en: {
    about: ["About this guide", "Independent research, clearly sourced", "This is an independent fan-made guide to Machine Party. It is not affiliated with Mike Klubnika, GDeavid, or Oro Interactive.", "Game facts are checked against the official game page, Steam listing, developer logs, and official update notes. Anything not confirmed is labelled 待确认."],
    contact: ["Contact", "Official help and site contact", "For official Machine Party news or support, use the developer's official contact page and the game's Steam community.", "Contact details for the operator of this independent guide: 待确认."],
    privacy: ["Privacy", "Plain-language privacy notice", "This guide does not provide account registration, a contact form, or an in-game code redemption service.", "Hosting logs, analytics, advertising cookies, and their retention settings: 待确认. Do not submit passwords, Steam keys, or other sensitive information through this site."],
    terms: ["Terms", "Independent information only", "This site provides independently researched reference material about Machine Party. It does not sell the game, issue Steam keys, or provide redeem codes.", "Machine Party and related names, artwork, and trademarks belong to their respective owners. Features and availability can change; time-sensitive claims show a verification date or are labelled 待确认."],
    source: "Official game page",
  },
  fr: {
    about: ["À propos", "Recherche indépendante et sourcée", "Ce guide de Machine Party est créé par des fans et n'est affilié ni à Mike Klubnika, ni à GDeavid, ni à Oro Interactive.", "Les informations sont vérifiées sur le site officiel, Steam, les journaux du développeur et les notes de mise à jour. Tout élément non confirmé porte la mention 待确认."],
    contact: ["Contact", "Aide officielle et contact du site", "Pour l'actualité ou l'assistance officielle de Machine Party, utilisez la page de contact du développeur et la communauté Steam du jeu.", "Coordonnées de la personne responsable de ce guide indépendant : 待确认."],
    privacy: ["Confidentialité", "Avis de confidentialité simplifié", "Ce guide ne propose ni compte, ni formulaire de contact, ni service d'utilisation de codes en jeu.", "Journaux d'hébergement, mesures d'audience, cookies publicitaires et durée de conservation : 待确认. Ne transmettez jamais de mot de passe ou de clé Steam."],
    terms: ["Conditions", "Informations indépendantes uniquement", "Ce site fournit des informations indépendantes sur Machine Party. Il ne vend pas le jeu, ne distribue pas de clés Steam et ne fournit pas de codes.", "Machine Party, ses visuels et ses marques appartiennent à leurs propriétaires. Les fonctions peuvent évoluer ; les informations sensibles au temps sont datées ou marquées 待确认."],
    source: "Page officielle du jeu",
  },
  "pt-br": {
    about: ["Sobre", "Pesquisa independente e com fontes", "Este é um guia de fãs independente sobre Machine Party, sem afiliação com Mike Klubnika, GDeavid ou Oro Interactive.", "Os fatos são verificados no site oficial, na Steam, nos registros do desenvolvedor e nas notas de atualização. Tudo que não foi confirmado recebe a marca 待确认."],
    contact: ["Contato", "Ajuda oficial e contato do site", "Para notícias ou suporte oficial de Machine Party, use a página de contato do desenvolvedor e a comunidade do jogo na Steam.", "Dados de contato do responsável por este guia independente: 待确认."],
    privacy: ["Privacidade", "Aviso de privacidade em linguagem simples", "Este guia não oferece cadastro, formulário de contato nem serviço para resgatar códigos dentro do jogo.", "Logs de hospedagem, métricas, cookies de publicidade e prazos de retenção: 待确认. Não envie senhas ou chaves da Steam por este site."],
    terms: ["Termos", "Somente informação independente", "Este site fornece material independente sobre Machine Party. Ele não vende o jogo, não distribui chaves da Steam e não fornece códigos de resgate.", "Machine Party, suas artes e marcas pertencem aos respectivos donos. Recursos podem mudar; informações sujeitas a mudança recebem uma data ou a marca 待确认."],
    source: "Página oficial do jogo",
  },
} as const;

export function InfoPage({ locale, kind }: { locale: Locale; kind: InfoKind }) {
  const [title, eyebrow, first, second] = infoCopy[locale][kind];
  const contactUrl = "https://mikeklubnika.com/contact";
  return <><SiteHeader locale={locale} route="home"/><main id="main-content" className="info-page shell-wide"><header className="info-page__header"><p>{eyebrow}</p><h1>{title}</h1></header><article className="info-page__body"><p>{first}</p><p>{second}</p><h2>Machine Party</h2><p><a href={officialLinks.website}>{infoCopy[locale].source} ↗</a>{kind === "contact" && <> · <a href={contactUrl}>Contact ↗</a></>}</p></article></main><SiteFooter locale={locale}/></>;
}
