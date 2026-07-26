import { motion } from 'framer-motion';

export function Showreel() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#0D0D0D] border-b border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 max-w-4xl"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#8E8D8A]">
            ( THE PERSPECTIVE )
          </span>
          <h2 className="text-3xl md:text-6xl font-heading font-extrabold tracking-tight text-[#F3F1EC] leading-tight">
            Most developers write code.<br />
            We engineer ideas into reality.
          </h2>
        </motion.div>

        {/* Feature Grid / Video Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-b from-white/5 to-white/[0.01] p-8 md:p-12 space-y-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">
                // MANIFESTO
              </span>
              <p className="text-lg md:text-2xl font-light text-[#F3F1EC]/90 leading-relaxed">
                In a world saturated with generic websites and template solutions, clarity is rare.
                I build sleek, scalable web applications powered by modern full-stack frameworks
                and real-time AI models.
              </p>
            </div>

            <div className="font-mono text-xs text-[#8E8D8A] space-y-2 border-l border-white/10 pl-6">
              <div>// CORE TECH</div>
              <div className="text-white">REACT 19 • NEXT.JS • PYTHON</div>
              <div className="text-white">TAILWIND CSS • THREE.JS</div>
              <div className="text-white">GSAP • FIREBASE • GEMINI AI</div>
            </div>
          </div>

          {/* Interactive Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="space-y-1">
              <div className="text-3xl font-heading font-bold text-white">100%</div>
              <div className="font-mono text-xs text-[#8E8D8A]">FULL STACK & AI AGENTIC WORKFLOWS</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-heading font-bold text-white">&lt;100ms</div>
              <div className="font-mono text-xs text-[#8E8D8A]">LIGHTNING FAST INTERACTIVE UIs</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-heading font-bold text-white">01</div>
              <div className="font-mono text-xs text-[#8E8D8A]">COLLABCODE PLATFORM (CODEXVERSE)</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
