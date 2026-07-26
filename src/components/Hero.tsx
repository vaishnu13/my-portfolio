import { motion } from 'framer-motion';

interface HeroProps {
  onMenuClick: () => void;
}

export function Hero({ onMenuClick }: HeroProps) {
  return (
    <section
      className="relative min-h-screen bg-white flex flex-col justify-between overflow-hidden"
      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
    >
      {/* ── TOP BAR ── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-start p-6 md:p-8 pointer-events-none">
        {/* Top-left tagline */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="pointer-events-auto max-w-xs"
        >
          <p className="text-[#121212] text-[11px] md:text-[13px] leading-snug">
            Not just code, a perspective.<br />
            Because building is Everythin'.
          </p>
          <div className="mt-4">
            <a
              href="mailto:vaishnuvindula@gmail.com"
              className="btn-pill text-[11px]"
            >
              <span>get in touch</span>
              <span>→</span>
            </a>
          </div>
        </motion.div>

        {/* Top-right: MENU */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          onClick={onMenuClick}
          className="pointer-events-auto flex items-center gap-2 text-[#121212] text-[11px] md:text-[13px] tracking-wider uppercase cursor-pointer hover:opacity-60 transition-opacity"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
          MENU
          <span className="flex flex-col gap-[3px]">
            <span className="w-4 h-[1.5px] bg-[#121212] block" />
            <span className="w-4 h-[1.5px] bg-[#121212] block" />
          </span>
        </motion.button>
      </div>

      {/* ── CENTER: PERFECT MASSIVE BOLD NAME (No clipping) ── */}
      <div className="flex-1 flex flex-col justify-center px-4 md:px-8 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="w-full max-w-7xl mx-auto space-y-2 md:space-y-4"
        >
          {/* Line 1: VAISHNU */}
          <div className="w-full overflow-hidden">
            <svg
              viewBox="0 0 1000 160"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto block"
            >
              <text
                x="500"
                y="130"
                textAnchor="middle"
                textLength="960"
                lengthAdjust="spacingAndGlyphs"
                fill="#121212"
                fontFamily="'Syne', sans-serif"
                fontWeight="900"
                fontSize="150"
              >
                VAISHNU
              </text>
            </svg>
          </div>

          {/* Line 2: VINDULA */}
          <div className="w-full overflow-hidden">
            <svg
              viewBox="0 0 1000 160"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto block"
            >
              <text
                x="500"
                y="130"
                textAnchor="middle"
                textLength="960"
                lengthAdjust="spacingAndGlyphs"
                fill="#121212"
                fontFamily="'Syne', sans-serif"
                fontWeight="900"
                fontSize="150"
              >
                VINDULA
              </text>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="px-6 md:px-8 pb-6 flex justify-between items-end"
        style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#121212' }}
      >
        <span>Full-Stack & AI Engineer — Hyderabad</span>
        <div className="flex items-center gap-4 text-[11px]">
          <a
            href="https://linkedin.com/in/vaishnuvindula"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50 transition-opacity uppercase"
          >
            LinkedIn
          </a>
          <span className="opacity-30">/</span>
          <a
            href="https://github.com/vaishnuvindula"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50 transition-opacity uppercase"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
