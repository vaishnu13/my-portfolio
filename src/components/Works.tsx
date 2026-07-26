import { motion } from 'framer-motion';

const projects = [
  {
    id: '01',
    name: 'CODEXVERSE AI',
    tagline: 'A Real-time Collaborative Code Editor & AI Platform.',
    desc: 'Empowers multi-developer real-time pairing with built-in agentic AI assistants, instant code generation, and syntax intelligence.',
    tags: ['React 19', 'AI Agents', 'WebSockets', 'Tailwind'],
    link: 'https://codexverse-eight.vercel.app',
    featured: true,
  },
  {
    id: '02',
    name: 'PROMPT PILOT AI',
    tagline: 'AI Prompt Engineering Suite & Visual Workflow Editor.',
    desc: 'Streamlines complex prompt construction, dynamic LLM testing, and evaluation metrics for production AI systems.',
    tags: ['Next.js', 'Python', 'Gemini API', 'TypeScript'],
    link: 'https://github.com/vaishnuvindula',
    featured: false,
  },
  {
    id: '03',
    name: 'PRISMA METRICS',
    tagline: 'High-Throughput Analytics & Telemetry Dashboard.',
    desc: 'Real-time interactive data visualization platform processing thousands of live events per second with instant graphs.',
    tags: ['React', 'Three.js', 'WebGPU', 'Tailwind'],
    link: 'https://github.com/vaishnuvindula',
    featured: false,
  },
  {
    id: '04',
    name: 'ANTIGRAVITY AGENTS',
    tagline: 'Autonomous Multi-Agent Orchestration Engine.',
    desc: 'Custom framework built on Google Antigravity SDK for autonomous task execution and complex codebase refactoring.',
    tags: ['Python', 'AGY SDK', 'Node.js', 'Docker'],
    link: 'https://github.com/vaishnuvindula',
    featured: false,
  },
];

export function Works() {
  return (
    <section id="works" className="py-24 px-6 md:px-12 bg-[#0D0D0D] border-b border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Animated WORKS Header */}
        <div className="flex justify-between items-end border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8E8D8A]">
              ( SELECTED PROJECTS )
            </span>
            <h2 className="text-5xl md:text-8xl font-heading font-extrabold tracking-tighter text-[#F3F1EC] uppercase mt-2">
              W O R K S
            </h2>
          </div>
          <div className="hidden md:block font-mono text-xs text-right text-[#8E8D8A]">
            <div>04 FEATURED PROJECTS</div>
            <div>2024 — 2026</div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-3xl font-light text-[#F3F1EC] max-w-2xl">
          Good developers communicate.<br />
          <span className="text-[#8E8D8A]">Great products surprise.</span>
        </p>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] p-8 transition-all duration-300 space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-[#8E8D8A]">{project.id}</span>
                  <h3 className="text-2xl md:text-4xl font-heading font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial self-start md:self-auto cursor-pointer"
                >
                  <span>LAUNCH PROJECT</span>
                  <span>↗</span>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-2 space-y-2">
                  <h4 className="text-lg font-medium text-white/90">{project.tagline}</h4>
                  <p className="text-sm font-light text-[#8E8D8A] leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 md:justify-end">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full font-mono text-[11px] uppercase bg-white/5 border border-white/10 text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
