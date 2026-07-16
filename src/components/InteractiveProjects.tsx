import { motion } from 'framer-motion';
import { useTilt } from '../hooks/useTilt';

const projects = [
  {
    id: 'prompt-pilot',
    title: 'Prompt Pilot AI',
    subtitle: 'AI Prompt Engineering Tool',
    desc: 'Transform simple ideas into structured, production-ready AI prompts. The ultimate assistant for developers and creators.',
    image: '/images/prompt-pilot.png',
    url: 'https://prompt-pilot-taupe.vercel.app',
    accent: 'from-blue-500 to-indigo-600',
    glow: 'rgba(37,99,235,0.4)',
    tag: 'AI / Productivity',
  },
  {
    id: 'ai-sigma',
    title: 'UniHub Gap Detector',
    subtitle: 'Career Intelligence Platform',
    desc: 'Bridge the gap between your resume and your dream job with real-time AI analysis and personalised recommendations.',
    image: '/images/ai-gap.png',
    url: 'https://ai-sigma-fawn.vercel.app',
    accent: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.35)',
    tag: 'AI / Career',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const tilt = useTilt({ maxTilt: 8, scale: 1.025, perspective: 1200 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotateX: 12 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.9, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
    >
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
        <div
          ref={tilt.ref}
          style={tilt.style}
          onMouseMove={tilt.onMouseMove}
          onMouseLeave={tilt.onMouseLeave}
          className="group relative holo-border glass-deep rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-video cursor-pointer"
        >
          {/* Image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top opacity-55 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105"
            />
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 transition-opacity duration-500" />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-15 transition-opacity duration-500 mix-blend-overlay`} />

          {/* Top-right tag badge */}
          <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-400">
            <span className={`text-[10px] font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${project.accent} text-white shadow-lg`}>
              {project.tag}
            </span>
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
            <p className="text-white/40 text-xs tracking-widest uppercase mb-1 font-light">
              {project.subtitle}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
              {project.title}
            </h3>
            <p className="text-white/55 text-sm max-w-[80%] leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-75">
              {project.desc}
            </p>

            {/* Visit arrow */}
            <div className="absolute bottom-7 right-7 md:bottom-9 md:right-9 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-400 delay-100">
              <span className="text-white/50 text-xs">Visit</span>
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${project.accent} flex items-center justify-center shadow-lg`}
                style={{ boxShadow: `0 4px 20px ${project.glow}` }}
              >
                <i className="fas fa-arrow-up-right-from-square text-white text-xs" />
              </div>
            </div>
          </div>

          {/* Bottom glow line */}
          <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        </div>
      </a>
    </motion.div>
  );
}

export function InteractiveProjects() {
  return (
    <section id="work" className="relative py-36 px-4 sm:px-8 bg-[#030305] overflow-hidden">
      {/* Orbs */}
      <div className="absolute -top-20 right-[8%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none"
        style={{ animation: 'float-slow 11s ease-in-out infinite' }} />
      <div className="absolute bottom-10 left-[5%] w-[300px] h-[300px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"
        style={{ animation: 'float-medium 9s ease-in-out infinite' }} />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-xs tracking-[0.25em] uppercase text-emerald-400/50 mb-4"
      >
        Selected Work
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="gradient-text text-5xl md:text-6xl font-bold mb-16 text-center"
      >
        Featured Work
      </motion.h2>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
