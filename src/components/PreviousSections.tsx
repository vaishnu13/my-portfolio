import { useEffect } from 'react';
import { PrismaSkills } from './PrismaSkills';
import { InteractiveProjects } from './InteractiveProjects';

declare global {
  interface Window {
    AOS: any;
    particlesJS: any;
  }
}

export function PreviousSections() {
  useEffect(() => {
    // Re-initialize AOS and particles if needed
    if (window.AOS) {
      window.AOS.init();
    }
    if (window.particlesJS) {
      window.particlesJS.load('particles-js', 'particles.json', function() {});
    }
  }, []);

  return (
    <>
      <div id="particles-js"></div>
      
      {/* Stats / Quick Info Section */}
      <section className="stats-section pt-32 relative z-10 bg-black">
        <div className="container mb-20 sm:mb-24 text-center flex justify-center" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-semibold text-white max-w-5xl leading-snug sm:leading-tight">
            Innovative developer building <span className="text-[#06b6d4]">AI-driven solutions</span> using LLMs, cloud technologies, and modern web frameworks.
          </h2>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a href="full-stack.html" className="stat-item glass-card" data-aos="fade-up" data-aos-delay="0">
                <div className="stat-icon"><i className="fas fa-code"></i></div>
                <h3>Full Stack</h3>
                <p>Web Development</p>
            </a>
            <a href="ai-ml.html" className="stat-item glass-card" data-aos="fade-up" data-aos-delay="100">
                <div className="stat-icon"><i className="fas fa-brain"></i></div>
                <h3>AI / ML</h3>
                <p>Future Ready</p>
            </a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section relative z-10 bg-black">
          <div className="container">
              <h2 className="section-title" data-aos="fade-up">Experience</h2>
              <div className="timeline">
                  {/* Experience Item 1 */}
                  <div className="timeline-item" data-aos="fade-up">
                      <div className="timeline-content glass-card">
                          <div className="timeline-date">May 2025 - June 2025</div>
                          <h3>Full-Stack Web Development Intern</h3>
                          <h4>Visakhapatnam Steel Plant (RINL)</h4>
                          <p>Developed a comprehensive Mill Roll Shop Management System handling data for 50+ users.
                              Improved accessibility by 25% through responsive design implementation.</p>
                          <div className="tags">
                              <span>HTML/CSS</span>
                              <span>JavaScript</span>
                              <span>Oracle</span>
                              <span>MySQL</span>
                          </div>
                      </div>
                  </div>

                  {/* Experience Item 2 */}
                  <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                      <div className="timeline-content glass-card">
                          <div className="timeline-date">June 2024 - 2025</div>
                          <h3>Software Development Engineer (SDE) Intern</h3>
                          <h4>Bluestock Fintech</h4>
                          <p>Maintained and enhanced www.bluestock.com (HTML, CSS, JS), improving UI/UX across IPO listing and financial dashboard flows. Supported digital marketing campaigns contributing to a 15% increase in platform visibility and user engagement.</p>
                          <div className="tags">
                              <span>HTML/CSS</span>
                              <span>JavaScript</span>
                              <span>UI/UX</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section relative z-10 bg-black pb-20">
          <div className="container">
              <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>
              <div data-aos="fade-up" data-aos-delay="100" className="w-full">
                  <InteractiveProjects />
              </div>
          </div>
      </section>

      {/* Prisma Contact Section with Video Background */}
      <PrismaSkills />

      <footer className="relative z-10 bg-black">
          <div className="container footer-content">
              <p>&copy; 2025 Vaishnu Vindula. Built with <i className="fas fa-heart"></i> and Code.</p>
              <div className="social-links">
                  <a href="https://github.com/vaishnu7070" aria-label="Github"><i className="fab fa-github"></i></a>
                  <a href="https://linkedin.com/in/vaishnuvindula" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              </div>
          </div>
      </footer>
    </>
  );
}
