// no hooks needed
import { motion, AnimatePresence } from 'framer-motion';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const links = [
    { label: 'works', href: '#works' },
    { label: 'about', href: '#about' },
    { label: 'contact', href: '#contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="menu"
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#121212] flex flex-col p-8"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {/* Close */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-white text-[11px] tracking-widest uppercase flex items-center gap-2 cursor-pointer hover:opacity-60 transition-opacity"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              CLOSE ✕
            </button>
          </div>

          {/* Nav links */}
          <div className="flex-1 flex flex-col justify-center gap-4">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                onClick={onClose}
                className="text-white hover:opacity-50 transition-opacity"
                style={{
                  fontSize: 'clamp(3rem, 10vw, 8rem)',
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Bottom social */}
          <div
            className="flex gap-6 text-white/50 text-[11px] uppercase"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            <a href="https://linkedin.com/in/vaishnuvindula" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/vaishnuvindula" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="mailto:vaishnuvindula@gmail.com" className="hover:text-white transition-colors">Email</a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
