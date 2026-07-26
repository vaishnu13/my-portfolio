import { motion } from 'framer-motion';

const projects = [
  {
    id: '01',
    name: 'CodeXVerse',
    tagline: 'A real-time collaborative code editor with AI.',
    link: 'https://codexverse-eight.vercel.app',
    year: '2025',
  },
  {
    id: '02',
    name: 'Prompt Pilot',
    tagline: 'AI prompt engineering suite & visual workflow.',
    link: 'https://github.com/vaishnuvindula',
    year: '2025',
  },
  {
    id: '03',
    name: 'Prisma Metrics',
    tagline: 'High-throughput analytics & telemetry dashboard.',
    link: 'https://github.com/vaishnuvindula',
    year: '2024',
  },
  {
    id: '04',
    name: 'Antigravity Agents',
    tagline: 'Autonomous multi-agent orchestration engine.',
    link: 'https://github.com/vaishnuvindula',
    year: '2026',
  },
];

export function Works() {
  return (
    <section id="works" className="bg-white py-24 px-6 md:px-12 border-t border-[#121212]/10">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* WORKS big word — exactly like noth.in */}
        <div>
          <span
            className="text-[#121212] text-[11px] tracking-widest uppercase block mb-4"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            ( Selected Projects )
          </span>
          <div
            className="flex gap-2 md:gap-4 overflow-hidden"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {'WORKS'.split('').map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.33, 1, 0.68, 1] }}
                className="text-[#121212] inline-block"
                style={{
                  fontSize: 'clamp(4rem, 14vw, 12rem)',
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <h3
          className="text-[#121212] max-w-2xl leading-snug"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
            letterSpacing: '-0.02em',
          }}
        >
          Good developers communicate.<br />
          Great products surprise.
        </h3>

        {/* Project list — noth.in style rows */}
        <div>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-t border-[#121212]/10 hover:bg-[#f5f5f5] -mx-4 px-4 transition-colors duration-200"
              >
                {/* Left: number + name + tagline */}
                <div className="flex items-start md:items-center gap-6">
                  <span
                    className="text-[#121212]/30 text-[11px] pt-1"
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {project.id}
                  </span>
                  <div>
                    <h4
                      className="text-[#121212] group-hover:translate-x-1 transition-transform duration-200"
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 800,
                        fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                        letterSpacing: '-0.03em',
                        lineHeight: 1,
                      }}
                    >
                      {project.name}
                    </h4>
                    <p
                      className="text-[#121212]/50 mt-1"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem' }}
                    >
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Right: year + arrow */}
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <span
                    className="text-[#121212]/30 text-[11px]"
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {project.year}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#121212]/20 flex items-center justify-center group-hover:bg-[#121212] group-hover:text-white transition-all duration-200">
                    <span className="text-xs rotate-[-45deg] inline-block">→</span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
          {/* Last border */}
          <div className="border-t border-[#121212]/10" />
        </div>
      </div>
    </section>
  );
}
