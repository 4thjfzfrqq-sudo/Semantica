// Données fictives — prototype uniquement, aucune connexion à une vraie base de jeux.
// Seul `buyUrl` pointe vers de vraies fiches produit (philibertnet.com) pour les liens d'achat.

export const MOODS = [
  { id: "reflexion", label: "Réflexion", emoji: "🧠" },
  { id: "fun", label: "Fun", emoji: "😂" },
  { id: "cooperation", label: "Coopération", emoji: "🤝" },
  { id: "competition", label: "Compétition", emoji: "⚔️" },
  { id: "ambiance", label: "Ambiance", emoji: "🎉" },
];

export const PLAYER_OPTIONS = [2, 3, 4, 5, "6+"];

export const DURATION_OPTIONS = [
  { id: "short", label: "< 30 min", min: 0, max: 30 },
  { id: "mid", label: "30–60 min", min: 30, max: 60 },
  { id: "long", label: "1–2 h", min: 60, max: 120 },
  { id: "xl", label: "2 h+", min: 120, max: 999 },
];

// palette de couvertures générées (pas d'images réelles nécessaires pour le prototype)
const COVERS = {
  coral: "from-[#ff6a4d] via-[#ff8a6b] to-[#ffb648]",
  teal: "from-[#1f8f78] via-[#33d9ac] to-[#7bead0]",
  violet: "from-[#5a4bd8] via-[#8b6bf2] to-[#c7b8ff]",
  ink: "from-[#3a2f27] via-[#5c4636] to-[#8a6a4f]",
  gold: "from-[#a86a1c] via-[#e2952f] to-[#ffcf6b]",
  rose: "from-[#c23a5b] via-[#ef5f80] to-[#ffa5b8]",
};

export const GAMES = [
  {
    id: "cascadia",
    name: "Cascadia",
    tagline: "Bâtissez de superbes paysages sauvages",
    emoji: "🦌",
    cover: COVERS.teal,
    players: [1, 4],
    duration: [30, 45],
    moods: ["reflexion", "ambiance"],
    complexity: 2,
    description:
      "Un puzzle nature apaisant : associez tuiles et animaux pour composer le plus bel écosystème.",
    buyUrl: "https://www.philibertnet.com/fr/lucky-duck-games/101531-cascadia-787790591092.html",
  },
  {
    id: "the-crew",
    name: "The Crew",
    tagline: "Une mission spatiale coopérative en cartes",
    emoji: "🚀",
    cover: COVERS.violet,
    players: [2, 5],
    duration: [15, 30],
    moods: ["cooperation", "reflexion"],
    complexity: 2,
    description:
      "Communiquez sans parler pour réussir ensemble des missions de plus en plus corsées.",
    buyUrl: "https://www.philibertnet.com/fr/iello/86975-the-crew-3760175517211.html",
  },
  {
    id: "7-wonders",
    name: "7 Wonders",
    tagline: "Bâtissez une civilisation en 3 âges",
    emoji: "🏛️",
    cover: COVERS.gold,
    players: [3, 7],
    duration: [30, 45],
    moods: ["reflexion", "competition"],
    complexity: 3,
    description:
      "Draft de cartes rapide où chaque choix construit votre empire face aux autres joueurs.",
    buyUrl:
      "https://www.philibertnet.com/fr/repos-productions/89182-7-wonders-nouvelle-edition-5425016923764.html",
  },
  {
    id: "codenames",
    name: "Codenames",
    tagline: "Trouvez les mots grâce à un indice",
    emoji: "🕵️",
    cover: COVERS.rose,
    players: [4, 8],
    duration: [15, 30],
    moods: ["fun", "ambiance", "competition"],
    complexity: 1,
    description:
      "Deux équipes s'affrontent à coups d'indices en un seul mot. Facile à expliquer, dur à lâcher.",
    buyUrl: "https://www.philibertnet.com/fr/iello/41406-codenames-vf-3701551704863.html",
  },
  {
    id: "heat",
    name: "Heat",
    tagline: "Course de formule 1 à l'ancienne",
    emoji: "🏎️",
    cover: COVERS.coral,
    players: [2, 6],
    duration: [45, 60],
    moods: ["competition", "fun"],
    complexity: 2,
    description:
      "Gérez votre moteur, dépassez au bon moment, sentez l'adrénaline du dernier virage.",
    buyUrl: "https://www.philibertnet.com/fr/days-of-wonder/112362-heat-824968091210.html",
  },
  {
    id: "azul",
    name: "Azul",
    tagline: "Composez de sublimes mosaïques",
    emoji: "🀄",
    cover: COVERS.teal,
    players: [2, 4],
    duration: [30, 45],
    moods: ["reflexion", "ambiance"],
    complexity: 2,
    description:
      "Piochez des carreaux colorés et optimisez votre plateau. Simple, beau, redoutablement tactique.",
    buyUrl: "https://www.philibertnet.com/fr/next-move/54391-azul-826956620105.html",
  },
  {
    id: "7-wonders-duel",
    name: "7 Wonders Duel",
    tagline: "Le duel stratégique par excellence",
    emoji: "⚔️",
    cover: COVERS.gold,
    players: [2, 2],
    duration: [20, 30],
    moods: ["reflexion", "competition"],
    complexity: 3,
    description:
      "Toute la richesse de 7 Wonders concentrée en un face-à-face tendu et malin.",
    buyUrl:
      "https://www.philibertnet.com/fr/repos-productions/36626-7-wonders-duel-5425016923801.html",
  },
  {
    id: "sky-team",
    name: "Sky Team",
    tagline: "Faites atterrir l'avion, à deux",
    emoji: "✈️",
    cover: COVERS.violet,
    players: [2, 2],
    duration: [15, 20],
    moods: ["cooperation", "ambiance"],
    complexity: 2,
    description:
      "Pilote et copilote coordonnent leurs dés en silence pour poser l'appareil en douceur.",
    buyUrl: "https://www.philibertnet.com/fr/le-scorpion-masque/122587-sky-team-807658001270.html",
  },
  {
    id: "splendor",
    name: "Splendor",
    tagline: "Devenez le plus riche marchand de gemmes",
    emoji: "💎",
    cover: COVERS.rose,
    players: [2, 4],
    duration: [30, 30],
    moods: ["reflexion", "competition"],
    complexity: 2,
    description:
      "Accumulez des ressources pour développer votre commerce de pierres précieuses.",
    buyUrl: "https://www.philibertnet.com/fr/space-cowboys/27933-splendor-3558380020974.html",
  },
  {
    id: "just-one",
    name: "Just One",
    tagline: "Un seul mot, toute l'équipe ensemble",
    emoji: "💡",
    cover: COVERS.gold,
    players: [3, 7],
    duration: [15, 20],
    moods: ["cooperation", "fun", "ambiance"],
    complexity: 1,
    description:
      "Faites deviner un mot à un coéquipier avec un seul indice chacun. Rires garantis.",
    buyUrl: "https://www.philibertnet.com/fr/repos-productions/68512-just-one-5425016922569.html",
  },
  {
    id: "skull",
    name: "Skull",
    tagline: "Bluff pur, cœur battant",
    emoji: "💀",
    cover: COVERS.ink,
    players: [3, 6],
    duration: [20, 30],
    moods: ["fun", "competition", "ambiance"],
    complexity: 1,
    description:
      "Misez, bluffez, retournez vos cartes. Un classique du bluff redoutablement tendu.",
    buyUrl: "https://www.philibertnet.com/fr/space-cowboys/25868-skull-silver-3558380108320.html",
  },
  {
    id: "dixit",
    name: "Dixit",
    tagline: "Racontez une image en un mot",
    emoji: "🎨",
    cover: COVERS.rose,
    players: [3, 6],
    duration: [25, 30],
    moods: ["fun", "ambiance"],
    complexity: 1,
    description:
      "Des illustrations oniriques et une pincée de poésie pour un jeu tout en subtilité.",
    buyUrl: "https://www.philibertnet.com/fr/libellud/9145-dixit-9782370990822.html",
  },
  {
    id: "wavelength",
    name: "Wavelength",
    tagline: "Devinez ce que pense votre équipe",
    emoji: "📡",
    cover: COVERS.teal,
    players: [2, 12],
    duration: [30, 45],
    moods: ["fun", "ambiance", "cooperation"],
    complexity: 1,
    description:
      "Alignez vos intuitions sur celles du groupe. Idéal pour une grande tablée animée.",
    buyUrl:
      "https://www.philibertnet.com/fr/asmodee/152907-longueur-d-onde-wavelength-3558380081401.html",
  },
  {
    id: "wingspan",
    name: "Wingspan",
    tagline: "Attirez les plus beaux oiseaux",
    emoji: "🦜",
    cover: COVERS.teal,
    players: [1, 5],
    duration: [40, 70],
    moods: ["reflexion"],
    complexity: 3,
    description:
      "Construisez des chaînes d'actions élégantes autour d'une magnifique collection d'oiseaux.",
    buyUrl: "https://www.philibertnet.com/fr/matagot/73168-wingspan-3760146644991.html",
  },
  {
    id: "star-realms",
    name: "Star Realms",
    tagline: "Duel de flottes spatiales en deckbuilding",
    emoji: "🛸",
    cover: COVERS.violet,
    players: [2, 2],
    duration: [20, 30],
    moods: ["competition", "reflexion"],
    complexity: 2,
    description:
      "Construisez votre deck de vaisseaux et de bases pour réduire l'influence de votre adversaire à zéro.",
    buyUrl: "https://www.philibertnet.com/fr/white-wizard-games/29938-star-realms-852613005008.html",
  },
  {
    id: "catan",
    name: "Catane",
    tagline: "Colonisez, échangez, dominez l'île",
    emoji: "🏝️",
    cover: COVERS.gold,
    players: [3, 4],
    duration: [60, 90],
    moods: ["reflexion", "competition"],
    complexity: 2,
    description:
      "Récoltez des ressources, négociez avec vos adversaires et bâtissez le plus grand territoire.",
    buyUrl: "https://www.philibertnet.com/fr/kosmos/10772-catane-3558380126133.html",
  },
  {
    id: "carcassonne",
    name: "Carcassonne",
    tagline: "Bâtissez cités, routes et abbayes",
    emoji: "🏰",
    cover: COVERS.ink,
    players: [2, 5],
    duration: [30, 45],
    moods: ["reflexion", "ambiance"],
    complexity: 2,
    description:
      "Posez des tuiles pour façonner un paysage médiéval et placez vos meeples aux bons endroits.",
    buyUrl: "https://www.philibertnet.com/fr/zman-games/10544-carcassonne-vf-3558380096337.html",
  },
  {
    id: "ticket-to-ride",
    name: "Les Aventuriers du Rail",
    tagline: "Reliez les villes à travers le continent",
    emoji: "🚂",
    cover: COVERS.teal,
    players: [2, 5],
    duration: [30, 60],
    moods: ["reflexion", "competition"],
    complexity: 2,
    description:
      "Collectionnez des cartes wagon pour construire vos lignes ferroviaires et remplir vos objectifs.",
    buyUrl:
      "https://www.philibertnet.com/fr/days-of-wonder/2799-aventuriers-du-rail-les-824968072219.html",
  },
  {
    id: "pandemic",
    name: "Pandémie",
    tagline: "Sauvez le monde, tous ensemble",
    emoji: "🦠",
    cover: COVERS.coral,
    players: [2, 4],
    duration: [45, 45],
    moods: ["cooperation", "reflexion"],
    complexity: 2,
    description:
      "Coordonnez-vous pour soigner les foyers d'épidémie avant qu'ils n'échappent à tout contrôle.",
    buyUrl: "https://www.philibertnet.com/fr/zman-games/23050-pandemie-8435407620155.html",
  },
  {
    id: "king-of-tokyo",
    name: "King of Tokyo",
    tagline: "Devenez le monstre le plus terrible",
    emoji: "🦖",
    cover: COVERS.rose,
    players: [2, 6],
    duration: [30, 30],
    moods: ["competition", "fun", "ambiance"],
    complexity: 1,
    description:
      "Lancez les dés, gagnez de l'énergie et écrasez vos adversaires pour régner sur Tokyo.",
    buyUrl:
      "https://www.philibertnet.com/fr/iello/43123-king-of-tokyo-vf-version-2-3760175513152.html",
  },
  {
    id: "sushi-go",
    name: "Sushi Go!",
    tagline: "Draftez les meilleures combinaisons de sushis",
    emoji: "🍣",
    cover: COVERS.gold,
    players: [2, 5],
    duration: [15, 15],
    moods: ["fun", "competition"],
    complexity: 1,
    description:
      "Faites tourner les cartes et composez le plateau de sushis le plus gourmand.",
    buyUrl: "https://www.philibertnet.com/fr/cocktail-games/33928-sushi-go--3760052142765.html",
  },
  {
    id: "concept",
    name: "Concept",
    tagline: "Faites deviner sans un mot",
    emoji: "💭",
    cover: COVERS.violet,
    players: [4, 12],
    duration: [30, 60],
    moods: ["fun", "ambiance", "cooperation"],
    complexity: 1,
    description:
      "Combinez des pictogrammes sur le plateau pour faire deviner un mot ou une expression.",
    buyUrl: "https://www.philibertnet.com/fr/repos-productions/26218-concept-5425016921463.html",
  },
  {
    id: "bang",
    name: "Bang!",
    tagline: "Shérif, hors-la-loi ou renégat ?",
    emoji: "🤠",
    cover: COVERS.ink,
    players: [4, 7],
    duration: [20, 40],
    moods: ["competition", "fun", "ambiance"],
    complexity: 2,
    description:
      "Un jeu de rôles cachés dans l'Ouest sauvage : dégainez avant qu'on ne vous dégaine.",
    buyUrl: "https://www.philibertnet.com/fr/da-vinci/9742-bang-3558380005605.html",
  },
  {
    id: "exploding-kittens",
    name: "Exploding Kittens",
    tagline: "La roulette russe version chatons",
    emoji: "💥",
    cover: COVERS.coral,
    players: [2, 5],
    duration: [15, 15],
    moods: ["fun", "competition", "ambiance"],
    complexity: 1,
    description:
      "Piochez, désamorcez, évitez le chaton explosif. Le dernier survivant remporte la partie.",
    buyUrl:
      "https://www.philibertnet.com/fr/exploding-kittens/55296-exploding-kittens-vf-810083040349.html",
  },
  {
    id: "qwirkle",
    name: "Qwirkle",
    tagline: "Alignez formes et couleurs",
    emoji: "🔷",
    cover: COVERS.teal,
    players: [2, 4],
    duration: [30, 45],
    moods: ["reflexion", "ambiance"],
    complexity: 1,
    description:
      "Posez vos tuiles pour former des lignes de formes ou de couleurs assorties. Simple et addictif.",
    buyUrl: "https://www.philibertnet.com/fr/iello/10769-qwirkle-3760175519574.html",
  },
  {
    id: "patchwork",
    name: "Patchwork",
    tagline: "Cousez le plus beau patchwork, à deux",
    emoji: "🧵",
    cover: COVERS.rose,
    players: [2, 2],
    duration: [15, 30],
    moods: ["reflexion", "competition"],
    complexity: 2,
    description:
      "Achetez des pièces de tissu et optimisez votre plateau avant votre adversaire.",
    buyUrl: "https://www.philibertnet.com/fr/funforge/35727-patchwork-vf-3770001556376.html",
  },
  {
    id: "hanabi",
    name: "Hanabi",
    tagline: "Un feu d'artifice à l'aveugle",
    emoji: "🎆",
    cover: COVERS.gold,
    players: [2, 5],
    duration: [20, 25],
    moods: ["cooperation"],
    complexity: 1,
    description:
      "Vous voyez les cartes des autres, jamais les vôtres. Guidez-vous à coups d'indices pour réussir le spectacle.",
    buyUrl: "https://www.philibertnet.com/fr/cocktail-games/14204-hanabi-3760052143847.html",
  },
  {
    id: "cluedo",
    name: "Cluedo",
    tagline: "Qui, où, avec quoi ?",
    emoji: "🔍",
    cover: COVERS.ink,
    players: [3, 6],
    duration: [45, 60],
    moods: ["reflexion", "competition"],
    complexity: 2,
    description:
      "Le grand classique de l'enquête : déduisez le coupable, le lieu et l'arme du crime avant les autres.",
    buyUrl: "https://www.philibertnet.com/fr/hasbro/2994-cluedo-5010994207205.html",
  },
  {
    id: "exit",
    name: "Exit : La Cabane Abandonnée",
    tagline: "Un escape game sur votre table",
    emoji: "🔐",
    cover: COVERS.violet,
    players: [1, 4],
    duration: [60, 90],
    moods: ["cooperation", "reflexion"],
    complexity: 2,
    description:
      "Indices, cadenas mentaux et énigmes à la chaîne : coopérez pour sortir avant la fin du chrono.",
    buyUrl:
      "https://www.philibertnet.com/fr/iello/52128-exit-la-cabane-abandonnee-3760175514395.html",
  },
  {
    id: "magic-maze",
    name: "Magic Maze",
    tagline: "Un braquage coopératif... en silence",
    emoji: "🧙",
    cover: COVERS.coral,
    players: [1, 8],
    duration: [15, 15],
    moods: ["cooperation"],
    complexity: 2,
    description:
      "Contrôlez tous les héros ensemble, sans parler, avant que le sablier ne s'épuise.",
    buyUrl: "https://www.philibertnet.com/fr/sit-down/48287-magic-maze-3683080182971.html",
  },
  {
    id: "sea-salt-and-paper",
    name: "Sea Salt & Paper",
    tagline: "Un jeu de cartes tout en origami",
    emoji: "🌊",
    cover: COVERS.teal,
    players: [2, 6],
    duration: [15, 20],
    moods: ["fun", "competition"],
    complexity: 1,
    description:
      "Composez votre main, prenez le risque de continuer ou arrêtez les frais avant les autres.",
    buyUrl: "https://www.philibertnet.com/fr/bombyx/113913-sea-salt-paper-3760267991073.html",
  },
  {
    id: "skyjo",
    name: "Skyjo",
    tagline: "Le plus petit score gagne",
    emoji: "🔢",
    cover: COVERS.gold,
    players: [2, 8],
    duration: [20, 30],
    moods: ["fun", "competition"],
    complexity: 1,
    description:
      "Retournez, échangez, minimisez votre total. Rapide à apprendre, redoutable à maîtriser.",
    buyUrl: "https://www.philibertnet.com/fr/magilano/80922-skyjo-4260470080018.html",
  },
  {
    id: "loup-garou",
    name: "Les Loups-Garous de Thiercelieux",
    tagline: "Villageois le jour, loups la nuit",
    emoji: "🐺",
    cover: COVERS.ink,
    players: [8, 18],
    duration: [30, 60],
    moods: ["ambiance", "fun", "competition"],
    complexity: 1,
    description:
      "Un maître du jeu, deux camps, une seule question chaque nuit : qui va se faire dévorer ?",
    buyUrl:
      "https://www.philibertnet.com/fr/zygomatic/141-loups-garous-de-thiercelieux-les-3558380086000.html",
  },
  {
    id: "times-up",
    name: "Time's Up! Family",
    tagline: "Faites deviner en trois manches",
    emoji: "⏱️",
    cover: COVERS.rose,
    players: [4, 20],
    duration: [30, 45],
    moods: ["fun", "ambiance", "competition"],
    complexity: 1,
    description:
      "Mots, mime, une seule règle : faites deviner les mêmes personnages en trois manches de plus en plus corsées.",
    buyUrl:
      "https://www.philibertnet.com/fr/repos-productions/44756-times-up-family-5425016923412.html",
  },
  {
    id: "uno",
    name: "Uno",
    tagline: "Le jeu de cartes le plus connu au monde",
    emoji: "🃏",
    cover: COVERS.coral,
    players: [2, 10],
    duration: [15, 30],
    moods: ["fun", "competition"],
    complexity: 1,
    description:
      "Débarrassez-vous de vos cartes le plus vite possible, entre attaques et retournements.",
    buyUrl: "https://www.philibertnet.com/fr/mattel/5324-uno-746775036744.html",
  },
  {
    id: "trivial-pursuit",
    name: "Trivial Pursuit",
    tagline: "La référence des jeux de culture générale",
    emoji: "❓",
    cover: COVERS.violet,
    players: [2, 6],
    duration: [60, 90],
    moods: ["reflexion", "competition"],
    complexity: 2,
    description:
      "Répondez aux questions, collectionnez vos camemberts et prouvez que vous savez tout sur tout.",
    buyUrl:
      "https://www.philibertnet.com/fr/hasbro/52746-trivial-pursuit-edition-classique-5010993389568.html",
  },
  {
    id: "jungle-speed",
    name: "Jungle Speed",
    tagline: "Le totem n'attend personne",
    emoji: "⚡",
    cover: COVERS.gold,
    players: [2, 10],
    duration: [15, 20],
    moods: ["fun", "competition"],
    complexity: 1,
    description:
      "Deux cartes identiques apparaissent : soyez le plus rapide à attraper le totem.",
    buyUrl: "https://www.philibertnet.com/fr/asmodee/44693-jungle-speed-3558380037286.html",
  },
  {
    id: "colt-express",
    name: "Colt Express",
    tagline: "Braquez le train en 3D",
    emoji: "🔫",
    cover: COVERS.ink,
    players: [2, 6],
    duration: [30, 40],
    moods: ["competition", "fun"],
    complexity: 2,
    description:
      "Programmez vos actions à l'aveugle et grimpez sur un train miniature pour rafler le plus de butin.",
    buyUrl:
      "https://www.philibertnet.com/fr/ludonaute/31449-colt-express-3770002176313.html",
  },
  {
    id: "kingdomino",
    name: "Kingdomino",
    tagline: "Bâtissez le plus beau royaume",
    emoji: "👑",
    cover: COVERS.teal,
    players: [2, 4],
    duration: [15, 20],
    moods: ["reflexion", "ambiance"],
    complexity: 1,
    description:
      "Draftez des dominos-territoires et composez le royaume le plus harmonieux.",
    buyUrl: "https://www.philibertnet.com/fr/blue-orange/44925-kingdomino-3664824002601.html",
  },
  {
    id: "abalone",
    name: "Abalone",
    tagline: "Poussez les billes adverses hors du plateau",
    emoji: "⚪",
    cover: COVERS.rose,
    players: [2, 2],
    duration: [30, 30],
    moods: ["reflexion", "competition"],
    complexity: 2,
    description:
      "Un classique abstrait à deux : manœuvrez vos billes en formation pour éjecter celles de l'adversaire.",
    buyUrl: "https://www.philibertnet.com/fr/asmodee/2991-abalone-3558380044192.html",
  },
  {
    id: "machi-koro",
    name: "Machi Koro 2",
    tagline: "Développez votre ville, dé après dé",
    emoji: "🏙️",
    cover: COVERS.coral,
    players: [2, 4],
    duration: [30, 30],
    moods: ["reflexion", "competition"],
    complexity: 1,
    description:
      "Lancez les dés, activez vos bâtiments et développez votre ville plus vite que vos rivaux.",
    buyUrl: "https://www.philibertnet.com/fr/cmon/143748-machi-koro-2-3558380121411.html",
  },
  {
    id: "bohnanza",
    name: "Bohnanza",
    tagline: "Négociez vos champs de haricots",
    emoji: "🫘",
    cover: COVERS.gold,
    players: [2, 7],
    duration: [45, 45],
    moods: ["reflexion", "competition", "fun"],
    complexity: 1,
    description:
      "Plantez, récoltez, mais surtout négociez sans relâche pour optimiser vos champs.",
    buyUrl:
      "https://www.philibertnet.com/fr/gigamic/10138-bohnanza-vf-boite-metal-3421277803410.html",
  },
  {
    id: "mille-bornes",
    name: "Mille Bornes",
    tagline: "Premier arrivé à 1000 bornes",
    emoji: "🚗",
    cover: COVERS.violet,
    players: [2, 6],
    duration: [20, 30],
    moods: ["competition", "fun"],
    complexity: 1,
    description:
      "Le classique français de la course automobile en cartes : évitez pannes et crevaisons.",
    buyUrl:
      "https://www.philibertnet.com/fr/dujardin/29324-mille-bornes-le-grand-classique-3701656100324.html",
  },
  {
    id: "zombie-kidz",
    name: "Zombie Kidz Évolution",
    tagline: "Sauvez l'école, une partie à la fois",
    emoji: "🧟",
    cover: COVERS.teal,
    players: [2, 4],
    duration: [10, 20],
    moods: ["cooperation", "fun"],
    complexity: 1,
    description:
      "Un jeu coopératif qui évolue à chaque partie : ouvrez des enveloppes secrètes et débloquez de nouveaux pouvoirs.",
    buyUrl:
      "https://www.philibertnet.com/fr/le-scorpion-masque/71743-zombie-kids-evolution-807658000761.html",
  },
  {
    id: "terraforming-mars",
    name: "Terraforming Mars",
    tagline: "Rendez Mars habitable, entreprise contre entreprise",
    emoji: "🪐",
    cover: COVERS.coral,
    players: [1, 5],
    duration: [90, 120],
    moods: ["reflexion"],
    complexity: 3,
    description:
      "Développez production, villes et forêts pour terraformer la planète rouge plus vite que vos rivaux.",
    buyUrl: "https://www.philibertnet.com/fr/intrafin/48693-terraforming-mars-5425037740043.html",
  },
  {
    id: "agricola",
    name: "Agricola",
    tagline: "Faites prospérer votre ferme du 17e siècle",
    emoji: "🌾",
    cover: COVERS.gold,
    players: [1, 4],
    duration: [90, 120],
    moods: ["reflexion"],
    complexity: 3,
    description:
      "Nourrissez votre famille, agrandissez votre terrain, optimisez chaque action sur 14 tours serrés.",
    buyUrl: "https://www.philibertnet.com/en/funforge/44016-agricola-vf-3770001556451.html",
  },
  {
    id: "puerto-rico",
    name: "Puerto Rico 1897",
    tagline: "Bâtissez votre prospérité, plantation après plantation",
    emoji: "⚓",
    cover: COVERS.teal,
    players: [2, 5],
    duration: [90, 120],
    moods: ["reflexion", "competition"],
    complexity: 3,
    description:
      "Un classique de la gestion de rôles : engagez les bons ouvriers au bon moment pour prospérer.",
    buyUrl: "https://www.philibertnet.com/fr/alea/112423-puerto-rico-1897-4005556273485.html",
  },
  {
    id: "dominion",
    name: "Dominion",
    tagline: "Le jeu fondateur du deckbuilding",
    emoji: "📜",
    cover: COVERS.violet,
    players: [2, 4],
    duration: [30, 30],
    moods: ["reflexion", "competition"],
    complexity: 2,
    description:
      "Achetez des cartes pour améliorer votre deck, tour après tour, jusqu'à dominer le royaume.",
    buyUrl:
      "https://www.philibertnet.com/fr/gamme-dominion/162206-dominion-seconde-edition-3558380130468.html",
  },
  {
    id: "root",
    name: "Root",
    tagline: "Quatre factions, quatre façons de gagner",
    emoji: "🦊",
    cover: COVERS.ink,
    players: [2, 4],
    duration: [60, 90],
    moods: ["competition", "reflexion"],
    complexity: 3,
    description:
      "Un jeu asymétrique où chaque faction de la forêt joue selon ses propres règles pour dominer.",
    buyUrl: "https://www.philibertnet.com/fr/matagot/74046-root-3760146645165.html",
  },
  {
    id: "scythe",
    name: "Scythe",
    tagline: "Reconstruisez votre empire dans une Europe steampunk",
    emoji: "⚙️",
    cover: COVERS.rose,
    players: [1, 5],
    duration: [90, 115],
    moods: ["reflexion", "competition"],
    complexity: 3,
    description:
      "Explorez, récoltez, bâtissez et activez vos mechs pour devenir la faction la plus puissante.",
    buyUrl: "https://www.philibertnet.com/fr/matagot/44944-scythe-vf-3760146640214.html",
  },
  {
    id: "photosynthesis",
    name: "Photosynthesis",
    tagline: "Faites pousser la plus belle forêt",
    emoji: "🌳",
    cover: COVERS.teal,
    players: [2, 4],
    duration: [30, 60],
    moods: ["reflexion", "ambiance"],
    complexity: 1,
    description:
      "Placez vos arbres pour capter la lumière du soleil sans vous faire ombrager par vos voisins.",
    buyUrl: "https://www.philibertnet.com/fr/blue-orange/53512-photosynthesis-3770000904765.html",
  },
  {
    id: "everdell",
    name: "Everdell",
    tagline: "Bâtissez un village peuplé d'animaux",
    emoji: "🦔",
    cover: COVERS.gold,
    players: [1, 4],
    duration: [40, 80],
    moods: ["reflexion"],
    complexity: 2,
    description:
      "Placement d'ouvriers et construction de tableau dans un univers forestier magnifiquement illustré.",
    buyUrl: "https://www.philibertnet.com/fr/starling-games/84458-everdell-610585962435.html",
  },
  {
    id: "small-world",
    name: "Small World",
    tagline: "Votre civilisation s'essouffle, changez-en",
    emoji: "🗺️",
    cover: COVERS.violet,
    players: [2, 5],
    duration: [40, 80],
    moods: ["competition", "fun"],
    complexity: 2,
    description:
      "Choisissez peuple et pouvoir spécial pour conquérir un monde trop petit pour tout le monde.",
    buyUrl: "https://www.philibertnet.com/fr/days-of-wonder/9424-small-world-824968726815.html",
  },
  {
    id: "dobble",
    name: "Dobble",
    tagline: "Un seul symbole en commun, trouvez-le",
    emoji: "👀",
    cover: COVERS.coral,
    players: [2, 8],
    duration: [15, 15],
    moods: ["fun", "competition"],
    complexity: 1,
    description:
      "Rapidité et observation : repérez le symbole commun entre deux cartes plus vite que les autres.",
    buyUrl: "https://www.philibertnet.com/fr/zygomatic/69642-dobble-3558380078180.html",
  },
  {
    id: "perudo",
    name: "Perudo",
    tagline: "Bluffez sur ce qui se cache sous les gobelets",
    emoji: "🎲",
    cover: COVERS.ink,
    players: [2, 6],
    duration: [30, 30],
    moods: ["competition", "fun"],
    complexity: 1,
    description:
      "Annoncez, enchérissez ou doutez : un jeu de dés sud-américain mêlant probabilités et bluff.",
    buyUrl: "https://www.philibertnet.com/fr/asmodee/2030-perudo-3558380119241.html",
  },
  {
    id: "6-qui-prend",
    name: "6 qui prend !",
    tagline: "Ne soyez jamais la sixième carte",
    emoji: "🐂",
    cover: COVERS.rose,
    players: [2, 10],
    duration: [30, 30],
    moods: ["fun", "competition"],
    complexity: 1,
    description:
      "Posez vos cartes sans dépasser la limite des lignes, sous peine de ramasser des points négatifs.",
    buyUrl:
      "https://www.philibertnet.com/fr/gigamic/6064-6-qui-prend-boite-metal--3421277802918.html",
  },
  {
    id: "rummikub",
    name: "Rummikub",
    tagline: "Formez suites et séries avant les autres",
    emoji: "🎴",
    cover: COVERS.gold,
    players: [2, 4],
    duration: [30, 45],
    moods: ["reflexion", "competition"],
    complexity: 1,
    description:
      "Combinez vos plaques numérotées en suites et séries pour vous débarrasser de votre jeu en premier.",
    buyUrl:
      "https://www.philibertnet.com/fr/hasbro/49352-rummikub-chiffres-boite-carton-5010994124014.html",
  },
  {
    id: "scrabble",
    name: "Scrabble",
    tagline: "Le jeu de lettres le plus célèbre au monde",
    emoji: "🔤",
    cover: COVERS.teal,
    players: [2, 4],
    duration: [45, 90],
    moods: ["reflexion", "competition"],
    complexity: 2,
    description:
      "Formez des mots sur la grille et maximisez vos points grâce aux cases bonus.",
    buyUrl: "https://www.philibertnet.com/fr/mattel/2963-scrabble-classique-746775260699.html",
  },
  {
    id: "monopoly",
    name: "Monopoly",
    tagline: "Achetez, construisez, ruinez vos adversaires",
    emoji: "🎩",
    cover: COVERS.coral,
    players: [2, 8],
    duration: [90, 180],
    moods: ["competition", "fun"],
    complexity: 1,
    description:
      "Le classique intergénérationnel de l'immobilier : dernier joueur solvable, dernier joueur en jeu.",
    buyUrl: "https://www.philibertnet.com/fr/hasbro/2992-monopoly-classique-5010996302250.html",
  },
  {
    id: "risk",
    name: "Risk",
    tagline: "Conquérez le monde, région après région",
    emoji: "🌍",
    cover: COVERS.ink,
    players: [2, 6],
    duration: [120, 180],
    moods: ["competition", "reflexion"],
    complexity: 2,
    description:
      "Déplacez vos armées, négociez des alliances de circonstance et tentez la conquête totale.",
    buyUrl: "https://www.philibertnet.com/fr/hasbro/34128-risk-vf-5010993312306.html",
  },
  {
    id: "puissance-4",
    name: "Puissance 4",
    tagline: "Alignez 4 jetons avant l'adversaire",
    emoji: "🟡",
    cover: COVERS.violet,
    players: [2, 2],
    duration: [10, 15],
    moods: ["reflexion", "competition"],
    complexity: 1,
    description:
      "Simple, rapide, redoutable : le grand classique de l'alignement à la verticale.",
    buyUrl: "https://www.philibertnet.com/fr/hasbro/40779-puissance-4-5010993697601.html",
  },
  {
    id: "quoridor",
    name: "Quoridor",
    tagline: "Atteignez l'autre bout du plateau",
    emoji: "🧱",
    cover: COVERS.rose,
    players: [2, 4],
    duration: [15, 30],
    moods: ["reflexion", "competition"],
    complexity: 1,
    description:
      "Avancez votre pion ou posez une barrière : un jeu abstrait aussi simple que malin.",
    buyUrl: "https://www.philibertnet.com/fr/gigamic/259-quoridor-3421273322915.html",
  },
  {
    id: "draftosaurus",
    name: "Draftosaurus",
    tagline: "Peuplez le plus beau zoo de dinosaures",
    emoji: "🦕",
    cover: COVERS.gold,
    players: [2, 5],
    duration: [15, 15],
    moods: ["fun", "ambiance"],
    complexity: 1,
    description:
      "Draftez des dinosaures et placez-les selon les contraintes du dé pour marquer un maximum de points.",
    buyUrl: "https://www.philibertnet.com/fr/ankama/73636-draftosaurus-3760008428189.html",
  },
  {
    id: "decrypto",
    name: "Decrypto",
    tagline: "Transmettez vos codes sans vous faire intercepter",
    emoji: "🔑",
    cover: COVERS.teal,
    players: [3, 8],
    duration: [30, 45],
    moods: ["reflexion", "competition"],
    complexity: 2,
    description:
      "Donnez des indices assez clairs pour votre équipe, assez flous pour l'équipe adverse.",
    buyUrl: "https://www.philibertnet.com/fr/le-scorpion-masque/56970-decrypto-807658000709.html",
  },
  {
    id: "spirit-island",
    name: "Spirit Island",
    tagline: "Défendez votre île contre les envahisseurs",
    emoji: "🌋",
    cover: COVERS.coral,
    players: [1, 4],
    duration: [90, 120],
    moods: ["cooperation", "reflexion"],
    complexity: 3,
    description:
      "Incarnez un esprit de la nature et coordonnez vos pouvoirs pour repousser la colonisation.",
    buyUrl: "https://www.philibertnet.com/fr/intrafin/64223-spirit-island-5425037740173.html",
  },
  {
    id: "dune-imperium",
    name: "Dune : Imperium",
    tagline: "Deckbuilding et placement d'ouvriers dans l'univers de Dune",
    emoji: "🏜️",
    cover: COVERS.ink,
    players: [1, 4],
    duration: [60, 120],
    moods: ["reflexion", "competition"],
    complexity: 2,
    description:
      "Envoyez vos agents, façonnez votre deck et naviguez entre les factions pour dominer Arrakis.",
    buyUrl:
      "https://www.philibertnet.com/fr/lucky-duck-games/96263-dune-imperium-787790581093.html",
  },
  {
    id: "the-mind",
    name: "The Mind",
    tagline: "Jouez vos cartes dans l'ordre, sans un mot",
    emoji: "🔮",
    cover: COVERS.violet,
    players: [2, 4],
    duration: [15, 20],
    moods: ["cooperation"],
    complexity: 1,
    description:
      "Aucune communication autorisée : synchronisez-vous à l'instinct pour jouer vos cartes en ordre croissant.",
    buyUrl: "https://www.philibertnet.com/fr/oya/62873-the-mind-3760207030329.html",
  },
  {
    id: "camel-up",
    name: "Camel Up",
    tagline: "Pariez sur la course de chameaux",
    emoji: "🐫",
    cover: COVERS.gold,
    players: [3, 8],
    duration: [30, 45],
    moods: ["fun", "competition"],
    complexity: 1,
    description:
      "Un dé pyramidal, des paris à chaque manche et des chameaux qui grimpent les uns sur les autres.",
    buyUrl: "https://www.philibertnet.com/fr/filosofia/31039-camel-up-vf-688623106707.html",
  },
  {
    id: "forbidden-island",
    name: "L'Île Interdite",
    tagline: "Récupérez les trésors avant qu'elle ne coule",
    emoji: "🗿",
    cover: COVERS.teal,
    players: [2, 4],
    duration: [30, 30],
    moods: ["cooperation"],
    complexity: 1,
    description:
      "L'île s'enfonce sous les flots : coordonnez-vous pour récupérer les 4 trésors avant la fin.",
    buyUrl: "https://www.philibertnet.com/fr/cocktail-games/11917-l-ile-interdite-3760052140747.html",
  },
  {
    id: "clank",
    name: "Clank!",
    tagline: "Volez le dragon, sans faire de bruit",
    emoji: "🐉",
    cover: COVERS.rose,
    players: [2, 4],
    duration: [30, 60],
    moods: ["competition", "reflexion"],
    complexity: 2,
    description:
      "Un deckbuilding d'exploration où chaque bruit émis attire un peu plus l'attention du dragon.",
    buyUrl:
      "https://www.philibertnet.com/fr/renegade-game-studios/52852-clank-vf-3760243850066.html",
  },
  {
    id: "point-salad",
    name: "Point Salad",
    tagline: "Composez la meilleure salade de points",
    emoji: "🥗",
    cover: COVERS.coral,
    players: [2, 6],
    duration: [15, 30],
    moods: ["fun", "reflexion"],
    complexity: 1,
    description:
      "Draftez légumes et cartes de score : plus de 100 façons différentes de marquer des points.",
    buyUrl: "https://philibertnet.com/en/alderac/80423-point-salad-729220070593.html",
  },
  {
    id: "coup",
    name: "Coup",
    tagline: "Bluffez, espionnez, éliminez",
    emoji: "🗡️",
    cover: COVERS.ink,
    players: [2, 6],
    duration: [15, 15],
    moods: ["competition", "fun"],
    complexity: 1,
    description:
      "Utilisez les pouvoirs de vos personnages cachés, mais gare au bluff qui tourne mal.",
    buyUrl:
      "https://www.philibertnet.com/fr/indie-boards-and-cards/27203-coup-722301926246.html",
  },
  {
    id: "mascarade",
    name: "Mascarade",
    tagline: "Portez le bon masque au bon moment",
    emoji: "🎭",
    cover: COVERS.violet,
    players: [2, 13],
    duration: [15, 30],
    moods: ["fun", "competition"],
    complexity: 1,
    description:
      "Les masques s'échangent en cachette : personne ne sait plus vraiment qui est qui.",
    buyUrl:
      "https://www.philibertnet.com/fr/repos-productions/104157-mascarade-nouvelle-edition-5425016925478.html",
  },
  {
    id: "ark-nova",
    name: "Ark Nova",
    tagline: "Concevez le zoo le plus performant",
    emoji: "🦓",
    cover: COVERS.teal,
    players: [1, 4],
    duration: [90, 150],
    moods: ["reflexion"],
    complexity: 3,
    description:
      "Planifiez enclos, animaux et projets de conservation pour bâtir un zoo à la fois riche et responsable.",
    buyUrl: "https://www.philibertnet.com/fr/super-meeple/105162-ark-nova-3770023051064.html",
  },
  {
    id: "twilight-struggle",
    name: "Twilight Struggle",
    tagline: "45 ans de Guerre Froide en face-à-face",
    emoji: "☢️",
    cover: COVERS.ink,
    players: [2, 2],
    duration: [120, 180],
    moods: ["reflexion", "competition"],
    complexity: 3,
    description:
      "Cartes historiques, influence et coups d'État : un duel dense entre USA et URSS.",
    buyUrl: "https://www.philibertnet.com/fr/gmt/46267-twilight-struggle-vf-4260105830025.html",
  },
  {
    id: "brass-birmingham",
    name: "Brass Birmingham",
    tagline: "Bâtissez votre empire industriel",
    emoji: "🏭",
    cover: COVERS.gold,
    players: [2, 4],
    duration: [90, 120],
    moods: ["reflexion", "competition"],
    complexity: 3,
    description:
      "Coton, poterie et canaux : un eurogame dense sur la révolution industrielle anglaise.",
    buyUrl: "https://www.philibertnet.com/fr/funforge/75628-brass-birmingham-3770001556758.html",
  },
  {
    id: "gloomhaven",
    name: "Gloomhaven",
    tagline: "Une campagne coopérative de donjons épique",
    emoji: "🛡️",
    cover: COVERS.violet,
    players: [1, 4],
    duration: [90, 150],
    moods: ["cooperation", "reflexion"],
    complexity: 3,
    description:
      "Plus de 90 scénarios, 17 classes de personnages : une campagne coopérative qui évolue avec vos choix.",
    buyUrl:
      "https://www.philibertnet.com/fr/cephalofair-games/49846-gloomhaven-2nd-print-019962194719.html",
  },
  {
    id: "lords-of-waterdeep",
    name: "Lords of Waterdeep",
    tagline: "Intrigues et complots dans les Royaumes Oubliés",
    emoji: "🗝️",
    cover: COVERS.rose,
    players: [2, 5],
    duration: [60, 90],
    moods: ["reflexion", "competition"],
    complexity: 2,
    description:
      "Recrutez des aventuriers, envoyez-les en quête et étendez votre influence sur la ville.",
    buyUrl:
      "https://www.philibertnet.com/fr/renegade-game-studios/177058-lords-of-waterdeep-810011729216.html",
  },
  {
    id: "betrayal",
    name: "Trahison à la Maison sur la Colline",
    tagline: "Un manoir hanté qui change à chaque partie",
    emoji: "👻",
    cover: COVERS.ink,
    players: [3, 6],
    duration: [60, 60],
    moods: ["cooperation", "competition", "fun"],
    complexity: 2,
    description:
      "Explorez pièce par pièce jusqu'à ce que la maison désigne un traître parmi vous.",
    buyUrl:
      "https://www.philibertnet.com/fr/avalon-hill/81444-betrayal-at-house-on-the-hill-5010993929306.html",
  },
  {
    id: "avalon",
    name: "Avalon",
    tagline: "Loyaux chevaliers contre agents de Mordred",
    emoji: "🏰",
    cover: COVERS.teal,
    players: [5, 10],
    duration: [30, 30],
    moods: ["competition", "fun", "reflexion"],
    complexity: 1,
    description:
      "Bien et mal s'affrontent en secret autour de la Table Ronde. Merlin sait tout, mais ne peut rien dire.",
    buyUrl: "https://www.philibertnet.com/fr/matagot/95063-avalon-3760372233822.html",
  },
  {
    id: "saboteur",
    name: "Saboteur",
    tagline: "Chercheurs d'or contre saboteurs infiltrés",
    emoji: "⛏️",
    cover: COVERS.coral,
    players: [3, 10],
    duration: [30, 30],
    moods: ["fun", "competition"],
    complexity: 1,
    description:
      "Creusez vers le trésor... ou sabotez discrètement les galeries des autres joueurs.",
    buyUrl: "https://www.philibertnet.com/fr/gigamic/6068-saboteur-boite-metal-3421277803014.html",
  },
  {
    id: "forbidden-desert",
    name: "Le Désert Interdit",
    tagline: "Survivez à la tempête de sable",
    emoji: "🌵",
    cover: COVERS.gold,
    players: [2, 5],
    duration: [45, 45],
    moods: ["cooperation"],
    complexity: 2,
    description:
      "Trouvez les pièces de la machine volante avant que la tempête n'ensevelisse tout.",
    buyUrl: "https://www.philibertnet.com/fr/cocktail-games/24850-le-desert-interdit-3760052141331.html",
  },
  {
    id: "sagrada",
    name: "Sagrada",
    tagline: "Composez un vitrail avec des dés colorés",
    emoji: "🪟",
    cover: COVERS.violet,
    players: [1, 4],
    duration: [30, 45],
    moods: ["reflexion"],
    complexity: 2,
    description:
      "Draftez des dés et respectez les contraintes de couleur et de valeur pour un vitrail parfait.",
    buyUrl: "https://www.philibertnet.com/fr/matagot/62875-sagrada-3760146647657.html",
  },
  {
    id: "welcome-to",
    name: "Welcome To...",
    tagline: "Dessinez le lotissement de vos rêves",
    emoji: "🏘️",
    cover: COVERS.teal,
    players: [1, 6],
    duration: [25, 25],
    moods: ["reflexion"],
    complexity: 1,
    description:
      "Un roll-and-write sans dé : placez vos numéros de maison dans le bon ordre sur trois rues.",
    buyUrl: "https://www.philibertnet.com/en/blue-cocker/57059-welcome-3770006370366.html",
  },
  {
    id: "cartographers",
    name: "Cartographers",
    tagline: "Dessinez la carte du royaume",
    emoji: "🖊️",
    cover: COVERS.rose,
    players: [1, 4],
    duration: [30, 30],
    moods: ["reflexion"],
    complexity: 1,
    description:
      "Un flip-and-write où vous dessinez forêts, villages et rivières pour remplir vos objectifs de saison.",
    buyUrl:
      "https://www.philibertnet.com/fr/intrafin/84577-cartographers-a-roll-player-tale-5425037740418.html",
  },
  {
    id: "tsuro",
    name: "Tsuro",
    tagline: "Tracez votre chemin, évitez la sortie",
    emoji: "🌀",
    cover: COVERS.coral,
    players: [2, 8],
    duration: [15, 30],
    moods: ["fun", "reflexion"],
    complexity: 1,
    description:
      "Posez vos tuiles pour prolonger votre chemin sans sortir du plateau ni percuter un adversaire.",
    buyUrl: "https://www.philibertnet.com/fr/matagot/5227-tsuro-3760146647541.html",
  },
  {
    id: "blokus",
    name: "Blokus",
    tagline: "Placez vos pièces coin à coin",
    emoji: "🟦",
    cover: COVERS.gold,
    players: [2, 4],
    duration: [20, 30],
    moods: ["reflexion", "competition"],
    complexity: 1,
    description:
      "21 pièces à placer en ne touchant que par les coins : un jeu abstrait simple et profond.",
    buyUrl: "https://www.philibertnet.com/fr/mattel/5512-blokus-746775363840.html",
  },
  {
    id: "bunny-kingdom",
    name: "Bunny Kingdom",
    tagline: "Étendez votre royaume de lapins",
    emoji: "🐰",
    cover: COVERS.violet,
    players: [2, 4],
    duration: [45, 60],
    moods: ["reflexion", "competition"],
    complexity: 2,
    description:
      "Draftez des cartes pour bâtir villes et ressources, sans savoir quelles missions comptent vraiment.",
    buyUrl: "https://www.philibertnet.com/fr/iello/52819-bunny-kingdom-3760175513121.html",
  },
  {
    id: "karuba",
    name: "Karuba",
    tagline: "Menez vos explorateurs aux trésors",
    emoji: "🌴",
    cover: COVERS.teal,
    players: [2, 4],
    duration: [30, 45],
    moods: ["cooperation", "competition"],
    complexity: 1,
    description:
      "Posez vos tuiles simultanément pour guider vos explorateurs vers les temples cachés dans la jungle.",
    buyUrl: "https://philibertnet.com/en/haba/39245-karuba-4010168215525.html",
  },
  {
    id: "takenoko",
    name: "Takenoko",
    tagline: "Cultivez le bambou, nourrissez le panda",
    emoji: "🐼",
    cover: COVERS.rose,
    players: [2, 4],
    duration: [45, 45],
    moods: ["reflexion", "ambiance"],
    complexity: 2,
    description:
      "Irriguez vos parcelles et faites pousser du bambou sans que le panda affamé ne dévore tout.",
    buyUrl: "https://www.philibertnet.com/fr/bombyx/15491-takenoko-3760267991165.html",
  },
  {
    id: "citadelles",
    name: "Citadelles",
    tagline: "Bâtissez la plus prestigieuse des villes",
    emoji: "🏯",
    cover: COVERS.ink,
    players: [2, 8],
    duration: [45, 60],
    moods: ["reflexion", "competition"],
    complexity: 2,
    description:
      "Choisissez un rôle secret chaque tour et devinez ceux de vos adversaires pour prendre l'avantage.",
    buyUrl:
      "https://www.philibertnet.com/fr/edge/45987-citadelles-edition-classique-8435407639126.html",
  },
  {
    id: "tokaido",
    name: "Tokaido",
    tagline: "Un voyage contemplatif sur la route de l'Est",
    emoji: "🎋",
    cover: COVERS.coral,
    players: [2, 5],
    duration: [45, 45],
    moods: ["reflexion", "ambiance"],
    complexity: 1,
    description:
      "Prenez le temps d'admirer les paysages : dans Tokaido, le plus riche n'est pas toujours le vainqueur.",
    buyUrl: "https://www.philibertnet.com/fr/funforge/20177-tokaido-3770001556604.html",
  },
  {
    id: "labyrinthe",
    name: "Labyrinthe",
    tagline: "Le labyrinthe qui bouge sous vos pieds",
    emoji: "🧩",
    cover: COVERS.gold,
    players: [2, 4],
    duration: [20, 30],
    moods: ["reflexion", "fun"],
    complexity: 1,
    description:
      "Glissez les couloirs pour ouvrir votre chemin vers le trésor, ou fermer celui des autres.",
    buyUrl: "https://www.philibertnet.com/fr/ravensburger/57525-labyrinthe-4005556267439.html",
  },
  {
    id: "similo",
    name: "Similo",
    tagline: "Devinez le personnage secret, en coopération",
    emoji: "🐾",
    cover: COVERS.teal,
    players: [2, 8],
    duration: [10, 15],
    moods: ["cooperation"],
    complexity: 1,
    description:
      "Le conteur joue des cartes indices pour orienter les devineurs vers le bon personnage.",
    buyUrl: "https://www.philibertnet.com/fr/similo/90084-similo-animaux-3421272828715.html",
  },
  {
    id: "boggle",
    name: "Boggle",
    tagline: "Trouvez un maximum de mots en 90 secondes",
    emoji: "🔠",
    cover: COVERS.violet,
    players: [2, 8],
    duration: [15, 15],
    moods: ["fun", "reflexion"],
    complexity: 1,
    description:
      "Secouez les dés-lettres et notez tous les mots que vous trouvez avant la fin du chrono.",
    buyUrl: "https://www.philibertnet.com/fr/hasbro/134853-boggle-2100001002220.html",
  },
  {
    id: "res-arcana",
    name: "Res Arcana",
    tagline: "Devenez le roi de l'Arcane",
    emoji: "🔥",
    cover: COVERS.rose,
    players: [2, 4],
    duration: [30, 60],
    moods: ["reflexion", "competition"],
    complexity: 2,
    description:
      "Collectez des essences magiques pour activer artefacts, lieux de pouvoir et dragons.",
    buyUrl: "https://www.philibertnet.com/fr/sand-castle-games/74536-res-arcana-850004236123.html",
  },
  {
    id: "lost-ruins-of-arnak",
    name: "Lost Ruins of Arnak",
    tagline: "Explorez une île oubliée",
    emoji: "⛰️",
    cover: COVERS.ink,
    players: [1, 4],
    duration: [90, 120],
    moods: ["reflexion"],
    complexity: 2,
    description:
      "Deckbuilding et placement d'ouvriers se combinent pour percer les secrets d'Arnak.",
    buyUrl:
      "https://www.philibertnet.com/fr/czech-games-edition/90531-lost-ruins-of-arnak-8594156310592.html",
  },
  {
    id: "kemet",
    name: "Kemet : Blood and Sand",
    tagline: "Dominez l'Égypte au nom de vos dieux",
    emoji: "🔱",
    cover: COVERS.gold,
    players: [2, 5],
    duration: [90, 90],
    moods: ["competition", "reflexion"],
    complexity: 3,
    description:
      "Bâtissez des pyramides, invoquez des créatures mythiques et menez vos troupes à la bataille.",
    buyUrl:
      "https://www.philibertnet.com/fr/matagot/95494-kemet-blood-and-sand-3760146648234.html",
  },
  {
    id: "inis",
    name: "Inis",
    tagline: "Devenez le Haut Roi d'Irlande",
    emoji: "☘️",
    cover: COVERS.teal,
    players: [2, 4],
    duration: [60, 90],
    moods: ["reflexion", "competition"],
    complexity: 2,
    description:
      "Conquête, épopées et spiritualité celtique se mêlent pour élire le prochain Haut Roi.",
    buyUrl: "https://www.philibertnet.com/fr/matagot/66891-inis-3760146644366.html",
  },
  {
    id: "7-wonders-architects",
    name: "7 Wonders: Architects",
    tagline: "L'entrée en douceur dans l'univers de 7 Wonders",
    emoji: "🏗️",
    cover: COVERS.coral,
    players: [2, 7],
    duration: [20, 30],
    moods: ["fun", "competition"],
    complexity: 1,
    description:
      "Version simplifiée de 7 Wonders : choisissez une carte à chaque tour et bâtissez votre merveille.",
    buyUrl:
      "https://www.philibertnet.com/fr/repos-productions/101352-7-wonders-architects-5425016925553.html",
  },
  {
    id: "alhambra",
    name: "Alhambra",
    tagline: "Bâtissez la plus belle cité fortifiée",
    emoji: "🕌",
    cover: COVERS.violet,
    players: [2, 6],
    duration: [60, 90],
    moods: ["reflexion", "competition"],
    complexity: 2,
    description:
      "Gérez plusieurs devises pour recruter les meilleurs ouvriers et étendre votre palais.",
    buyUrl: "https://www.philibertnet.com/fr/queen-games/1814-alhambra-4010350104323.html",
  },
  {
    id: "chronicles-of-crime",
    name: "Chronicles of Crime",
    tagline: "Une enquête coopérative pilotée par appli",
    emoji: "🚔",
    cover: COVERS.ink,
    players: [1, 4],
    duration: [60, 90],
    moods: ["cooperation", "reflexion"],
    complexity: 2,
    description:
      "Interrogez des suspects et explorez des scènes en réalité virtuelle pour résoudre l'enquête.",
    buyUrl: "https://www.philibertnet.com/fr/lucky-duck-games/67017-chronicles-of-crime-752830291089.html",
  },
  {
    id: "concordia",
    name: "Concordia",
    tagline: "Développez votre réseau commercial romain",
    emoji: "🐎",
    cover: COVERS.rose,
    players: [2, 5],
    duration: [90, 120],
    moods: ["reflexion"],
    complexity: 3,
    description:
      "Envoyez vos colons à travers l'Empire et gagnez la faveur des dieux, sans jamais vous affronter directement.",
    buyUrl: "https://www.philibertnet.com/fr/pd-games/28860-concordia-vf-4280000097170.html",
  },
  {
    id: "barrage",
    name: "Barrage",
    tagline: "Bâtissez le plus grand empire hydroélectrique",
    emoji: "⚡",
    cover: COVERS.gold,
    players: [2, 4],
    duration: [90, 150],
    moods: ["reflexion", "competition"],
    complexity: 3,
    description:
      "Captez l'eau, construisez barrages et centrales pour dominer la production hydroélectrique.",
    buyUrl: "https://www.philibertnet.com/fr/intrafin/81908-barrage-5425037740319.html",
  },
];

export function gameById(id) {
  return GAMES.find((g) => g.id === id);
}

// composition initiale de "votre ludothèque" — modifiable dans la section dédiée
export const DEFAULT_LIBRARY_IDS = [
  "azul",
  "codenames",
  "cascadia",
  "7-wonders-duel",
  "sky-team",
  "splendor",
  "heat",
  "the-crew",
];

// petit hash déterministe pour varier légèrement les scores sans être aléatoire
function seedFrom(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return (h % 7) - 3; // -3..+3
}

function playersScore(game, players) {
  if (!players) return 12;
  const [min, max] = game.players;
  const want = players === "6+" ? 6 : players;
  if (players === "6+") {
    if (max >= 6) return 40;
    if (max >= 5) return 20;
    return 4;
  }
  if (want >= min && want <= max) return 40;
  if (want === min - 1 || want === max + 1) return 20;
  return 6;
}

function durationScore(game, durationId) {
  const opt = DURATION_OPTIONS.find((d) => d.id === durationId);
  if (!opt) return 10;
  const [gMin, gMax] = game.duration;
  const overlap = Math.min(opt.max, gMax) - Math.max(opt.min, gMin);
  if (overlap > 0) return 30;
  const gap = opt.min - gMax > 0 ? opt.min - gMax : gMin - opt.max;
  if (gap <= 15) return 14;
  return 2;
}

function moodScore(game, moods) {
  if (!moods || moods.length === 0) return 18;
  const hits = moods.filter((m) => game.moods.includes(m)).length;
  return Math.round((hits / moods.length) * 30);
}

export function recommend({ players, duration, moods, libraryIds }) {
  const pool = libraryIds ? GAMES.filter((g) => libraryIds.includes(g.id)) : GAMES;

  const scored = pool
    .map((game) => {
      const base =
        playersScore(game, players) + durationScore(game, duration) + moodScore(game, moods);
      const varied = base + seedFrom(game.id);
      const pct = Math.max(58, Math.min(99, varied));
      return { game, score: pct };
    })
    .sort((a, b) => b.score - a.score);

  return {
    top: scored[0] ?? null,
    alternatives: scored.slice(1, 3),
  };
}

export function explanationFor(game, { players, duration, moods }) {
  const bits = [];

  if (moods?.includes("cooperation")) bits.push("coopératif");
  if (moods?.includes("reflexion")) bits.push("stratégique");
  if (moods?.includes("fun") || moods?.includes("ambiance")) bits.push("facile à expliquer");
  if (moods?.includes("competition")) bits.push("tendu et compétitif");

  const durationLabel = DURATION_OPTIONS.find((d) => d.id === duration)?.label;
  const wantsShort = duration === "short" || duration === "mid";

  const traits = bits.length ? bits.slice(0, 2).join(" et ") : "accessible et malin";
  const timePart = wantsShort
    ? "quelque chose de rapide"
    : durationLabel
      ? `une partie qui prend son temps (${durationLabel})`
      : "une belle partie";

  return `Vous cherchez ${timePart}, ${traits}. ${game.name} correspond parfaitement à votre groupe.`;
}
