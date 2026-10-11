/**
 * Reusable portfolio data for Potluri Harish.
 * Strictly adheres to verified resume details without fabricating credentials.
 */

export interface ProjectItem {
  id: string;
  title: string;
  category: 'IoT Project' | 'Personal Project';
  subtitle: string;
  technologies: string[];
  shortDescription: string;
  fullDescription: string[];
  features: string[];
  hardwareDetails?: string[];
  statusNote: string;
  links: {
    github?: string;
    demo?: string;
    note?: string;
  };
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
  }[];
}

export interface InternshipItem {
  id: string;
  role: string;
  organization: string;
  support: string;
  duration: string;
  programLength: string;
  mode: string;
  description: string;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  scoreLabel: string;
  scoreValue: string;
  description: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  duration?: string;
  period?: string;
  certifiedDate?: string;
  score?: string;
  scoreBreakdown?: string;
  verifyUrl?: string;
  description: string;
  verificationAvailable: boolean;
}

export const PERSONAL_INFO = {
  name: "Potluri Harish",
  firstName: "Harish",
  headline: "Computer Science Student | Aspiring IT Professional",
  tagline: "Building my skills. Exploring technology. Creating practical solutions.",
  aboutText:
    "I'm a final-year B.Tech Computer Science student at QIS College of Engineering and Technology. I have foundational knowledge of Java, Python, HTML, CSS, JavaScript, and Node.js. Through academic projects and virtual internships, I've explored software development, Android development, artificial intelligence, and IoT-based systems. I'm looking forward to applying my knowledge, learning from experienced teams, and growing as an IT professional.",
  location: "Ongole, Andhra Pradesh, India",
  email: "potluriharish206@gmail.com",
  phone: "8688878206",
  phoneFormatted: "+91 86888 78206",
  linkedin: "https://linkedin.com/in/potluri-harish-1bb725357",
  github: "https://github.com/23491a05c8-dev",
  resumePath: "/resume.pdf",
  aboutCards: [
    {
      title: "Education",
      subtitle: "B.Tech Computer Science",
      detail: "QIS College of Engineering and Technology (Expected 2027, CGPA: 7.08)",
      icon: "GraduationCap"
    },
    {
      title: "Practical Learning",
      subtitle: "Projects & Internships",
      detail: "Virtual internships with AICTE-EduSkills (Google for Developers) & IoT system design.",
      icon: "Cpu"
    },
    {
      title: "Career Goal",
      subtitle: "Entry-Level Opportunities",
      detail: "Eager to contribute to software teams, learn new stacks, and solve real-world problems.",
      icon: "Target"
    }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core algorithmic and logic building foundations",
    skills: [
      { name: "Java", level: "Basic" },
      { name: "Python", level: "Fundamental / Basic" }
    ]
  },
  {
    category: "Frontend Development",
    description: "Responsive interface creation, modern layout, and interactivity",
    skills: [
      { name: "HTML5", level: "Semantic Markup" },
      { name: "CSS3", level: "Modern Styling & Flex/Grid" },
      { name: "JavaScript", level: "ES6+ & DOM Scripting" }
    ]
  },
  {
    category: "Backend Development",
    description: "Foundational server-side runtimes and APIs",
    skills: [
      { name: "Node.js", level: "Basic" }
    ]
  },
  {
    category: "Developer Tools",
    description: "Version control and development environments",
    skills: [
      { name: "Git", level: "Version Control" },
      { name: "GitHub", level: "Repository Management" },
      { name: "Visual Studio Code", level: "Primary Code Editor" }
    ]
  },
  {
    category: "Soft Skills",
    description: "Interpersonal attributes essential for collaborative software engineering",
    skills: [
      { name: "Communication", level: "Professional" },
      { name: "Team Collaboration", level: "Adaptive" },
      { name: "Time Management", level: "Organized" },
      { name: "Adaptability", level: "Fast Learner" },
      { name: "Leadership", level: "Proactive" }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "aquaculture-iot",
    title: "Smart Aquaculture Monitoring & Automatic Fish Feeding System",
    category: "IoT Project",
    subtitle: "Automated water-quality assessment & precision feed dispenser",
    technologies: [
      "Arduino UNO R3",
      "Embedded C/C++",
      "pH Sensor",
      "Turbidity Sensor",
      "DS18B20 Temp Sensor",
      "Load Cell",
      "HX711 Module",
      "Servo Motor",
      "SD Card Module"
    ],
    shortDescription:
      "Designed a smart aquaculture system to monitor water quality parameters and automate fish-feed dispensing to reduce manual effort and feed wastage.",
    fullDescription: [
      "Aquaculture operations require constant vigilance of aquatic conditions and disciplined feeding schedules to avoid aquatic stress, mortality, and expensive feed waste.",
      "This system integrates water condition sensors with an Arduino UNO R3 to measure water safety thresholds in real-time, coupled with a mechanical servo dispenser and load cell to meter exact feed quantities.",
      "The system proposes SD-card based data logging for historical sensor trends and efficient fish farm management."
    ],
    features: [
      "Water-quality monitoring using pH and turbidity sensors to detect contamination and acidity shifts.",
      "Real-time aquatic temperature monitoring using a submersible DS18B20 waterproof sensor.",
      "Precision feed-weight measurement using a high-sensitivity load cell paired with the HX711 amplifier.",
      "Servo-controlled feed gate dispensing scheduled feed portions based on preset target weight.",
      "Proposed SD card-based logging module for offline recording of sensor history and diagnostics.",
      "Objective of reducing manual labour and preventing excess feed degradation in water."
    ],
    hardwareDetails: [
      "Microcontroller: Arduino UNO R3 (ATmega328P)",
      "Sensors: Analog pH Probe, Optical Turbidity Sensor, DS18B20 Digital Temp Probe",
      "Actuators: High-torque SG90/MG995 Servo Motor for dispenser gate actuation",
      "Weight Sensing: 1kg Micro Load Cell + 24-bit HX711 ADC amplifier",
      "Storage: SPI-interfaced MicroSD Card breakout module"
    ],
    statusNote:
      "Academic hardware prototype designed and tested under laboratory simulation conditions.",
    links: {
      github: "https://github.com/23491a05c8-dev",
      note: "Hardware code and circuit schematics documented in student project repository."
    }
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    category: "Personal Project",
    subtitle: "Modern, interactive responsive showcase for technical skills and projects",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    shortDescription:
      "Developed a personal portfolio website to showcase professional projects, technical skills, and educational background with clean modern layouts.",
    fullDescription: [
      "Designed and coded a personal web presence providing recruiters and engineering teams with transparent access to educational milestones, verified projects, and technical skills.",
      "Built with focus on responsive layouts, clean aesthetic presentation, semantic HTML5 structure, and lightweight interactivity across screen dimensions."
    ],
    features: [
      "Responsive layout optimized across mobile devices, tablets, and desktop displays.",
      "Semantic HTML5 structure ensuring high readability and clean content hierarchy.",
      "Interactive project cards and smooth client-side navigation.",
      "Direct verified links to GitHub profile, LinkedIn network, and resume download."
    ],
    statusNote: "Active personal showcase project, continuously refined.",
    links: {
      github: "https://github.com/23491a05c8-dev",
      demo: "#",
      note: "Currently viewing this interactive web portfolio."
    }
  }
];

export const INTERNSHIPS: InternshipItem[] = [
  {
    id: "ai-ml-internship",
    role: "AI-ML Virtual Internship",
    organization: "AICTE-EduSkills",
    support: "Google for Developers",
    duration: "April 2026 – June 2026",
    programLength: "8 weeks",
    mode: "Virtual",
    description:
      "Completed an eight-week virtual internship program in Artificial Intelligence and Machine Learning supported by Google for Developers.",
    highlights: [
      "Explored foundational machine learning workflows, data preparation, and algorithm concepts.",
      "Gained exposure to industry developer practices guided by the Google for Developers curriculum.",
      "Developed problem-solving aptitude through structured modules and assessments."
    ]
  },
  {
    id: "android-internship",
    role: "Android Developer Virtual Internship",
    organization: "AICTE-EduSkills",
    support: "Google for Developers",
    duration: "April 2025 – June 2025",
    programLength: "10 weeks",
    mode: "Virtual",
    description:
      "Completed a ten-week virtual internship program in Android application development supported by Google for Developers.",
    highlights: [
      "Learned Android platform fundamentals, UI layout structures, and activity lifecycles.",
      "Practiced building mobile interface components following modern Android UI principles.",
      "Strengthened practical coding skills in application architecture and virtual collaboration."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "btech",
    degree: "Bachelor of Technology (B.Tech) — Computer Science",
    institution: "QIS College of Engineering and Technology",
    location: "Ongole, Andhra Pradesh, India",
    period: "Expected Graduation: 2027",
    scoreLabel: "Overall CGPA",
    scoreValue: "7.08 (First 3 Years)",
    description:
      "Undergraduate curriculum covering Computer Science fundamentals including Data Structures, Object-Oriented Programming, Database Systems, Computer Networks, and Operating Systems."
  },
  {
    id: "intermediate",
    degree: "Intermediate — Class XII (MPC)",
    institution: "Sri Chaitanya Junior College",
    location: "Ongole, Andhra Pradesh, India",
    period: "2021 – 2023",
    scoreLabel: "Percentage",
    scoreValue: "74.8%",
    description:
      "Higher secondary education with a rigorous focus on Mathematics, Physics, and Chemistry (MPC), building analytical reasoning and problem-solving fundamentals."
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC) — Class X",
    institution: "Ram Nagar Municipal High School",
    location: "Ongole, Andhra Pradesh, India",
    period: "2020 – 2021",
    scoreLabel: "Percentage",
    scoreValue: "99.67%",
    description:
      "Secondary school education completed with exceptional academic standing (99.67%), establishing a strong foundation in science and mathematics."
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "nptel-data-analytics",
    title: "Data Analytics with Python",
    issuer: "NPTEL — IIT Roorkee",
    duration: "12-week course",
    period: "Jan – Apr 2026",
    score: "58%",
    scoreBreakdown: "Assignments: 25/25 | Proctored Exam: 33/75",
    description:
      "Rigorous 12-week online certification course offered by IIT Roorkee through NPTEL, covering data structures in Python, data wrangling, statistical analysis, and exploratory analysis techniques.",
    verificationAvailable: false
  },
  {
    id: "frontend-dev",
    title: "Frontend Development",
    issuer: "One Roadmap (oneroadmap)",
    duration: "Skill Certification Test",
    certifiedDate: "May 27, 2026",
    verifyUrl: "https://www.oneroadmap.io/skills/frontend/certificate/CERT-C3C60403",
    description:
      "Comprehensive training in modern web interfaces, semantic HTML5, CSS3 styling techniques, responsive web design principles, and JavaScript DOM interaction.",
    verificationAvailable: true
  }
];

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Internships", href: "#internships" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" }
];
