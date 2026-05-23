import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block mr-[0.25em]">
          {word.split("").map((char, j) => {
            const start = (i * 10 + j) / (words.length * 10);
            const end = start + 0.1;
            const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
            return (
              <span key={j} className="relative inline-block">
                <span className="invisible">{char}</span>
                <motion.span style={{ opacity }} className="absolute left-0 top-0">
                  {char}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </p>
  );
}
