export const locales = ["en", "fr", "pt-br"] as const;
export type Locale = (typeof locales)[number];
export type RouteKey = "home" | "guides" | "how-to-play";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  "pt-br": "Português do Brasil",
};

export function pathFor(locale: Locale, route: RouteKey) {
  const prefix = locale === "en" ? "" : `/${locale}`;
  if (route === "home") return `${prefix}/`;
  if (route === "guides") return `${prefix}/guides/`;
  return `${prefix}/guides/how-to-play/`;
}

export const copy = {
  en: {
    brandTag: "The lethal minigame guide",
    steam: "Play on Steam",
    nav: ["Guides", "Minigames", "Multiplayer", "Platforms"],
    subnav: ["How to Play", "Max Players", "Online Status", "Local Co-op", "Minigames", "Platforms"],
    home: {
      eyebrow: "Independent guide · verified status",
      title: "Survive the Machine Party",
      lead: "A lethal party-game guide for the 2–4 player limit, 15 minigames, online co-op, local-play status, and current platform support.",
      primary: "How to Play",
      secondary: "Browse Minigames",
      facts: [["2–4 players", "Verified party size"], ["15 minigames", "Launch scope"], ["Jul 30, 2026", "Steam release"], ["PC + Linux", "Confirmed platforms"]],
      introKicker: "The lethal simulation",
      introTitle: "What is Machine Party?",
      introDeck: "An industrial-horror party game where a small online group faces violent minigames and changing rules.",
      intro1: "Machine Party launched on Steam on July 30, 2026. It is designed for groups of two to four and includes fifteen simulations at launch.",
      intro2: "Online co-op works on Windows and SteamOS/Linux. Couch co-op remains a changing feature, while the base game intentionally has no public matchmaking browser.",
      introLink: "Read the beginner guide",
      manualKicker: "Operator's manual",
      manualTitle: "Start With the Right Answer",
      manualDeck: "Begin with the questions every group should settle before entering the simulation.",
      statusKicker: "Connection status",
      statusTitle: "Build Your Party",
      statusDeck: "See what works now, what is missing by design, and what is still being built.",
      archiveKicker: "Simulation archive",
      archiveTitle: "Fifteen Ways to Fail",
      archiveDeck: "Learn the launch scope and Arcade format without guessing at rules or inventing minigames.",
      everyKicker: "Field manual",
      everyTitle: "Browse Every Guide",
      faqKicker: "Quick answers",
      faqTitle: "Machine Party FAQ",
      ctaKicker: "Ready to enter the simulation?",
      ctaTitle: "Bring the right party.",
    },
    guides: { kicker: "Operator's index", title: "Machine Party Guides", deck: "Six focused pages answer the highest-priority launch questions. Time-sensitive pages show when their status was checked.", filters: ["All guides", "Basics", "Multiplayer", "Status", "Platforms"] },
    footer: { disclaimer: "Independent fan-made guide. Machine Party and its trademarks belong to their respective owners.", buy: "Buy on Steam", groups: ["Start Here", "Multiplayer", "This Site"] },
  },
  fr: {
    brandTag: "Le guide des mini-jeux mortels", steam: "Jouer sur Steam", nav: ["Guides", "Mini-jeux", "Multijoueur", "Plateformes"], subnav: ["Comment jouer", "Joueurs max.", "Statut en ligne", "Coop locale", "Mini-jeux", "Plateformes"],
    home: { eyebrow: "Guide indépendant · statut vérifié", title: "Survivez à Machine Party", lead: "Un guide du party game mortel : 2 à 4 joueurs, 15 mini-jeux, coop en ligne et plateformes actuelles.", primary: "Comment jouer", secondary: "Voir les mini-jeux", facts: [["2–4 joueurs", "Taille confirmée"], ["15 mini-jeux", "Au lancement"], ["30 juil. 2026", "Sortie Steam"], ["PC + Linux", "Plateformes"]], introKicker: "La simulation mortelle", introTitle: "Qu'est-ce que Machine Party ?", introDeck: "Un party game d'horreur industrielle où un petit groupe affronte des règles changeantes.", intro1: "Machine Party est sorti sur Steam le 30 juillet 2026. Le jeu accueille deux à quatre joueurs et propose quinze simulations au lancement.", intro2: "La coopération en ligne fonctionne sous Windows et SteamOS/Linux. La coopération locale évolue encore, sans navigateur public dans le jeu de base.", introLink: "Lire le guide débutant", manualKicker: "Manuel de l'opérateur", manualTitle: "Commencez par la bonne réponse", manualDeck: "Réglez les questions essentielles avant d'entrer dans la simulation.", statusKicker: "État de connexion", statusTitle: "Formez votre groupe", statusDeck: "Ce qui fonctionne, ce qui manque par choix et ce qui reste en développement.", archiveKicker: "Archive des simulations", archiveTitle: "Quinze façons d'échouer", archiveDeck: "Comprenez le contenu de lancement et le mode Arcade sans inventer de règles.", everyKicker: "Manuel de terrain", everyTitle: "Parcourir tous les guides", faqKicker: "Réponses rapides", faqTitle: "FAQ Machine Party", ctaKicker: "Prêt pour la simulation ?", ctaTitle: "Venez avec le bon groupe." },
    guides: { kicker: "Index opérateur", title: "Guides Machine Party", deck: "Six pages ciblées répondent aux questions prioritaires du lancement.", filters: ["Tous", "Bases", "Multijoueur", "Statut", "Plateformes"] },
    footer: { disclaimer: "Guide indépendant créé par des fans. Les marques appartiennent à leurs propriétaires.", buy: "Acheter sur Steam", groups: ["Commencer", "Multijoueur", "Ce site"] },
  },
  "pt-br": {
    brandTag: "O guia dos minijogos letais", steam: "Jogar na Steam", nav: ["Guias", "Minijogos", "Multijogador", "Plataformas"], subnav: ["Como jogar", "Máx. jogadores", "Status online", "Coop local", "Minijogos", "Plataformas"],
    home: { eyebrow: "Guia independente · status verificado", title: "Sobreviva à Machine Party", lead: "Um guia do party game letal: 2–4 jogadores, 15 minijogos, coop online e plataformas atuais.", primary: "Como jogar", secondary: "Ver minijogos", facts: [["2–4 jogadores", "Grupo confirmado"], ["15 minijogos", "No lançamento"], ["30 jul. 2026", "Lançamento Steam"], ["PC + Linux", "Plataformas"]], introKicker: "A simulação letal", introTitle: "O que é Machine Party?", introDeck: "Um party game de horror industrial em que um pequeno grupo enfrenta regras imprevisíveis.", intro1: "Machine Party chegou à Steam em 30 de julho de 2026. O jogo foi feito para duas a quatro pessoas e trouxe quinze simulações.", intro2: "O coop online funciona no Windows e SteamOS/Linux. O coop local ainda muda, e o jogo-base não traz navegador público de salas.", introLink: "Ler o guia iniciante", manualKicker: "Manual do operador", manualTitle: "Comece com a resposta certa", manualDeck: "Resolva primeiro as dúvidas que todo grupo enfrenta antes da simulação.", statusKicker: "Status da conexão", statusTitle: "Monte seu grupo", statusDeck: "O que funciona, o que falta por escolha e o que segue em desenvolvimento.", archiveKicker: "Arquivo de simulação", archiveTitle: "Quinze maneiras de falhar", archiveDeck: "Entenda o conteúdo de lançamento e o modo Arcade sem regras inventadas.", everyKicker: "Manual de campo", everyTitle: "Explore todos os guias", faqKicker: "Respostas rápidas", faqTitle: "FAQ de Machine Party", ctaKicker: "Pronto para a simulação?", ctaTitle: "Traga o grupo certo." },
    guides: { kicker: "Índice do operador", title: "Guias de Machine Party", deck: "Seis páginas focadas respondem às dúvidas mais importantes do lançamento.", filters: ["Todos", "Básico", "Multijogador", "Status", "Plataformas"] },
    footer: { disclaimer: "Guia independente feito por fãs. As marcas pertencem aos seus proprietários.", buy: "Comprar na Steam", groups: ["Comece aqui", "Multijogador", "Este site"] },
  },
} satisfies Record<Locale, object>;

export const guideCards = [
  { tone: "gold", kicker: "Basics", title: "How to Play", description: "Party setup, round briefings, first-session tips, and Arcade mode.", route: "how-to-play" as RouteKey },
  { tone: "teal", kicker: "Multiplayer", title: "Max Players", description: "The confirmed 2–4 player limit and what it means for your group.", href: "/guides/max-players/" },
  { tone: "gold", kicker: "Network", title: "Online Multiplayer", description: "Co-op support, matchmaking limits, and ways to form a party.", href: "/guides/online-multiplayer/" },
  { tone: "red", kicker: "Status", title: "Local Co-op", description: "What is available now and what remains in development.", href: "/guides/local-couch-coop/" },
  { tone: "teal", kicker: "Reference", title: "Minigames", description: "Fifteen objectives, practical tips, and the Arcade format.", href: "/minigames/" },
  { tone: "gold", kicker: "Platforms", title: "Platforms", description: "Windows, SteamOS/Linux, and current console status.", href: "/platforms/" },
];
