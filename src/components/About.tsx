import { motion } from 'framer-motion';

const services = [
  'Full-Stack Web Applications',
  'AI & LLM Integration',
  'Real-time Collaborative Systems',
  'Performance Architecture',
  'Visual Interface Design',
];

export function About() {
  return (
    <section id="about" className="bg-white py-24 px-6 md:px-12 border-t border-[#121212]/10">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <span
          className="text-[#121212] text-[11px] tracking-widest uppercase block mb-12"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
          ( The Developer )
        </span>

        {/* Grid: large text + info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Left: statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-[#121212] leading-tight mb-8"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                letterSpacing: '-0.03em',
              }}
            >
              We called it engineering because it started as a system open enough to become
              anything: a product, a platform, a perspective...
            </p>
          </motion.div>

          {/* Right: bio + services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            <p
              className="text-[#121212]/60 leading-relaxed"
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.85rem' }}
            >
              I am Vaishnu Vindula — a full-stack engineer and AI builder based in Hyderabad.
              I specialize in turning complex technical challenges into intuitive, fast,
              and visually sharp web products.
            </p>

            <div>
              <h4
                className="text-[#121212] text-[11px] tracking-widest uppercase mb-4"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                I build :
              </h4>
              <ul className="space-y-3">
                {services.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                    className="flex items-center gap-3"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.82rem' }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#121212] flex-shrink-0" />
                    {s}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bold bottom statement */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[#121212] border-t border-[#121212]/10 pt-12"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2.5rem, 7vw, 6rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          Code follows<br />perspective.
        </motion.h3>
      </div>
    </section>
  );
}
