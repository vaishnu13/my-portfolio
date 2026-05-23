// Initialize Libraries
document.addEventListener('DOMContentLoaded', () => {

    // Theme Toggle Logic
    const themeToggle = document.querySelector('.theme-toggle');
    const icon = themeToggle.querySelector('i');

    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('light-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');

            // Update particles color for light mode
            if (window.pJSDom && window.pJSDom[0]) {
                window.pJSDom[0].pJS.particles.color.value = '#2563eb';
                window.pJSDom[0].pJS.particles.line_linked.color = '#2563eb';
                window.pJSDom[0].pJS.fn.particlesRefresh();
            }
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');

            // Update particles color for dark mode
            if (window.pJSDom && window.pJSDom[0]) {
                window.pJSDom[0].pJS.particles.color.value = '#ffffff';
                window.pJSDom[0].pJS.particles.line_linked.color = '#ffffff';
                window.pJSDom[0].pJS.fn.particlesRefresh();
            }
        }
    });

    // Project View Toggle
    const viewBtns = document.querySelectorAll('.view-btn');
    const projectsGrid = document.querySelector('.projects-grid');

    if (viewBtns.length > 0 && projectsGrid) {
        viewBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                viewBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const viewType = btn.getAttribute('data-view');

                if (viewType === 'list') {
                    projectsGrid.classList.add('list-view');
                } else {
                    projectsGrid.classList.remove('list-view');
                }

                // Refresh AOS to handle layout changes
                setTimeout(() => {
                    AOS.refresh();
                }, 500);
            });
        });
    }

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });

    // Initialize Particles.js
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.1,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    function openMenu() {
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    mobileMenuBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for fixed header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Hover effect for project cards (kept for old cards just in case)
    const projectCards = document.querySelectorAll('.glass-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // --- World-Class Portfolio Interactions ---

    // 1. Custom Trailing Cursor
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Instant dot movement
        if (cursor) {
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        }
    });

    // Smooth follower animation
    function animateFollower() {
        if (follower) {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';
        }
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Cursor hover states for all links and buttons
    const interactiveElements = document.querySelectorAll('a, button, .magnetic-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (cursor) cursor.classList.add('hover-link');
            if (follower) follower.classList.add('hover-link');
        });
        el.addEventListener('mouseleave', () => {
            if (cursor) cursor.classList.remove('hover-link');
            if (follower) follower.classList.remove('hover-link');

            // Specifically handling magnetic reset here too for safety
            if (el.classList.contains('magnetic')) {
                gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "power2.out" });
            }
        });
    });

    // 2. Magnetic Buttons
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach(elem => {
        elem.addEventListener('mousemove', (e) => {
            const rect = elem.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.4;

            gsap.to(elem, {
                x: x,
                y: y,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // 3. Project Hover Reveal
    const projectListItems = document.querySelectorAll('.project-list-item');
    const previewContainer = document.querySelector('.project-preview-container');
    const previewImg = document.querySelector('.project-preview-img');

    projectListItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const imgSrc = item.getAttribute('data-image');
            if (imgSrc && previewImg && previewContainer) {
                previewImg.src = imgSrc;
                previewContainer.classList.add('active');
            }
        });

        item.addEventListener('mouseleave', () => {
            if (previewContainer) {
                previewContainer.classList.remove('active');
            }
        });

        item.addEventListener('mousemove', (e) => {
            if (previewContainer) {
                // Move image container with cursor
                gsap.to(previewContainer, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        });
    });

});