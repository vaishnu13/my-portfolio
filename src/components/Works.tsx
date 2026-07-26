import { motion } from 'framer-motion';

const projects = [
  {
    id: '01',
    name: 'PromptPilot',
    tagline: 'AI Prompt Engineering Assistant & Optimization Suite',
    desc: 'Transforms simple prompts into structured, high-quality prompts. Integrated LLMs for intelligent analysis with an intuitive UI for real-time prompt refinement.',
    live: 'https://prompt-pilot-taupe.vercel.app/',
    github: 'https://github.com/vaishnuvindula',
    tags: ['LLMs', 'Prompt Engineering', 'React', 'Vercel'],
    year: 'April 2026',
  },
  {
    id: '02',
    name: 'CollabCode',
    tagline: 'AI-Native Collaborative Development Platform',
    desc: 'Cloud-based IDE with AI assistance, user auth, team workspaces, and real-time collaboration via WebSockets so multiple developers code together live.',
    live: 'https://codexverse-eight.vercel.app/',
    github: 'https://github.com/vaishnuvindula',
    tags: ['React', 'WebSockets', 'LLMs', 'Team Workspaces'],
    year: 'May 2026',
  },
  {
    id: '03',
    name: 'NVIDIA NIM on GKE',
    tagline: 'Generative AI Model Deployment on Google Cloud & Kubernetes',
    desc: 'Deployed AI models on GCP using NVIDIA NIM on GKE. Configured auto-scaling, load balancing for high availability, and real-time performance monitoring.',
    live: 'https://nvidia-on-gke-codelab.vercel.app/',
    github: 'https://github.com/vaishnuvindula',
    tags: ['Google Cloud', 'NVIDIA NIM', 'Kubernetes', 'GKE'],
    year: 'August 2025',
  },
];

export function Works() {
  return (
    <section id="works" className="bg-white py-24 px-6 md:px-12 border-t border-[#121212]/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span
              className="text-[#121212] text-[11px] tracking-widest uppercase block mb-2"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              ( Featured Work )
            </span>
            <div
              className="flex gap-2 md:gap-4 overflow-hidden"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {'WORKS'.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="text-[#121212] inline-block font-black"
                  style={{
                    fontSize: 'clamp(3.5rem, 12vw, 9rem)',
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
          <div
            className="text-right text-[11px] text-[#121212]/50"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            03 PRODUCTION PROJECTS<br />
            2025 — 2026
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-[#121212]/10 bg-[#FAF9F6] hover:border-[#121212] transition-all duration-300 space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#121212]/10 pb-6">
                <div className="flex items-baseline gap-4">
                  <span
                    className="text-[#121212]/40 text-xs font-mono"
                  >
                    {project.id}
                  </span>
                  <div>
                    <h3
                      className="text-3xl md:text-5xl font-black text-[#121212]"
                      style={{ fontFamily: "'Syne', sans-serif", letterSpacing: '-0.03em' }}
                    >
                      {project.name}
                    </h3>
                    <p
                      className="text-xs text-[#121212]/60 mt-1 font-mono"
                    >
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill bg-[#121212] text-white hover:bg-black"
                  >
                    <span>LIVE DEMO</span>
                    <span>↗</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill"
                  >
                    <span>GITHUB</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <p
                  className="md:col-span-2 text-sm text-[#121212]/70 leading-relaxed font-mono"
                >
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 md:justify-end">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-[10px] uppercase font-mono bg-white border border-[#121212]/15 text-[#121212]"
                    >
                      {t}
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
