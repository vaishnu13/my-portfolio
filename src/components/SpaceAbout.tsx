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
      className="fixed inset-0 z-40 flex flex-col justify-center px-6 md:px-20 text-[#E6E1DF] font-sans"
    >
      <div className="absolute top-8 left-8 md:top-12 md:left-12 text-xs md:text-sm font-mono tracking-widest text-[#8C8684]">
        SECTION — ABOUT
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start overflow-y-auto max-h-screen py-24 scrollbar-hide">
        {/* Left Column: Story */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl md:text-6xl font-serif italic text-[#E6E1DF]">
            SHORT STORY
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-[#8C8684] font-sans">
            I'm Vaishnu Vindula — a passionate full-stack developer and AI enthusiast based in India. I started my journey in tech driven by curiosity and a desire to build products that make a real impact. With expertise spanning from React and TypeScript to Python and machine learning, I bring ideas to life through clean code and thoughtful design. When I'm not coding, you'll find me exploring new AI breakthroughs or contributing to open-source projects.
          </p>

          <div className="mt-8 space-y-6">
            <h3 className="text-xl md:text-2xl font-serif italic text-[#E6E1DF]">Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <SkillCategory title="Frontend" skills={['React', 'Next.js', 'TypeScript', 'Tailwind CSS']} />
              <SkillCategory title="Backend" skills={['Node.js', 'Python', 'Express', 'MongoDB']} />
              <SkillCategory title="AI/ML" skills={['TensorFlow', 'NLP', 'Prompt Engineering']} />
              <SkillCategory title="Tools" skills={['Git', 'Docker', 'Vercel', 'Firebase']} />
            </div>
          </div>
        </div>

        {/* Right Column: Details & Socials */}
        <div className="flex flex-col gap-6">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col gap-4">
            <DetailItem label="Name" value="Vaishnu Vindula" />
            <DetailItem label="Location" value="India" />
            <DetailItem label="Education" value="B.Tech in Computer Science" />
            <DetailItem label="Focus" value="Full-Stack Development, AI/ML" />
            <DetailItem label="Email" value="vaishnu7070@gmail.com" />
            
            <div className="mt-6 pt-6 border-t border-white/10 flex gap-4">
              <a
                href="https://github.com/vaishnu7070"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-sm font-medium tracking-wide"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/vaishnuvindula"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-sm font-medium tracking-wide"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="flex flex-col gap-3">
    <div className="text-sm font-mono tracking-wider text-[#8C8684] uppercase">{title}</div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20 rounded-full text-xs font-medium"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
    <span className="text-sm font-mono text-[#8C8684] w-24 shrink-0 uppercase">{label}</span>
    <span className="text-base text-[#E6E1DF]">{value}</span>
  </div>
);
