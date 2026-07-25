import { useTilt } from '../hooks/useTilt';
import { motion } from 'framer-motion';

interface ExperienceItem {
  number: string;
  date: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    number: '01',
    date: 'MAY 2025 — JUNE 2025',
    title: 'Full-Stack Web Development Intern',
    company: 'Visakhapatnam Steel Plant (RINL)',
    description:
      'Developed a comprehensive Mill Roll Shop Management System handling data for 50+ users. Improved accessibility by 25% through responsive design implementation.',
    tags: ['HTML/CSS', 'JavaScript', 'Oracle', 'MySQL'],
  },
  {
    number: '02',
    date: 'JUNE 2024 — 2025',
    title: 'Software Development Engineer Intern',
    company: 'Bluestock Fintech',
    description:
      'Maintained and enhanced www.bluestock.com, improving UI/UX across IPO listing and financial dashboard flows. Supported digital marketing campaigns contributing to a 15% increase in platform visibility.',
    tags: ['HTML/CSS', 'JavaScript', 'UI/UX'],
  },
];

function TimelineCard({ item, index }: { item: ExperienceItem; index: number }) {
  const tiltProps = useTilt({ maxTilt: 8, scale: 1.02, perspective: 1000 });
  const isEven = index % 2 === 0;

  return (
    <div className="relative mb-16 md:mb-20">
      {/* Node Marker */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-8 z-10">
        <div className="w-4 h-4 rounded-full bg-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.8)] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#121010]" />
        </div>
      </div>

      {/* Card */}
      <div
        className={`ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] ${
          isEven ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'
        }`}
      >
        <motion.div
          ref={tiltProps.ref}
          style={tiltProps.style}
          onMouseMove={tiltProps.onMouseMove}
          onMouseLeave={tiltProps.onMouseLeave}
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="holo-border-dungyov glass-dungyov rounded-3xl p-7 md:p-8"
        >
          <div className="flex items-center justify-between font-mono text-xs text-[#8C8684] mb-3">
            <span className="text-[#38BDF8] font-bold">[{item.number}]</span>
            <span className="tracking-widest">{item.date}</span>
          </div>

          <h3 className="text-xl font-bold text-[#E6E1DF] mb-1">
            {item.title}
          </h3>
          <p className="text-sm font-mono text-[#a855f7] mb-4">{item.company}</p>

          <p className="text-sm text-[#8C8684] leading-relaxed mb-6">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[11px] font-mono rounded-full bg-white/[0.02] border border-[#E6E1DF]/10 text-[#8C8684]"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Experience3D() {
  return (
    <section
      id="experience"
      className="relative py-32 px-6 sm:px-12 md:px-20 lg:px-28 bg-[#121010] z-10"
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-[#38BDF8] tracking-widest uppercase mb-3"
        >
          [03] CAREER TRAJECTORY
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-[#E6E1DF] uppercase tracking-tight"
        >
          EXPERIENCE
        </motion.h2>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Center Line */}
        <div
          className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-[#38BDF8] via-[#a855f7] to-transparent opacity-40"
          aria-hidden="true"
        />

        {experiences.map((item, index) => (
          <TimelineCard key={item.company} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
