import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export function WordsPullUp({ 
  text, 
  className = "", 
  showAsterisk = false 
}: { 
  text: string, 
  className?: string, 
  showAsterisk?: boolean 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => {
        const isLastWord = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block mr-[0.25em] relative"
          >
            {word}
            {isLastWord && showAsterisk && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
}

export function WordsPullUpMultiStyle({ 
  segments, 
  className = "" 
}: { 
  segments: { text: string, className?: string }[], 
  className?: string 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  let wordIndex = 0;

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {segments.map((segment, segIdx) => {
        const words = segment.text.split(" ");
        return words.map((word, i) => {
          const currentIdx = wordIndex++;
          return (
            <motion.span
              key={`${segIdx}-${i}`}
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: currentIdx * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`inline-block mr-2 sm:mr-3 md:mr-4 ${segment.className || ""}`}
            >
              {word}
            </motion.span>
          );
        });
      })}
    </div>
  );
}

export function AnimatedLetter({ 
  children, 
  progress, 
  index, 
  total 
}: { 
  children: React.ReactNode, 
  progress: any, 
  index: number, 
  total: number 
}) {
  const charProgress = index / total;
  const opacity = useTransform(
    progress,
    [charProgress - 0.1, charProgress + 0.05],
    [0.2, 1]
  );
  
  return (
    <motion.span style={{ opacity }}>
      {children}
    </motion.span>
  );
}

export function ScrollRevealText({ text, className = "" }: { text: string, className?: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const chars = text.split("");

  return (
    <p ref={containerRef} className={className}>
      {chars.map((char, i) => (
        <AnimatedLetter key={i} progress={scrollYProgress} index={i} total={chars.length}>
          {char}
        </AnimatedLetter>
      ))}
    </p>
  );
}
