import { motion } from 'framer-motion';
import { useTilt } from '../hooks/useTilt';

interface CardData {
  icon: string;
  accent: string;
  title: string;
  description: string;
  tags: string[];
  stats: { label: string; value: string }[];
}

const cards: CardData[] = [
  {
    icon: 'fas fa-code',
    accent: 'from-blue-500 to-cyan-500',
    title: 'Full Stack Development',
    description:
      'Engineering scalable web applications end-to-end — from pixel-perfect UIs to robust cloud backends.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'AWS'],
    stats: [
      { label: 'Projects', value: '10+' },
      { label: 'Years Exp', value: '2+' },
    ],
  },
  {
    icon: 'fas fa-brain',
    accent: 'from-purple-500 to-violet-500',
    title: 'AI & Machine Learning',
    description:
      'Harnessing LLMs, neural networks, and intelligent automation to build next-generation software.',
    tags: ['TensorFlow', 'LLMs', 'NLP', 'Computer Vision', 'RAG', 'Prompt Eng.'],
    stats: [
      { label: 'Models Used', value: '8+' },
      { label: 'AI Apps', value: '5+' },
    ],
  },
];

function TiltCard({ card, index }: { card: CardData; index: number }) {
  const tiltProps = useTilt({ maxTilt: 14, scale: 1.04, perspective: 900 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        ref={tiltProps.ref}
        style={tiltProps.style}
        onMouseMove={tiltProps.onMouseMove}
        onMouseLeave={tiltProps.onMouseLeave}
        className="holo-border glass-deep rounded-3xl p-8 md:p-10 group cursor-default h-full"
      >
        {/* Icon with gradient glow */}
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${card.accent} mb-6 shadow-lg`}
          style={{ boxShadow: `0 8px 32px ${index === 0 ? 'rgba(37,99,235,0.35)' : 'rgba(124,58,237,0.35)'}` }}
        >
          <i className={`${card.icon} text-xl text-white`} />
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          {card.title}
        </h3>
        <p className="text-white/50 leading-relaxed mb-7 text-sm">
          {card.description}
        </p>

        {/* Stats row */}
        <div className="flex gap-6 mb-7 pb-6 border-b border-white/[0.06]">
          {card.stats.map((s) => (
            <div key={s.label}>
              <p className={`text-2xl font-bold bg-gradient-to-r ${card.accent} bg-clip-text text-transparent`}>
                {s.value}
              </p>
              <p className="text-white/30 text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-white/[0.05] border border-white/[0.08] text-white/50 hover:text-white/80 hover:border-white/20 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover glow overlay */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none`} />
      </div>
    </motion.div>
  );
}

export function Skills3D() {
  return (
    <section
      id="about"
      className="relative py-36 px-4 sm:px-8 bg-[#030305] overflow-hidden"
    >
      {/* Orbs */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-600/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-purple-600/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-xs tracking-[0.25em] uppercase text-blue-400/50 mb-4"
      >
        Expertise
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="gradient-text text-5xl md:text-6xl font-bold mb-16 text-center"
      >
        What I Do
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <TiltCard key={card.title} card={card} index={index} />
        ))}
      </div>

      {/* Horizontal divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
