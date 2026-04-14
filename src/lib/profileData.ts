export const profileData = {
  hero: {
    name: "Sanu Khan",
    title: "Tech Lead & Full Stack Developer",
    subtitle:
      "From small-scale freelance work to architecting enterprise platforms — React/Angular • Node/NestJS • Java/Spring • DevOps aware",
    yearsExperience: "14+",
    projectsCompleted: "150+",
    clientsServed: "50+",
    location: "Dubai, UAE",
  },

  careerTimeline: [
    {
      role: "Lead Tech Analyst",
      company: "techcarrot",
      period: "2024 - Present",
      description:
        "Leading technical initiatives on multi-tenant SaaS platforms, mentoring development teams, and architecting scalable backend systems with NestJS and Angular.",
      highlights: [
        "Designed and delivered LMS Infinity — interactive Learning Management System for enterprise training",
        "Built NeuroCRM AI — agentic CRM platform with OpenAI integration for customer workflows",
        "Mentored 5+ junior developers on full-stack best practices",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Al-Futtaim Enterprise IT",
      period: "2021 - 2024",
      description:
        "Delivered end-to-end solutions for UAE-based enterprise clients, working across Java, JavaScript, and cloud infrastructure.",
      highlights: [
        "Resolved legacy application inconsistencies across microservices",
        "Built real estate ERP system handling property management, CRM, and financials",
        "Developed multi-vendor e-commerce marketplace with advanced analytics",
      ],
    },
    {
      role: "Freelance Full Stack Developer",
      period: "2011 - 2020",
      description:
        "Bootstrapped career from small-scale projects to managing complex implementations for 50+ clients across fintech, healthcare, and SaaS.",
      highlights: [
        "Started with HTML/CSS/PHP — grew into full-stack JavaScript and backend architecture",
        "Built social network with real-time messaging (Node.js + React Native)",
        "Delivered crypto trading bot with Python FastAPI and algorithmic trading logic",
        "Mentored peers transitioning into tech roles",
      ],
    },
  ],

  skills: [
    { category: "Frontend", tech: ["JavaScript/TypeScript", "React", "Angular", "Flutter"], level: 90 },
    { category: "Backend", tech: ["Node.js/NestJS", "Java/Spring Boot", "PHP/Laravel", "Python/Django"], level: 88 },
    { category: "Databases", tech: ["PostgreSQL", "MongoDB", "MySQL"], level: 85 },
    { category: "DevOps & Cloud", tech: ["Docker", "Kubernetes", "AWS", "Azure", "CI/CD"], level: 75 },
    { category: "Emerging", tech: ["Web3/Solidity", "AI/LLMs", "Smart Contracts"], level: 60 },
  ],

  featuredProjects: [
    {
      title: "LMS Infinity",
      description:
        "Interactive, scalable Learning Management System for enterprise multi-tenant SaaS. Features gamified learning paths, real-time progress tracking, and role-based access.",
      tech: ["NestJS", "Angular", "PostgreSQL", "Firebase", "Docker"],
      status: "In Progress",
      year: "2025",
    },
    {
      title: "NeuroCRM AI",
      description:
        "AI-powered agentic CRM platform automating customer interactions, lead scoring, and sales workflows with OpenAI integration and intelligent assistants.",
      tech: ["React", "NestJS", "PostgreSQL", "OpenAI API", "Redis"],
      status: "In Progress",
      year: "2025",
    },
    {
      title: "MedLab CRM",
      description: "Complete laboratory management system with patient tracking, test management, and comprehensive reporting.",
      tech: ["NestJS", "Angular", "PostgreSQL", "Flutter"],
      status: "In Progress",
      year: "2024",
    },
    {
      title: "Real Estate ERP",
      description: "Comprehensive property management system with CRM, inventory tracking, and financial modules.",
      tech: ["PHP", "React", "MySQL", "Docker"],
      status: "Completed",
      year: "2023",
    },
  ],

  certifications: [
    {
      title: "Introduction to Cyber security",
      issuer: "Simplilearn",
      date: "Apr 2023",
      icon: "SEC",
    },
    {
      title: "React – The Complete Guide (incl Hooks, React Router, Redux)",
      issuer: "Udemy",
      date: "Jan 2022",
      icon: "EDU",
    },
    {
      title: "JavaScript (Intermediate)",
      issuer: "HackerRank",
      date: "Dec 2021",
      icon: "DEV",
    },
    {
      title: "Problem Solving (Intermediate)",
      issuer: "HackerRank",
      date: "Feb 2022",
      icon: "DEV",
    },
    {
      title: "SQL (Intermediate)",
      issuer: "HackerRank",
      date: "Feb 2022",
      icon: "DEV",
    },
    {
      title: "Python (Basic)",
      issuer: "HackerRank",
      date: "Jan 2022",
      icon: "DEV",
    },
  ],

  contact: {
    email: "khan.sanukhan@outlook.com",
    phone: "+971-563-860-850",
    github: "https://github.com/sanukhandev",
    linkedin: "https://linkedin.com/in/sanukhandev",
    kofi: "https://ko-fi.com/sanukhan",
  },
};

export const scrollNarrative = {
  title: "Architect of the Web",
  subtitle: "A Journey from Developer to Tech Lead",
  lines: [
    {
      text: "Started with small-scale freelance work in 2011.",
      position: "upper-left",
      stage: [0.05, 0.15, 0.25], // fade in/out progress
    },
    {
      text: "Built solutions for 50+ clients across continents.",
      position: "upper-right",
      stage: [0.2, 0.35, 0.5],
    },
    {
      text: "Now architecting enterprise-scale platforms.",
      position: "center",
      stage: [0.45, 0.55, 0.75],
    },
    {
      text: "Tech Lead, Full Stack Developer.",
      position: "center",
      stage: [0.75, 0.85, 0.95],
    },
  ],
  finalReveal: {
    name: "I'M SANU KHAN",
    subtext: "Extended Full Stack Developer",
    ctaText: "Buy me a coffee",
    ctaUrl: "https://ko-fi.com/sanukhan",
  },
};
