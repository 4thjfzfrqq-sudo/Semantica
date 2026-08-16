import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CoverArt from "./CoverArt";
import { MOODS } from "../data/games";

function formatPlayers(players) {
  const [min, max] = players;
  return min === max ? `${min} joueurs` : `${min}–${max} joueurs`;
}

function formatDuration(duration) {
  const [min, max] = duration;
  return min === max ? `${min} min` : `${min}–${max} min`;
}

export default function GameDetailModal({ game, owned, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (game) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [game, onClose]);

  return (
    <AnimatePresence>
      {game && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-[2rem] border border-line bg-surface p-6 shadow-glow sm:p-8"
          >
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-cream-dim transition-colors hover:bg-ink-soft hover:text-cream"
            >
              ✕
            </button>

            <div className="flex items-start gap-4">
              <CoverArt game={game} size="lg" className="h-20 w-20 shrink-0 sm:h-24 sm:w-24" />
              <div className="min-w-0 pt-1">
                <h3 className="font-display text-2xl font-semibold text-cream sm:text-3xl">
                  {game.name}
                </h3>
                <p className="mt-1 text-sm text-cream-faint">{game.tagline}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-cream-dim">
              <span>👥 {formatPlayers(game.players)}</span>
              <span>⏱️ {formatDuration(game.duration)}</span>
              <span>🧩 Complexité {game.complexity}/3</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {game.moods.map((m) => {
                const mood = MOODS.find((x) => x.id === m);
                return mood ? (
                  <span
                    key={m}
                    className="rounded-full border border-line-soft bg-ink-soft/60 px-2.5 py-1 text-xs text-cream-dim"
                  >
                    {mood.emoji} {mood.label}
                  </span>
                ) : null;
              })}
            </div>

            <div className="mt-6">
              <p className="text-xs font-bold tracking-widest text-cream-faint uppercase">
                Comment on joue
              </p>
              <p className="mt-2 rounded-2xl bg-ink-soft/40 p-4 text-sm leading-relaxed text-cream-dim">
                {game.rules ?? game.description}
              </p>
              <p className="mt-2 text-[11px] text-cream-faint italic">
                Résumé écrit pour ce prototype — pas la règle officielle de l'éditeur.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {!owned && game.buyUrl && (
                <a
                  href={game.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
                >
                  🛒 Acheter le jeu ↗
                </a>
              )}
              <button
                onClick={onClose}
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-cream-dim transition-colors hover:bg-ink-soft hover:text-cream"
              >
                Fermer
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
