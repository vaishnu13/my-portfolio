import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Maps scroll position to a 0-1 progress value.
 * The page has a tall scrollHeight (set via CSS) and this hook
 * converts the user's scroll position to a normalized progress.
 * 
 * Also provides per-section opacity calculators.
 */
export function useSpaceScroll() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const p = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
        setProgress(p);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /**
   * Calculate opacity for a section based on its entry and exit scroll ranges.
   * fadeIn:  opacity goes from 0 to 1 between `start` and `start + fadeDuration`
   * fadeOut: opacity goes from 1 to 0 between `end - fadeDuration` and `end`
   */
  const sectionOpacity = useCallback(
    (start: number, end: number, fadeDuration = 0.04) => {
      if (progress < start || progress > end) return 0;

      // Fade in
      if (progress < start + fadeDuration) {
        return (progress - start) / fadeDuration;
      }
      // Fade out
      if (progress > end - fadeDuration) {
        return (end - progress) / fadeDuration;
      }
      return 1;
    },
    [progress]
  );

  return { progress, sectionOpacity };
}
