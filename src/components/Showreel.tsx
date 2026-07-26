import { motion } from 'framer-motion';

export function Showreel() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 border-t border-[#121212]/10">
      <div className="max-w-7xl mx-auto">
        {/* Large editorial statement */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[#121212] leading-tight mb-16"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
            letterSpacing: '-0.03em',
          }}
        >
          Most developers write code.<br />
          We prefer ideas.
        </motion.h2>

        {/* 2-column editorial block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-12 pt-12 border-t border-[#121212]/10"
        >
          {/* Left label */}
          <div className="md:w-1/3">
            <span
              className="text-[#121212] text-[11px] tracking-widest uppercase block mb-2"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              ( The Step Aside )
            </span>
          </div>

          {/* Right paragraph */}
          <div className="md:w-2/3">
            <p
              className="text-[#121212]/70 leading-relaxed"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)',
              }}
            >
              In a world of infinite code, the rare thing is clarity. Products defend ideas,
              experiences shift perception, and clean architecture changes how users interact
              with the world. I build full-stack systems powered by AI that are both
              technically excellent and visually intentional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
