import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface SpacePitchProps {
  opacity: number;
}

export const SpacePitch: React.FC<SpacePitchProps> = ({ opacity }) => {
  const controls = useAnimation();

  useEffect(() => {
    // Trigger the character reveal animation when the section is sufficiently visible
    if (opacity > 0.5) {
      controls.start('visible');
    } else if (opacity < 0.1) {
      controls.start('hidden');
    }
  }, [opacity, controls]);

  const text = "I build digital products that solve real problems. From AI-powered tools to full-stack platforms, I turn complex ideas into elegant solutions.";
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.4, ease: "easeOut" as const } 
    },
  };

  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, delay: 0.8, ease: "easeOut" as const } 
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" as const } 
    },
  };

  return (
    <motion.div
      style={{ opacity, pointerEvents: opacity === 0 ? 'none' : 'auto' }}
      className="fixed inset-0 flex flex-col items-center justify-center z-20 px-6 sm:px-12"
    >
      <div className="max-w-4xl flex flex-col items-center text-center">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={controls}
          className="mb-8 flex flex-col items-center"
        >
          <h2 className="text-xs md:text-sm font-['Kanit'] uppercase tracking-[0.4em] text-[#38bdf8] mb-3">
            The Pitch
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#a855f7] to-transparent opacity-70" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="font-['Instrument_Serif'] italic text-3xl md:text-5xl lg:text-6xl leading-tight md:leading-tight text-[#E6E1DF] mb-12"
        >
          {text.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-[0.25em]">
              {word.split('').map((char, charIndex) => (
                <motion.span key={charIndex} variants={charVariants} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={fadeVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm md:text-base font-['Almarai'] text-[#8C8684] tracking-wide"
        >
          <span>3+ Years Experience</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#38bdf8] opacity-60" />
          <span>10+ Projects</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#a855f7] opacity-60" />
          <span>AI & Full-Stack</span>
        </motion.div>
      </div>
    </motion.div>
  );
};
