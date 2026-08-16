import { motion } from "framer-motion";
import { gameById } from "../data/games";
import CoverArt from "./CoverArt";

// Jeux "aimés" par chaque ami — sert à la fois à afficher leur profil et à
// calculer de vraies recommandations croisées (pas des chiffres fixes).
const FRIENDS = [
  {
    name: "Alice",
    avatar: "🦊",
    likes: ["cascadia", "azul", "wingspan", "everdell", "photosynthesis"],
  },
  {
    name: "Thomas",
    avatar: "🐻",
    likes: ["7-wonders", "splendor", "7-wonders-duel", "terraforming-mars", "concordia", "decrypto"],
  },
  {
    name: "Julie",
    avatar: "🐨",
    likes: ["codenames", "just-one", "concept", "decrypto", "camel-up"],
  },
  {
    name: "Marc",
    avatar: "🦁",
    likes: ["heat", "king-of-tokyo", "colt-express", "concept", "camel-up"],
  },
];

// petite variation déterministe pour que les scores ne soient pas des ronds parfaits
function seedFrom(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h % 6;
}

function buildRecommendations(libraryIds) {
  // affinité avec chaque ami = nombre de jeux en commun avec votre ludothèque
  const withAffinity = FRIENDS.map((friend) => {
    const shared = friend.likes.filter((id) => libraryIds.includes(id));
    const discovery = friend.likes.find((id) => !libraryIds.includes(id));
    return { ...friend, sharedCount: shared.length, shared, discovery };
  }).sort((a, b) => b.sharedCount - a.sharedCount);

  // jeux aimés par au moins deux amis, que vous ne possédez pas encore
  const counts = new Map();
  FRIENDS.forEach((friend) => {
    friend.likes.forEach((id) => {
      if (libraryIds.includes(id)) return;
      if (!counts.has(id)) counts.set(id, new Set());
      counts.get(id).add(friend.name);
    });
  });

  const groupPicks = [...counts.entries()]
    .filter(([, names]) => names.size >= 2)
    .map(([id, names]) => {
      const score = Math.min(97, 76 + names.size * 9 + seedFrom(id));
      return { game: gameById(id), names: [...names], score };
    })
    .filter((p) => p.game)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return { withAffinity, groupPicks };
}

export default function Friends({ libraryIds = [], onShowRules }) {
  const { withAffinity, groupPicks } = buildRecommendations(libraryIds);

  return (
    <section id="amis" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <span className="text-sm font-semibold tracking-wide text-coral-soft uppercase">
            Jouez à plusieurs
          </span>
          <h2 className="text-balance mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">
            Jouez avec vos amis
          </h2>
          <p className="mt-4 text-cream-dim">
            GameNight repère les amis qui ont des goûts proches des vôtres, puis vous
            pousse ce qu'ils adorent et que vous ne connaissez pas encore.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-line bg-surface p-6 sm:p-8 lg:col-span-2"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-coral to-gold text-sm font-bold text-ink">
                {FRIENDS.length}
              </span>
              <h3 className="font-display text-xl font-semibold text-cream">Groupe : Les copains</h3>
            </div>

            <div className="mt-6 space-y-3">
              {withAffinity.map((friend) => (
                <div
                  key={friend.name}
                  className="rounded-2xl border border-line-soft bg-ink-soft/50 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 text-lg">
                      {friend.avatar}
                    </span>
                    <span className="font-medium text-cream">{friend.name}</span>
                    <span className="ml-auto shrink-0 rounded-full bg-ink/50 px-2.5 py-1 text-xs font-semibold text-cream-dim">
                      {friend.sharedCount} en commun
                    </span>
                  </div>
                  {friend.shared.length > 0 && (
                    <p className="mt-2 pl-12 text-xs text-cream-faint">
                      Vous aimez tous les deux{" "}
                      {friend.shared.map((id) => gameById(id)?.name).join(", ")}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-teal/25 bg-gradient-to-br from-surface to-ink-soft p-6 sm:p-8 lg:col-span-3"
          >
            <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-teal/15 blur-[60px]" />

            <h3 className="relative font-display text-xl font-semibold text-cream">
              Grâce à vos goûts en commun
            </h3>
            <p className="relative mt-1 text-sm text-cream-faint">
              Ils aiment déjà ce que vous aimez — voici ce qu'ils aiment d'autre.
            </p>
            <div className="relative mt-5 space-y-2.5">
              {withAffinity
                .filter((f) => f.discovery)
                .slice(0, 3)
                .map((friend) => {
                  const game = gameById(friend.discovery);
                  if (!game) return null;
                  return (
                    <button
                      key={friend.name}
                      onClick={() => onShowRules?.(game)}
                      className="flex w-full items-center gap-3 rounded-2xl border border-line-soft bg-ink/40 p-3 text-left transition-colors hover:border-teal/40"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-2 text-base">
                        {friend.avatar}
                      </span>
                      <CoverArt game={game} size="sm" className="h-12 w-12 shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm text-cream-dim">
                          <span className="font-semibold text-cream">{friend.name}</span> adore{" "}
                          <span className="font-semibold text-cream">{game.name}</span>, vous ne
                          l'avez pas encore
                        </p>
                      </div>
                      <span className="shrink-0 text-xs font-semibold text-teal-soft">ℹ️</span>
                    </button>
                  );
                })}
            </div>

            {groupPicks.length > 0 && (
              <>
                <h3 className="relative mt-7 font-display text-xl font-semibold text-cream">
                  Plusieurs amis sont d'accord
                </h3>
                <div className="relative mt-5 space-y-3">
                  {groupPicks.map((pick, i) => (
                    <motion.button
                      key={pick.game.id}
                      onClick={() => onShowRules?.(pick.game)}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                      className="flex w-full items-center gap-4 rounded-2xl border border-line-soft bg-ink/40 p-4 text-left transition-colors hover:border-teal/40"
                    >
                      <span className="text-2xl">{["🥇", "🥈", "🥉"][i]}</span>
                      <div className="min-w-0 flex-1">
                        <span className="block font-display text-lg font-semibold text-cream">
                          {pick.game.name}
                        </span>
                        <span className="text-xs text-cream-faint">
                          Aimé par {pick.names.join(" et ")}
                        </span>
                      </div>
                      <div className="hidden h-1.5 w-24 overflow-hidden rounded-full bg-ink-soft sm:block">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-teal to-teal-soft"
                          style={{ width: `${pick.score}%` }}
                        />
                      </div>
                      <span className="shrink-0 font-semibold text-teal-soft">{pick.score}%</span>
                    </motion.button>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
