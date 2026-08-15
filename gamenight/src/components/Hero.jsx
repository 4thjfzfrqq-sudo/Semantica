import { motion } from "framer-motion";
import CoverArt from "./CoverArt";
import CountUp from "./CountUp";
import { gameById } from "../data/games";

export default function Hero({ onFindGame }) {
  const cascadia = gameById("cascadia");

  return (
    <section
      id="accueil"
      className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32"
    >
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-ink" />
        <div className="absolute -top-32 -left-32 h-72 w-72 animate-blob rounded-full bg-coral/25 blur-[70px]" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 animate-blob rounded-full bg-teal/15 blur-[70px] [animation-delay:3s]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-semibold tracking-wide text-cream-dim uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            Le Spotify du jeu de société
          </span>

          <h1 className="text-balance mt-6 font-display text-5xl leading-[1.05] font-semibold text-cream sm:text-6xl lg:text-[4.2rem]">
            On joue à quoi{" "}
            <span className="bg-gradient-to-r from-coral via-coral-soft to-gold bg-clip-text text-transparent">
              ce soir&nbsp;?
            </span>
          </h1>

          <p className="text-balance mt-6 max-w-lg text-lg text-cream-dim sm:text-xl">
            L'app qui connaît vos goûts et trouve le jeu parfait pour votre table.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={onFindGame}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-coral to-gold px-7 py-4 text-base font-semibold text-ink shadow-[0_18px_40px_-16px_rgba(255,106,77,0.65)] transition-transform duration-200 hover:scale-[1.03] active:scale-95"
            >
              🎲 Trouver un jeu
            </button>
            <a
              href="#comment-ca-marche"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#comment-ca-marche")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-7 py-4 text-base font-semibold text-cream transition-colors hover:bg-surface"
            >
              Découvrir l'app
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-cream-faint">
            <div>
              <p className="font-display text-2xl font-semibold text-cream">2 400+</p>
              <p>jeux référencés</p>
            </div>
            <div className="h-8 w-px bg-line" />
            <div>
              <p className="font-display text-2xl font-semibold text-cream">98%</p>
              <p>de soirées sans débat</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto"
        >
          <div className="animate-float">
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface/90 p-5 shadow-glow backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-sm font-semibold text-cream">
                  🎲 GameNight
                </span>
                <span className="h-2 w-2 animate-pulse-soft rounded-full bg-teal" />
              </div>

              <div className="mt-5 flex items-center justify-between rounded-2xl border border-teal/25 bg-teal/10 px-4 py-2.5">
                <span className="text-xs font-bold tracking-wide text-teal-soft uppercase">
                  🎯 Match
                </span>
                <span className="font-display text-xl font-bold text-teal-soft">
                  <CountUp to={96} suffix="%" />
                </span>
              </div>

              <div className="mt-5 flex items-center gap-4">
                <CoverArt game={cascadia} size="lg" className="h-24 w-24 shrink-0" />
                <div>
                  <h3 className="font-display text-2xl font-semibold text-cream">Cascadia</h3>
                  <p className="mt-1 text-sm text-cream-dim">Parfait pour 4 joueurs · 45 min</p>
                </div>
              </div>

              <p className="mt-5 rounded-2xl bg-ink-soft/60 p-4 text-sm leading-relaxed text-cream-dim italic">
                « Vous aimez les jeux de stratégie accessibles et les parties relativement
                courtes. »
              </p>

              <div className="mt-5 flex gap-2">
                <button className="flex-1 rounded-full bg-cream py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02] active:scale-95">
                  On joue à ça 🎉
                </button>
                <button className="rounded-full border border-line px-4 text-sm text-cream-dim transition-colors hover:bg-ink-soft">
                  ↻
                </button>
              </div>
            </div>
          </div>

          <div className="absolute -top-6 -right-6 -z-10 h-full w-full rounded-[2rem] border border-line/60 bg-surface-2/40 blur-[1px]" />
        </motion.div>
      </div>
    </section>
  );
}
