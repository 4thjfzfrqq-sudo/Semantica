import { useState } from "react";
import { motion } from "framer-motion";
import { GAMES } from "../data/games";
import GameCard from "./GameCard";
import ScanModal from "./ScanModal";

export default function Library({ libraryIds, onToggleGame, onAddGames }) {
  const [scanOpen, setScanOpen] = useState(false);

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
              <strong className="text-cream">{libraryIds.length} jeu{libraryIds.length > 1 ? "x" : ""}</strong>{" "}
              dans votre ludothèque — ce sont eux que « On joue à quoi ? » utilise pour
              vous recommander une partie. Cliquez sur un jeu pour l'ajouter ou le retirer.
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
          {GAMES.map((game, i) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
            >
              <GameCard
                game={game}
                selectable
                selected={libraryIds.includes(game.id)}
                onToggle={onToggleGame}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <ScanModal open={scanOpen} onClose={() => setScanOpen(false)} onScanned={onAddGames} />
    </section>
  );
}
