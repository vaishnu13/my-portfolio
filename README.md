# Vaishnu's Developer Portfolio

A premium, interactive, and visually stunning 3D developer portfolio showcasing full-stack engineering and AI-driven solutions. Built with React, Vite, Framer Motion, and Tailwind CSS, featuring custom magnetic interaction states, smooth animations, and clean modular component design.

🚀 **Live Site:** [prompt-pilot-taupe.vercel.app](https://prompt-pilot-taupe.vercel.app) *(Note: Link points to the primary domain hosting PromptPilot and linked pages)*

---

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Featured Projects](#-featured-projects)
- [Experience](#-experience)
- [Getting Started](#-getting-started)
- [License](#-license)

---

## ✨ Features

- **Premium Modern Aesthetics**: Sleek dark mode design with glassmorphism effects, custom borders, and carefully selected typefaces.
- **Interactive Micro-Animations**:
  - **Magnet Components**: Subtle magnetic hover attraction effects on portraits and interactive elements.
  - **WordsPullUp**: Multi-style kinetic text reveals on loading and section entrances.
  - **AOS (Animate On Scroll)**: Smooth scrolling reveals for sections and experience timelines.
- **Dynamic Projects Section**: Showcases fully responsive feature cards that scale and transform on hover with visual overlays.
- **Interactive Skills & Contact Section**: Highlights contact options with direct email integration and custom video overlays.

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS animations
- **Animation Libraries**: [Framer Motion](https://www.framer.com/motion/) for interactive UI transitions
- **3D Modeling & Renders**: Integrated support for Spline runtime tools (`@splinetool/react-spline` & `@splinetool/runtime`)

---

## 📁 Project Structure

```bash
react-portfolio/
├── public/                 # Static assets (images, fonts, JSON configuration)
│   ├── images/             # Screenshots of projects (Prompt Pilot, Gap Detector)
│   └── particles.json      # Config for background particle effects
├── src/
│   ├── assets/             # Bundled media resources
│   ├── components/         # Modular layout and interaction elements
│   │   ├── Magnet.tsx      # Magnetic wrapper component for hover effects
│   │   ├── FadeIn.tsx      # Entrance animation transition component
│   │   ├── Buttons.tsx     # Reusable interactive button designs
│   │   ├── InteractiveProjects.tsx # Grid of interactive case study cards
│   │   ├── PreviousSections.tsx    # Scrollable experience timeline and statistics
│   │   ├── PrismaComponents.tsx    # Pull-up text and glassmorphism helpers
│   │   └── PrismaSkills.tsx        # Call-to-action contact footer with video background
│   ├── App.tsx             # Main layout rendering order
│   ├── main.tsx            # Application entry mounting point
│   └── index.css           # Global custom typography, variables, and Tailwind directives
├── package.json            # Scripts & project dependencies
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## 💻 Featured Projects

1. **Prompt Pilot AI**
   - **Description**: The ultimate AI prompt assistant. Transforms raw user prompts into structured, production-ready prompts using streaming Gemini AI models.
   - **Tech**: React, Vite, Tailwind CSS, Google Gemini AI SDK.
   - **URL**: [prompt-pilot-taupe.vercel.app](https://prompt-pilot-taupe.vercel.app)

2. **UniHub Gap Detector**
   - **Description**: Intelligent career analyzer that bridges the gap between your resume and your dream job requirements.
   - **Tech**: React, Vite, Framer Motion, AI analysis.
   - **URL**: [ai-sigma-fawn.vercel.app](https://ai-sigma-fawn.vercel.app)

---

## 💼 Experience

- **Full-Stack Web Development Intern** — *Visakhapatnam Steel Plant (RINL)* (May 2025 - June 2025)
  - Developed a Mill Roll Shop Management System handling data for 50+ users.
  - Improved interface accessibility by 25% through responsive design.
- **Software Development Engineer (SDE) Intern** — *Bluestock Fintech* (June 2024 - 2025)
  - Enhanced Bluestock's primary web interface, improving UI/UX across IPO listing pages and financial dashboard flows.

---

## 🚀 Getting Started

### ⚙️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vaishnu13/my-portfolio.git
   cd my-portfolio
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for Production:**
   ```bash
   npm run build
   ```

---

## 📄 License

This project is private and proprietary. All rights reserved.
