import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    emoji: "📚",
    title: "Ajoutez vos jeux",
    text: "Scannez votre étagère ou ajoutez vos jeux en quelques secondes.",
  },
  {
    n: "02",
    emoji: "🎲",
    title: "Jouez",
    text: "Après chaque partie, indiquez simplement si vous avez aimé.",
  },
  {
    n: "03",
    emoji: "✨",
    title: "L'app apprend",
    text: "Vos recommandations deviennent de plus en plus personnalisées.",
  },
];

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <span className="text-sm font-semibold tracking-wide text-coral-soft uppercase">
            Comment ça marche
          </span>
          <h2 className="text-balance mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">
            Trois étapes, et l'app vous connaît vraiment.
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-3xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
            >
              <div className="absolute -top-6 -right-4 font-display text-8xl font-bold text-white/[0.03] transition-colors duration-300 group-hover:text-white/[0.06]">
                {step.n}
              </div>
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-surface-2 to-ink-soft text-2xl">
                  {step.emoji}
                </div>
                <p className="mt-6 text-sm font-bold tracking-widest text-cream-faint">
                  {step.n}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-cream">
                  {step.title}
                </h3>
                <p className="mt-3 text-cream-dim">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
