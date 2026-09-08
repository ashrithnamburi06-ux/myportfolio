export interface NavItem {
  label: string;
  href: string;
  iconName: string;
}

export interface TechItem {
  name: string;
  icon: string;
  category?: string;
  level?: string;
}

export interface StatItem {
  number: string;
  label: string;
  sublabel?: string;
  icon: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  category: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  period?: string;
  credentialUrl?: string;
  category: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  status: string;
  organization: string;
  period: string;
  description: string;
}

export interface FeaturedRecognitionItem {
  title: string;
  mainTitle: string;
  description: string;
  issuer: string;
  period: string;
  story: string;
  letterPath?: string;
}

export interface ProjectItemConfig {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  isFreelance?: boolean;
  projectTypeBadge?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  featured: boolean;
  image?: string;
  detailUrl?: string;
  liveDemoUrl: string;
  githubUrl?: string;
}

export interface PortfolioConfig {
  name: string;
  fullName: string;
  studentId: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  title: string;
  badgeText: string;
  introduction: {
    part1: string;
    emphasis: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    instagram: string;
    email: string;
    phone: string;
    location: string;
  };
  resumeUrl: string;
  resumePdfUrl: string;
  navItems: NavItem[];
  technologies: TechItem[];
  stats: StatItem[];
  projects: ProjectItemConfig[];
  annotation: {
    line1: string;
    line2: string;
  };
  education: {
    institution: string;
    degree: string;
    timeline: string;
    cgpa: string;
    studentId: string;
  };
  experiences: ExperienceItem[];
  achievementsList: AchievementItem[];
  certifications: CertificationItem[];
  featuredRecognition: FeaturedRecognitionItem;
  keyFeatures: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const portfolioConfig: PortfolioConfig = {
  name: "Ashrith Krishna Namburi",
  fullName: "Ashrith Krishna Namburi",
  studentId: "2300033155",
  firstName: "Ashrith",
  middleName: "Krishna",
  lastName: "Namburi",
  title: "Full Stack Developer",
  badgeText: "🚀 Welcome to my personal portfolio",
  introduction: {
    part1: "I am a Computer Science Engineering student passionate about building scalable, high-performance web applications and digital solutions. Experienced in ",
    emphasis: "React, Next.js, Node.js, Python, and modern cloud ecosystems."
  },
  socialLinks: {
    github: "https://github.com/ashrithnamburi06-ux",
    linkedin: "https://www.linkedin.com/in/namburi-ashrith-krishna-057b95397/",
    instagram: "https://www.instagram.com/__ashrith_namburi_06/",
    email: "mailto:ashrithnamburi06@gmail.com",
    phone: "+91 (Verified on request)",
    location: "Vijayawada, India"
  },
  resumeUrl: "/resume",
  resumePdfUrl: "/resume/Ashrith-Namburi-Resume.pdf",
  navItems: [
    { label: "Home", href: "/", iconName: "Home" },
    { label: "About", href: "/about", iconName: "User" },
    { label: "Projects", href: "/projects", iconName: "Folder" },
    { label: "Skills", href: "/skills", iconName: "Code" },
    { label: "Experience", href: "/experience", iconName: "Briefcase" },
    { label: "Achievements", href: "/achievements", iconName: "Trophy" },
    { label: "Contact", href: "/contact", iconName: "Mail" }
  ],
  technologies: [
    { name: "React", icon: "React" },
    { name: "Next.js", icon: "Next.js" },
    { name: "TypeScript", icon: "TypeScript" },
    { name: "Node.js", icon: "Node.js" },
    { name: "Python", icon: "Python" },
    { name: "Django", icon: "Django" },
    { name: "SQL", icon: "SQL" },
    { name: "MySQL", icon: "MySQL" }
  ],
  stats: [
    { number: "2+", label: "Years of Coding Experience", icon: "Code" },
    { number: "5+", label: "Projects Completed", icon: "Briefcase" },
    { number: "9.16", label: "CGPA", sublabel: "KL University", icon: "GraduationCap" },
    { number: "Always", label: "Learning & Improving", icon: "Trophy" }
  ],
  projects: [
    {
      id: "kl-cse-capstone-management",
      title: "KL CSE Capstone Management & Evaluation Portal",
      subtitle: "Role-Based Capstone Project Management, Assignment, Evaluation & Academic Review Platform",
      category: "Featured Academic ERP & Evaluation Platform",
      description: "Designed and engineered a role-based capstone management platform that centralizes student/team assignments, evaluator workflows, rubric-driven assessments, attendance, review cycles, and administrative evaluation tracking.",
      highlights: ["Role-Based Access (5 Roles)", "Deterministic Identity Resolution", "Rubric-Driven Assessments", "Cross-Evaluator Mark Isolation", "Bulk CSV/XLSX Sync"],
      technologies: ["React", "Vite", "Firebase Auth", "Cloud Firestore", "Tailwind CSS", "PapaParse", "jsPDF"],
      featured: true,
      detailUrl: "/projects/kl-cse-capstone-management",
      liveDemoUrl: "https://capstone-psi-topaz.vercel.app/login",
      githubUrl: "https://github.com/reviewportalklu-cse2/capstone"
    },
    {
      id: "gr-styles",
      title: "GR STYLES",
      subtitle: "Modern Fashion E-Commerce Web Platform",
      category: "FREELANCING PROJECT",
      isFreelance: true,
      projectTypeBadge: "Freelancing Project",
      description: "A full-stack, responsive and feature-rich online shopping platform built with Python, Django, MySQL, and modern web UI technologies.",
      highlights: ["100% Responsive", "Secure Auth", "Fast Load Time", "Scalable Architecture"],
      technologies: ["Python", "Django", "HTML5", "CSS3", "JavaScript", "MySQL", "Bootstrap"],
      featured: true,
      image: "/images/gr-styles-mockup.png",
      detailUrl: "/projects/gr-styles",
      liveDemoUrl: "https://www.grstyles.com/",
      githubUrl: "https://github.com/ashrithnamburi06-ux"
    },
    {
      id: "dealrix",
      title: "Dealrix",
      subtitle: "Real-World Deals & Discounts Web Application",
      category: "Full-Stack Web App",
      description: "Real-time deal aggregation and discount discovery web platform enabling users to browse, filter, and track regional shopping offers.",
      highlights: ["Real-time Aggregation", "RESTful API", "User Bookmarks", "SQL Database"],
      technologies: ["Node.js", "Express.js", "React", "SQL", "Supabase"],
      featured: false,
      detailUrl: "/projects/dealrix",
      liveDemoUrl: "https://www.dealrix.in/",
      githubUrl: "https://github.com/ashrithnamburi06-ux"
    },
    {
      id: "ai-showcase",
      title: "Google Gen AI Showcase",
      subtitle: "Intelligent Generative AI Web Application",
      category: "AI & Machine Learning",
      description: "Web application developed during the Google Generative AI Virtual Internship, integrating LLM APIs and prompt engineering pipelines.",
      highlights: ["Generative Models", "Prompt Pipelines", "Google Cloud", "Fast Execution"],
      technologies: ["Python", "AWS", "Node.js", "Express.js"],
      featured: false,
      detailUrl: "/projects/ai-showcase",
      liveDemoUrl: "https://github.com/ashrithnamburi06-ux",
      githubUrl: "https://github.com/ashrithnamburi06-ux"
    },
    {
      id: "developer-portfolio",
      title: "Personal Developer Portfolio",
      subtitle: "High-Performance Portfolio & Case Studies",
      category: "Web Engineering",
      description: "Custom personal developer portfolio engineered with Next.js 14+ App Router, TypeScript, Tailwind CSS, and Framer Motion.",
      highlights: ["App Router", "TypeScript", "Tailwind CSS", "100% Responsive"],
      technologies: ["Next.js", "React", "Python", "SQL"],
      featured: false,
      detailUrl: "/projects/developer-portfolio",
      liveDemoUrl: "https://myportfolio-eight-ecru-21.vercel.app/",
      githubUrl: "https://github.com/ashrithnamburi06-ux"
    }
  ],
  annotation: {
    line1: "Passionate",
    line2: "Problem Solver"
  },
  education: {
    institution: "KL University",
    degree: "B.Tech in Computer Science Engineering",
    timeline: "2023 - 2027",
    cgpa: "9.16",
    studentId: "2300033155"
  },
  experiences: [
    {
      id: "freelance-dev",
      role: "Freelance Full Stack Developer",
      organization: "Full Stack Development",
      category: "Contract / Independent",
      period: "JAN 2025 — PRESENT",
      responsibilities: [
        "Requirement analysis and technical specification design for client projects",
        "Full-stack development using React.js, Next.js, Node.js, Express.js, and Python",
        "REST API architecture, database query design, and front-end state management",
        "Comprehensive testing, debugging, deployment, and post-launch technical support",
        "Client communication, feedback iteration, and change-request handling"
      ],
      technologies: ["React.js", "Next.js", "Node.js", "Express.js", "REST APIs", "Python", "AWS"]
    },
    {
      id: "google-genai-intern",
      role: "Google Generative AI Virtual Internship",
      organization: "EduSkills",
      category: "Generative AI / Google Cloud",
      period: "MAY 2025 — JUL 2025",
      responsibilities: [
        "Developed AI-powered application components using Google Cloud Platform tools",
        "Worked with Vertex AI and Gemini models for intelligent text and code processing",
        "Implemented structured prompt engineering workflows and REST API integration",
        "Followed a structured milestone-driven framework with team collaboration and technical documentation"
      ],
      technologies: ["Google Cloud", "Vertex AI", "Gemini", "Prompt Engineering"]
    }
  ],
  achievementsList: [
    {
      id: "sih-2024",
      title: "Smart India Hackathon (SIH)",
      status: "Qualified for the Internal Round",
      organization: "KL University / Government of India Initiative",
      period: "2024",
      description: "Qualified for the internal evaluation round by presenting an innovative technical software solution for real-world problem statements."
    }
  ],
  certifications: [
    {
      id: "oci-ai-assoc",
      title: "Oracle Cloud Infrastructure AI Foundations Associate",
      issuer: "Oracle Cloud",
      period: "2024",
      category: "Cloud & AI"
    },
    {
      id: "google-genai-cert",
      title: "Google Generative AI Virtual Internship",
      issuer: "EduSkills / Google Cloud",
      period: "2025",
      category: "Generative AI"
    },
    {
      id: "react-coursera",
      title: "Developing Frontend Apps with React",
      issuer: "Coursera / IBM",
      period: "2024",
      category: "Frontend Engineering"
    },
    {
      id: "infosys-python",
      title: "Infosys Springboard Certification in Python",
      issuer: "Infosys Springboard",
      period: "2024",
      category: "Programming & Data Structures"
    },
    {
      id: "hackerrank-ps",
      title: "HackerRank 5-Star Problem Solving Badge",
      issuer: "HackerRank",
      period: "2024",
      category: "Data Structures & Algorithms"
    },
    {
      id: "nptel-elite",
      title: "NPTEL Online Certification (Elite)",
      issuer: "IIT / NPTEL",
      period: "2023",
      category: "Computer Science Principles"
    }
  ],
  featuredRecognition: {
    title: "FEATURED RECOGNITION",
    mainTitle: "Department Website Development",
    description: "Built a website for the college department and received formal appreciation from the Head of Department.",
    issuer: "KL University Head of Department (HOD)",
    period: "2024",
    story: "Initiated and engineered a dedicated website for the college academic department, taking full responsibility from design to deployment. Delivered a fully functional, user-friendly platform for department faculty and students, earning official written appreciation from the Head of Department."
  },
  keyFeatures: [
    { title: "Product Catalog", description: "Browse & filter products seamlessly", icon: "ShoppingCart" },
    { title: "User Authentication", description: "Secure login & registration", icon: "UserCheck" },
    { title: "Payment Integration", description: "Safe & reliable transactions", icon: "CreditCard" },
    { title: "Order Tracking", description: "Real-time order status updates", icon: "Truck" },
    { title: "Responsive Design", description: "Works on all devices", icon: "Smartphone" }
  ]
};
