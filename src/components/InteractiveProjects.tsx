import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: "prompt-pilot",
    title: "Prompt Pilot AI",
    icon: "fas fa-terminal",
    url: "https://prompt-pilot-taupe.vercel.app",
  },
  {
    id: "ai-sigma",
    title: "AI Gap Detector",
    icon: "fas fa-user-tie",
    url: "https://ai-sigma-fawn.vercel.app",
  }
];

export function InteractiveProjects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-6xl mx-auto mt-4 sm:mt-8 flex flex-col items-center px-4">
      
      {/* Sleek Floating Tab Selector */}
      <div className="flex gap-2 p-1.5 mb-8 sm:mb-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
        {projects.map((proj, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={proj.id}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(idx)}
              className={`relative flex items-center gap-3 px-5 sm:px-8 py-3 rounded-full transition-colors duration-300 ${
                isActive ? 'text-white' : 'text-white/40 hover:text-white/80'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <i className={`${proj.icon} relative z-10 text-sm sm:text-base`}></i>
              <span className="relative z-10 font-medium text-sm sm:text-base tracking-wide">
                {proj.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Frame Container - Pure sleek window with no dots */}
      <div className="relative w-full rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.05)] bg-black" style={{ height: 'min(75vh, 800px)' }}>
        {projects.map((proj, idx) => {
          const isActive = activeIndex === idx;
          return (
            <div
              key={proj.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <iframe
                src={proj.url} 
                className="w-full h-full border-0"
                title={proj.title}
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          );
        })}
      </div>
      
    </div>
  );
}
