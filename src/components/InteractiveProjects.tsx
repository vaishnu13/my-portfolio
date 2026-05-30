import { motion } from 'framer-motion';

const projects = [
  {
    id: "prompt-pilot",
    title: "Prompt Pilot AI",
    desc: "The ultimate AI prompt Assistant. Transform simple user prompts into structured, production-ready prompts.",
    image: "/images/prompt-pilot.png",
    url: "https://prompt-pilot-taupe.vercel.app",
    color: "from-purple-500/20 to-blue-500/20",
  },
  {
    id: "ai-sigma",
    title: "UniHub Gap Detector",
    desc: "Bridge the Gap Between Your Resume and Your Dream Job with intelligent AI.",
    image: "/images/ai-gap.png",
    url: "https://ai-sigma-fawn.vercel.app",
    color: "from-emerald-500/20 to-cyan-500/20",
  }
];

export function InteractiveProjects() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-4 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
      {projects.map((project) => (
        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer"
          key={project.id}
          className="group block relative rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 bg-[#0A0A0A] aspect-[16/10] sm:aspect-video shadow-2xl cursor-none"
        >
          {/* Image Container */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>

          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`} />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay pointer-events-none`} />

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">{project.title}</h3>
            <p className="text-white/70 text-sm md:text-base max-w-[85%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
              {project.desc}
            </p>
            
            {/* View Project Button */}
            <div className="absolute bottom-8 md:bottom-10 right-8 md:right-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 delay-100 backdrop-blur-md border border-white/20">
              <i className="fas fa-arrow-right text-white"></i>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
