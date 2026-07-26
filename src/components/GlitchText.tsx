import { motion } from 'framer-motion';

export function GlitchText() {
  return (
    <section className="py-24 bg-[#0D0D0D] border-b border-white/10 overflow-hidden select-none">
      {/* Repeating Marquee Lines */}
      <div className="space-y-4 opacity-80">
        <div className="flex whitespace-nowrap font-heading font-black text-4xl md:text-7xl uppercase text-white/10 tracking-tighter animate-glitch-marquee">
          <span className="mr-8">VAISHNU VINDULA // FULL STACK // AI SPECIALIST //</span>
          <span className="mr-8">VAISHNU VINDULA // FULL STACK // AI SPECIALIST //</span>
          <span className="mr-8">VAISHNU VINDULA // FULL STACK // AI SPECIALIST //</span>
        </div>

        <div className="flex whitespace-nowrap font-heading font-black text-4xl md:text-7xl uppercase text-white/20 tracking-tighter animate-glitch-marquee [animation-direction:reverse]">
          <span className="mr-8">CODEXVERSE // PROMPT PILOT // PRISMA // ANTIGRAVITY //</span>
          <span className="mr-8">CODEXVERSE // PROMPT PILOT // PRISMA // ANTIGRAVITY //</span>
          <span className="mr-8">CODEXVERSE // PROMPT PILOT // PRISMA // ANTIGRAVITY //</span>
        </div>
      </div>

      {/* Central Manifesto Box */}
      <div className="max-w-4xl mx-auto px-6 text-center mt-16 space-y-6">
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-5xl font-heading font-bold text-[#F3F1EC] leading-tight"
        >
          Building intelligent products for those ready to go beyond the ordinary.
        </motion.p>
        <span className="inline-block font-mono text-xs text-blue-400 uppercase tracking-widest">
          // CONTINUOUS EVOLUTION & REFINEMENT
        </span>
      </div>
    </section>
  );
}
