export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2 font-display text-lg font-semibold text-cream">
          <span className="text-xl">🎲</span>
          GameNight
        </div>
        <p className="text-center text-xs text-cream-faint sm:text-right">
          Prototype de démonstration — noms de jeux cités à titre d'exemple, sans
          affiliation. Aucune donnée n'est collectée ni sauvegardée.
        </p>
      </div>
    </footer>
  );
}
