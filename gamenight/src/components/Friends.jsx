import { motion } from "framer-motion";

const MEMBERS = [
  { name: "Alice", game: "Cascadia", avatar: "🦊" },
  { name: "Thomas", game: "7 Wonders", avatar: "🐻" },
  { name: "Julie", game: "Codenames", avatar: "🐨" },
  { name: "Marc", game: "Heat", avatar: "🦁" },
];

const GROUP_PICKS = [
  { rank: 1, medal: "🥇", name: "The Crew", score: 96 },
  { rank: 2, medal: "🥈", name: "Cascadia", score: 92 },
  { rank: 3, medal: "🥉", name: "Just One", score: 89 },
];

export default function Friends() {
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
            GameNight croise les goûts de tout le groupe pour trouver le jeu qui met
            tout le monde d'accord.
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
                4
              </span>
              <h3 className="font-display text-xl font-semibold text-cream">Groupe : Les copains</h3>
            </div>

            <div className="mt-6 space-y-3">
              {MEMBERS.map((m) => (
                <div
                  key={m.name}
                  className="flex items-center gap-3 rounded-2xl border border-line-soft bg-ink-soft/50 px-4 py-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 text-lg">
                    {m.avatar}
                  </span>
                  <span className="font-medium text-cream">{m.name}</span>
                  <span className="ml-auto flex items-center gap-1.5 text-sm text-cream-dim">
                    ❤️ {m.game}
                  </span>
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
            <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-teal/15 blur-[100px]" />
            <h3 className="relative font-display text-xl font-semibold text-cream">
              Les jeux qui plaisent à tout le monde
            </h3>
            <div className="relative mt-6 space-y-3">
              {GROUP_PICKS.map((pick, i) => (
                <motion.div
                  key={pick.name}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  className="flex items-center gap-4 rounded-2xl border border-line-soft bg-ink/40 p-4"
                >
                  <span className="text-2xl">{pick.medal}</span>
                  <span className="flex-1 font-display text-lg font-semibold text-cream">
                    {pick.name}
                  </span>
                  <div className="hidden h-1.5 w-28 overflow-hidden rounded-full bg-ink-soft sm:block">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-teal to-teal-soft"
                      style={{ width: `${pick.score}%` }}
                    />
                  </div>
                  <span className="font-semibold text-teal-soft">{pick.score}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
