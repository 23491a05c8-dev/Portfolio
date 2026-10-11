# Potluri Harish — Premium 3D Responsive Developer Portfolio

An immersive, responsive, interactive 3D developer portfolio website built for **Potluri Harish** (Final-year B.Tech Computer Science student at QIS College of Engineering and Technology, Ongole, Andhra Pradesh).

Featuring electric blue and violet neon aesthetics, dark navy backdrops, glassmorphism cards, interactive Three.js & React Three Fiber holographic visualizations, and verified resume credentials.

---

## 🌟 Key Features

1. **Full-Screen 3D Hero Experience**
   - Interactive Three.js / React Three Fiber holographic core with glowing orbital rings, stardust particle field, and dynamic mouse tracking.
   - Graceful static CSS/SVG fallback with automatic WebGL availability detection and `prefers-reduced-motion` compliance.
   - Quick CTAs for project exploration, direct resume download (`resume.pdf`), and contact links.

2. **Verified Professional Background & About Section**
   - Transparent presentation of academic achievements, first 3-year CGPA (7.08), and expected 2027 graduation.
   - 3 interactive highlight cards for Education, Practical Learning, and Career Goals.

3. **Honest Technical Arsenal**
   - Categorized skills: Programming Languages (Java, Python), Frontend (HTML5, CSS3, JavaScript), Backend (Node.js), Developer Tools (Git, GitHub, VS Code), and Soft Skills.
   - **No fake percentages or misleading progress meters** — clean, descriptive level tags.

4. **Featured Projects with Deep Dives & Modals**
   - **Smart Aquaculture Monitoring & Automatic Fish Feeding System (IoT)**: Complete with an interactive 2D/3D-inspired HTML5 telemetry canvas simulator displaying Arduino UNO R3 sensor logic (pH, turbidity, DS18B20 temp, HX711 load cell, and servo feed gate).
   - **Personal Portfolio Website (Personal Project)**: Interactive miniature browser mockup showcasing clean semantic layout and responsive design.
   - Project modal dialog for detailed circuit breakdowns, hardware components, and GitHub repositories.

5. **Internship & Learning Timeline**
   - **AI-ML Virtual Internship** (AICTE-EduSkills, supported by Google for Developers — April 2026 – June 2026, 8 weeks).
   - **Android Developer Virtual Internship** (AICTE-EduSkills, supported by Google for Developers — April 2025 – June 2025, 10 weeks).

6. **Academic Journey & Certifications**
   - B.Tech CSE (QIS College of Engg. & Tech.), Intermediate (Sri Chaitanya Junior College — 74.8%), SSC (Ram Nagar Municipal High School — 99.67%).
   - NPTEL Data Analytics with Python (IIT Roorkee, 12 weeks, Jan–Apr 2026, Score: 58%) and Frontend Development.

7. **Let's Connect & Interactive 3D Wireframe Globe**
   - Direct links for email, phone, LinkedIn, and GitHub.
   - Client-side validated contact form with accessible error messages and automatic `mailto:` client dispatch fallback.
   - Real-time rotating 3D connected-node wireframe canvas globe.

---

## 🛠️ Technology Stack

- **Core**: React 18, TypeScript, HTML5, CSS3
- **Styling**: Tailwind CSS, PostCSS, Custom Neon & Glassmorphism Utilities
- **3D Graphics**: Three.js, React Three Fiber (`@react-three/fiber`), React Three Drei (`@react-three/drei`)
- **Icons & Motion**: Lucide React, Framer Motion
- **Build Tool**: Vite 5 (Superfast compilation & instant HMR)

---

## 📁 Project Architecture

```
portfolio/
├── public/
│   └── resume.pdf                 # Verified resume PDF download
├── src/
│   ├── assets/                    # Static assets & media
│   ├── components/                # Modular reusable components
│   │   ├── ContactGlobeCanvas.tsx # 3D wireframe connected node canvas
│   │   ├── FishFarmCanvas.tsx     # 3D-inspired Aquaculture simulation canvas
│   │   ├── Footer.tsx             # Semantic recruiter-friendly footer
│   │   ├── GlassCard.tsx          # 3D tilting glassmorphic container
│   │   ├── Navbar.tsx             # Sticky nav with mobile drawer & active indicator
│   │   ├── ProjectModal.tsx       # Deep architecture modal popup
│   │   ├── ScrollProgress.tsx     # Top window scroll indicator
│   │   └── SectionHeading.tsx     # Standardized glowing section title
│   ├── data/
│   │   └── portfolioData.ts       # Central source of verified resume info
│   ├── hooks/
│   │   ├── useActiveSection.ts    # Scroll spy for active navbar highlighting
│   │   └── useReducedMotion.ts    # Accessibility prefers-reduced-motion hook
│   ├── sections/                  # Individual page sections
│   │   ├── AboutSection.tsx       # About narrative & core pillars
│   │   ├── CertificationsSection.tsx # NPTEL & frontend certifications
│   │   ├── ContactSection.tsx     # Contact channels, form & 3D globe
│   │   ├── EducationSection.tsx   # Academic journey cards
│   │   ├── HeroSection.tsx        # 3D landing introduction
│   │   ├── InternshipsSection.tsx # Vertical timeline of virtual internships
│   │   ├── ProjectsSection.tsx    # Project showcases & simulations
│   │   └── SkillsSection.tsx      # Technical arsenal cards
│   ├── three/                     # Three.js & R3F 3D components
│   │   ├── FallbackCore.tsx       # WebGL fallback holographic graphic
│   │   ├── HeroCanvas.tsx         # R3F Canvas with camera & studio lights
│   │   ├── HolographicCore.tsx    # 3D rotating polyhedron core with rings
│   │   └── ParticleField.tsx      # 3D stardust particle constellation
│   ├── App.tsx                    # Root application component
│   ├── index.css                  # Custom Tailwind & neon glow styling
│   └── main.tsx                   # React DOM entry point
├── index.html                     # HTML template with Google Fonts
├── package.json                   # Dependencies and scripts
├── tailwind.config.js             # Electric cyan, violet & navy color tokens
├── tsconfig.json                  # TypeScript compiler settings
└── vite.config.ts                 # Vite bundler configuration
```

---

## 🚀 Setup Instructions (Windows PowerShell & Visual Studio Code)

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ or higher). You can verify in PowerShell:
```powershell
node -v
npm -v
```

### 1. Open in Visual Studio Code
Open Visual Studio Code, press ``Ctrl + ` `` to open the integrated terminal, and navigate to the project directory:
```powershell
cd c:\Users\Harish\Downloads\portfolio
```

### 2. Install Dependencies
```powershell
npm install
```

### 3. Start Development Server
```powershell
npm run dev
```
The terminal will display the local development URL (typically `http://localhost:3000`). It will automatically open in your default browser.

### 4. Build for Production
To create an optimized, minified production build:
```powershell
npm run build
```
The compiled files will be generated in the `dist/` directory.

### 5. Preview Production Build
```powershell
npm run preview
```

---

## 🔒 Verification & Compliance
- All personal details, educational scores, internship timelines, and project scopes strictly match the verified resume of Potluri Harish.
- No false certifications, fake employment histories, or exaggerated proficiency percentages have been created.
- The contact form provides transparent client-side validation and opens direct email client links to `potluriharish206@gmail.com`.
