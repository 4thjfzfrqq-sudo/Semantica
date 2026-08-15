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
