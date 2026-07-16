import { Hero3D } from './components/Hero3D';
import { Skills3D } from './components/Skills3D';
import { InteractiveProjects } from './components/InteractiveProjects';
import { Experience3D } from './components/Experience3D';
import { PrismaSkills } from './components/PrismaSkills';

export default function App() {
  return (
    <div className="overflow-x-clip bg-[#030305] text-[#D7E2EA] font-sans">
      
      {/* 1. HERO — 3D Immersive Intro */}
      <Hero3D />

      {/* 2. SKILLS — 3D Tilt Cards */}
      <Skills3D />

      {/* 3. FEATURED WORK — Cinematic Project Showcase */}
      <InteractiveProjects />

      {/* 4. EXPERIENCE — 3D Timeline */}
      <Experience3D />

      {/* 5. CONTACT — Cinematic CTA with Video */}
      <PrismaSkills />

      {/* Footer */}
      <footer className="relative z-10 bg-[#030305] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            &copy; 2025 Vaishnu Vindula. Built with <i className="fas fa-heart text-purple-400/60"></i> and Code.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/vaishnu7070" aria-label="Github" className="text-white/30 hover:text-white transition-colors text-lg">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/vaishnuvindula" aria-label="LinkedIn" className="text-white/30 hover:text-white transition-colors text-lg">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Twitter" className="text-white/30 hover:text-white transition-colors text-lg">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
