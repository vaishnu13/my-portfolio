import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-[#0D0D0D]/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo / Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center font-mono text-xs font-bold group-hover:bg-white group-hover:text-black transition-colors duration-300">
            VV
          </span>
          <span className="font-heading font-bold text-sm tracking-wider uppercase text-[#F3F1EC]">
            VAISHNU VINDULA
          </span>
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-[#8E8D8A]">
          <button
            onClick={() => scrollTo('works')}
            className="hover:text-white transition-colors duration-200 uppercase cursor-pointer"
          >
            // WORKS
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-white transition-colors duration-200 uppercase cursor-pointer"
          >
            // ABOUT
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-white transition-colors duration-200 uppercase cursor-pointer"
          >
            // CONTACT
          </button>
        </div>

        {/* CTA Button */}
        <a
          href="mailto:vaishnuvindula@gmail.com"
          className="btn-editorial text-xs cursor-pointer"
        >
          <span>GET IN TOUCH</span>
          <span className="text-xs">↗</span>
        </a>
      </div>
    </motion.nav>
  );
}
