import { motion } from 'framer-motion';
import { useTilt } from '../hooks/useTilt';

const projects = [
  {
    id: "prompt-pilot",
    title: "Prompt Pilot AI",
    desc: "The ultimate AI prompt Assistant. Transform simple user prompts into structured, production-ready prompts.",
    image: "/images/prompt-pilot.png",
    url: "https://prompt-pilot-taupe.vercel.app",
    gradient: "from-blue-500/20 via-purple-500/10 to-transparent",
  },
  {
    id: "ai-sigma",
    title: "UniHub Gap Detector",
    desc: "Bridge the Gap Between Your Resume and Your Dream Job with intelligent AI.",
    image: "/images/ai-gap.png",
    url: "https://ai-sigma-fawn.vercel.app",
    gradient: "from-emerald-500/20 via-cyan-500/10 to-transparent",
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const tilt = useTilt({ maxTilt: 10, scale: 1.03, perspective: 1200 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div
          ref={tilt.ref}
          style={tilt.style}
          onMouseMove={tilt.onMouseMove}
          onMouseLeave={tilt.onMouseLeave}
          className="group relative rounded-2xl md:rounded-[2rem] overflow-hidden holo-border bg-white/[0.02] backdrop-blur-sm aspect-[16/10] sm:aspect-video shadow-2xl"
        >
          {/* Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105 transition-transform"
              style={{ transition: 'opacity 700ms, transform 700ms ease-out' }}
            />
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`} />

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">{project.title}</h3>
            <p className="text-white/60 text-sm md:text-base max-w-[85%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
              {project.desc}
            </p>

            {/* Arrow button */}
            <div className="absolute bottom-8 md:bottom-10 right-8 md:right-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 delay-100 backdrop-blur-md border border-white/20">
              <i className="fas fa-arrow-right text-white"></i>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export function InteractiveProjects() {
  return (
    <section id="work" className="relative py-32 px-4 sm:px-8 bg-[#050505] overflow-hidden">
      {/* Floating orb */}
      <div className="orb w-[350px] h-[350px] bg-purple-500/15 -top-20 right-[10%]" style={{ animation: 'float-slow 10s ease-in-out infinite' }} />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
      >
        Featured Work
      </motion.h2>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
