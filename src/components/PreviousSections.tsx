import { useEffect } from 'react';
import { PrismaSkills } from './PrismaSkills';
import { PrismaContact } from './PrismaContact';

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
        <div className="container stats-grid">
            <a href="full-stack.html" className="stat-item glass-card" data-aos="fade-up" data-aos-delay="0">
                <div className="stat-icon"><i className="fas fa-code"></i></div>
                <h3>Full Stack</h3>
                <p>Web Development</p>
            </a>
            <a href="startups.html" className="stat-item glass-card" data-aos="fade-up" data-aos-delay="100">
                <div className="stat-icon"><i className="fas fa-rocket"></i></div>
                <h3>Startups</h3>
                <p>Business Mindset</p>
            </a>
            <a href="ai-ml.html" className="stat-item glass-card" data-aos="fade-up" data-aos-delay="200">
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
      <section id="projects" className="section relative z-10 bg-black">
          <div className="container">
              <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>

              <div className="view-controls" data-aos="fade-up" data-aos-delay="100">
                  <button className="view-btn active" data-view="grid" aria-label="Grid View">
                      <i className="fas fa-th-large"></i>
                  </button>
                  <button className="view-btn" data-view="list" aria-label="List View">
                      <i className="fas fa-list"></i>
                  </button>
              </div>

              <div className="projects-grid">
                  {/* Project 1 */}
                  <div className="project-card glass-card" data-aos="fade-up">
                      <div className="project-content">
                          <div className="project-icon"><i className="fas fa-graduation-cap"></i></div>
                          <h3>UniAutomation — University Web & App Management System | React · FastAPI · MySQL</h3>
                          <p className="project-desc"><strong>2025</strong> - Centralized automation platform to manage workflows and eliminate manual intervention across university websites and apps. React dashboard for live monitoring; FastAPI backend handles workflow orchestration, alert triggers, and automated task execution.</p>
                          <div className="project-links">
                              <a href="portfolio.html" className="link-btn">View Details <i className="fas fa-arrow-right"></i></a>
                          </div>
                      </div>
                  </div>

                  {/* Project 2 */}
                  <div className="project-card glass-card" data-aos="fade-up" data-aos-delay="100">
                      <div className="project-content">
                          <div className="project-icon"><i className="fas fa-microchip"></i></div>
                          <h3>AI Deployment w/ NVIDIA NIM</h3>
                          <p className="project-desc">Deployed faster Generative AI models using NVIDIA NIM on Google
                              Kubernetes Engine (GKE). Focused on scalability and performance.</p>
                          <div className="project-links">
                              <a href="portfolio.html" className="link-btn">View Details <i className="fas fa-arrow-right"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Prisma Technical Skills Section */}
      <PrismaSkills />

      {/* Prisma Contact Section */}
      <PrismaContact />

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
