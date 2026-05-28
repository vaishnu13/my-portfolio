import { Magnet } from './components/Magnet';
import { FadeIn } from './components/FadeIn';
import { ContactButton } from './components/Buttons';
import { PreviousSections } from './components/PreviousSections';
export default function App() {
  return (
    <div className="overflow-x-clip bg-[#0C0C0C] text-[#D7E2EA] font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="h-screen flex flex-col relative overflow-x-clip">
        <FadeIn delay={0} y={-20} duration={0.8}>
          <nav className="flex justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
            {["Home", "Projects", "Experience", "Contact"].map((item) => (
              <a key={item} href={item === "Home" ? "#" : `#${item.toLowerCase()}`} className="hover:opacity-70 transition-opacity duration-200">
                {item}
              </a>
            ))}
          </nav>
        </FadeIn>

        <div className="flex-1 flex flex-col justify-center overflow-hidden">
          <FadeIn delay={0.15} y={40} className="w-full mt-6 sm:mt-4 md:-mt-5">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
              i&apos;m vaishnu
            </h1>
          </FadeIn>
        </div>

        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
          <FadeIn delay={0.35} y={20}>
            <p className="font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.75rem,1.4vw,1.5rem)] text-[#D7E2EA]">
              a full stack developer driven by crafting scalable and unforgettable digital experiences
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>

        <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
          <Magnet>
            <img 
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
              alt="Portrait" 
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] object-contain pointer-events-none"
            />
          </Magnet>
        </FadeIn>
      </section>

      <div className="bg-black h-32 md:h-64 w-full z-20 relative"></div>
      {/* 3. PREVIOUS SECTIONS */}
      <PreviousSections />
    </div>
  );
}


