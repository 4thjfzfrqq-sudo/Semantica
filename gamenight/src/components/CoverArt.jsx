export default function CoverArt({ game, size = "md", className = "" }) {
  const sizes = {
    sm: "text-4xl rounded-2xl",
    md: "text-5xl rounded-3xl",
    lg: "text-7xl rounded-[2rem]",
  };

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${game.cover} ${sizes[size]} ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/10" />
      <span className="relative drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]">{game.emoji}</span>
    </div>
  );
}
