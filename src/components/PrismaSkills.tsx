import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { WordsPullUpMultiStyle } from './PrismaComponents';

function FeatureCard({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl md:rounded-[2rem] overflow-hidden relative ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function PrismaSkills() {
  return (
    <section id="skills" className="prisma-section h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video 
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-noise opacity-[0.7] mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-8">
        <WordsPullUpMultiStyle 
          segments={[
            { text: "Technical Skills & Workflows.", className: "text-[#E1E0CC]" }
          ]}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
        />
        <WordsPullUpMultiStyle 
          segments={[
            { text: "Powered by Vaishnu.", className: "text-gray-300" }
          ]}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
        />
      </div>
    </section>
  );
}
