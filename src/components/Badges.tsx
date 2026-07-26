import { motion } from 'framer-motion';

const badges = [
  {
    title: 'I/O 2026 - Registered',
    date: 'Mar 25, 2026',
    desc: 'Registered for Google I/O 2026 digital event.',
    link: 'https://developers.google.com/profile/badges/events/io/2026/registered?u=116267647797616733478',
    category: 'Google I/O',
    bg: '#FFE8D6',
    icon: '⚡',
  },
  {
    title: 'GDG on Campus Member',
    date: 'Oct 22, 2025',
    desc: 'Member of Google Developer Group on Campus.',
    link: 'https://developers.google.com/profile/badges/community/gdg/GDGoC/member?u=116267647797616733478',
    category: 'Community',
    bg: '#E0F2FE',
    icon: '🌐',
  },
  {
    title: 'GDG Vizag Member',
    date: 'Oct 15, 2025',
    desc: 'Joined GDG Vizag developer chapter.',
    link: 'https://developers.google.com/profile/badges/community/gdg/chapter/member/gdg-vizag?u=116267647797616733478',
    category: 'Community',
    bg: '#FEE2E2',
    icon: '📍',
  },
  {
    title: 'Google Cloud Innovator',
    date: 'Aug 25, 2025',
    desc: 'Joined the Google Cloud Innovators program.',
    link: 'https://developers.google.com/profile/badges/community/innovators/cloud/2021_member?u=116267647797616733478',
    category: 'Google Cloud',
    bg: '#F3E8FF',
    icon: '☁️',
  },
  {
    title: 'NVIDIA NIM on GKE',
    date: 'Aug 25, 2025',
    desc: 'Deploy Faster GenAI models with NVIDIA NIM on GKE pathway.',
    link: 'https://developers.google.com/profile/badges/playlists/nvidia-deploy-with-gen-ai?u=116267647797616733478',
    category: 'GenAI & Cloud',
    bg: '#DCFCE7',
    icon: '🚀',
  },
  {
    title: 'Google Cloud & NVIDIA Member',
    date: 'Aug 19, 2025',
    desc: 'Active member of Google Cloud & NVIDIA developer community.',
    link: 'https://developers.google.com/profile/badges/nvidia-developer?u=116267647797616733478',
    category: 'NVIDIA',
    bg: '#FEE2E2',
    icon: '💚',
  },
  {
    title: 'Gemini Enterprise Agent Ready',
    date: 'Mar 25, 2026',
    desc: 'Certified in Gemini Enterprise Agentic architecture.',
    link: 'https://me.developers.google.com/u/116267647797616733478',
    category: 'Gemini AI',
    bg: '#FEF08A',
    icon: '🤖',
  },
  {
    title: 'Build with AI 2026 Attendee',
    date: 'Mar 8, 2026',
    desc: 'Attended the Google Build with AI 2026 summit.',
    link: 'https://me.developers.google.com/u/116267647797616733478',
    category: 'Event',
    bg: '#FFE8D6',
    icon: '💡',
  },
];

export function Badges() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 border-t border-[#121212]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span
              className="text-[#121212] text-[11px] tracking-widest uppercase block mb-2"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              ( Verified Credentials )
            </span>
            <h2
              className="text-[#121212] leading-tight"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
                letterSpacing: '-0.03em',
              }}
            >
              Google Developer Badges
            </h2>
          </div>
          <a
            href="https://me.developers.google.com/u/116267647797616733478"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill self-start md:self-auto"
          >
            <span>VIEW GOOGLE PROFILE</span>
            <span>↗</span>
          </a>
        </div>

        {/* Ticker Row 1 — Auto Scrolling Marquee */}
        <div className="overflow-hidden py-4 -mx-6 md:-mx-12">
          <div className="animate-ticker flex gap-6 px-6">
            {[...badges, ...badges].map((badge, idx) => (
              <a
                key={idx}
                href={badge.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-72 p-6 rounded-2xl border border-[#121212]/10 bg-[#FAF9F6] hover:border-[#121212] transition-all duration-300 space-y-3 group"
              >
                <div className="flex justify-between items-center">
                  <span className="text-2xl">{badge.icon}</span>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full border border-[#121212]/20 font-mono text-[#121212]/70 uppercase"
                  >
                    {badge.category}
                  </span>
                </div>
                <div>
                  <h4
                    className="font-bold text-sm text-[#121212] group-hover:underline line-clamp-1"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {badge.title}
                  </h4>
                  <p
                    className="text-[11px] text-[#121212]/60 mt-1 line-clamp-2"
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {badge.desc}
                  </p>
                </div>
                <div className="pt-2 flex justify-between items-center text-[10px] font-mono text-[#121212]/40 border-t border-[#121212]/5">
                  <span>{badge.date}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Badges Grid — Desktop Detailed Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {badges.map((b) => (
            <motion.a
              key={b.title}
              href={b.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl border border-[#121212]/10 bg-[#FAF9F6] hover:bg-[#121212] hover:text-white transition-all duration-300 group space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xl">{b.icon}</span>
                  <span
                    className="text-[9px] uppercase font-mono px-2 py-0.5 rounded-full border border-[#121212]/20 group-hover:border-white/30"
                  >
                    {b.category}
                  </span>
                </div>
                <h4
                  className="font-bold text-sm leading-snug pt-1"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {b.title}
                </h4>
                <p
                  className="text-[11px] opacity-70 leading-relaxed"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {b.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-current/10 flex justify-between items-center text-[10px] font-mono opacity-50">
                <span>{b.date}</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
