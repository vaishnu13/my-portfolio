import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SpaceWorkProps {
  opacity: number;
}

const projects = [
  {
    id: 1,
    title: 'Prompt Pilot AI',
    desc: 'AI prompt engineering assistant that transforms simple prompts into sophisticated, context-rich instructions',
    tech: ['React', 'TypeScript', 'AI/ML'],
    image: '/images/prompt-pilot.png',
    link: 'https://prompt-pilot.vercel.app',
    styles: { top: '15%', left: '10%', rotation: -2, width: '380px', mdWidth: '420px' }
  },
  {
    id: 2,
    title: 'AI Gap Finder',
    desc: 'Intelligent tool that identifies gaps and opportunities in AI-generated content',
    tech: ['Next.js', 'Python', 'NLP'],
    image: '/images/ai-gap.png',
    link: 'https://ai-gap-finder.vercel.app',
    styles: { top: '35%', right: '10%', rotation: 3, width: '400px', mdWidth: '450px' }
  },
  {
    id: 3,
    title: 'BrokerHub Platform',
    desc: 'Full-stack real estate platform connecting brokers with clients seamlessly',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: null,
    link: '#',
    styles: { bottom: '10%', left: '25%', rotation: -1, width: '360px', mdWidth: '400px' }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 100, damping: 20 }
  },
};

export const SpaceWork: React.FC<SpaceWorkProps> = ({ opacity }) => {
  const isVisible = opacity > 0.3;

  return (
    <div
      className="fixed inset-0 z-20 overflow-hidden text-[#E6E1DF]"
      style={{
        opacity,
        pointerEvents: opacity === 0 ? 'none' : 'auto',
      }}
    >
      <div className="absolute top-8 left-8 text-xs font-mono text-[#8C8684] tracking-widest uppercase z-30">
        Section — Work
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="relative w-full h-full max-w-[1400px] mx-auto hidden md:block"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {projects.map((project) => (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                className="absolute block bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:scale-105 group"
                style={{
                  top: project.styles.top,
                  left: project.styles.left,
                  right: project.styles.right,
                  bottom: project.styles.bottom,
                  width: project.styles.mdWidth,
                  rotate: project.styles.rotation,
                }}
              >
                {project.image ? (
                  <div className="w-full h-48 bg-[#121010] rounded-xl mb-6 overflow-hidden relative border border-white/5">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-[#121010] to-[#1a1818] rounded-xl mb-6 flex items-center justify-center border border-white/5">
                    <span className="text-[#8C8684] font-['Kanit'] text-sm tracking-wider uppercase">Project Preview</span>
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-['Instrument_Serif'] text-3xl text-white">{project.title}</h3>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transform -rotate-45 group-hover:rotate-0 transition-all duration-300 group-hover:bg-[#38bdf8] group-hover:text-[#121010]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
                
                <p className="font-['Kanit'] text-[#8C8684] text-sm mb-6 leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-[#121010] text-[#8C8684] text-xs font-['Kanit'] border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Fallback layout */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="md:hidden w-full h-full pt-24 pb-12 px-6 overflow-y-auto flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {projects.map((project) => (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                className="block w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 group"
              >
                {project.image ? (
                  <div className="w-full h-40 bg-[#121010] rounded-xl mb-4 overflow-hidden relative border border-white/5">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-40 bg-gradient-to-br from-[#121010] to-[#1a1818] rounded-xl mb-4 flex items-center justify-center border border-white/5">
                    <span className="text-[#8C8684] font-['Kanit'] text-xs tracking-wider uppercase">Project Preview</span>
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-['Instrument_Serif'] text-2xl text-white">{project.title}</h3>
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center transform -rotate-45">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
                
                <p className="font-['Kanit'] text-[#8C8684] text-sm mb-4 leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 rounded-full bg-[#121010] text-[#8C8684] text-[10px] font-['Kanit'] border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
