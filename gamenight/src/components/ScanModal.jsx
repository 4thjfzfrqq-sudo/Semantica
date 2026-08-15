import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DETECTED = ["Azul", "Codenames", "Cascadia", "Heat", "Splendor", "The Crew"];

export default function ScanModal({ open, onClose }) {
  const [step, setStep] = useState("intro"); // intro | scanning | done

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => setStep("intro"), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (step !== "scanning") return;
    const t = setTimeout(() => setStep("done"), 1800);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <AnimatePresence>
      {open && (
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
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-line bg-surface p-8 shadow-glow"
          >
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-line text-cream-dim transition-colors hover:bg-ink-soft hover:text-cream"
            >
              ✕
            </button>

            {step === "intro" && (
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-coral to-gold text-3xl">
                  📸
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-cream">
                  Scannez votre étagère
                </h3>
                <p className="mt-3 text-cream-dim">
                  Prenez simplement votre étagère en photo. GameNight reconnaît
                  automatiquement vos jeux.
                </p>
                <button
                  onClick={() => setStep("scanning")}
                  className="mt-7 w-full rounded-full bg-gradient-to-r from-coral to-gold py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02] active:scale-95"
                >
                  Lancer une démo de scan
                </button>
                <p className="mt-3 text-xs text-cream-faint">
                  Prototype — la reconnaissance d'image n'est pas active ici.
                </p>
              </div>
            )}

            {step === "scanning" && (
              <div className="py-4 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-2 text-3xl">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                  >
                    🔎
                  </motion.span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-cream">
                  Analyse en cours…
                </h3>
                <p className="mt-2 text-sm text-cream-dim">On identifie vos boîtes de jeu.</p>
                <div className="mt-6 h-2 overflow-hidden rounded-full bg-ink-soft">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-coral to-gold"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.7, ease: "easeInOut" }}
                  />
                </div>
              </div>
            )}

            {step === "done" && (
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal/15 text-3xl">
                  ✅
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-cream">
                  6 jeux détectés
                </h3>
                <p className="mt-2 text-sm text-cream-dim">
                  Ils rejoignent votre ludothèque et affinent déjà vos recommandations.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {DETECTED.map((name) => (
                    <span
                      key={name}
                      className="rounded-full border border-line bg-ink-soft px-3 py-1.5 text-xs font-medium text-cream-dim"
                    >
                      {name}
                    </span>
                  ))}
                </div>
                <button
                  onClick={onClose}
                  className="mt-7 w-full rounded-full bg-cream py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02] active:scale-95"
                >
                  Parfait
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
