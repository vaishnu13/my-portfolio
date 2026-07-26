export function GlitchText() {
  const text = 'VAISHNU VINDULA // FULL STACK // AI ENGINEER // ';
  const repeated = text.repeat(6);

  return (
    <section className="bg-white border-t border-[#121212]/10 py-16 overflow-hidden select-none">
      {/* Row 1 — scrolls right */}
      <div className="overflow-hidden mb-4">
        <div
          className="animate-ticker whitespace-nowrap"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2rem, 6vw, 5rem)',
            letterSpacing: '-0.04em',
            color: '#121212',
          }}
        >
          <span>{repeated}</span>
          <span>{repeated}</span>
        </div>
      </div>

      {/* Row 2 — scrolls left, lighter */}
      <div className="overflow-hidden mb-4">
        <div
          className="animate-ticker-rev whitespace-nowrap"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2rem, 6vw, 5rem)',
            letterSpacing: '-0.04em',
            color: 'transparent',
            WebkitTextStroke: '1.5px #121212',
          }}
        >
          <span>{repeated}</span>
          <span>{repeated}</span>
        </div>
      </div>

      {/* Row 3 — scrolls right, muted */}
      <div className="overflow-hidden">
        <div
          className="animate-ticker whitespace-nowrap"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2rem, 6vw, 5rem)',
            letterSpacing: '-0.04em',
            color: '#121212',
            opacity: 0.08,
          }}
        >
          <span>{repeated}</span>
          <span>{repeated}</span>
        </div>
      </div>
    </section>
  );
}
