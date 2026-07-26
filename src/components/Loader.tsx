import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [counter, setCounter] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 1800; // ms
    const interval = 20;
    const steps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(Math.round((step / steps) * 100), 100);
      setCounter(progress);

      if (progress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 600);
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[999] flex flex-col justify-between p-8 bg-[#0D0D0D] text-[#F3F1EC] font-mono select-none"
        >
          {/* Top Bar */}
          <div className="flex justify-between items-center text-xs tracking-widest uppercase opacity-60">
            <span>VAISHNU VINDULA</span>
            <span>PORTFOLIO ©2026</span>
          </div>

          {/* Center Monogram / Statement */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-6xl md:text-8xl font-extrabold tracking-tighter font-heading text-white"
            >
              VV
            </motion.div>
            <p className="text-xs uppercase tracking-widest text-[#8E8D8A]">
              Full Stack & AI Engineer
            </p>
          </div>

          {/* Bottom Counter */}
          <div className="flex justify-between items-end">
            <div className="text-xs uppercase tracking-widest text-[#8E8D8A]">
              <span>LOADING EXPERIENCE</span>
            </div>
            <div className="text-6xl md:text-8xl font-light font-heading tracking-tight">
              {String(counter).padStart(3, '0')}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
