import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import DemoFinder from "./components/DemoFinder";
import Profile from "./components/Profile";
import Friends from "./components/Friends";
import Library from "./components/Library";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  const scrollToDemo = () => {
    document.querySelector("#decouvrir")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-ink text-cream">
      <Navbar />
      <main>
        <Hero onFindGame={scrollToDemo} />
        <HowItWorks />
        <DemoFinder />
        <Profile />
        <Friends />
        <Library />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
