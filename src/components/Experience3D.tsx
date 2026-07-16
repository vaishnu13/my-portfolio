import { useTilt } from '../hooks/useTilt';
import { motion } from 'framer-motion';

interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  accent: string;
  icon: string;
}

const experiences: ExperienceItem[] = [
  {
    date: 'May 2025 – June 2025',
    title: 'Full-Stack Web Development Intern',
    company: 'Visakhapatnam Steel Plant (RINL)',
    description:
      'Developed a comprehensive Mill Roll Shop Management System handling data for 50+ users. Improved accessibility by 25% through responsive design implementation.',
    tags: ['HTML/CSS', 'JavaScript', 'Oracle', 'MySQL'],
    accent: 'from-blue-500 to-cyan-500',
    icon: 'fas fa-server',
  },
  {
    date: 'June 2024 – 2025',
    title: 'Software Development Engineer Intern',
    company: 'Bluestock Fintech',
    description:
      'Maintained and enhanced bluestock.com, improving UI/UX across IPO listing and financial dashboard flows. Supported digital marketing campaigns contributing to a 15% increase in platform visibility.',
    tags: ['HTML/CSS', 'JavaScript', 'UI/UX'],
    accent: 'from-purple-500 to-violet-500',
    icon: 'fas fa-chart-line',
  },
];

function TimelineCard({ item, index }: { item: ExperienceItem; index: number }) {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt({ maxTilt: 10, scale: 1.025, perspective: 1000 });
  const isEven = index % 2 === 0;

  return (
    <div className="relative mb-16 md:mb-20">

      {/* Glowing dot */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-10 z-10">
        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${item.accent} shadow-[0_0_20px_rgba(59,130,246,0.6)]`}>
          <div className="absolute inset-0 w-5 h-5 rounded-full bg-blue-500/40 animate-ping" />
          <div className="absolute -inset-2 rounded-full bg-blue-500/10 animate-pulse" />
        </div>
      </div>

      {/* Card container */}
      <div
        className={`ml-14 md:ml-0 md:w-[calc(50%-3rem)] ${
          isEven ? 'md:mr-auto md:pr-6' : 'md:ml-auto md:pl-6'
        }`}
      >
        <motion.div
          ref={ref}
          style={style}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          initial={{ opacity: 0, x: isEven ? -70 : 70, rotateY: isEven ? -8 : 8 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="holo-border glass-deep rounded-3xl p-7 md:p-8 group cursor-default"
        >
          {/* Top row */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.accent} shrink-0`}
              style={{ boxShadow: `0 4px 20px ${index === 0 ? 'rgba(37,99,235,0.3)' : 'rgba(124,58,237,0.3)'}` }}
            >
              <i className={`${item.icon} text-sm text-white`} />
            </div>
            <span className={`text-xs font-semibold bg-gradient-to-r ${item.accent} bg-clip-text text-transparent tracking-wide`}>
              {item.date}
            </span>
          </div>

          <h3 className="text-lg font-bold text-white leading-snug mb-1">
            {item.title}
          </h3>
          <p className="text-sm text-purple-300/60 mb-4 font-light">{item.company}</p>
          <p className="text-white/45 text-sm leading-relaxed mb-5">
            {item.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-white/[0.05] border border-white/[0.08] text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Hover glow */}
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none`} />
        </motion.div>
      </div>
    </div>
  );
}

export function Experience3D() {
  return (
    <section
      id="experience"
      className="relative py-36 px-4 sm:px-8 bg-[#030305] overflow-hidden"
    >
      {/* Orbs */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-xs tracking-[0.25em] uppercase text-purple-400/50 mb-4"
      >
        Journey
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="gradient-text text-5xl md:text-6xl font-bold mb-20 text-center"
      >
        Experience
      </motion.h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Glowing center line */}
        <div
          className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-[2px] h-full rounded-full pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(37,99,235,0.9) 0%, rgba(124,58,237,0.5) 50%, rgba(6,182,212,0.3) 80%, transparent 100%)',
            boxShadow: '0 0 16px rgba(37,99,235,0.4), 0 0 40px rgba(37,99,235,0.1)',
          }}
          aria-hidden="true"
        />

        {experiences.map((item, index) => (
          <TimelineCard key={item.company} item={item} index={index} />
        ))}
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
