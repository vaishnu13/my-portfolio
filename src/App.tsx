import { useState } from 'react';
import { Loader } from './components/Loader';
import { MenuOverlay } from './components/MenuOverlay';
import { Hero } from './components/Hero';
import { Showreel } from './components/Showreel';
import { Badges } from './components/Badges';
import { Works } from './components/Works';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { GlitchText } from './components/GlitchText';
import { Footer } from './components/Footer';

export default function App() {
  const [loading, setLoading]   = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white text-[#121212] min-h-screen">
      {/* Loader: pure black, V [shape] V, 000→100 counter */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Full-screen menu overlay */}
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Main Page Layout */}
      <main>
        <Hero onMenuClick={() => setMenuOpen(true)} />
        <Showreel />
        <Badges />
        <Works />
        <Experience />
        <About />
        <GlitchText />
      </main>
      <Footer />
    </div>
  );
}
