import { motion } from 'framer-motion';
import { useTilt } from '../hooks/useTilt';

interface ExpertiseItem {
  number: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
}

const expertiseData: ExpertiseItem[] = [
  {
    number: '01',
    icon: 'fas fa-code',
    title: 'Full-Stack Systems Architecture',
    subtitle: 'Scalable Web Platforms & APIs',
    description:
      'Designing and building high-performance web applications using modern React, Next.js, Node.js, and cloud backends. Focused on UI clarity, speed, and resilient architecture.',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'MySQL'],
    metrics: [
      { label: 'Active Users Served', value: '50+' },
      { label: 'UI Speed Boost', value: '+25%' },
    ],
  },
  {
    number: '02',
    icon: 'fas fa-brain',
    title: 'AI & Intelligent Engineering',
    subtitle: 'LLM Pipelines & RAG Systems',
    description:
      'Building custom AI prompt engines, retrieval-augmented generation (RAG) models, and neural workflow automation tools that turn complex data into actionable intelligence.',
    tags: ['LLMs', 'Prompt Engineering', 'RAG Pipelines', 'NLP', 'TensorFlow', 'Python'],
    metrics: [
      { label: 'Production Models', value: '8+' },
      { label: 'AI Solutions', value: '5+' },
    ],
  },
];

function ExpertiseCard({ item, index }: { item: ExpertiseItem; index: number }) {
  const tiltProps = useTilt({ maxTilt: 10, scale: 1.03, perspective: 900 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        ref={tiltProps.ref}
        style={tiltProps.style}
        onMouseMove={tiltProps.onMouseMove}
        onMouseLeave={tiltProps.onMouseLeave}
        className="holo-border-dungyov glass-dungyov rounded-3xl p-8 md:p-10 relative flex flex-col justify-between h-full group"
      >
        <div>
          {/* Top Row: Number & Icon */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-sm text-[#38BDF8] font-bold tracking-widest">
              [{item.number}]
            </span>
            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-[#E6E1DF]/10 flex items-center justify-center text-[#E6E1DF] text-sm group-hover:border-[#38BDF8]/40 transition-colors">
              <i className={item.icon} />
            </div>
          </div>

          <p className="text-xs font-mono text-[#8C8684] uppercase tracking-wider mb-2">
            {item.subtitle}
          </p>
          <h3 className="text-2xl font-bold text-[#E6E1DF] mb-4">
            {item.title}
          </h3>
          <p className="text-sm text-[#8C8684] leading-relaxed mb-8">
            {item.description}
          </p>
        </div>

        <div>
          {/* Metrics Row */}
          <div className="grid grid-cols-2 gap-4 py-4 mb-6 border-y border-[#E6E1DF]/10 font-mono">
            {item.metrics.map((m) => (
              <div key={m.label}>
                <span className="text-xl font-bold text-[#E6E1DF] block">
                  {m.value}
                </span>
                <span className="text-[11px] text-[#8C8684] uppercase">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Tags Row */}
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[11px] font-mono rounded-full bg-white/[0.02] border border-[#E6E1DF]/10 text-[#8C8684] group-hover:text-[#E6E1DF] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Skills3D() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 sm:px-12 md:px-20 lg:px-28 bg-[#121010] z-10"
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-[#38BDF8] tracking-widest uppercase mb-3"
        >
          [02] EXPERTISE &amp; CAPABILITIES
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-[#E6E1DF] uppercase tracking-tight"
        >
          CORE DOMAINS
        </motion.h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {expertiseData.map((item, index) => (
          <ExpertiseCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
