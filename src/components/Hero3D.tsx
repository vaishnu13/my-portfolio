import { useViewportTilt } from '../hooks/useTilt';
import { FadeIn } from './FadeIn';
import { ContactButton } from './Buttons';
import { Magnet } from './Magnet';

export function Hero3D() {
  const { tilt, onMouseMove, onMouseLeave } = useViewportTilt(8);

  return (
    <section
      className="relative min-h-screen bg-[#050505] overflow-hidden"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Background floating orbs */}
      <div className="orb absolute w-[400px] h-[400px] rounded-full bg-blue-500/30 blur-3xl top-[10%] left-[5%]" style={{ animation: 'float-slow 8s ease-in-out infinite' }} />
      <div className="orb absolute w-[300px] h-[300px] rounded-full bg-purple-500/20 blur-3xl bottom-[15%] right-[10%]" style={{ animation: 'float-medium 10s ease-in-out infinite' }} />
      <div className="orb absolute w-[200px] h-[200px] rounded-full bg-cyan-500/20 blur-3xl top-[40%] right-[25%]" style={{ animation: 'float-slow 12s ease-in-out infinite alternate' }} />

      {/* Star field overlay */}
      <div className="absolute inset-0 star-field pointer-events-none" />

      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      {/* 3D tilt wrapper */}
      <div
        className="relative z-20 flex flex-col min-h-screen px-6 sm:px-10 md:px-16 lg:px-20"
        style={{
          transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: 'transform 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99)',
          willChange: 'transform',
        }}
      >
        {/* Navigation */}
        <FadeIn delay={0} y={-20}>
          <nav className="flex items-center justify-between py-6 text-white/70 text-sm tracking-wide">
            <a href="#" className="hover:text-white transition-colors duration-300">
              Home
            </a>
            <a href="#work" className="hover:text-white transition-colors duration-300">
              Work
            </a>
            <a href="#experience" className="hover:text-white transition-colors duration-300">
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors duration-300">
              Contact
            </a>
          </nav>
        </FadeIn>

        {/* Center content — massive heading */}
        <div className="flex-1 flex items-center justify-center">
          <FadeIn delay={0.15}>
            <h1 className="text-3d font-black uppercase tracking-tight text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] leading-none whitespace-nowrap text-white">
              I'M VAISHNU
            </h1>
          </FadeIn>
        </div>

        {/* Bottom row: tagline left, contact button right */}
        <div className="flex items-end justify-between pb-10 gap-6">
          {/* Bottom left tagline */}
          <FadeIn delay={0.35}>
            <p className="max-w-xs text-white/60 text-sm leading-relaxed">
              a full stack developer driven by crafting scalable and unforgettable digital experiences
            </p>
          </FadeIn>

          {/* Bottom right contact button */}
          <FadeIn delay={0.5}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>

      {/* Center profile image */}
      <FadeIn delay={0.6}>
        <Magnet>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Vaishnu Vindula"
            className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
          />
        </Magnet>
      </FadeIn>
    </section>
  );
}
