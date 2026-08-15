import { useEffect, useState } from "react";

const LINKS = [
  { href: "#accueil", label: "Accueil" },
  { href: "#decouvrir", label: "Découvrir" },
  { href: "#ludotheque", label: "Ma ludothèque" },
  { href: "#amis", label: "Mes amis" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-line bg-ink/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#accueil"
          onClick={(e) => handleNav(e, "#accueil")}
          className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-cream"
        >
          <span className="text-2xl">🎲</span>
          GameNight
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-sm font-medium text-cream-dim transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#decouvrir"
            onClick={(e) => handleNav(e, "#decouvrir")}
            className="rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-ink transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            Commencer
          </a>
        </div>

        <button
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-line md:hidden"
        >
          <span
            className={`h-0.5 w-5 rounded bg-cream transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-5 rounded bg-cream transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`h-0.5 w-5 rounded bg-cream transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-96 border-b border-line" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 bg-ink/95 px-5 pb-5 backdrop-blur-xl">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="rounded-xl px-3 py-3 text-base font-medium text-cream-dim transition-colors hover:bg-surface hover:text-cream"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#decouvrir"
            onClick={(e) => handleNav(e, "#decouvrir")}
            className="mt-2 rounded-full bg-cream px-5 py-3 text-center text-sm font-semibold text-ink"
          >
            Commencer
          </a>
        </div>
      </div>
    </header>
  );
}
