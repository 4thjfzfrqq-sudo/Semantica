import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import DemoFinder from "./components/DemoFinder";
import Profile from "./components/Profile";
import Friends from "./components/Friends";
import Library from "./components/Library";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import GameDetailModal from "./components/GameDetailModal";
import { DEFAULT_LIBRARY_IDS } from "./data/games";

export default function App() {
  const [libraryIds, setLibraryIds] = useState(DEFAULT_LIBRARY_IDS);
  const [rulesGame, setRulesGame] = useState(null);

  const scrollToDemo = () => {
    document.querySelector("#decouvrir")?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLibraryGame = (id) => {
    setLibraryIds((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id],
    );
  };

  const addLibraryGames = (ids) => {
    setLibraryIds((prev) => Array.from(new Set([...prev, ...ids])));
  };

  return (
    <div className="min-h-screen bg-ink text-cream">
      <Navbar />
      <main>
        <Hero onFindGame={scrollToDemo} />
        <HowItWorks />
        <DemoFinder libraryIds={libraryIds} onShowRules={setRulesGame} />
        <Profile onShowRules={setRulesGame} />
        <Friends libraryIds={libraryIds} onShowRules={setRulesGame} />
        <Library
          libraryIds={libraryIds}
          onToggleGame={toggleLibraryGame}
          onAddGames={addLibraryGames}
          onShowRules={setRulesGame}
        />
        <FinalCTA />
      </main>
      <Footer />

      <GameDetailModal
        game={rulesGame}
        owned={rulesGame ? libraryIds.includes(rulesGame.id) : false}
        onClose={() => setRulesGame(null)}
      />
    </div>
  );
}
