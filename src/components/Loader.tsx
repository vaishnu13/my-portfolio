import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [count, setCount]   = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Count 000 → 100 in ~2 seconds
    const total = 2000; // ms
    const step  = 20;   // ms per tick
    const ticks = total / step;
    let current = 0;

    const id = setInterval(() => {
      current++;
      setCount(Math.min(Math.round((current / ticks) * 100), 100));
      if (current >= ticks) {
        clearInterval(id);
        setTimeout(() => {
          setExiting(true);
          setTimeout(onComplete, 900);
        }, 300);
      }
    }, step);

    return () => clearInterval(id);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="loader"
          className="loader"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* CENTER: V [shape] V — exactly like noth.in N [object] ' */}
          <div className="flex items-center justify-center gap-6 select-none">
            {/* Left letter */}
            <span
              className="text-white font-sans"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 'clamp(4rem, 10vw, 9rem)',
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: '-0.04em',
              }}
            >
              V
            </span>

            {/* Center 3D metallic object — rotates */}
            <div
              className="shape-spin flex-shrink-0"
              style={{ width: 'clamp(3rem, 8vw, 7rem)', height: 'clamp(3rem, 8vw, 7rem)' }}
            >
              <img
                src="/loader-shape.jpg"
                alt=""
                className="w-full h-full object-contain"
                style={{ mixBlendMode: 'screen' }}
              />
            </div>

            {/* Right letter (apostrophe style) */}
            <span
              className="text-white font-sans"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: '-0.04em',
                transform: 'skewX(-8deg)',
                display: 'inline-block',
                marginTop: '-1.5rem',
              }}
            >
              V
            </span>
          </div>

          {/* BOTTOM: counter exactly like noth.in */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
              letterSpacing: '0.05em',
            }}
          >
            {String(count).padStart(3, '0')}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
