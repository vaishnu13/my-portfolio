import { ThreeCanvas } from './components/ThreeCanvas';
import { Hero3D } from './components/Hero3D';
import { Skills3D } from './components/Skills3D';
import { InteractiveProjects } from './components/InteractiveProjects';
import { Experience3D } from './components/Experience3D';
import { PrismaSkills } from './components/PrismaSkills';

export default function App() {
  return (
    <div className="overflow-x-clip bg-[#121010] text-[#E6E1DF] font-sans relative selection:bg-[#a855f7]/30">
      {/* 3D WebGL Background Canvas */}
      <ThreeCanvas />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. HERO — Bold Typographic Intro & 3D Tilt */}
        <Hero3D />

        {/* 2. SELECTED CASE STUDIES */}
        <InteractiveProjects />

        {/* 3. EXPERTISE & METHODOLOGY */}
        <Skills3D />

        {/* 4. CAREER & EXPERIENCE */}
        <Experience3D />

        {/* 5. CONTACT & INITIATION */}
        <PrismaSkills />
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-[#0E0C0C] border-t border-[#E6E1DF]/10 font-mono text-xs text-[#8C8684] py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>
            &copy; 2026 Vaishnu Vindula. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/vaishnu7070"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E6E1DF] transition-colors"
            >
              GITHUB
            </a>
            <a
              href="https://linkedin.com/in/vaishnuvindula"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E6E1DF] transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href="mailto:vaishnu7070@gmail.com"
              className="hover:text-[#E6E1DF] transition-colors"
            >
              EMAIL
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
