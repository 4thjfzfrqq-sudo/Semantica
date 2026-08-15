import { motion } from "framer-motion";

export default function FinalCTA() {
  const scrollToDemo = () => {
    document.querySelector("#decouvrir")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden py-28 sm:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 animate-blob rounded-full bg-coral/20 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-balance font-display text-4xl leading-tight font-semibold text-cream sm:text-5xl lg:text-6xl"
        >
          La prochaine fois que quelqu'un dira{" "}
          <span className="bg-gradient-to-r from-coral via-coral-soft to-gold bg-clip-text text-transparent">
            « on joue à quoi ? »
          </span>
          , vous aurez la réponse.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <button
            onClick={scrollToDemo}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-coral to-gold px-9 py-4 text-base font-semibold text-ink shadow-[0_18px_45px_-16px_rgba(255,106,77,0.65)] transition-transform duration-200 hover:scale-[1.04] active:scale-95"
          >
            🎲 Essayer GameNight
          </button>
        </motion.div>
      </div>
    </section>
  );
}
