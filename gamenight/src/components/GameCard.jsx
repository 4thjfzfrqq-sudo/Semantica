import CoverArt from "./CoverArt";

function formatPlayers(players) {
  const [min, max] = players;
  return min === max ? `${min} joueurs` : `${min}–${max} joueurs`;
}

function formatDuration(duration) {
  const [min, max] = duration;
  return min === max ? `${min} min` : `${min}–${max} min`;
}

export default function GameCard({
  game,
  badge,
  className = "",
  selectable = false,
  selected = false,
  onToggle,
  showBuyLink = false,
  onShowRules,
}) {
  const toggle = () => onToggle?.(game.id);

  return (
    <div
      role={selectable ? "button" : undefined}
      tabIndex={selectable ? 0 : undefined}
      onClick={selectable ? toggle : undefined}
      onKeyDown={
        selectable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle();
              }
            }
          : undefined
      }
      aria-pressed={selectable ? selected : undefined}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border p-3 text-left shadow-glow transition-all duration-300 hover:-translate-y-1.5 ${
        selectable ? "cursor-pointer" : ""
      } ${
        selectable
          ? selected
            ? "border-teal/40 bg-surface hover:border-teal/60"
            : "border-line bg-surface/50 opacity-60 hover:border-white/20 hover:opacity-100"
          : "border-line bg-surface hover:border-white/15"
      } ${className}`}
    >
      <div className="relative">
        <CoverArt
          game={game}
          size="lg"
          className={`aspect-square w-full transition-transform duration-500 group-hover:scale-[1.04] ${
            selectable && !selected ? "grayscale" : ""
          }`}
        />
        {badge && (
          <span className="absolute top-2.5 right-2.5 rounded-full bg-ink/80 px-2.5 py-1 text-xs font-semibold text-cream backdrop-blur">
            {badge}
          </span>
        )}
        {onShowRules && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onShowRules(game);
            }}
            aria-label={`Règles de ${game.name}`}
            className="absolute top-2.5 left-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-ink/70 text-sm text-cream-dim backdrop-blur transition-colors hover:bg-ink hover:text-cream"
          >
            ℹ️
          </button>
        )}
        {selectable && (
          <span
            className={`absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold transition-colors ${
              selected ? "bg-teal text-ink" : "bg-ink/70 text-cream-dim"
            }`}
          >
            {selected ? "✓" : "+"}
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
        {showBuyLink && !selected && game.buyUrl && (
          <a
            href={game.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-coral-soft underline decoration-coral-soft/40 underline-offset-4 transition-colors hover:text-gold"
          >
            🛒 Acheter le jeu ↗
          </a>
        )}
      </div>
    </div>
  );
}
