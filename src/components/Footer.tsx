import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-[#121212]/10 pt-24 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Big headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[#121212] leading-tight mb-12"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2.5rem, 7vw, 6rem)',
            letterSpacing: '-0.04em',
          }}
        >
          Let's start<br />from here.
        </motion.h2>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-20">
          <a
            href="mailto:vaishnuvindula@gmail.com"
            className="btn-pill"
          >
            <span>drop us an email</span>
            <span>@</span>
          </a>
          <a
            href="https://linkedin.com/in/vaishnuvindula"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill"
          >
            <span>connect on linkedin</span>
            <span>↗</span>
          </a>
        </div>

        {/* Massive SVG footer name — just like noth.in */}
        <div className="border-t border-[#121212]/10 pt-8 -mx-6 md:-mx-12">
          <svg
            viewBox="0 0 1000 140"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto px-4"
          >
            <text
              x="500"
              y="110"
              textAnchor="middle"
              textLength="960"
              lengthAdjust="spacingAndGlyphs"
              fill="#121212"
              fontFamily="'Big Shoulders Display', 'Antonio', 'Bebas Neue', sans-serif"
              fontWeight="900"
              fontSize="120"
            >
              VAISHNU VINDULA
            </text>
          </svg>
        </div>

        {/* Bottom credits bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-2 mt-6 text-[#121212]/40 text-[10px]"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
          <span>©2026 — VAISHNU VINDULA. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-4">
            <a href="https://github.com/vaishnuvindula" target="_blank" rel="noopener noreferrer" className="hover:text-[#121212] transition-colors">GITHUB</a>
            <a href="https://linkedin.com/in/vaishnuvindula" target="_blank" rel="noopener noreferrer" className="hover:text-[#121212] transition-colors">LINKEDIN</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
