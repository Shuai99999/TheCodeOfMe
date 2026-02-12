// App.jsx
import "./App.css";
import NavSection from "./components/NavSection";
import AboutSection from "./components/AboutSection";
import GameSection from "./components/GameSection";
import DataSection from "./components/DataSection";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900">
      <NavSection />
      <div className="pt-20 px-6 md:px-12 max-w-6xl mx-auto space-y-12">
        <section id="about">
          <AboutSection />
        </section>

        <section id="games">
          <GameSection />
        </section>

        <section id="analytics">
          <DataSection />
        </section>
      </div>
    </main>
  );
}
