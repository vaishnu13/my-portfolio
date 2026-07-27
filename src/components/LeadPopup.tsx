import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LeadPopup() {
  const [isOpen, setIsOpen]       = useState(false);
  const [name, setName]           = useState('');
  const [email, setEmail]         = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if user already submitted or dismissed the popup
    const dismissed = localStorage.getItem('lead_popup_dismissed');
    if (dismissed) return;

    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    localStorage.setItem('lead_popup_dismissed', 'true');
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    // Save lead locally (or send to email / analytics)
    const leads = JSON.parse(localStorage.getItem('user_leads') || '[]');
    leads.push({ name, email, date: new Date().toISOString() });
    localStorage.setItem('user_leads', JSON.stringify(leads));
    localStorage.setItem('lead_popup_dismissed', 'true');

    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 1800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="popup-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            key="popup-card"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md bg-white text-[#121212] rounded-2xl p-8 border border-[#121212]/10 shadow-2xl space-y-6"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-xs font-mono text-[#121212]/50 hover:text-[#121212] p-2 cursor-pointer transition-colors"
            >
              ✕ SKIP
            </button>

            {!submitted ? (
              <>
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#121212]/40 font-mono block">
                    ( WELCOME )
                  </span>
                  <h3
                    className="text-2xl font-black text-[#121212] leading-tight"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    Let's Connect
                  </h3>
                  <p className="text-xs text-[#121212]/60 leading-relaxed">
                    Leave your name and email to stay updated or discuss opportunities.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-[#121212]/60 block font-mono">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 text-xs bg-[#FAF9F6] border border-[#121212]/15 rounded-xl text-[#121212] focus:outline-none focus:border-[#121212] transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-[#121212]/60 block font-mono">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 text-xs bg-[#FAF9F6] border border-[#121212]/15 rounded-xl text-[#121212] focus:outline-none focus:border-[#121212] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#121212] text-white rounded-xl font-mono text-xs uppercase tracking-wider hover:bg-black transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>SUBMIT & CONTINUE</span>
                    <span>→</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center space-y-3">
                <span className="text-3xl block">✨</span>
                <h4 className="font-bold text-xl text-[#121212]" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Thank you, {name}!
                </h4>
                <p className="text-xs text-[#121212]/60 font-mono">
                  Great to have you here. Enjoy exploring the portfolio!
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
