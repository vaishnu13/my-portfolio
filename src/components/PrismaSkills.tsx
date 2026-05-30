import { ArrowRight } from 'lucide-react';
import { WordsPullUpMultiStyle } from './PrismaComponents';

export function PrismaSkills() {
  return (
    <section id="contact" className="prisma-section min-h-screen relative flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 pb-20 md:pb-32 overflow-hidden bg-black">
      {/* Video Background */}
      <video 
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-noise opacity-[0.7] mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 pointer-events-none"></div>

      <div className="bg-transparent backdrop-blur-sm border border-white/15 shadow-2xl rounded-2xl md:rounded-[2rem] w-full max-w-6xl px-8 py-10 sm:px-12 sm:py-16 md:px-20 md:py-20 lg:px-32 lg:py-24 flex flex-col items-center text-center relative z-10 -mt-10 sm:-mt-20">
        
        <span className="text-[#DEDBC8] text-[10px] sm:text-xs tracking-widest uppercase mb-6 sm:mb-8">
          Get in touch
        </span>

        <WordsPullUpMultiStyle 
          segments={[
            { text: "Let's build something, ", className: "font-normal text-[#E1E0CC]" },
            { text: "incredible ", className: "font-serif italic text-[#E1E0CC]" },
            { text: "together.", className: "font-normal text-[#E1E0CC]" }
          ]}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-8 sm:mb-12"
        />

        <a 
          href="mailto:vaishnu7070@gmail.com" 
          className="group inline-flex items-center bg-[#DEDBC8] rounded-full pl-6 pr-2 py-2 transition-all hover:gap-3"
        >
          <span className="text-black font-medium text-sm sm:text-base mr-4">Say Hello</span>
          <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex shrink-0 items-center justify-center group-hover:scale-110 transition-transform">
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        </a>

      </div>
    </section>
  );
}
