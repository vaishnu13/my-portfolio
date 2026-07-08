import { motion } from 'framer-motion';
import { useTilt } from '../hooks/useTilt';

interface CardData {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

function TiltCard({ card, index }: { card: CardData; index: number }) {
  const tiltProps = useTilt({ maxTilt: 12, scale: 1.03 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div
        ref={tiltProps.ref}
        style={tiltProps.style}
        onMouseMove={tiltProps.onMouseMove}
        onMouseLeave={tiltProps.onMouseLeave}
        className="holo-border rounded-2xl p-8 md:p-10 bg-white/[0.03] backdrop-blur-xl border border-white/10"
      >
        <i className={`${card.icon} text-3xl mb-4 text-blue-400 block`} />
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          {card.title}
        </h3>
        <p className="text-white/60 leading-relaxed mb-6">
          {card.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const cards: CardData[] = [
  {
    icon: 'fas fa-code',
    title: 'Full Stack Development',
    description:
      'Building scalable web applications with modern frameworks, cloud infrastructure, and pixel-perfect interfaces.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'AWS'],
  },
  {
    icon: 'fas fa-brain',
    title: 'AI & Machine Learning',
    description:
      'Leveraging LLMs, neural networks, and intelligent automation to build the future of software.',
    tags: [
      'TensorFlow',
      'LLMs',
      'NLP',
      'Computer Vision',
      'RAG',
      'Prompt Engineering',
    ],
  },
];

export function Skills3D() {
  return (
    <section
      id="about"
      className="relative py-32 px-4 sm:px-8 bg-[#050505] overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-32 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
      >
        What I Do
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <TiltCard key={card.title} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}
