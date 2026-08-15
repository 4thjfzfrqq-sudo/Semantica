import { motion } from "framer-motion";
import { GAMES } from "../data/games";
import GameCard from "./GameCard";

const STATS = [
  { label: "Stratégie", emoji: "❤️", value: 91, color: "from-coral to-gold" },
  { label: "Coopération", emoji: "🤝", value: 78, color: "from-teal to-teal-soft" },
  { label: "Ambiance", emoji: "😂", value: 84, color: "from-violet to-coral-soft" },
  { label: "Hasard", emoji: "🎲", value: 32, color: "from-cream-faint to-cream-dim" },
  { label: "Complexité", emoji: "🧠", value: 67, color: "from-gold to-coral" },
];

const FAVORITE_IDS = ["cascadia", "the-crew", "azul", "7-wonders-duel"];

export default function Profile() {
  const favorites = GAMES.filter((g) => FAVORITE_IDS.includes(g.id));

  return (
    <section id="profil" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="text-sm font-semibold tracking-wide text-coral-soft uppercase">
              Personnalisation
            </span>
            <h2 className="text-balance mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">
              Ton profil de joueur
            </h2>
            <p className="mt-4 max-w-md text-cream-dim">
              Plus vous jouez, plus GameNight affine votre goût — comme vos playlists
              apprennent votre musique.
            </p>

            <div className="mt-10 space-y-6 rounded-3xl border border-line bg-surface p-6 sm:p-8">
              {STATS.map((stat, i) => (
                <div key={stat.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-cream">
                      {stat.emoji} {stat.label}
                    </span>
                    <span className="font-semibold text-cream-dim">{stat.value}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-ink-soft">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.value}%` }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className={`h-full rounded-full bg-gradient-to-r ${stat.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-3">
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="font-display text-2xl font-semibold text-cream"
            >
              Tes jeux préférés
            </motion.h3>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-5">
              {favorites.map((game, i) => (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <GameCard game={game} badge="❤️ Aimé" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
