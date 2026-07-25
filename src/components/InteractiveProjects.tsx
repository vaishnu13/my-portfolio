import { motion } from 'framer-motion';
import { useTilt } from '../hooks/useTilt';

const projects = [
  {
    id: 'prompt-pilot',
    number: '01',
    title: 'Prompt Pilot AI',
    subtitle: 'AI Engineering & Prompt Automation',
    desc: 'An intelligent AI assistant that transforms unstructured user prompts into structured, production-ready AI prompts for high-precision model execution.',
    image: '/images/prompt-pilot.png',
    url: 'https://prompt-pilot-taupe.vercel.app',
    category: 'AI / PRODUCTIVITY',
    tech: ['React', 'TypeScript', 'Tailwind', 'AI API'],
  },
  {
    id: 'ai-sigma',
    number: '02',
    title: 'UniHub Gap Detector',
    subtitle: 'Career Intelligence Engine',
    desc: 'An AI-powered skill gap analyzer that bridges the distance between candidate resumes and modern engineering role requirements.',
    image: '/images/ai-gap.png',
    url: 'https://ai-sigma-fawn.vercel.app',
    category: 'AI / CAREER TECH',
    tech: ['React', 'TypeScript', 'Tailwind', 'OpenAI'],
  },
];

function CaseStudyCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const tiltProps = useTilt({ maxTilt: 8, scale: 1.02, perspective: 1100 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div
          ref={tiltProps.ref}
          style={tiltProps.style}
          onMouseMove={tiltProps.onMouseMove}
          onMouseLeave={tiltProps.onMouseLeave}
          className="holo-border-dungyov glass-dungyov rounded-3xl overflow-hidden relative"
        >
          {/* Top Banner Bar */}
          <div className="flex items-center justify-between p-6 border-b border-[#E6E1DF]/10 font-mono text-xs text-[#8C8684]">
            <span className="text-[#38BDF8] font-bold">[{project.number}]</span>
            <span className="uppercase tracking-widest">{project.category}</span>
          </div>

          {/* Image Container */}
          <div className="relative aspect-[16/9] overflow-hidden bg-black/40">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121010] via-transparent to-transparent opacity-90" />
          </div>

          {/* Content Info */}
          <div className="p-8">
            <p className="text-xs font-mono text-[#8C8684] uppercase tracking-wider mb-2">
              {project.subtitle}
            </p>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-bold text-[#E6E1DF] group-hover:text-[#38BDF8] transition-colors">
                {project.title}
              </h3>
              <span className="text-[#38BDF8] font-mono text-sm transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                ↗
              </span>
            </div>

            <p className="text-sm text-[#8C8684] leading-relaxed mb-6">
              {project.desc}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-[11px] font-mono rounded-full bg-white/[0.02] border border-[#E6E1DF]/10 text-[#8C8684]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export function InteractiveProjects() {
  return (
    <section
      id="work"
      className="relative py-32 px-6 sm:px-12 md:px-20 lg:px-28 bg-[#121010] z-10"
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-[#38BDF8] tracking-widest uppercase mb-3"
        >
          [01] SELECTED WORK &amp; CASE STUDIES
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-[#E6E1DF] uppercase tracking-tight"
        >
          FEATURED PROJECTS
        </motion.h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <CaseStudyCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
