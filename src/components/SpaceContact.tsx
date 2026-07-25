import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SpaceContactProps {
  opacity: number;
}

export const SpaceContact: React.FC<SpaceContactProps> = ({ opacity }) => {
  const isVisible = opacity > 0.1;

  const headingText = "LET'S BUILD SOMETHING EXTRAORDINARY";
  const words = headingText.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center p-8 z-50 overflow-hidden"
      style={{ opacity, pointerEvents: opacity === 0 ? 'none' : 'auto' }}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col items-center justify-center w-full max-w-5xl text-center space-y-12"
          >
            {/* Section Label */}
            <motion.div variants={itemVariants} className="flex items-center space-x-4">
              <div className="h-[1px] w-8 bg-[#8C8684]"></div>
              <p className="text-xs tracking-[0.3em] font-mono text-[#8C8684] uppercase">
                Section — Contact
              </p>
              <div className="h-[1px] w-8 bg-[#8C8684]"></div>
            </motion.div>

            {/* Main Heading (Cinematic Word-by-Word Reveal) */}
            <motion.h2 
              className="font-['Instrument_Serif'] text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight uppercase"
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="inline-block mr-3 md:mr-4 lg:mr-6 gradient-text-dungyov"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="font-['Kanit'] text-lg md:text-xl text-[#8C8684] font-light max-w-2xl"
            >
              Have a project in mind? Let's talk.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-8">
              <motion.a
                href="mailto:vaishnu7070@gmail.com"
                className="relative inline-flex items-center justify-center px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-['Kanit'] text-sm tracking-[0.2em] text-[#E6E1DF] uppercase transition-all duration-300 overflow-hidden group"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                {/* Button Glow Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#38bdf8]/20 to-[#a855f7]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  variants={{
                    hover: {
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                      transition: { duration: 2, repeat: Infinity }
                    }
                  }}
                />
                <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                  GET IN TOUCH
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                
                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-full border border-white/0 group-hover:border-white/20 transition-colors duration-300" />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center space-x-8 pt-12"
            >
              {[
                { name: 'GitHub', url: 'https://github.com/vaishnu7070' },
                { name: 'LinkedIn', url: 'https://linkedin.com/in/vaishnu-vindula' },
                { name: 'Email', url: 'mailto:vaishnu7070@gmail.com' }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Kanit'] text-sm tracking-wider text-[#8C8684] hover:text-[#E6E1DF] transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E6E1DF] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer text pinned to bottom */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <p className="font-['Kanit'] text-xs text-[#8C8684]/50 tracking-wider">
          © 2026 Vaishnu Vindula. Crafted with passion.
        </p>
      </div>
    </div>
  );
};
