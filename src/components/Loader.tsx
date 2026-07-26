import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [count, setCount]     = useState(0);
  const [exiting, setExiting] = useState(false);

  const text = 'VAISHNU VINDULA';

  // Generate deterministic pseudo-random offsets for each character so they shatter apart nicely
  const letterOffsets = useMemo(() => {
    return text.split('').map((char, index) => {
      // Simple hash per index for consistent scatter vectors
      const seed1 = Math.sin(index * 12.9898) * 43758.5453;
      const seed2 = Math.cos(index * 78.233) * 43758.5453;
      const seed3 = Math.sin(index * 45.123) * 43758.5453;

      const rnd1 = seed1 - Math.floor(seed1); // 0 to 1
      const rnd2 = seed2 - Math.floor(seed2); // 0 to 1
      const rnd3 = seed3 - Math.floor(seed3); // 0 to 1

      return {
        char,
        x: (rnd1 - 0.5) * 160,  // -80px to +80px
        y: (rnd2 - 0.5) * 120,  // -60px to +60px
        rot: (rnd3 - 0.5) * 90, // -45deg to +45deg
      };
    });
  }, [text]);

  useEffect(() => {
    const total = 2200; // ms
    const step  = 20;   // ms per tick
    const ticks = total / step;
    let current = 0;

    const id = setInterval(() => {
      current++;
      const progress = Math.min(Math.round((current / ticks) * 100), 100);
      setCount(progress);

      if (progress >= 100) {
        clearInterval(id);
        setTimeout(() => {
          setExiting(true);
          setTimeout(onComplete, 900);
        }, 500);
      }
    }, step);

    return () => clearInterval(id);
  }, [onComplete]);

  // Factor goes from 1 (completely broken) to 0 (perfectly attached)
  const factor = (100 - count) / 100;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0D0D0D] flex flex-col justify-between items-center p-8 select-none overflow-hidden"
        >
          {/* Top Bar Label */}
          <div className="w-full flex justify-between items-center font-mono text-[11px] text-white/40 uppercase tracking-widest">
            <span>VAISHNU VINDULA</span>
            <span>PORTFOLIO ©2026</span>
          </div>

          {/* CENTER: Name Shatters & Attaches */}
          <div className="relative flex items-center justify-center py-12">
            <div
              className="flex items-center justify-center flex-wrap max-w-4xl text-center px-4"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(2.5rem, 7vw, 6rem)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
              }}
            >
              {letterOffsets.map((item, idx) => {
                if (item.char === ' ') {
                  return <span key={idx} className="w-4 md:w-8 inline-block" />;
                }

                const currentX   = item.x * factor;
                const currentY   = item.y * factor;
                const currentRot = item.rot * factor;
                const currentBlur = factor * 4;

                return (
                  <span
                    key={idx}
                    className="inline-block transition-transform duration-100 ease-out text-[#F3F1EC]"
                    style={{
                      transform: `translate3d(${currentX}px, ${currentY}px, 0) rotate(${currentRot}deg)`,
                      filter: `blur(${currentBlur}px)`,
                      opacity: 0.3 + 0.7 * (count / 100),
                    }}
                  >
                    {item.char}
                  </span>
                );
              })}
            </div>
          </div>

          {/* BOTTOM: Percentage + Progress Bar Line (Matching screenshot) */}
          <div className="w-full max-w-xs flex flex-col items-center gap-3">
            <div
              className="font-mono text-sm tracking-wider text-[#F3F1EC] font-semibold"
            >
              {count} %
            </div>

            {/* Thin Progress Bar Line */}
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#F3F1EC] transition-all duration-75 ease-out rounded-full"
                style={{ width: `${count}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
