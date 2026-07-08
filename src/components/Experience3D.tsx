import { useTilt } from '../hooks/useTilt';
import { motion } from 'framer-motion';

interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    date: 'May 2025 - June 2025',
    title: 'Full-Stack Web Development Intern',
    company: 'Visakhapatnam Steel Plant (RINL)',
    description:
      'Developed a comprehensive Mill Roll Shop Management System handling data for 50+ users. Improved accessibility by 25% through responsive design implementation.',
    tags: ['HTML/CSS', 'JavaScript', 'Oracle', 'MySQL'],
  },
  {
    date: 'June 2024 - 2025',
    title: 'Software Development Engineer (SDE) Intern',
    company: 'Bluestock Fintech',
    description:
      'Maintained and enhanced www.bluestock.com, improving UI/UX across IPO listing and financial dashboard flows. Supported digital marketing campaigns contributing to a 15% increase in platform visibility.',
    tags: ['HTML/CSS', 'JavaScript', 'UI/UX'],
  },
];

function TimelineCard({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  const { ref, style } = useTilt({ maxTilt: 10, scale: 1.02 });
  const isEven = index % 2 === 0;

  return (
    <div className="relative mb-12 md:mb-16">
      {/* Glowing dot on the timeline line */}
      <div
        className="absolute left-4 md:left-1/2 -translate-x-1/2 top-8 z-10"
        aria-hidden="true"
      >
        <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.7)]">
          <div className="absolute inset-0 w-4 h-4 rounded-full bg-blue-500 animate-ping opacity-30" />
        </div>
      </div>

      {/* Card */}
      <div
        className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
          isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
        }`}
      >
        <motion.div
          ref={ref}
          style={style}
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="holo-border rounded-2xl p-6 md:p-8 bg-white/[0.03] backdrop-blur-xl border border-white/10"
        >
          <span className="text-sm text-blue-400/80 font-medium">
            {item.date}
          </span>
          <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
          <p className="text-purple-300/70 text-sm mt-1">{item.company}</p>
          <p className="text-white/50 text-sm mt-4 leading-relaxed">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/60"
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
      className="relative py-32 px-4 sm:px-8 bg-[#050505] overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-20 text-center"
      >
        Experience
      </motion.h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Center timeline line */}
        <div
          className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-[2px] h-full"
          style={{
            background:
              'linear-gradient(180deg, rgba(37, 99, 235, 0.8), rgba(124, 58, 237, 0.3), transparent)',
            boxShadow: '0 0 12px rgba(37, 99, 235, 0.5)',
          }}
          aria-hidden="true"
        />

        {experiences.map((item, index) => (
          <TimelineCard key={item.company} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
