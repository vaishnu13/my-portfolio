import { useState } from 'react';
import { Loader } from './components/Loader';
import { MenuOverlay } from './components/MenuOverlay';
import { Hero } from './components/Hero';
import { Showreel } from './components/Showreel';
import { Works } from './components/Works';
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

      {/* Full-screen slide-down menu overlay */}
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Main page — traditional vertical scroll */}
      <main>
        <Hero onMenuClick={() => setMenuOpen(true)} />
        <Showreel />
        <Works />
        <About />
        <GlitchText />
      </main>
      <Footer />
    </div>
  );
}
