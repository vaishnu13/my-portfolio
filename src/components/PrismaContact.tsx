import { ArrowRight } from 'lucide-react';
import { WordsPullUpMultiStyle, ScrollRevealText } from './PrismaComponents';

export function PrismaContact() {
  return (
    <section id="contact" className="prisma-section min-h-screen bg-black flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 relative z-10">
      <div className="bg-[#101010] rounded-2xl md:rounded-[2rem] w-full max-w-6xl p-8 sm:p-12 md:p-20 lg:p-32 flex flex-col items-center text-center">
        
        <span className="text-[#DEDBC8] text-[10px] sm:text-xs tracking-widest uppercase mb-12 sm:mb-16">
          Get in touch
        </span>

        <WordsPullUpMultiStyle 
          segments={[
            { text: "Let's build something, ", className: "font-normal text-[#E1E0CC]" },
            { text: "incredible ", className: "font-serif italic text-[#E1E0CC]" },
            { text: "together.", className: "font-normal text-[#E1E0CC]" }
          ]}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-12 sm:mb-16"
        />

        <div className="max-w-2xl mx-auto mb-16">
          <ScrollRevealText 
            text="Interested in collaborating or have a project in mind? Let's connect and discuss how we can work together to transform ideas into scalable, user-centric digital experiences."
            className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed"
          />
        </div>

        <a 
          href="mailto:vaishnu7070@gmail.com" 
          className="group inline-flex items-center bg-[#DEDBC8] rounded-full pl-6 pr-2 py-2 transition-all hover:gap-3"
        >
          <span className="text-black font-medium text-sm sm:text-base mr-4">Say Hello</span>
          <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        </a>

      </div>
    </section>
  );
}
