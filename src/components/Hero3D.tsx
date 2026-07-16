import { useViewportTilt } from '../hooks/useTilt';
import { FadeIn } from './FadeIn';
import { ContactButton } from './Buttons';

export function Hero3D() {
  const { tilt, onMouseMove, onMouseLeave } = useViewportTilt(6);

  return (
    <section
      className="relative min-h-screen bg-[#030305] overflow-hidden flex flex-col"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* ── GLOWING GRID FLOOR ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[55%] grid-floor pointer-events-none" />

      {/* ── AURORA RINGS ── */}
      <div
        className="aurora-ring absolute w-[600px] h-[600px] -top-64 -left-64 opacity-30"
        style={{ borderWidth: '1px' }}
      />
      <div
        className="aurora-ring absolute w-[400px] h-[400px] -bottom-40 -right-40 opacity-20"
        style={{ borderWidth: '1px', animationDirection: 'reverse', animationDuration: '18s' }}
      />

      {/* ── FLOATING ORBS ── */}
      <div className="orb w-[500px] h-[500px] bg-blue-600/40 top-[-8%] left-[-5%]"
        style={{ animation: 'float-slow 9s ease-in-out infinite' }} />
      <div className="orb w-[350px] h-[350px] bg-purple-600/30 bottom-[10%] right-[-5%]"
        style={{ animation: 'float-medium 11s ease-in-out infinite' }} />
      <div className="orb w-[250px] h-[250px] bg-cyan-500/25 top-[35%] right-[20%]"
        style={{ animation: 'float-slow 13s ease-in-out infinite alternate' }} />
      <div className="orb w-[180px] h-[180px] bg-violet-500/20 top-[60%] left-[15%]"
        style={{ animation: 'float-fast 7s ease-in-out infinite' }} />

      {/* ── STAR FIELD ── */}
      <div className="absolute inset-0 star-field pointer-events-none" />

      {/* ── SCAN LINE ── */}
      <div className="absolute inset-0 scan-line pointer-events-none opacity-40" />

      {/* ── NOISE ── */}
      <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none mix-blend-overlay" />

      {/* ── 3D TILT WRAPPER ── */}
      <div
        className="relative z-20 flex flex-col flex-1 px-6 sm:px-10 md:px-16 lg:px-24"
        style={{
          transform: `perspective(1400px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: 'transform 500ms cubic-bezier(0.03, 0.98, 0.52, 0.99)',
          willChange: 'transform',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Navigation */}
        <FadeIn delay={0} y={-25}>
          <nav className="flex items-center justify-between py-7 text-white/50 text-sm font-light tracking-[0.18em] uppercase">
            <span className="text-white/80 font-bold tracking-widest text-xs">VV</span>
            <div className="flex gap-10">
              {['Work', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </nav>
        </FadeIn>

        {/* Center content */}
        <div className="flex-1 flex flex-col items-center justify-center -mt-8 relative">

          {/* Subtle badge */}
          <FadeIn delay={0.08}>
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-blue-200/70 tracking-widest uppercase font-light">Full Stack Developer & AI Engineer</span>
            </div>
          </FadeIn>

          {/* MASSIVE 3D HEADING */}
          <FadeIn delay={0.15}>
            <h1
              className="text-3d font-black uppercase tracking-tight leading-none whitespace-nowrap select-none text-[12vw] sm:text-[13vw] md:text-[14.5vw] lg:text-[16vw]"
              style={{ transform: 'translateZ(60px)', transformStyle: 'preserve-3d' }}
            >
              I'M VAISHNU
            </h1>
          </FadeIn>

          {/* Sub-line */}
          <FadeIn delay={0.28}>
            <p className="mt-6 text-center text-white/30 text-sm sm:text-base font-light tracking-[0.25em] uppercase">
              Crafting Scalable &amp; Unforgettable Digital Experiences
            </p>
          </FadeIn>

          {/* Scrolling marquee of tags */}
          <FadeIn delay={0.38}>
            <div className="mt-8 overflow-hidden w-[min(700px,90vw)]">
              <div className="flex gap-3 whitespace-nowrap"
                style={{ animation: 'marquee 20s linear infinite' }}>
                {['React', 'Next.js', 'TypeScript', 'Python', 'Node.js', 'AI/ML', 'LLMs', 'AWS', 'PostgreSQL', 'React', 'Next.js', 'TypeScript', 'Python', 'Node.js', 'AI/ML', 'LLMs', 'AWS', 'PostgreSQL'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/[0.03] text-white/40 shrink-0">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom row */}
        <div className="flex items-end justify-between pb-12 gap-6 relative z-10">
          <FadeIn delay={0.5}>
            <div className="flex flex-col gap-2">
              <p className="text-white/25 text-xs tracking-widest uppercase">Based in India</p>
              <p className="max-w-[220px] text-white/50 text-xs leading-relaxed font-light">
                Building tomorrow's web, today — full stack to AI-powered.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.6}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030305] to-transparent pointer-events-none" />
    </section>
  );
}
