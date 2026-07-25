import { ArrowRight } from 'lucide-react';
import { WordsPullUpMultiStyle } from './PrismaComponents';
import { useTilt } from '../hooks/useTilt';

export function PrismaSkills() {
  const tilt = useTilt({ maxTilt: 6, scale: 1.01, perspective: 1400 });

  return (
    <section
      id="contact"
      className="prisma-section min-h-screen relative flex flex-col items-center justify-center p-6 sm:p-12 md:p-20 overflow-hidden bg-[#121010] z-10"
    >
      {/* Background Video Layer */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />

      {/* Noise & Gradient Overlays */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#121010] via-[#121010]/70 to-[#121010] pointer-events-none" />

      {/* 3D Glass Card Banner */}
      <div
        ref={tilt.ref}
        style={tilt.style}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="holo-border-dungyov glass-dungyov rounded-3xl w-full max-w-5xl px-8 py-14 sm:px-16 sm:py-20 flex flex-col items-center text-center relative z-10"
      >
        <span className="font-mono text-xs text-[#38BDF8] tracking-[0.25em] uppercase mb-6">
          [04] INITIATE CONTACT
        </span>

        <WordsPullUpMultiStyle
          segments={[
            {
              text: "Let's build something, ",
              className: 'font-normal text-[#E6E1DF]',
            },
            {
              text: 'extraordinary ',
              className: 'font-serif italic text-[#38BDF8]',
            },
            { text: 'together.', className: 'font-normal text-[#E6E1DF]' },
          ]}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl mx-auto leading-tight mb-10"
        />

        <a
          href="mailto:vaishnu7070@gmail.com"
          className="group inline-flex items-center gap-4 bg-[#E6E1DF] hover:bg-white text-[#121010] font-semibold text-sm sm:text-base rounded-full px-8 py-4 transition-all duration-300"
        >
          <span>SAY HELLO</span>
          <div className="w-8 h-8 rounded-full bg-[#121010] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
            <ArrowRight className="w-4 h-4" />
          </div>
        </a>
      </div>
    </section>
  );
}
