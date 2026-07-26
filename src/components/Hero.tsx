import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 bg-[#0D0D0D] overflow-hidden">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      {/* Top Hero Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-xl space-y-4"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-[#8E8D8A]">
          ( Full-Stack Developer & AI Specialist )
        </p>
        <h2 className="text-2xl md:text-4xl font-light font-heading tracking-tight leading-snug text-[#F3F1EC]">
          Not just code, a perspective.<br />
          Building intelligent products that move fast.
        </h2>
        <div className="pt-2">
          <button
            onClick={() => {
              const el = document.getElementById('works');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-editorial cursor-pointer"
          >
            <span>EXPLORE WORK</span>
            <span>↓</span>
          </button>
        </div>
      </motion.div>

      {/* Giant Typography Banner (SVG styled name) */}
      <div className="my-12 py-8 border-y border-white/10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full"
        >
          <svg
            viewBox="0 0 1400 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto max-h-[35vh] text-[#F3F1EC] select-none"
          >
            <text
              x="50%"
              y="55%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="currentColor"
              fontSize="165"
              fontWeight="900"
              fontFamily="Syne, Plus Jakarta Sans, sans-serif"
              letterSpacing="-0.04em"
            >
              VAISHNU VINDULA
            </text>
          </svg>
        </motion.div>
      </div>

      {/* Bottom Bar Details */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-xs uppercase tracking-wider text-[#8E8D8A] pt-4"
      >
        <div>
          <span>LOCATION — </span>
          <span className="text-white">HYDERABAD / REMOTE</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://codexverse-eight.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            CODEXVERSE ↗
          </a>
          <a
            href="https://github.com/vaishnuvindula"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            GITHUB ↗
          </a>
          <a
            href="https://linkedin.com/in/vaishnuvindula"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            LINKEDIN ↗
          </a>
        </div>
      </motion.div>
    </section>
  );
}
