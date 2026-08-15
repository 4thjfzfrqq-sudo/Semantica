import CoverArt from "./CoverArt";

function formatPlayers(players) {
  const [min, max] = players;
  return min === max ? `${min} joueurs` : `${min}–${max} joueurs`;
}

function formatDuration(duration) {
  const [min, max] = duration;
  return min === max ? `${min} min` : `${min}–${max} min`;
}

export default function GameCard({ game, badge, className = "" }) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-surface p-3 shadow-glow transition-all duration-300 hover:-translate-y-1.5 hover:border-white/15 ${className}`}
    >
      <div className="relative">
        <CoverArt
          game={game}
          size="lg"
          className="aspect-square w-full transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {badge && (
          <span className="absolute top-2.5 right-2.5 rounded-full bg-ink/80 px-2.5 py-1 text-xs font-semibold text-cream backdrop-blur">
            {badge}
          </span>
        )}
      </div>
      <div className="px-1.5 pt-3 pb-1">
        <h4 className="font-display text-lg font-semibold text-cream">{game.name}</h4>
        <p className="mt-0.5 text-sm text-cream-faint">{game.tagline}</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-cream-dim">
          <span>👥 {formatPlayers(game.players)}</span>
          <span>⏱️ {formatDuration(game.duration)}</span>
        </div>
      </div>
    </div>
  );
}
