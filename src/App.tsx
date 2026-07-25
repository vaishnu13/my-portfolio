import { ThreeCanvas } from './components/ThreeCanvas';
import { SpaceHero } from './components/SpaceHero';
import { SpacePitch } from './components/SpacePitch';
import { SpaceWork } from './components/SpaceWork';
import { SpaceAbout } from './components/SpaceAbout';
import { SpaceContact } from './components/SpaceContact';
import { useSpaceScroll } from './hooks/useSpaceScroll';

/**
 * Space-flight architecture:
 * - The page has 800vh of scroll height (the "scroll runway")
 * - The viewport is fixed — nothing scrolls visually
 * - Scroll progress (0-1) drives the Three.js camera forward through stars
 * - Each content section is a fixed overlay with opacity controlled by scroll range
 * 
 * Section scroll ranges:
 *   Hero:    0.00 – 0.18  (visible at start, fades out as you fly)
 *   Pitch:   0.15 – 0.33  (appears mid-flight)
 *   Work:    0.30 – 0.52  (projects float in)
 *   About:   0.50 – 0.73  (about me section)
 *   Contact: 0.70 – 1.00  (final destination)
 */
export default function App() {
  const { progress, sectionOpacity } = useSpaceScroll();

  // Calculate opacity for each section with overlapping fade zones
  const heroOpacity    = sectionOpacity(0.00, 0.18, 0.03);
  const pitchOpacity   = sectionOpacity(0.15, 0.33, 0.04);
  const workOpacity    = sectionOpacity(0.30, 0.52, 0.04);
  const aboutOpacity   = sectionOpacity(0.50, 0.73, 0.04);
  const contactOpacity = sectionOpacity(0.70, 1.00, 0.04);

  return (
    <>
      {/* Scroll runway — creates the scroll height but is invisible */}
      <div style={{ height: '800vh' }} aria-hidden="true" />

      {/* 3D WebGL star field — camera flies forward based on scroll */}
      <ThreeCanvas scrollProgress={progress} />

      {/* Fixed overlay sections — one at a time */}
      <SpaceHero opacity={heroOpacity} />
      <SpacePitch opacity={pitchOpacity} />
      <SpaceWork opacity={workOpacity} />
      <SpaceAbout opacity={aboutOpacity} />
      <SpaceContact opacity={contactOpacity} />

      {/* Scroll progress indicator */}
      <div
        className="fixed bottom-6 right-6 z-50 font-mono text-[10px] text-[#8C8684]/60"
        style={{ opacity: progress > 0.02 && progress < 0.98 ? 0.6 : 0 }}
      >
        {Math.round(progress * 100)}%
      </div>
    </>
  );
}
