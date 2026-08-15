import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PLAYER_OPTIONS, DURATION_OPTIONS, MOODS, recommend, explanationFor } from "../data/games";
import CoverArt from "./CoverArt";

function Pill({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all duration-200 active:scale-95 ${
        active
          ? "border-transparent bg-gradient-to-r from-coral to-gold text-ink shadow-[0_10px_25px_-10px_rgba(255,106,77,0.6)]"
          : "border-line bg-surface text-cream-dim hover:border-white/20 hover:text-cream"
      }`}
    >
      {children}
    </button>
  );
}

export default function DemoFinder({ libraryIds = [] }) {
  const [players, setPlayers] = useState(null);
  const [duration, setDuration] = useState(null);
  const [moods, setMoods] = useState([]);
  const [result, setResult] = useState(null);
  const [pulse, setPulse] = useState(0);
  const [filterToLibrary, setFilterToLibrary] = useState(true);

  const toggleMood = (id) =>
    setMoods((prev) => (prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]));

  const canSearch = players !== null && duration !== null;
  const hasLibrary = libraryIds.length > 0;
  const applyFilter = filterToLibrary && hasLibrary;

  const handleSearch = () => {
    if (!canSearch) return;
    const filters = { players, duration, moods, libraryIds: applyFilter ? libraryIds : undefined };
    const { top, alternatives } = recommend(filters);
    setResult({
      top,
      alternatives,
      explanation: top ? explanationFor(top.game, filters) : null,
    });
    setPulse((p) => p + 1);
    requestAnimationFrame(() => {
      document.querySelector("#resultat")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  };

  const reset = () => {
    setResult(null);
  };

  return (
    <section id="decouvrir" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold tracking-wide text-coral-soft uppercase">
            Essayez maintenant
          </span>
          <h2 className="text-balance mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">
            On joue à quoi ?
          </h2>
          <p className="text-balance mx-auto mt-3 max-w-md text-cream-dim">
            Une vraie mini-démo. Répondez à 3 questions, on s'occupe du reste.
          </p>
        </motion.div>

        <div className="mt-14 space-y-10 rounded-[2rem] border border-line bg-surface/60 p-6 backdrop-blur sm:p-10">
          <div>
            <h3 className="font-display text-xl font-semibold text-cream">Combien êtes-vous ?</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {PLAYER_OPTIONS.map((p) => (
                <Pill key={p} active={players === p} onClick={() => setPlayers(p)}>
                  {p}
                </Pill>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-cream">Combien de temps ?</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {DURATION_OPTIONS.map((d) => (
                <Pill key={d.id} active={duration === d.id} onClick={() => setDuration(d.id)}>
                  {d.label}
                </Pill>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-cream">Quelle ambiance ?</h3>
            <p className="mt-1 text-sm text-cream-faint">Plusieurs choix possibles.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {MOODS.map((m) => (
                <Pill key={m.id} active={moods.includes(m.id)} onClick={() => toggleMood(m.id)}>
                  {m.emoji} {m.label}
                </Pill>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-lg font-semibold text-cream">
                Filtrer sur ma ludothèque
              </p>
              <p className="mt-0.5 text-sm text-cream-faint">
                {hasLibrary
                  ? `Ne proposer que les ${libraryIds.length} jeu${libraryIds.length > 1 ? "x" : ""} que vous possédez déjà.`
                  : "Ajoutez des jeux à votre ludothèque pour activer ce filtre."}
              </p>
            </div>
            <button
              role="switch"
              aria-checked={applyFilter}
              disabled={!hasLibrary}
              onClick={() => setFilterToLibrary((v) => !v)}
              className={`relative h-8 w-14 shrink-0 rounded-full transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-40 ${
                applyFilter ? "bg-teal" : "bg-ink-soft"
              }`}
            >
              <motion.span
                className="absolute top-1 h-6 w-6 rounded-full bg-cream shadow"
                animate={{ left: applyFilter ? "1.75rem" : "0.25rem" }}
                transition={{ type: "spring", stiffness: 500, damping: 32 }}
              />
            </button>
          </div>

          <div className="flex flex-col items-center gap-3 pt-2">
            <button
              onClick={handleSearch}
              disabled={!canSearch}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-coral to-gold px-9 py-4 text-base font-semibold text-ink shadow-[0_18px_40px_-16px_rgba(255,106,77,0.65)] transition-all duration-200 hover:scale-[1.03] active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
            >
              🎲 Trouver mon jeu
            </button>
            {!canSearch && (
              <p className="text-xs text-cream-faint">
                Choisissez au moins le nombre de joueurs et la durée.
              </p>
            )}
          </div>
        </div>

        <div id="resultat" className="mt-10">
          <AnimatePresence mode="wait">
            {result && (
              <motion.div
                key={pulse}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {!result.top ? (
                  <div className="rounded-[2rem] border border-line bg-surface/60 p-10 text-center">
                    <p className="text-4xl">🤷</p>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-cream">
                      Aucun jeu dans votre ludothèque
                    </h3>
                    <p className="mx-auto mt-2 max-w-sm text-cream-dim">
                      Ajoutez des jeux plus bas dans « Votre ludothèque », ou désactivez le
                      filtre pour choisir parmi tout le catalogue.
                    </p>
                    <a
                      href="#ludotheque"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector("#ludotheque")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
                    >
                      Aller à ma ludothèque
                    </a>
                  </div>
                ) : (
                <div className="relative overflow-hidden rounded-[2rem] border border-teal/25 bg-gradient-to-br from-surface to-ink-soft p-6 sm:p-10">
                  <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-teal/15 blur-[60px]" />
                  <span className="inline-flex items-center gap-2 rounded-full bg-teal/15 px-4 py-1.5 text-xs font-bold tracking-wide text-teal-soft uppercase">
                    🥇 Votre jeu ce soir
                  </span>

                  <div className="relative mt-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                    <CoverArt game={result.top.game} size="lg" className="h-28 w-28 shrink-0 sm:h-32 sm:w-32" />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <h3 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
                          {result.top.game.name}
                        </h3>
                        <span className="font-display text-2xl font-bold text-teal-soft">
                          {result.top.score}% compatible
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm text-cream-dim">
                        {result.top.game.players[0] === result.top.game.players[1]
                          ? `${result.top.game.players[0]} joueurs`
                          : `${result.top.game.players[0]}–${result.top.game.players[1]} joueurs`}{" "}
                        · {result.top.game.duration[0]}–{result.top.game.duration[1]} min ·{" "}
                        {MOODS.find((m) => result.top.game.moods[0] === m.id)?.label}
                      </p>
                      <p className="mt-4 rounded-2xl bg-ink/40 p-4 text-sm leading-relaxed text-cream-dim italic">
                        « {result.explanation} »
                      </p>
                      {!libraryIds.includes(result.top.game.id) && result.top.game.buyUrl && (
                        <a
                          href={result.top.game.buyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-cream px-4 py-2 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
                        >
                          🛒 Acheter {result.top.game.name} ↗
                        </a>
                      )}
                    </div>
                  </div>

                  {result.alternatives.length > 0 && (
                  <div className="relative mt-8 border-t border-line pt-6">
                    <p className="text-sm font-semibold text-cream-faint uppercase">Aussi pour vous</p>
                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {result.alternatives.map((alt) => {
                        const owned = libraryIds.includes(alt.game.id);
                        return (
                          <div
                            key={alt.game.id}
                            className="flex items-center gap-3 rounded-2xl border border-line bg-ink/30 p-3 transition-colors hover:border-white/15"
                          >
                            <CoverArt game={alt.game} size="sm" className="h-14 w-14 shrink-0" />
                            <div className="min-w-0 flex-1">
                              <p className="truncate font-medium text-cream">{alt.game.name}</p>
                              <p className="text-xs text-cream-faint">
                                {alt.game.duration[0]}–{alt.game.duration[1]} min
                              </p>
                            </div>
                            {!owned && alt.game.buyUrl && (
                              <a
                                href={alt.game.buyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={`Acheter ${alt.game.name}`}
                                className="shrink-0 text-lg transition-transform hover:scale-110"
                              >
                                🛒
                              </a>
                            )}
                            <span className="shrink-0 text-sm font-bold text-teal-soft">{alt.score}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  )}

                  <button
                    onClick={reset}
                    className="relative mt-8 text-sm font-semibold text-cream-dim underline decoration-line underline-offset-4 transition-colors hover:text-cream"
                  >
                    ↻ Refaire une recherche
                  </button>
                </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
