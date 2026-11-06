// ============================================================
// EDITABLE SITE DATA — Adidev Narayan
// Update this file to change all content on the website.
// ============================================================

export const siteConfig = {
  name: "Adidev Narayan",
  role: "CS Engineering Student & Creative Builder",
  tagline: "Curious mind. Creative perspective. Building with purpose.",
  subheading: "I explore technology, think creatively and build with purpose.",
  description:
    "First-year Computer Science Engineering student at Amal Jyothi College of Engineering. Exploring software development, artificial intelligence, and the creative intersection of code and visual art.",
  email: "adidev44445@gmail.com",
  github: "https://github.com/AdidevNarayan",
  linkedin: "https://www.linkedin.com/in/adidev-narayan-a43832354/",
  instagram: "https://www.instagram.com/4ddiiiiii/",
  location: "Kerala, India",
  institution: "Amal Jyothi College of Engineering, Kanjirappally",
  degree: "BTech Computer Science and Engineering",
  academicStage: "First-year student (Class of 2028)",
  status: "Open to learning, hackathons & creative collaborations",
};

// ── EDITORIAL TICKER MOTIFS (Meghan Rose inspired) ────────
export const tickerItems = [
  "Adidev Narayan",
  "BTech Computer Science & Engineering",
  "Amal Jyothi College of Engineering",
  "Smart India Hackathon 2026 (SIH26090)",
  "Creative Coding & Visual Art",
  "Kerala, India",
  "Building With Purpose",
  "Exploring Artificial Intelligence",
  "C Programming & Problem Solving",
];

// ── ABOUT ──────────────────────────────────────────────────
export const aboutContent = {
  headline: "Technology meets\na creative eye.",
  subhead: "Bridging analytical software thinking with visual art & creative curiosity.",
  paragraphs: [
    "I'm Adidev, a Computer Science Engineering student at Amal Jyothi College of Engineering, currently in my first year.",
    "I'm curious about how technology works and, more importantly, how it can be used to solve real problems. My interests lie in software development, artificial intelligence and the process of turning ideas into useful products.",
    "Beyond technology, I have a creative side. I enjoy art, illustration and exploring visual aesthetics. I find that creativity influences how I approach problems, look at ideas and think about the things I build.",
    "I'm currently strengthening my programming fundamentals, learning C and exploring the possibilities of software and emerging technologies. My participation in Smart India Hackathon 2026, working on the Market Linkage problem statement (SIH26090), has also been an opportunity to explore collaborative problem-solving.",
    "I don't have everything figured out yet, and that's part of the journey. I'm here to learn, experiment, build meaningful products and eventually create something of my own.",
  ],
  facts: [
    { label: "Current Focus", value: "First-year BTech CSE" },
    { label: "Institution", value: "Amal Jyothi College of Engineering" },
    { label: "Interests", value: "Software, AI, Art & Design" },
    { label: "Hackathon", value: "SIH 2026 (Problem SIH26090)" },
  ],
  personality: ["Curious", "Ambitious", "Creative", "Detail-oriented"],
};

// ── LEARNING JOURNEY ───────────────────────────────────────
export interface TimelineEntry {
  period: string;
  title: string;
  institutionOrContext: string;
  detail: string;
  type: "Education" | "Hackathon" | "Skill" | "Creative";
}

export const timeline: TimelineEntry[] = [
  {
    period: "2024 — Present",
    title: "BTech in Computer Science & Engineering",
    institutionOrContext: "Amal Jyothi College of Engineering, Kanjirappally",
    detail: "Currently in 1st year. Building solid programming fundamentals with C, problem solving, mathematics, and computational thinking.",
    type: "Education",
  },
  {
    period: "2025 — 2026",
    title: "Smart India Hackathon 2026 — Market Linkage",
    institutionOrContext: "Problem Statement: SIH26090",
    detail: "Working collaboratively on agricultural market linkage for farmers — designing solutions to bridge the gap between growers and direct buyers.",
    type: "Hackathon",
  },
  {
    period: "Active",
    title: "Creative Art & Visual Explorations",
    institutionOrContext: "Independent Practice",
    detail: "Illustrations, visual studies, typography and sketchbook archives exploring how visual aesthetics elevate software experiences.",
    type: "Creative",
  },
  {
    period: "Upcoming",
    title: "Software & AI Explorations",
    institutionOrContext: "Self-driven Projects",
    detail: "Venturing deeper into web development, interactive software tools, and machine learning principles.",
    type: "Skill",
  },
];

// ── PROJECTS ───────────────────────────────────────────────
export interface Project {
  id: string;
  index: string;
  title: string;
  category: "Creative Art" | "Development" | "Design" | "Experiment";
  year: string;
  description: string;
  longDescription: string;
  tags: string[];
  coverImage: string;
  accentColor: string;
  featured: boolean;
  teamSize?: string;
  role?: string;
  status?: string;
  problemId?: string;
  linkUrl?: string;
  linkLabel?: string;
}

export const projects: Project[] = [
  {
    id: "sih-market-linkage",
    index: "01",
    title: "Market Linkage — SIH 2026",
    category: "Development",
    year: "2026",
    description:
      "Smart India Hackathon 2026 project addressing agricultural market linkage and fair economic outcomes for farmers (Problem SIH26090).",
    longDescription:
      "A student project developed for Smart India Hackathon 2026 under Problem Statement SIH26090 (Market Linkage).\n\nThe project addresses the challenge of connecting farmers and producers more directly to transparent markets, reducing dependency on unnecessary intermediaries and enhancing realization prices.\n\nKey aspects:\n• Problem formulation and requirement analysis for agricultural stakeholders\n• Collaborative teamwork and agile planning under hackathon constraints\n• Architecture design focused on accessibility and simple user interaction for rural producers\n\n*Note: This is an active student project. Team details, system architecture, and repository links will be updated as milestones complete.*",
    tags: ["SIH 2026", "Problem SIH26090", "Market Linkage", "Collaborative Problem Solving"],
    coverImage: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=900&q=80",
    accentColor: "#0f766e",
    featured: true,
    problemId: "SIH26090",
    teamSize: "Student Team — Amal Jyothi College of Eng.",
    role: "Problem Research & Software Ideation",
    status: "Hackathon Participation (SIH 2026)",
  },
  {
    id: "c-programming-fundamentals",
    index: "02",
    title: "Algorithmic Studies & C Lab",
    category: "Development",
    year: "2024–",
    description:
      "A systematic collection of algorithms, data structures, and memory-conscious programs built while mastering C fundamentals.",
    longDescription:
      "A hands-on code archive documenting my foundational journey in Computer Science.\n\nCovers:\n• Structured programming in C (control flow, functions, recursion)\n• Pointers, memory allocation, and array manipulation\n• Fundamental sorting, searching, and algorithmic problem-solving\n\nMaintained with clean documentation and comments as a reference notebook.",
    tags: ["C Programming", "Algorithms", "Data Structures", "Academic"],
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80",
    accentColor: "#0f766e",
    featured: true,
    role: "Sole Developer",
    status: "Active Learning",
  },
  {
    id: "creative-visual-archive",
    index: "03",
    title: "Visual Art & Illustration Studies",
    category: "Creative Art",
    year: "2024–",
    description:
      "Personal sketches, digital illustrations, and compositions exploring line weight, negative space, and visual storytelling.",
    longDescription:
      "A personal creative practice that balances technical engineering with visual sensibility.\n\nExploring:\n• Fine-line ink work, digital illustration, and composition\n• Exploring how artistic intuition informs visual interface design\n• Visual studies examining balance, rhythm, and typography\n\nThis archive serves as a sketchbook of ideas before they become digital products.",
    tags: ["Art & Illustration", "Visual Aesthetics", "Sketches"],
    coverImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=80",
    accentColor: "#14b8a6",
    featured: true,
    role: "Artist & Illustrator",
    status: "Ongoing Practice",
  },
  {
    id: "interface-experiments",
    index: "04",
    title: "Editorial Design & Typography",
    category: "Design",
    year: "2024–",
    description:
      "Typographic hierarchy, modular grid layouts, and digital aesthetic studies inspired by contemporary editorial publications.",
    longDescription:
      "Studies in contemporary editorial web design, examining how high-contrast serif typography, generous whitespace, and restrained palettes create thoughtful digital experiences.\n\nFocus areas:\n• Contrast between classic display serif and neo-grotesque sans\n• Micro-interactions and fluid motion that respect user focus\n• Content-first editorial layouts for digital storytelling",
    tags: ["Typography", "Layout Design", "Editorial Web"],
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&q=80",
    accentColor: "#0d9488",
    featured: false,
    role: "Design & Exploration",
    status: "Ongoing",
  },
];

// ── CREATIVE PLAYGROUND ────────────────────────────────────
export interface PlaygroundItem {
  id: string;
  title: string;
  type: "Sketch" | "Illustration" | "Code" | "Visual Study" | "Idea";
  description: string;
  image: string;
  date: string;
}

export const playgroundItems: PlaygroundItem[] = [
  {
    id: "pg-1",
    title: "Ink & Silhouette Study",
    type: "Sketch",
    description: "Studies examining high contrast, line weight and negative space balance.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&q=80",
    date: "2024",
  },
  {
    id: "pg-2",
    title: "Algorithmic Symmetry",
    type: "Visual Study",
    description: "Geometric harmony and modular grids used as structural layout framing.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    date: "2024",
  },
  {
    id: "pg-3",
    title: "Terminal Minimalist Concept",
    type: "Code",
    description: "Exploring monochrome developer tools with typographic clarity.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
    date: "2024",
  },
  {
    id: "pg-4",
    title: "Color Atmosphere Study",
    type: "Illustration",
    description: "Muted earth tones and teal accents in physical and digital mediums.",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80",
    date: "2024",
  },
  {
    id: "pg-5",
    title: "Motion & Transition Study",
    type: "Idea",
    description: "Speculative sketches of easing curves and tactile interface responses.",
    image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=600&q=80",
    date: "2024",
  },
  {
    id: "pg-6",
    title: "Poster Typography Rough",
    type: "Visual Study",
    description: "Juxtaposing expressive display serifs against clean informational tags.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
    date: "2024",
  },
];

// ── SKILLS & TOOLS (Honest Learning vs. Established) ────────
export interface SkillGroup {
  name: string;
  status: "learning" | "familiar";
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: "Currently Learning",
    status: "learning",
    skills: [
      "C Programming",
      "Programming Fundamentals",
      "Data Structures & Algorithms",
      "Git & Version Control",
    ],
  },
  {
    name: "Creative & Art",
    status: "familiar",
    skills: [
      "Art & Illustration",
      "Visual Composition",
      "Typography & Layout",
      "Visual Aesthetics",
    ],
  },
  {
    name: "Interests & Exploring",
    status: "learning",
    skills: [
      "Software Development",
      "Artificial Intelligence",
      "Startups & Entrepreneurship",
      "Creative Technology",
    ],
  },
  {
    name: "Working Principles",
    status: "familiar",
    skills: [
      "Curious Problem Decomposition",
      "Clear Communication",
      "Team Collaboration",
      "Attention to Detail",
    ],
  },
];

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = skillGroups.map((g) => ({
  name: g.name,
  skills: g.skills,
}));
