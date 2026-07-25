import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SpaceWorkProps {
  opacity: number;
}

const projects = [
  {
    id: 1,
    title: 'Prompt Pilot AI',
    subtitle: 'AI Prompt Engineering Tool',
    desc: 'Transforms simple ideas into sophisticated, context-rich instructions for AI systems.',
    tech: ['React', 'TypeScript', 'AI/ML'],
    image: '/images/prompt-pilot.png',
    link: 'https://prompt-pilot.vercel.app',
    badge: 'AI ASSISTANT'
  },
  {
    id: 2,
    title: 'AI Gap Finder',
    subtitle: 'Content Analysis Platform',
    desc: 'Intelligent tool that identifies gaps, hallucinations, and opportunities in AI-generated content.',
    tech: ['Next.js', 'Python', 'NLP'],
    image: '/images/ai-gap.png',
    link: 'https://ai-gap-finder.vercel.app',
    badge: 'NLP PLATFORM'
  },
  {
    id: 3,
    title: 'CodeXVerse AI',
    subtitle: 'Collaborative Coding Workspace',
    desc: 'Real-time AI collaborative coding platform empowering developers to pair program with AI assistance.',
    tech: ['React', 'TypeScript', 'WebSockets', 'AI/ML'],
    image: null,
    link: 'https://codexverse-eight.vercel.app',
    badge: 'COLLAB CODE'
  }
];

export const SpaceWork: React.FC<SpaceWorkProps> = ({ opacity }) => {
  const [activeIndex, setActiveIndex] = useState(1); // Center card active by default
  const isVisible = opacity > 0.15;

  const nextProject = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div
      className="fixed inset-0 z-30 flex flex-col items-center justify-center p-6 md:p-12 text-[#E6E1DF] overflow-hidden"
      style={{
        opacity,
        pointerEvents: opacity === 0 ? 'none' : 'auto',
      }}
    >
      {/* Section Label */}
      <div className="absolute top-6 left-6 md:top-10 md:left-12 text-xs font-mono tracking-widest text-[#8C8684] uppercase z-40">
        Section — Work
      </div>

      <AnimatePresence>
        {isVisible && (
          <div className="max-w-6xl w-full flex flex-col items-center justify-center gap-8 my-auto">
            {/* Header */}
            <div className="flex flex-col items-center text-center gap-2">
              <h2 className="text-3xl md:text-5xl font-['Instrument_Serif'] italic text-white">
                FEATURED PROJECTS
              </h2>
              <p className="text-xs md:text-sm font-['Kanit'] text-[#8C8684] tracking-wide">
                Explore intelligent products built with AI & modern web stacks
              </p>
            </div>

            {/* 3D Ring Carousel Container */}
            <div className="relative w-full max-w-5xl h-[420px] md:h-[460px] flex items-center justify-center [perspective:1200px]">
              {projects.map((project, idx) => {
                // Calculate position relative to active card (-1, 0, 1)
                const offset = (idx - activeIndex + projects.length) % projects.length;
                let normalizedOffset = offset;
                if (offset === 2) normalizedOffset = -1; // Ring wrapping: 0 center, 1 right, -1 left

                const isCenter = normalizedOffset === 0;
                const isLeft = normalizedOffset === -1;
                const isRight = normalizedOffset === 1;

                // 3D Ring spatial transformations (No Overlap)
                let transformStyle = '';
                let zIndex = 10;
                let cardOpacity = 0.5;

                if (isCenter) {
                  transformStyle = 'translateX(0%) translateZ(60px) rotateY(0deg) scale(1.02)';
                  zIndex = 30;
                  cardOpacity = 1;
                } else if (isLeft) {
                  transformStyle = 'translateX(-75%) translateZ(-80px) rotateY(18deg) scale(0.88)';
                  zIndex = 20;
                  cardOpacity = 0.65;
                } else if (isRight) {
                  transformStyle = 'translateX(75%) translateZ(-80px) rotateY(-18deg) scale(0.88)';
                  zIndex = 20;
                  cardOpacity = 0.65;
                }

                return (
                  <motion.div
                    key={project.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`absolute w-[320px] sm:w-[360px] md:w-[400px] h-[380px] md:h-[420px] bg-[#161414]/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-700 ease-out group ${
                      isCenter ? 'border-[#38bdf8]/40 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(56,189,248,0.15)]' : 'hover:border-white/20'
                    }`}
                    style={{
                      transform: transformStyle,
                      zIndex,
                      opacity: cardOpacity,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Top Image / Badge */}
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-wider text-[#38bdf8] uppercase">
                          {project.badge}
                        </span>
                        <span className="text-[10px] font-mono text-[#8C8684]">
                          0{project.id} / 03
                        </span>
                      </div>

                      {project.image ? (
                        <div className="w-full h-36 md:h-40 bg-[#121010] rounded-xl overflow-hidden mb-4 border border-white/5 relative">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-36 md:h-40 bg-gradient-to-br from-[#1c1a1a] to-[#0e0c0c] rounded-xl mb-4 flex flex-col items-center justify-center border border-white/5 gap-2">
                          <span className="text-[#38bdf8] font-mono text-xl font-bold">CodeXVerse</span>
                          <span className="text-[#8C8684] font-mono text-[10px] tracking-widest uppercase">CollabCode AI</span>
                        </div>
                      )}

                      <h3 className="text-2xl font-['Instrument_Serif'] text-white font-medium mb-1">
                        {project.title}
                      </h3>
                      <p className="text-xs font-['Kanit'] text-[#8C8684] line-clamp-2 leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

                    {/* Bottom Tech & CTA Link */}
                    <div className="pt-3 border-t border-white/5 flex flex-col gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-[#8C8684]">
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-[#38bdf8] hover:text-[#121010] border border-white/10 text-xs font-mono tracking-wider text-center transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                      >
                        VISIT PROJECT
                        <svg className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Ring Controls (Prev / Next & Dots) */}
            <div className="flex items-center gap-6 z-40">
              <button
                onClick={prevProject}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors"
                aria-label="Previous Project"
              >
                ←
              </button>

              <div className="flex gap-2">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex ? 'w-8 bg-[#38bdf8]' : 'w-2 bg-white/20'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextProject}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors"
                aria-label="Next Project"
              >
                →
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
