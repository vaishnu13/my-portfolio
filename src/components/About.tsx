import { motion } from 'framer-motion';

const skills = [
  {
    category: 'FRONTEND ARCHITECTURE',
    items: ['React 19 / Next.js', 'TypeScript', 'Tailwind CSS v4', 'GSAP & Motion', 'Three.js / WebGL'],
  },
  {
    category: 'BACKEND & AI INFRA',
    items: ['Python / Fast API', 'Node.js / Express', 'Firebase / Firestore', 'Gemini & OpenAI APIs', 'LangChain & AGY SDK'],
  },
  {
    category: 'DEVOPS & WORKFLOW',
    items: ['Vercel Deployment', 'Docker & CI/CD', 'Git / GitHub Actions', 'REST & GraphQL APIs', 'Performance Tuning'],
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#0D0D0D] border-b border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#8E8D8A]">
            ( THE DEVELOPER )
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#F3F1EC] leading-snug max-w-4xl">
            Building software with a relentless focus on design, speed, and intelligence.
          </h2>
        </motion.div>

        {/* Studio Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6">
          <div className="space-y-6">
            <h3 className="font-mono text-xs text-blue-400 uppercase tracking-widest">// BACKGROUND</h3>
            <p className="text-base md:text-lg font-light text-[#F3F1EC]/80 leading-relaxed">
              I am Vaishnu Vindula, a Full-Stack Engineer and AI Systems builder. I specialize in turning complex technological challenges into intuitive, high-performance web applications.
            </p>
            <p className="text-sm font-light text-[#8E8D8A] leading-relaxed">
              Whether architecting collaborative code platforms or fine-tuning agentic AI workflows, I bridge technical depth with sharp visual execution.
            </p>
          </div>

          <div className="space-y-6 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-12">
            <h3 className="font-mono text-xs text-blue-400 uppercase tracking-widest">// CORE PRINCIPLES</h3>
            <ul className="space-y-4 font-mono text-xs text-[#F3F1EC]/90">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>01. PERFORMANCE FIRST — ZERO BLOAT</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>02. INTUITIVE & ELEGANT USER INTERFACES</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>03. AGENTIC AI & REAL-TIME INTELLIGENCE</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>04. CLEAN ARCHITECTURE & MAINTAINABILITY</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Technical Skills Grid */}
        <div className="pt-12 border-t border-white/10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8E8D8A] block mb-8">
            ( TECHNICAL STACK )
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((group) => (
              <div
                key={group.category}
                className="p-6 rounded-xl border border-white/10 bg-white/[0.01] space-y-4"
              >
                <h4 className="font-mono text-xs text-white uppercase tracking-wider">
                  {group.category}
                </h4>
                <ul className="space-y-2 font-mono text-xs text-[#8E8D8A]">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-white/40">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
