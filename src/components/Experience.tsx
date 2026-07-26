import { motion } from 'framer-motion';

const internships = [
  {
    role: 'Full-Stack Web Development Intern',
    org: 'Visakhapatnam Steel Plant (RINL) — Govt. of India',
    period: 'May – June 2025',
    bullets: [
      'Built a Mill Roll Shop Management System end-to-end using HTML, CSS, JS, Oracle, and MySQL for 50+ internal users.',
      'Designed responsive interfaces improving accessibility by 25%. Delivered production-ready deployment in 6 weeks.',
    ],
  },
  {
    role: 'Software Development Engineer (SDE) Intern',
    org: 'Bluestock Fintech',
    period: 'June – July 2025',
    bullets: [
      'Maintained and enhanced bluestock.in across IPO listing & financial dashboards.',
      'Supported digital marketing campaigns contributing to a 15% increase in platform visibility.',
    ],
  },
];

const leadership = [
  {
    title: 'Founder & President',
    org: 'UniHub Community',
    period: '2025 – 2026',
    desc: 'Founded student-driven tech community for collaboration & skill building across universities.',
  },
  {
    title: 'Founder',
    org: 'Growth AI',
    period: 'Active',
    desc: 'Automating business operations with custom 24/7 text/call AI agents & WhatsApp automation.',
    link: 'https://growth-ai.vercel.app/',
  },
  {
    title: 'Community Developer',
    org: 'Google Cloud & NVIDIA Developer Community',
    period: '2025 – 2026',
    desc: 'Collaborating on cloud-native and generative AI technical sessions and workshops.',
  },
];

const certifications = [
  { title: 'Oracle Certified Foundations Associate — Agentic AI', issuer: 'Oracle University', year: 'July 2026' },
  { title: 'IBM RAG and Agentic AI', issuer: 'Coursera / IBM', year: '2026' },
  { title: 'Cloud Technologies Completion', issuer: 'Infosys Springboard', year: 'May 2026' },
  { title: 'Generative AI Mastermind', issuer: 'Outskill', year: '2025' },
];

const awards = [
  { title: 'IIT Bombay E-Summit 2026 — Hackathon Winner', desc: 'Won 1st place in Fish Tank Pitch & Build Challenge at IIT Bombay E-Summit.' },
  { title: 'Smart India Hackathon (SIH) — Representative', desc: 'Selected to represent ANITS college in national-level innovation challenge.' },
];

export function Experience() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 border-t border-[#121212]/10">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Education & Experience Header */}
        <div>
          <span
            className="text-[#121212] text-[11px] tracking-widest uppercase block mb-2"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            ( Background & Journey )
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
            Experience & Leadership
          </h2>
        </div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-[#121212]/10 bg-[#FAF9F6] space-y-4"
        >
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 border-b border-[#121212]/10 pb-4">
            <div>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border border-[#121212]/20 text-[#121212]">
                ACADEMIC DEGREE
              </span>
              <h3 className="text-2xl font-bold text-[#121212] mt-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                B.Tech in Computer Science & Engineering (CSE)
              </h3>
              <p className="text-xs text-[#121212]/60 font-mono">
                ANITS (Anil Neerukonda Institute of Technology & Sciences) · Andhra University
              </p>
            </div>
            <div className="font-mono text-right text-xs text-[#121212]/70">
              <div>2023 – 2027</div>
              <div className="font-bold text-[#121212]">7.1 CGPA</div>
            </div>
          </div>
          <p className="text-xs text-[#121212]/70 font-mono leading-relaxed">
            <strong className="text-[#121212]">Core Coursework & Proficiency:</strong> Competitive Programming, Data Structures, Web Development, DBMS, Machine Learning, AI, Operating Systems, Computer Networks, RAG, LLMs, MCP (Model Context Protocol), Prompt Engineering, GenAI, Agentic AI, AWS, GCP, Docker, Kubernetes.
          </p>
        </motion.div>

        {/* Internships Section */}
        <div className="space-y-8">
          <h3 className="text-xl font-extrabold uppercase font-mono text-[#121212]">
            // INTERNSHIPS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internships.map((item) => (
              <div
                key={item.role}
                className="p-8 rounded-2xl border border-[#121212]/10 bg-white hover:border-[#121212] transition-all space-y-4"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-[#121212]" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {item.role}
                    </h4>
                    <p className="text-xs text-[#121212]/60 font-mono mt-1">{item.org}</p>
                  </div>
                  <span className="text-[10px] font-mono opacity-50 whitespace-nowrap">{item.period}</span>
                </div>
                <ul className="space-y-2 text-xs font-mono text-[#121212]/70">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span>›</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Entrepreneurship */}
        <div className="space-y-8">
          <h3 className="text-xl font-extrabold uppercase font-mono text-[#121212]">
            // LEADERSHIP & INITIATIVES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((l) => (
              <div key={l.title} className="p-6 rounded-2xl border border-[#121212]/10 bg-[#FAF9F6] space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono opacity-50">
                  <span>{l.period}</span>
                  {l.link && (
                    <a href={l.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      LIVE ↗
                    </a>
                  )}
                </div>
                <h4 className="font-bold text-base text-[#121212]" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {l.title}
                </h4>
                <p className="text-xs font-mono text-[#121212]/60">{l.org}</p>
                <p className="text-xs font-mono text-[#121212]/80 leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-[#121212]/10">
          {/* Certifications */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-[#121212] uppercase tracking-widest font-bold">
              // CERTIFICATIONS
            </h4>
            <div className="space-y-3">
              {certifications.map((c) => (
                <div key={c.title} className="p-4 rounded-xl border border-[#121212]/10 flex justify-between items-center text-xs font-mono">
                  <div>
                    <div className="font-bold text-[#121212]">{c.title}</div>
                    <div className="text-[10px] text-[#121212]/50">{c.issuer}</div>
                  </div>
                  <span className="text-[10px] text-[#121212]/50">{c.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-[#121212] uppercase tracking-widest font-bold">
              // HACKATHONS & AWARDS
            </h4>
            <div className="space-y-3">
              {awards.map((a) => (
                <div key={a.title} className="p-4 rounded-xl border border-[#121212]/10 space-y-1 font-mono">
                  <div className="font-bold text-xs text-[#121212]">{a.title}</div>
                  <p className="text-[11px] text-[#121212]/70 leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
