import React from 'react';
import { motion } from 'framer-motion';

interface SpaceAboutProps {
  opacity: number;
}

export const SpaceAbout: React.FC<SpaceAboutProps> = ({ opacity }) => {
  return (
    <motion.div
      style={{
        opacity,
        pointerEvents: opacity === 0 ? 'none' : 'auto',
      }}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center p-6 md:p-10 text-[#E6E1DF]"
    >
      {/* Section Label */}
      <div className="absolute top-6 left-6 md:top-10 md:left-12 text-xs font-mono tracking-widest text-[#8C8684] uppercase">
        Section — About
      </div>

      <div className="max-w-5xl w-full flex flex-col gap-5 my-auto">
        {/* Top Header */}
        <div className="flex flex-col gap-1 text-left">
          <h2 className="text-3xl md:text-5xl font-['Instrument_Serif'] italic text-white">
            BACKGROUND & EXPERTISE
          </h2>
          <p className="text-xs md:text-sm font-['Kanit'] text-[#8C8684] tracking-wide max-w-xl">
            Passionate full-stack developer & AI engineer dedicated to crafting modern digital products.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Bio Box (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-3 text-left">
              <h3 className="text-[11px] font-mono uppercase tracking-widest text-[#38bdf8]">
                Overview
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-[#D7E2EA] font-['Kanit']">
                I specialize in building scalable web applications and integrating cutting-edge AI features. With a strong background in Computer Science, I bridge complex backend logic with smooth 3D frontend interfaces.
              </p>
              <p className="text-xs md:text-sm leading-relaxed text-[#8C8684] font-['Kanit']">
                Driven by curiosity, I constantly push the boundaries of product design, real-time interactivity, and AI automation.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-3 border-t border-white/5">
              <a
                href="https://github.com/vaishnu7070"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors rounded-full text-[11px] font-mono tracking-wider text-[#E6E1DF]"
              >
                GITHUB ↗
              </a>
              <a
                href="https://linkedin.com/in/vaishnu-vindula"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors rounded-full text-[11px] font-mono tracking-wider text-[#E6E1DF]"
              >
                LINKEDIN ↗
              </a>
            </div>
          </div>

          {/* Quick Info (Right 5 Cols) */}
          <div className="lg:col-span-5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 flex flex-col justify-between gap-3">
            <h3 className="text-[11px] font-mono uppercase tracking-widest text-[#a855f7]">
              Details
            </h3>
            <div className="space-y-3">
              <DetailRow label="Location" value="India" />
              <DetailRow label="Degree" value="B.Tech Computer Science" />
              <DetailRow label="Focus" value="Full-Stack & AI" />
              <DetailRow label="Email" value="vaishnu7070@gmail.com" />
            </div>
          </div>

        </div>

        {/* Skills Grid */}
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 md:p-6 flex flex-col gap-3 text-left">
          <h3 className="text-[11px] font-mono uppercase tracking-widest text-[#8C8684]">
            Technical Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <SkillGroup title="Frontend" skills={['React', 'Next.js', 'TypeScript', 'Tailwind']} />
            <SkillGroup title="Backend" skills={['Node.js', 'Python', 'Express', 'MongoDB']} />
            <SkillGroup title="AI / ML" skills={['TensorFlow', 'NLP', 'Prompt Eng.']} />
            <SkillGroup title="Deployment" skills={['Git', 'Docker', 'Vercel', 'Firebase']} />
          </div>
        </div>

      </div>
    </motion.div>
  );
};

const SkillGroup = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="flex flex-col gap-2">
    <span className="text-[10px] font-mono text-[#8C8684] uppercase tracking-wider">{title}</span>
    <div className="flex flex-wrap gap-1.5">
      {skills.map((s) => (
        <span key={s} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] font-['Kanit'] text-[#E6E1DF]">
          {s}
        </span>
      ))}
    </div>
  </div>
);

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-center text-xs border-b border-white/5 pb-2">
    <span className="font-mono text-[#8C8684] uppercase">{label}</span>
    <span className="font-['Kanit'] text-[#E6E1DF] font-medium">{value}</span>
  </div>
);
