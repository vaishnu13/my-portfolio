import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SpaceHeroProps {
  opacity: number;
}

const ROLES = [
  "Full-Stack Developer",
  "AI Engineer",
  "Product Builder"
];

export const SpaceHero: React.FC<SpaceHeroProps> = ({ opacity }) => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="fixed inset-0 z-10 flex flex-col items-center justify-between p-6 md:p-12 text-[#E6E1DF]"
      style={{ opacity, pointerEvents: opacity === 0 ? 'none' : 'auto' }}
    >
      {/* Navigation */}
      <nav className="w-full flex justify-between items-center max-w-7xl mx-auto font-['Kanit'] tracking-widest text-sm md:text-base text-[#8C8684]">
        <div className="font-bold text-[#E6E1DF] tracking-widest text-lg">VV</div>
        <div className="flex gap-6 md:gap-12">
          <a href="#work" className="hover:text-white transition-colors">WORK</a>
          <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
          <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
        </div>
      </nav>

      {/* Main Content — Centered, Neat, Ultra Bold Name (No Photo) */}
      <div className="flex-1 w-full flex flex-col items-center justify-center text-center max-w-6xl mx-auto space-y-6">
        <h1 className="font-['Kanit'] font-black text-6xl md:text-8xl lg:text-[9rem] leading-none uppercase tracking-tighter text-dungyov-3d">
          Vaishnu Vindula
        </h1>
        
        <div className="h-12 relative overflow-hidden flex items-center justify-center w-full">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentRole}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              className="font-['Instrument_Serif'] text-2xl md:text-4xl text-[#38bdf8] italic"
            >
              {ROLES[currentRole]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom: Scroll Indicator */}
      <div className="flex flex-col items-center gap-2 pb-8">
        <span className="font-['Kanit'] tracking-[0.3em] text-xs text-[#8C8684]">SCROLL TO FLY</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[#38bdf8] to-transparent"
        />
      </div>
    </div>
  );
};
