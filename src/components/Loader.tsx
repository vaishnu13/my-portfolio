import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [count, setCount]     = useState(0);
  const [exiting, setExiting] = useState(false);

  const word1 = 'VAISHNU';
  const word2 = 'VINDULA';

  // Generate smooth, balanced offsets for line 1 (VAISHNU)
  const line1Offsets = useMemo(() => {
    return word1.split('').map((char, index) => {
      const angle = (index - 3) * 12; // Curved spread pattern
      const rndY  = ((index % 2 === 0 ? -1 : 1) * 35) + (index * 4);
      return {
        char,
        x: (index - 3) * 22,
        y: rndY,
        rot: angle,
      };
    });
  }, [word1]);

  // Generate smooth, balanced offsets for line 2 (VINDULA)
  const line2Offsets = useMemo(() => {
    return word2.split('').map((char, index) => {
      const angle = (3 - index) * 12;
      const rndY  = ((index % 2 === 0 ? 1 : -1) * 35) - (index * 4);
      return {
        char,
        x: (index - 3) * 22,
        y: rndY,
        rot: angle,
      };
    });
  }, [word2]);

  useEffect(() => {
    const total = 1800; // Fast 1.8s load
    const step  = 18;   // ms per tick
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
          setTimeout(onComplete, 600);
        }, 250);
      }
    }, step);

    return () => clearInterval(id);
  }, [onComplete]);

  // Progress factor: 1 (scattered) → 0 (locked together)
  const f = (100 - count) / 100;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
          className={`fixed inset-0 z-[9999] bg-[#0D0D0D] flex flex-col justify-between items-center p-8 select-none overflow-hidden ${
            exiting ? 'pointer-events-none' : ''
          }`}
        >
          {/* Top Label */}
          <div className="w-full flex justify-between items-center font-mono text-[11px] text-white/40 uppercase tracking-widest">
            <span>VAISHNU VINDULA</span>
            <span>PORTFOLIO ©2026</span>
          </div>

          {/* CENTER: 2-Line Stacked Shatter & Attach Animation */}
          <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4 py-12">
            {/* Line 1: VAISHNU */}
            <div
              className="flex justify-center items-center tracking-tight"
              style={{
                fontFamily: "'Big Shoulders Display', 'Antonio', 'Bebas Neue', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(3.5rem, 12vw, 8.5rem)',
                lineHeight: 0.9,
              }}
            >
              {line1Offsets.map((item, idx) => {
                const curX   = item.x * f;
                const curY   = item.y * f;
                const curRot = item.rot * f;
                const blur   = f * 3;

                return (
                  <span
                    key={idx}
                    className="inline-block transition-transform duration-100 ease-out text-[#F3F1EC]"
                    style={{
                      transform: `translate3d(${curX}px, ${curY}px, 0) rotate(${curRot}deg)`,
                      filter: `blur(${blur}px)`,
                      opacity: 0.35 + 0.65 * (count / 100),
                    }}
                  >
                    {item.char}
                  </span>
                );
              })}
            </div>

            {/* Line 2: VINDULA */}
            <div
              className="flex justify-center items-center tracking-tight"
              style={{
                fontFamily: "'Big Shoulders Display', 'Antonio', 'Bebas Neue', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(3.5rem, 12vw, 8.5rem)',
                lineHeight: 0.9,
              }}
            >
              {line2Offsets.map((item, idx) => {
                const curX   = item.x * f;
                const curY   = item.y * f;
                const curRot = item.rot * f;
                const blur   = f * 3;

                return (
                  <span
                    key={idx}
                    className="inline-block transition-transform duration-100 ease-out text-[#F3F1EC]"
                    style={{
                      transform: `translate3d(${curX}px, ${curY}px, 0) rotate(${curRot}deg)`,
                      filter: `blur(${blur}px)`,
                      opacity: 0.35 + 0.65 * (count / 100),
                    }}
                  >
                    {item.char}
                  </span>
                );
              })}
            </div>
          </div>

          {/* BOTTOM: Percentage + Sleek Progress Line */}
          <div className="w-full max-w-xs flex flex-col items-center gap-3">
            <div
              className="font-mono text-sm tracking-wider text-[#F3F1EC] font-semibold"
            >
              {count} %
            </div>

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
