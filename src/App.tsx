import { useState } from 'react';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Showreel } from './components/Showreel';
import { Works } from './components/Works';
import { About } from './components/About';
import { GlitchText } from './components/GlitchText';
import { Footer } from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-[#0D0D0D] text-[#F3F1EC] min-h-screen selection:bg-white selection:text-black">
      {/* Interactive 000-100 Loading Curtain */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Main Editorial Content */}
      <Navbar />
      <main>
        <Hero />
        <Showreel />
        <Works />
        <About />
        <GlitchText />
      </main>
      <Footer />
    </div>
  );
}
