import { useState } from "react";
import { motion } from "framer-motion";
import { gameById } from "../data/games";
import GameCard from "./GameCard";
import ScanModal from "./ScanModal";

const LIBRARY_IDS = [
  "azul",
  "codenames",
  "cascadia",
  "7-wonders-duel",
  "sky-team",
  "splendor",
  "heat",
  "the-crew",
];

export default function Library() {
  const [scanOpen, setScanOpen] = useState(false);
  const games = LIBRARY_IDS.map(gameById);

  return (
    <section id="ludotheque" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold tracking-wide text-coral-soft uppercase">
              Votre collection
            </span>
            <h2 className="text-balance mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">
              Votre ludothèque
            </h2>
            <p className="mt-3 max-w-md text-cream-dim">
              8 jeux, chacun avec son propre profil de goût pour affiner vos
              recommandations.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={() => setScanOpen(true)}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-surface px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-200 hover:scale-[1.03] hover:border-white/20 active:scale-95"
          >
            📸 Scanner ma ludothèque
          </motion.button>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {games.map((game, i) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
            >
              <GameCard game={game} />
            </motion.div>
          ))}
        </div>
      </div>

      <ScanModal open={scanOpen} onClose={() => setScanOpen(false)} />
    </section>
  );
}
