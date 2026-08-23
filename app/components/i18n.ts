export const locales = ["en", "fr", "pt-br"] as const;
export type Locale = (typeof locales)[number];
export type RouteKey = "home" | "guides" | "how-to-play";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  "pt-br": "Português do Brasil",
};

export const officialLinks = {
  website: "https://mikeklubnika.com/games/machine_party",
  steam: "https://store.steampowered.com/app/4108000/Machine_Party/",
  discord: "https://discord.gg/Vt2qm6v8PN",
  creatorDiscord: "https://discord.gg/jDGePvU3Z5",
  youtube: "https://www.youtube.com/watch?v=-CNzPWTIQ0Y",
} as const;

export function pathFor(locale: Locale, route: RouteKey) {
  const prefix = locale === "en" ? "" : `/${locale}`;
  if (route === "home") return `${prefix}/`;
  if (route === "guides") return `${prefix}/guides/`;
  return `${prefix}/guides/how-to-play/`;
}

export const copy = {
  en: {
    brandTag: "Verified independent guide",
    steam: "Play on Steam",
    nav: ["Guides", "Minigames", "Multiplayer", "Platforms"],
    subnav: ["How to Play", "Max Players", "Online Status", "Local Co-op", "Minigames", "Platforms"],
    home: {
      eyebrow: "Independent field guide · checked 24 Aug 2026",
      titlePrefix: "Survive",
      titleGame: "Machine Party",
      lead: "Failure is lethal. Bring 2–4 players into fifteen violent simulations, read every briefing, and prove your life is worth more than theirs.",
      primary: "Read the beginner guide",
      secondary: "View all 15 minigames",
      facts: [["2–4 players", "Official party size"], ["15 minigames", "Confirmed launch set"], ["Online + local", "Co-op modes"], ["PC + Linux", "Confirmed platforms"]],
      introKicker: "Game overview",
      introTitle: "What is Machine Party?",
      introDeck: "A rapid-fire industrial-horror party game built around dangerous tasks, sabotage, and very short odds of survival.",
      intro1: "Machine Party launched on Steam on July 30, 2026. Mike Klubnika and GDeavid describe it as a collection of violent party games where failure is lethal, with an industrial soundtrack by Alex Peipman and customizable test subjects.",
      intro2: "The game supports online co-op and, since the official v2.0 update, couch co-op. It was designed for groups of friends, so there is no public matchmaking or in-game lobby browser.",
      introLink: "Learn how a session works",
      factsLabels: ["Developers", "Publisher", "Genre", "Verified"],
      factsValues: ["Mike Klubnika & GDeavid", "Oro Interactive", "Action · Indie · Horror", "24 Aug 2026"],
      codesTitle: "Redeem codes",
      codesStatus: "暂无",
      codesBody: "No official redemption-code system or public redeem codes were found in the checked official sources. Steam product keys are not in-game codes.",
      codesChecked: "Checked 24 Aug 2026",
      officialTitle: "Official links",
      officialLabels: ["Game website", "Find-a-group Discord", "Gameplay trailer on YouTube"],
      manualKicker: "New player briefing",
      manualTitle: "Know the Rules Before the Machine Starts",
      manualDeck: "Read the current objective, identify the immediate hazard, and expect the control scheme to change from one simulation to the next.",
      statusKicker: "Multiplayer status",
      statusTitle: "Build Your Party",
      statusDeck: "Online and couch co-op are live. Public matchmaking is not part of the game; use the official find-a-group Discord when needed.",
      statuses: [
        ["confirmed", "Available", "Online co-op", "Steam lists online co-op for the official 2–4 player group size."],
        ["confirmed", "Available since v2.0", "Couch co-op", "Connect up to four controllers; one player may use keyboard and mouse, so a four-player group can use three controllers."],
        ["unavailable", "Not included by design", "Public matchmaking", "There is no public matchmaking or in-game lobby list. The developers provide an official find-a-group Discord."],
      ],
      statusLinks: ["Online multiplayer", "Local co-op", "Player limit"],
      archiveKicker: "Simulation archive",
      archiveTitle: "Fifteen Ways to Fail",
      archiveDeck: "The launch set contains fifteen simulations. Arcade mode runs ten random simulations without the intro and outro segments.",
      archiveLabel: "confirmed simulations",
      archiveButton: "Explore minigames",
      everyKicker: "Field manual",
      everyTitle: "Browse Every Guide",
      viewGuides: "View all guides",
      faqKicker: "Verified answers",
      faqTitle: "Machine Party FAQ",
      faqs: [
        ["How many people can play Machine Party?", "The official player range is 2–4."],
        ["Does Machine Party support online multiplayer?", "Yes. Online co-op is supported, but public matchmaking and a public lobby list are not included."],
        ["Can Machine Party be played locally?", "Yes. Couch co-op arrived in the v2.0 update on August 12, 2026."],
        ["Which platforms are confirmed?", "Windows and SteamOS/Linux are confirmed. Console versions are not confirmed in the checked official sources."],
        ["Are there any Machine Party redeem codes?", "暂无. No official redemption-code system or public codes were found in the checked official sources."],
      ],
      ctaKicker: "Ready for the next briefing?",
      ctaTitle: "Gather 2–4 players. Survival is unlikely.",
      ctaPrimary: "Open the guide hub",
      ctaSecondary: "Play on Steam",
    },
    guides: { kicker: "Operator's index", title: "Machine Party Guides", deck: "Six focused pages cover the official player limit, multiplayer modes, platforms, minigames, and first-session basics.", filters: ["All guides", "Basics", "Multiplayer", "Status", "Platforms"], open: "Open guide" },
    footer: { disclaimer: "Independent fan-made guide. Not affiliated with Mike Klubnika, GDeavid, or Oro Interactive. Machine Party and related marks belong to their owners.", buy: "Buy on Steam", groups: ["Start Here", "Official", "This Site"], links: ["How to Play", "Guides", "Minigames", "Official website", "Discord", "YouTube trailer", "About", "Contact", "Privacy", "Terms"], ad: "Advertisement" },
  },
  fr: {
    brandTag: "Guide indépendant vérifié", steam: "Jouer sur Steam", nav: ["Guides", "Mini-jeux", "Multijoueur", "Plateformes"], subnav: ["Comment jouer", "Joueurs max.", "Statut en ligne", "Coop locale", "Mini-jeux", "Plateformes"],
    home: {
      eyebrow: "Guide indépendant · vérifié le 24 août 2026", titlePrefix: "Survivez à", titleGame: "Machine Party", lead: "L'échec est mortel. Réunissez 2 à 4 joueurs, affrontez quinze simulations violentes et prouvez que votre vie vaut plus que la leur.", primary: "Lire le guide débutant", secondary: "Voir les 15 mini-jeux",
      facts: [["2–4 joueurs", "Taille officielle"], ["15 mini-jeux", "Ensemble confirmé"], ["En ligne + local", "Modes coop"], ["PC + Linux", "Plateformes confirmées"]],
      introKicker: "Présentation du jeu", introTitle: "Qu'est-ce que Machine Party ?", introDeck: "Un party game d'horreur industrielle rapide, fait de tâches dangereuses, de sabotage et de chances de survie minimes.", intro1: "Machine Party est sorti sur Steam le 30 juillet 2026. Mike Klubnika et GDeavid le décrivent comme une collection de jeux de fête violents où l'échec est mortel, avec une bande-son industrielle d'Alex Peipman et des sujets personnalisables.", intro2: "Le jeu propose la coopération en ligne et, depuis la mise à jour officielle v2.0, la coopération locale. Il est conçu pour des groupes d'amis et n'intègre donc ni matchmaking public ni liste de salons.", introLink: "Comprendre une session",
      factsLabels: ["Développeurs", "Éditeur", "Genre", "Vérifié"], factsValues: ["Mike Klubnika & GDeavid", "Oro Interactive", "Action · Indé · Horreur", "24 août 2026"],
      codesTitle: "Codes à utiliser", codesStatus: "暂无", codesBody: "Aucun système officiel ni code public n'a été trouvé dans les sources officielles vérifiées. Les clés Steam ne sont pas des codes en jeu.", codesChecked: "Vérifié le 24 août 2026", officialTitle: "Liens officiels", officialLabels: ["Site du jeu", "Discord pour trouver un groupe", "Bande-annonce sur YouTube"],
      manualKicker: "Briefing débutant", manualTitle: "Lisez la règle avant le démarrage", manualDeck: "Lisez l'objectif affiché, repérez le danger immédiat et attendez-vous à changer de commandes à chaque simulation.",
      statusKicker: "État du multijoueur", statusTitle: "Formez votre groupe", statusDeck: "La coop en ligne et locale est disponible. Le matchmaking public ne fait pas partie du jeu ; utilisez le Discord officiel pour trouver un groupe.",
      statuses: [["confirmed", "Disponible", "Coop en ligne", "Steam indique une coopération en ligne pour le groupe officiel de 2 à 4 joueurs."], ["confirmed", "Disponible depuis la v2.0", "Coop locale", "Connectez jusqu'à quatre manettes ; une personne peut utiliser clavier et souris."], ["unavailable", "Absent par conception", "Matchmaking public", "Il n'existe ni matchmaking public ni liste de salons. Les développeurs proposent un Discord officiel pour former un groupe."]],
      statusLinks: ["Multijoueur en ligne", "Coop locale", "Limite de joueurs"], archiveKicker: "Archive des simulations", archiveTitle: "Quinze façons d'échouer", archiveDeck: "Le jeu de lancement contient quinze simulations. Le mode Arcade en choisit dix au hasard sans introduction ni conclusion.", archiveLabel: "simulations confirmées", archiveButton: "Voir les mini-jeux", everyKicker: "Manuel de terrain", everyTitle: "Parcourir tous les guides", viewGuides: "Voir tous les guides",
      faqKicker: "Réponses vérifiées", faqTitle: "FAQ Machine Party", faqs: [["Combien de personnes peuvent jouer ?", "La taille officielle du groupe est de 2 à 4 joueurs."], ["Le multijoueur en ligne est-il disponible ?", "Oui, mais sans matchmaking public ni liste de salons publics."], ["Peut-on jouer en local ?", "Oui. La coopération locale est arrivée avec la mise à jour v2.0 du 12 août 2026."], ["Quelles plateformes sont confirmées ?", "Windows et SteamOS/Linux. Aucune version console n'est confirmée dans les sources officielles vérifiées."], ["Existe-t-il des codes Machine Party ?", "暂无. Aucun système officiel ni code public n'a été trouvé dans les sources vérifiées."]],
      ctaKicker: "Prêt pour le prochain briefing ?", ctaTitle: "Réunissez 2 à 4 joueurs. La survie est improbable.", ctaPrimary: "Ouvrir les guides", ctaSecondary: "Jouer sur Steam",
    },
    guides: { kicker: "Index opérateur", title: "Guides Machine Party", deck: "Six pages couvrent la limite officielle, les modes multijoueur, les plateformes, les mini-jeux et les bases.", filters: ["Tous", "Bases", "Multijoueur", "Statut", "Plateformes"], open: "Ouvrir le guide" },
    footer: { disclaimer: "Guide indépendant créé par des fans, sans affiliation avec Mike Klubnika, GDeavid ou Oro Interactive. Les marques appartiennent à leurs propriétaires.", buy: "Acheter sur Steam", groups: ["Commencer", "Officiel", "Ce site"], links: ["Comment jouer", "Guides", "Mini-jeux", "Site officiel", "Discord", "Bande-annonce YouTube", "À propos", "Contact", "Confidentialité", "Conditions"], ad: "Publicité" },
  },
  "pt-br": {
    brandTag: "Guia independente verificado", steam: "Jogar na Steam", nav: ["Guias", "Minijogos", "Multijogador", "Plataformas"], subnav: ["Como jogar", "Máx. jogadores", "Status online", "Coop local", "Minijogos", "Plataformas"],
    home: {
      eyebrow: "Guia independente · verificado em 24 ago. 2026", titlePrefix: "Sobreviva a", titleGame: "Machine Party", lead: "Falhar é fatal. Reúna 2–4 jogadores, encare quinze simulações violentas e prove que sua vida vale mais que a deles.", primary: "Ler o guia iniciante", secondary: "Ver os 15 minijogos",
      facts: [["2–4 jogadores", "Grupo oficial"], ["15 minijogos", "Conjunto confirmado"], ["Online + local", "Modos coop"], ["PC + Linux", "Plataformas confirmadas"]],
      introKicker: "Visão geral", introTitle: "O que é Machine Party?", introDeck: "Um party game rápido de horror industrial, tarefas perigosas, sabotagem e pouquíssima chance de sobreviver.", intro1: "Machine Party chegou à Steam em 30 de julho de 2026. Mike Klubnika e GDeavid o descrevem como uma coleção de jogos de festa violentos em que falhar é fatal, com trilha industrial de Alex Peipman e cobaias personalizáveis.", intro2: "O jogo oferece coop online e, desde a atualização oficial v2.0, coop local. Ele foi projetado para grupos de amigos e não inclui matchmaking público nem navegador de salas.", introLink: "Entender uma sessão",
      factsLabels: ["Desenvolvedores", "Distribuidora", "Gênero", "Verificado"], factsValues: ["Mike Klubnika & GDeavid", "Oro Interactive", "Ação · Indie · Terror", "24 ago. 2026"],
      codesTitle: "Códigos de resgate", codesStatus: "暂无", codesBody: "Nenhum sistema oficial ou código público foi encontrado nas fontes oficiais verificadas. Chaves de produto da Steam não são códigos dentro do jogo.", codesChecked: "Verificado em 24 ago. 2026", officialTitle: "Links oficiais", officialLabels: ["Site do jogo", "Discord para encontrar grupo", "Trailer no YouTube"],
      manualKicker: "Briefing para iniciantes", manualTitle: "Leia a regra antes da máquina ligar", manualDeck: "Leia o objetivo atual, identifique o perigo imediato e espere controles diferentes em cada simulação.",
      statusKicker: "Status multijogador", statusTitle: "Monte seu grupo", statusDeck: "O coop online e local está disponível. O jogo não tem matchmaking público; use o Discord oficial para encontrar um grupo.",
      statuses: [["confirmed", "Disponível", "Coop online", "A Steam lista coop online para o grupo oficial de 2 a 4 jogadores."], ["confirmed", "Disponível desde a v2.0", "Coop local", "Conecte até quatro controles; uma pessoa pode usar teclado e mouse."], ["unavailable", "Ausente por decisão", "Matchmaking público", "Não há matchmaking público nem lista de salas. Os desenvolvedores oferecem um Discord oficial para montar grupos."]],
      statusLinks: ["Multijogador online", "Coop local", "Limite de jogadores"], archiveKicker: "Arquivo de simulações", archiveTitle: "Quinze maneiras de falhar", archiveDeck: "O conjunto de lançamento contém quinze simulações. O modo Arcade escolhe dez ao acaso e remove as sequências de abertura e encerramento.", archiveLabel: "simulações confirmadas", archiveButton: "Explorar minijogos", everyKicker: "Manual de campo", everyTitle: "Explore todos os guias", viewGuides: "Ver todos os guias",
      faqKicker: "Respostas verificadas", faqTitle: "FAQ de Machine Party", faqs: [["Quantas pessoas podem jogar?", "O grupo oficial tem de 2 a 4 jogadores."], ["Machine Party tem multijogador online?", "Sim, mas sem matchmaking público ou lista pública de salas."], ["Dá para jogar localmente?", "Sim. O coop local chegou na atualização v2.0 de 12 de agosto de 2026."], ["Quais plataformas estão confirmadas?", "Windows e SteamOS/Linux. Versões para consoles não estão confirmadas nas fontes oficiais verificadas."], ["Existem códigos de Machine Party?", "暂无. Nenhum sistema oficial ou código público foi encontrado nas fontes verificadas."]],
      ctaKicker: "Pronto para o próximo briefing?", ctaTitle: "Reúna 2–4 jogadores. Sobreviver é improvável.", ctaPrimary: "Abrir os guias", ctaSecondary: "Jogar na Steam",
    },
    guides: { kicker: "Índice do operador", title: "Guias de Machine Party", deck: "Seis páginas cobrem o limite oficial, modos multijogador, plataformas, minijogos e o básico da primeira sessão.", filters: ["Todos", "Básico", "Multijogador", "Status", "Plataformas"], open: "Abrir guia" },
    footer: { disclaimer: "Guia independente feito por fãs, sem afiliação com Mike Klubnika, GDeavid ou Oro Interactive. As marcas pertencem aos seus donos.", buy: "Comprar na Steam", groups: ["Comece aqui", "Oficial", "Este site"], links: ["Como jogar", "Guias", "Minijogos", "Site oficial", "Discord", "Trailer no YouTube", "Sobre", "Contato", "Privacidade", "Termos"], ad: "Publicidade" },
  },
} as const;

export const guideCards = {
  en: [
    { tone: "gold", kicker: "Basics", title: "How to Play", description: "Briefings, changing controls, first-session habits, and Arcade mode.", route: "how-to-play" as RouteKey },
    { tone: "teal", kicker: "Multiplayer", title: "Max Players", description: "The confirmed 2–4 player limit and what your group needs.", href: "/guides/max-players/" },
    { tone: "gold", kicker: "Network", title: "Online Multiplayer", description: "Online co-op, the matchmaking limit, and the official group-finding Discord.", href: "/guides/online-multiplayer/" },
    { tone: "red", kicker: "Available", title: "Couch Co-op", description: "Local play is live in v2.0, with up to four controllers and keyboard support.", href: "/guides/local-couch-coop/" },
    { tone: "teal", kicker: "Reference", title: "Minigames", description: "The fifteen confirmed simulations and the ten-round Arcade format.", href: "/minigames/" },
    { tone: "gold", kicker: "Platforms", title: "Platforms", description: "Windows and SteamOS/Linux are confirmed; consoles are 待确认.", href: "/platforms/" },
  ],
  fr: [
    { tone: "gold", kicker: "Bases", title: "Comment jouer", description: "Briefings, commandes changeantes, premiers réflexes et mode Arcade.", route: "how-to-play" as RouteKey },
    { tone: "teal", kicker: "Multijoueur", title: "Joueurs maximum", description: "La limite confirmée de 2 à 4 joueurs et le matériel nécessaire.", href: "/guides/max-players/" },
    { tone: "gold", kicker: "Réseau", title: "Multijoueur en ligne", description: "Coop en ligne, absence de matchmaking et Discord officiel.", href: "/guides/online-multiplayer/" },
    { tone: "red", kicker: "Disponible", title: "Coop locale", description: "Le mode local est disponible depuis la v2.0 avec manettes et clavier.", href: "/guides/local-couch-coop/" },
    { tone: "teal", kicker: "Référence", title: "Mini-jeux", description: "Les quinze simulations confirmées et le format Arcade à dix manches.", href: "/minigames/" },
    { tone: "gold", kicker: "Plateformes", title: "Plateformes", description: "Windows et SteamOS/Linux sont confirmés ; consoles : 待确认.", href: "/platforms/" },
  ],
  "pt-br": [
    { tone: "gold", kicker: "Básico", title: "Como jogar", description: "Briefings, controles variáveis, primeiros hábitos e modo Arcade.", route: "how-to-play" as RouteKey },
    { tone: "teal", kicker: "Multijogador", title: "Máximo de jogadores", description: "O limite confirmado de 2–4 pessoas e o que o grupo precisa.", href: "/guides/max-players/" },
    { tone: "gold", kicker: "Rede", title: "Multijogador online", description: "Coop online, ausência de matchmaking e Discord oficial para grupos.", href: "/guides/online-multiplayer/" },
    { tone: "red", kicker: "Disponível", title: "Coop local", description: "O modo local está disponível desde a v2.0 com controles e teclado.", href: "/guides/local-couch-coop/" },
    { tone: "teal", kicker: "Referência", title: "Minijogos", description: "As quinze simulações confirmadas e o formato Arcade de dez rodadas.", href: "/minigames/" },
    { tone: "gold", kicker: "Plataformas", title: "Plataformas", description: "Windows e SteamOS/Linux estão confirmados; consoles: 待确认.", href: "/platforms/" },
  ],
} as const;
