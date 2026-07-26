import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer id="contact" className="pt-24 pb-12 px-6 md:px-12 bg-[#0D0D0D] text-[#F3F1EC]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top CTA Area */}
        <div className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-heading font-extrabold tracking-tight"
          >
            Let's start<br />
            <span className="text-[#8E8D8A]">something extraordinary.</span>
          </motion.h2>

          {/* Contact Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="mailto:vaishnuvindula@gmail.com"
              className="btn-editorial bg-white text-black hover:bg-white/90 border-white cursor-pointer"
            >
              <span>DROP US AN EMAIL</span>
              <span>@</span>
            </a>
            <a
              href="https://linkedin.com/in/vaishnuvindula"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial cursor-pointer"
            >
              <span>CONNECT ON LINKEDIN</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-wrap justify-between items-center gap-6 pt-12 border-t border-white/10 font-mono text-xs text-[#8E8D8A]">
          <div className="flex items-center gap-6 uppercase">
            <a
              href="https://github.com/vaishnuvindula"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GITHUB ↗
            </a>
            <a
              href="https://linkedin.com/in/vaishnuvindula"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LINKEDIN ↗
            </a>
            <a
              href="https://codexverse-eight.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              CODEXVERSE ↗
            </a>
          </div>

          <div>HYDERABAD, INDIA // AVAILABLE FOR GLOBAL REMOTE</div>
        </div>

        {/* Massive SVG Logo Banner at Footer */}
        <div className="pt-8 border-t border-white/10">
          <svg
            viewBox="0 0 1400 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto text-white/20 hover:text-white/40 transition-colors duration-500 select-none"
          >
            <text
              x="50%"
              y="55%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="currentColor"
              fontSize="155"
              fontWeight="900"
              fontFamily="Syne, Plus Jakarta Sans, sans-serif"
              letterSpacing="-0.04em"
            >
              VAISHNU VINDULA
            </text>
          </svg>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[11px] text-[#8E8D8A]">
          <div>©2026 — VAISHNU VINDULA. ALL RIGHTS RESERVED.</div>
          <div>DESIGN & ARCHITECTURE INSPIRED BY NOTH.IN</div>
        </div>
      </div>
    </footer>
  );
}
