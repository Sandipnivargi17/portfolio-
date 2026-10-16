export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Frontend' | 'System' | 'Academic Guidance';
  description: string;
  highlights: string[];
  technologies: string[];
  imageUrl: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Course {
  id: string;
  title: string;
  category: 'web-dev' | 'cs-core' | 'programming' | 'freelancing';
  level: string;
  duration: string;
  priceTag: string; // e.g. "₹[Affordable]" or "₹999 (Introductory)"
  originalPrice?: string;
  badge?: string;
  shortDescription: string;
  topics: string[];
  features: string[];
  isEnrolling: boolean;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  ctaText: string;
  ctaIntent: string; // prefill contact form
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: 'Core' | 'Proficient' | 'Familiar'; experience?: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  review: string;
  rating: number;
  avatarUrl?: string;
  isPlaceholder?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const portfolioConfig = {
  personal: {
    name: "Sandip Nivargi",
    shortName: "Sandip",
    logoText: "Sandip Nivargi",
    monogram: "SN",
    role: "Computer Science Engineer | Freelancer | Web Developer | Tech Educator",
    headlineBadge: "Available for Freelance Projects & Course Enquiries",
    headlineLead: "Hi, I'm Sandip 👋",
    headlineTitle: "Computer Science Engineer & Tech Freelancer",
    shortBrandStatement: "Building modern digital experiences and making technology affordable and accessible.",
    heroTagline: "Turning Ideas Into Digital Solutions & Skills Into Careers.",
    supportingText: "I build modern websites, digital solutions, and practical learning experiences while helping students develop real-world technology skills.",
    aboutBio: "Hi, I'm Sandip Nivargi, a Computer Science Engineering student and technology enthusiast passionate about building digital solutions and helping others learn technology. I specialize in full-stack web development, client freelancing, and practical tech education aimed at empowering students with real-world programming fundamentals.",
    location: "India",
    education: "B.E. / B.Tech in Computer Science Engineering",
    availability: "Available for Q2/Q3 Freelance Projects & New Course Batches",
    avatarImage: "/src/assets/images/sandip_portrait_tech_1792166941169.jpg",
    emailPlaceholder: "sandipnivargi.work@gmail.com",
    phonePlaceholder: "+91 ••••• ••••• (Available on request)",
    whatsappPlaceholder: "https://wa.me/?text=Hi%20Sandip,%20I%20would%20like%20to%20discuss%20a%20project%20or%20course",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com"
    }
  },

  quickStats: [
    { label: "Projects Delivered", value: "10+", suffix: "Projects", note: "Web applications & prototypes" },
    { label: "Core Technologies", value: "5+", suffix: "Tech Stacks", note: "Modern JavaScript, React, Node.js" },
    { label: "Course Accessibility", value: "Affordable", suffix: "Pricing", note: "Designed specifically for students" },
    { label: "Learning Focus", value: "100%", suffix: "Hands-on", note: "Zero fluff, real project building" }
  ],

  brandStatement: {
    title: "More Than a Developer",
    quote: "Technology is not only about writing code. It's about solving problems, creating opportunities, and sharing knowledge. Through freelancing and education, I aim to build useful digital solutions while helping others develop practical technology skills."
  },

  services: [
    {
      id: "website-dev",
      number: "01",
      title: "Website Development",
      description: "Build high-performance, modern, and fully responsive websites crafted to convert visitors and represent your personal or business brand flawlessly.",
      deliverables: [
        "Business & Startup Websites",
        "Student & Professional Portfolios",
        "Landing Pages with SEO Optimization",
        "Fast-Loading Mobile Responsive Layouts"
      ],
      technologies: ["HTML5", "CSS3 / Tailwind", "JavaScript", "React"],
      ctaText: "Start a Website Project",
      ctaIntent: "Website Development"
    },
    {
      id: "webapp-dev",
      number: "02",
      title: "Web Application Development",
      description: "Develop robust, full-stack web applications with interactive frontends, secure backend APIs, and reliable database architecture.",
      deliverables: [
        "Full-Stack Frontend & Backend",
        "RESTful API Integration & Custom Endpoints",
        "Database Architecture & Query Optimization",
        "Authentication & Role-Based Access Control"
      ],
      technologies: ["React", "Node.js", "Express.js", "MySQL / MongoDB"],
      ctaText: "Build My Web App",
      ctaIntent: "Web Application Development"
    },
    {
      id: "portfolio-branding",
      number: "03",
      title: "Portfolio & Personal Branding",
      description: "Stand out in tech hiring and client pitches with a custom-crafted portfolio that effectively highlights your code, projects, and strengths.",
      deliverables: [
        "Custom Developer & Designer Portfolios",
        "Resume & Career Showcase Websites",
        "Interactive Project Demos & Case Studies",
        "Clean UX & Mobile Touch Optimization"
      ],
      technologies: ["React", "Tailwind CSS", "Motion", "Vite"],
      ctaText: "Build My Portfolio",
      ctaIntent: "Portfolio & Personal Branding"
    },
    {
      id: "cs-guidance",
      number: "04",
      title: "Computer Science Projects & Mentoring",
      description: "Structured technical guidance, code architecture advice, and hands-on mentoring for academic computer science projects and software engineering fundamentals.",
      deliverables: [
        "Architectural Guidance & Code Reviews",
        "Database Schema Design & Query Guidance",
        "Project Documentation & Viva Prep Support",
        "Debugging Assistance & Best Practice Mentorship"
      ],
      technologies: ["Web Dev", "Python", "JavaScript", "Database (SQL)"],
      ctaText: "Get Project Guidance",
      ctaIntent: "Computer Science Project Guidance"
    },
    {
      id: "technical-content",
      number: "05",
      title: "Technical Content & Educational Writing",
      description: "Clear, engaging tutorials, technical documentation, and step-by-step guides that make complex programming and CS concepts simple to master.",
      deliverables: [
        "Developer Tutorials & Code Walkthroughs",
        "API & Project Documentation",
        "Educational Study Guides & Cheat Sheets",
        "Visual CS Concepts & Diagrams"
      ],
      technologies: ["Markdown", "Technical Writing", "CS Pedagogy"],
      ctaText: "Request Technical Content",
      ctaIntent: "Technical Content"
    }
  ] as Service[],

  courses: [
    {
      id: "web-development-foundations",
      title: "Web Development Mastery",
      category: "web-dev",
      level: "Beginner → Intermediate",
      duration: "6 Weeks (Live + Hands-on)",
      priceTag: "₹[Affordable Pricing]",
      originalPrice: "₹[Market Rate]",
      badge: "Most Popular",
      shortDescription: "Learn how to build modern responsive websites from scratch and launch your first real projects online.",
      topics: [
        "HTML5 Semantic Architecture",
        "Modern CSS3, Flexbox & CSS Grid",
        "JavaScript ES6+ Core & DOM Manipulation",
        "Responsive & Mobile-First Design",
        "Git & GitHub Version Control",
        "React Basics & Component-Driven UI",
        "Building & Deploying 3 Real-World Projects"
      ],
      features: [
        "Interactive live coding sessions",
        "Hands-on project assignments",
        "Personalized code reviews",
        "Course completion certificate"
      ],
      isEnrolling: true
    },
    {
      id: "cs-fundamentals-core",
      title: "Computer Science Fundamentals",
      category: "cs-core",
      level: "Undergraduate / Beginner",
      duration: "8 Weeks (Conceptual + Practical)",
      priceTag: "₹[Student Friendly]",
      originalPrice: "₹[Market Rate]",
      badge: "Core CS",
      shortDescription: "Master essential computer science concepts needed for exams, interviews, and deep software comprehension.",
      topics: [
        "Programming Logic & Algorithm Basics",
        "Data Structures (Arrays, Lists, Stacks, Queues)",
        "DBMS & SQL Query Writing",
        "Operating Systems Concepts & Process Management",
        "Computer Networks Basics & Protocols",
        "Software Engineering Principles",
        "Interview & Viva Preparation Drills"
      ],
      features: [
        "Clear visual concept breakdowns",
        "Curated interview questions bank",
        "Comprehensive revision notes",
        "Doubt clearing support"
      ],
      isEnrolling: true
    },
    {
      id: "programming-for-beginners",
      title: "Programming for Absolute Beginners",
      category: "programming",
      level: "Zero to Beginner",
      duration: "4 Weeks (Self-paced + Q&A)",
      priceTag: "₹[Pocket Friendly]",
      originalPrice: "₹[Market Rate]",
      badge: "Starter",
      shortDescription: "Demystify coding logic and write your first programs with confidence using Python or C fundamentals.",
      topics: [
        "Programming Logic & Mental Models",
        "Variables, Data Types & Operators",
        "Conditional Logic & Branching",
        "Loops (For, While) & Iteration",
        "Functions, Scope & Modularity",
        "Arrays & String Manipulation",
        "Step-by-Step Problem Solving Drills"
      ],
      features: [
        "Zero prior experience required",
        "Bite-sized daily practice drills",
        "Direct guidance & mentorship",
        "Interactive quiz challenges"
      ],
      isEnrolling: true
    },
    {
      id: "freelancing-and-webdev",
      title: "Freelancing & Client Web Development",
      category: "freelancing",
      level: "Intermediate",
      duration: "4 Weeks (Action Oriented)",
      priceTag: "₹[Accessible Value]",
      originalPrice: "₹[Market Rate]",
      badge: "Career Booster",
      shortDescription: "Learn how to turn your web skills into paid freelance projects, acquire clients, and deliver quality work.",
      topics: [
        "Finding & Pitching Real Freelance Clients",
        "Building a High-Converting Portfolio",
        "Crafting Winning Proposals & Contracts",
        "Pricing Projects & Negotiation Tactics",
        "Client Communication & Scope Management",
        "Efficient Website Development Workflows",
        "Final Project Delivery & Post-Launch Support"
      ],
      features: [
        "Proposal & contract templates",
        "Client communication scripts",
        "Portfolio teardown & audit",
        "Step-by-step freelance roadmap"
      ],
      isEnrolling: true
    }
  ] as Course[],

  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5 & Semantic Markup", level: "Core" },
        { name: "CSS3 & Modern Layouts", level: "Core" },
        { name: "JavaScript (ES6+)", level: "Core" },
        { name: "React.js", level: "Core" },
        { name: "Tailwind CSS", level: "Core" },
        { name: "Responsive Design", level: "Core" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: "Proficient" },
        { name: "Express.js", level: "Proficient" },
        { name: "RESTful APIs", level: "Proficient" },
        { name: "Server-Side Logic", level: "Proficient" }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MySQL", level: "Proficient" },
        { name: "MongoDB", level: "Proficient" },
        { name: "Database Design & Queries", level: "Proficient" }
      ]
    },
    {
      category: "Programming",
      skills: [
        { name: "Python", level: "Proficient" },
        { name: "C Programming", level: "Proficient" },
        { name: "C++ Fundamentals", level: "Familiar" },
        { name: "Data Structures Basics", level: "Proficient" }
      ]
    },
    {
      category: "Tools & Ecosystem",
      skills: [
        { name: "Git & Version Control", level: "Core" },
        { name: "GitHub Collaboration", level: "Core" },
        { name: "VS Code & DevTools", level: "Core" },
        { name: "Vite & Build Tooling", level: "Proficient" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "travel-buddy",
      title: "Travel Buddy",
      category: "Full Stack",
      description: "A comprehensive travel-related web platform designed to help users discover destinations, plan multi-day travel itineraries, and track points of interest with an intuitive responsive interface.",
      highlights: [
        "Interactive day-by-day itinerary planner with time slots",
        "Integrated interactive destination map and location discoverability",
        "Curated attraction cards with user ratings and descriptions",
        "Responsive web design optimized for mobile travelers"
      ],
      technologies: ["React", "HTML5", "CSS3", "JavaScript", "Node.js", "MySQL"],
      imageUrl: "/src/assets/images/project_travel_buddy_1792166942431.jpg",
      liveDemoUrl: "https://travelbuddy-demo.example.com",
      githubUrl: "https://github.com/example/travel-buddy",
      featured: true
    },
    {
      id: "online-shopping-system",
      title: "Online Shopping System",
      category: "Full Stack",
      description: "A web-based shopping application demonstrating complete e-commerce product catalog management, dynamic shopping cart drawer, user authentication flow, and relational database schema design.",
      highlights: [
        "Dynamic product showcase grid with category filtering",
        "Real-time interactive shopping cart drawer with price calculations",
        "Relational database structure for orders, items, and inventory",
        "Clean, modern minimalist UI focused on customer conversion"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "MySQL"],
      imageUrl: "/src/assets/images/project_online_shopping_1792166942452.jpg",
      liveDemoUrl: "https://shop-system-demo.example.com",
      githubUrl: "https://github.com/example/online-shopping-system",
      featured: true
    },
    {
      id: "cs-learning-hub",
      title: "CS Academy Notes & Code Sandbox",
      category: "Frontend",
      description: "An educational web portal built for computer science students providing interactive algorithmic visualizers, curated subject summaries, and live code playground snippets.",
      highlights: [
        "Interactive sorting & search algorithm visualizer",
        "Searchable DBMS & OS quick reference cheat sheets",
        "Accessible dark-mode reader for long revision sessions",
        "Client-side search and tag-based filtering"
      ],
      technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      imageUrl: "/src/assets/images/sandip_portrait_tech_1792166941169.jpg",
      liveDemoUrl: "https://cs-notes-demo.example.com",
      githubUrl: "https://github.com/example/cs-learning-hub",
      featured: false
    }
  ] as Project[],

  freelancingProcess: [
    {
      step: "01",
      title: "Understand",
      subtitle: "Requirements & Strategy",
      description: "We discuss your exact goals, target audience, brand aesthetic, and feature requirements to establish a clear, realistic scope.",
      deliverable: "Project Brief & Milestone Outline"
    },
    {
      step: "02",
      title: "Plan",
      subtitle: "Architecture & Roadmap",
      description: "Creation of user flows, wireframes, chosen tech stack, database schema, and an organized sprint timeline before writing code.",
      deliverable: "System Design & Development Schedule"
    },
    {
      step: "03",
      title: "Build",
      subtitle: "Development & Testing",
      description: "Clean, modular code written with modern best practices, responsive layouts across devices, and regular progress updates.",
      deliverable: "Interactive Staging Preview"
    },
    {
      step: "04",
      title: "Deliver",
      subtitle: "Review & Deployment",
      description: "Comprehensive testing, final polish, domain setup or handover, along with clear documentation and post-launch support.",
      deliverable: "Live Production Site & Source Code"
    }
  ],

  whyChooseMe: [
    {
      id: "student-pricing",
      title: "Student-Friendly Pricing",
      description: "Affordable, transparent solutions crafted specifically with students, startups, and small businesses in mind."
    },
    {
      id: "modern-tech",
      title: "Modern Technology",
      description: "Built with current industry standards including React, clean JavaScript, Tailwind CSS, and scalable APIs."
    },
    {
      id: "responsive-design",
      title: "100% Responsive Design",
      description: "Every layout is meticulously adapted and tested across mobile phones, tablets, laptops, and ultra-wide screens."
    },
    {
      id: "clear-comm",
      title: "Clear Communication",
      description: "Simple, honest, and prompt updates at every stage. No confusing jargon or unexpected surprises."
    },
    {
      id: "practical-learning",
      title: "Practical Learning",
      description: "Courses prioritize hands-on coding and real project creation over abstract, dry theoretical memorization."
    },
    {
      id: "continuous-support",
      title: "Continuous Support",
      description: "Reliable post-delivery guidance, revision assistance, and technical mentorship whenever you need it."
    }
  ],

  testimonials: [
    {
      id: "testimonial-1",
      name: "Student Review (Placeholder)",
      role: "Web Dev Course Learner",
      organization: "Engineering Student",
      review: "Add your first student or client testimonial here. Sandip broke down complex JavaScript topics into easy-to-follow exercises that gave me the confidence to build my first portfolio.",
      rating: 5,
      isPlaceholder: true
    },
    {
      id: "testimonial-2",
      name: "Client Feedback (Placeholder)",
      role: "Startup Founder / Small Business",
      organization: "Local Services Brand",
      review: "Add your first client feedback here. The website was delivered on time, looked completely modern on mobile, and Sandip was extremely responsive throughout the process.",
      rating: 5,
      isPlaceholder: true
    },
    {
      id: "testimonial-3",
      name: "Peer Review (Placeholder)",
      role: "Classmate / Project Collaborator",
      organization: "Computer Science Dept",
      review: "Add your academic collaborator review here. Sandip's technical understanding of databases and full-stack development was instrumental during our group project sessions.",
      rating: 5,
      isPlaceholder: true
    }
  ] as Testimonial[],

  faqs: [
    {
      id: "faq-websites",
      question: "What type of websites do you build?",
      answer: "I build responsive personal portfolios, business showcase websites, educational platforms, landing pages, and interactive web applications using modern technologies like React, Node.js, and Tailwind CSS."
    },
    {
      id: "faq-pricing",
      question: "Do you provide affordable courses?",
      answer: "Yes, absolutely! All courses are purposefully designed to be budget-friendly and accessible for college students and beginners without compromising on practical quality or project depth."
    },
    {
      id: "faq-beginners",
      question: "Are the courses beginner friendly?",
      answer: "Yes. Every curriculum starts from foundational principles and progresses step-by-step toward real-world projects with dedicated doubts support, so no advanced background is needed."
    },
    {
      id: "faq-custom",
      question: "Can I hire you for a custom project?",
      answer: "Yes! Whether you need a fresh portfolio, a responsive business website, or a web application prototype, simply send a message through the contact form with your project details and budget."
    },
    {
      id: "faq-guidance",
      question: "Do you provide project guidance?",
      answer: "Yes. I provide learning-focused technical mentoring, system architecture advice, code reviews, and viva preparation support for academic and personal software engineering projects."
    },
    {
      id: "faq-contact",
      question: "How can I contact you?",
      answer: "You can reach out through the contact form on this website, send an email, or initiate a direct WhatsApp enquiry for course enrollments and freelance project requests."
    }
  ] as FAQItem[]
};
