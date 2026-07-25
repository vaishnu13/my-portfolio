import { useViewportTilt } from '../hooks/useTilt';
import { FadeIn } from './FadeIn';

export function Hero3D() {
  const { tilt, onMouseMove, onMouseLeave } = useViewportTilt(6);

  return (
    <section
      className="relative min-h-screen bg-[#121010] overflow-hidden flex flex-col justify-between"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Glowing 3D Grid Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] grid-floor pointer-events-none z-0" />

      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay z-0" />

      {/* Star field */}
      <div className="absolute inset-0 star-field pointer-events-none z-0 opacity-60" />

      {/* 3D TILT WRAPPER */}
      <div
        className="relative z-10 flex flex-col flex-1 px-6 sm:px-12 md:px-20 lg:px-28"
        style={{
          transform: `perspective(1400px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: 'transform 500ms cubic-bezier(0.03, 0.98, 0.52, 0.99)',
          willChange: 'transform',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Navigation Bar (Dungyov Style) */}
        <FadeIn delay={0} y={-20}>
          <nav className="flex items-center justify-between py-8 border-b border-[#E6E1DF]/10 font-mono text-xs tracking-wider">
            <a href="#" className="flex items-center gap-3 group">
              <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] group-hover:scale-125 transition-transform" />
              <span className="text-[#E6E1DF] font-semibold text-sm tracking-widest uppercase">
                VAISHNU VINDULA
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8 text-[#8C8684]">
              <a href="#work" className="hover:text-[#E6E1DF] transition-colors">
                <span className="text-[#38BDF8] font-bold mr-1.5">[01]</span> WORK
              </a>
              <a href="#about" className="hover:text-[#E6E1DF] transition-colors">
                <span className="text-[#38BDF8] font-bold mr-1.5">[02]</span> EXPERTISE
              </a>
              <a href="#experience" className="hover:text-[#E6E1DF] transition-colors">
                <span className="text-[#38BDF8] font-bold mr-1.5">[03]</span> EXPERIENCE
              </a>
              <a href="#contact" className="hover:text-[#E6E1DF] transition-colors">
                <span className="text-[#38BDF8] font-bold mr-1.5">[04]</span> CONTACT
              </a>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[11px] text-[#38BDF8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
              <span>AVAILABLE FOR NEW PROJECTS</span>
            </div>
          </nav>
        </FadeIn>

        {/* Center Content — Bold Typographic Statement */}
        <div className="flex-1 flex flex-col items-center justify-center my-12 text-center">

          {/* Subtitle Label */}
          <FadeIn delay={0.1}>
            <p className="text-xs font-mono tracking-[0.3em] text-[#8C8684] uppercase mb-4">
              [PRODUCT ENGINEER &amp; AI ARCHITECT]
            </p>
          </FadeIn>

          {/* Main 3D Title */}
          <FadeIn delay={0.2}>
            <h1
              className="text-dungyov-3d font-black uppercase tracking-tight leading-none text-[11vw] sm:text-[12vw] md:text-[13.5vw] lg:text-[15vw] select-none"
              style={{ transform: 'translateZ(50px)' }}
            >
              VAISHNU
            </h1>
          </FadeIn>

          {/* Tagline */}
          <FadeIn delay={0.3}>
            <p className="mt-6 max-w-xl text-[#8C8684] text-sm sm:text-base font-light tracking-wide leading-relaxed">
              Architecting high-scale web platforms, AI-driven workflows, and intuitive digital products designed for growth.
            </p>
          </FadeIn>

          {/* Interactive Marquee */}
          <FadeIn delay={0.4} className="w-full mt-10 overflow-hidden">
            <div className="flex gap-4 whitespace-nowrap opacity-40 hover:opacity-80 transition-opacity" style={{ animation: 'marquee 22s linear infinite' }}>
              {['Full Stack Systems', 'AI & Neural Networks', 'LLM Automation', 'React / Next.js', 'Python & PyTorch', 'Cloud Infrastructure', 'RAG Pipelines', 'Full Stack Systems', 'AI & Neural Networks', 'LLM Automation', 'React / Next.js', 'Python & PyTorch', 'Cloud Infrastructure'].map((item, idx) => (
                <span key={idx} className="px-3.5 py-1 text-xs font-mono rounded-full border border-[#E6E1DF]/15 bg-white/[0.02] text-[#E6E1DF]">
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Bottom Metadata Bar */}
        <FadeIn delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-between pb-8 pt-4 border-t border-[#E6E1DF]/10 text-xs font-mono text-[#8C8684] gap-4">
            <div className="flex items-center gap-6">
              <span>LOCATION: INDIA</span>
              <span>•</span>
              <span>FOCUS: AI &amp; SCALABLE WEB</span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#E6E1DF] text-[#121010] font-semibold hover:bg-white transition-colors"
            >
              <span>GET IN TOUCH</span>
              <span>→</span>
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Subtle bottom shadow transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#121010] to-transparent pointer-events-none z-10" />
    </section>
  );
}
