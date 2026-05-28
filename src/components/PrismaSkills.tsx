import { WordsPullUpMultiStyle } from './PrismaComponents';

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
            { text: "POWERED BY VAISHNU", className: "text-[#E1E0CC]" }
          ]}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 uppercase"
        />
      </div>
    </section>
  );
}
