import { Project, ExperienceItem, EducationItem, SkillCategory, Certification } from '../types/portfolio';

export const personalInfo = {
  name: 'Vikas Ganjure',
  firstName: 'Vikas',
  lastName: 'Ganjure',
  headline: 'Software Engineer & Java Backend Developer',
  location: 'Pune, Maharashtra, India',
  email: 'vikasganjure2002@gmail.com',
  status: 'Open to Software & Backend Opportunities',
  statusShort: 'Available for hire',
  github: 'https://github.com/vikasvganjure',
  linkedin: 'https://www.linkedin.com/in/vikas-ganjure',
  resumeUrl: 'https://docs.google.com/document/d/1Fr_gskWlNbUpA7nM5TNk2KXKx257MPDU/edit?usp=drive_link&ouid=107272028772717210170&rtpof=true&sd=true',
  bio: '2025 Computer Science Engineering graduate with proven hands-on expertise in Java, Spring Boot microservices, Spring Security, JWT authentication, REST APIs, relational databases (SQL/MySQL), and Linux server deployment.',
  roles: [
    'Java Backend Developer',
    'Spring Boot Specialist',
    'Software Engineer',
    'REST API Architect',
    'Full Stack Web Developer'
  ],
  stats: [
    { label: 'Degree CGPA', value: '8.16', detail: 'B.E. Computer Science' },
    { label: 'Work & Internships', value: '4+', detail: 'Industry Engagements' },
    { label: 'Core Tech Stacks', value: '12+', detail: 'Java, Spring, SQL, React' },
    { label: 'Certifications', value: '6+', detail: 'HackerRank, NPTEL, TCS' },
  ],
  emailJs: {
    serviceId: 'service_sxhkdba',
    templateId: 'template_9fbmhxi',
    publicKey: 'tKcnAF73jMw0tRWFB',
  }
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Backend & Core',
    description: 'Enterprise backend architecture, object-oriented systems, and clean code principles',
    skills: [
      { name: 'Core Java & OOP', level: 'Advanced', highlight: true },
      { name: 'Spring Boot', level: 'Advanced', highlight: true },
      { name: 'Spring Security & JWT', level: 'Advanced', highlight: true },
      { name: 'RESTful API Design', level: 'Advanced', highlight: true },
      { name: 'JDBC & Hibernate', level: 'Proficient' },
      { name: 'Java Collections & Streams', level: 'Advanced' },
      { name: 'Exception Handling', level: 'Advanced' },
      { name: 'Servlets & JSP', level: 'Proficient' },
    ]
  },
  {
    name: 'Database & Storage',
    description: 'Relational data modeling, query optimization, and persistent stores',
    skills: [
      { name: 'MySQL', level: 'Advanced', highlight: true },
      { name: 'SQL Query Tuning', level: 'Proficient' },
      { name: 'Database Normalization', level: 'Advanced' },
      { name: 'Schema Architecture', level: 'Proficient' },
      { name: 'Transaction Management', level: 'Proficient' },
    ]
  },
  {
    name: 'Frontend & Web',
    description: 'Responsive, accessible, and high-performance user interfaces',
    skills: [
      { name: 'TypeScript', level: 'Proficient', highlight: true },
      { name: 'React.js', level: 'Proficient', highlight: true },
      { name: 'JavaScript (ES6+)', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced', highlight: true },
      { name: 'HTML5 & CSS3', level: 'Advanced' },
      { name: 'Responsive Web Design', level: 'Advanced' },
    ]
  },
  {
    name: 'DevOps, Cloud & Linux',
    description: 'Server configuration, environments, and deployment pipelines',
    skills: [
      { name: 'Linux Server Deployment', level: 'Advanced', highlight: true },
      { name: 'Bash & Shell Basics', level: 'Proficient' },
      { name: 'Git & GitHub Workflows', level: 'Advanced' },
      { name: 'Maven Build Tool', level: 'Proficient' },
      { name: 'Postman API Testing', level: 'Advanced' },
      { name: 'VS Code & Eclipse IDE', level: 'Advanced' },
    ]
  },
  {
    name: 'Languages & Fundamentals',
    description: 'Foundational computer science principles, algorithms, and languages',
    skills: [
      { name: 'Java', level: 'Advanced', highlight: true },
      { name: 'Python', level: 'Intermediate' },
      { name: 'C / C++', level: 'Intermediate' },
      { name: 'PHP', level: 'Intermediate' },
      { name: 'Data Structures & Algorithms', level: 'Proficient' },
      { name: 'Role-Based Access Control (RBAC)', level: 'Advanced' },
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'rbac-auth-system',
    title: 'Auth & Role-Based Access Control System',
    category: 'Backend',
    tagline: 'Enterprise-grade authentication & authorization microservice with JWT and granular roles',
    description: 'Architected and implemented a secure authentication and authorization microservice handling role-based permission evaluation (USER, ADMIN) with stateless JWT tokens and cryptographic password hashing.',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'React', 'TypeScript'],
    features: [
      'Stateless JWT issuance, validation, and token refresh workflows',
      'Granular USER and ADMIN privilege management with Spring Security filters',
      'Restricted API routes with custom method-level security annotations',
      'Integrated React TypeScript dashboard with protected routes and bearer interceptors'
    ],
    githubUrl: 'https://github.com/vikasvganjure',
    featured: true,
  },
  {
    id: 'restaurant-management-system',
    title: 'Restaurant Management & Billing System',
    category: 'Full Stack',
    tagline: 'End-to-end table reservation, automated food ordering, and real-time invoice generation',
    description: 'Engineered a high-throughput operational software system for restaurant management featuring dynamic menu administration, table billing calculation, and real-time inventory ledger connectivity.',
    technologies: ['Java', 'MySQL', 'JDBC', 'HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Automated bill calculation incorporating tax and category breakdowns',
      'Normalized multi-table relational MySQL schema with JDBC connection pooling',
      'Menu item catalog management with instant price updates and availability toggles',
      'Clean interactive order-taking interface optimized for high-speed terminal entry'
    ],
    githubUrl: 'https://github.com/vikasvganjure',
    featured: true,
  },
  {
    id: 'malicious-post-detection',
    title: 'Malicious Social Media Post Detection',
    category: 'Security / ML',
    tagline: 'Machine learning and NLP pipeline classifying toxic disinformation, spam, and dangerous URLs',
    description: 'Built a predictive intelligence web service utilizing Natural Language Processing (NLP) and supervised classification algorithms to analyze online content and detect phishing links and disinformation vectors.',
    technologies: ['Python', 'Flask', 'MySQL', 'Machine Learning', 'NLP', 'Scikit-Learn'],
    features: [
      'Text tokenization, lemmatization, and TF-IDF vectorization preprocessing pipeline',
      'Heuristic URL reputation parsing for early malware/phishing detection',
      'REST API backend built with Flask delivering sub-second classification verdicts',
      'Interactive audit dashboard displaying classification confidence scores'
    ],
    githubUrl: 'https://github.com/vikasvganjure',
    featured: true,
  },
  {
    id: 'portfolio-website',
    title: 'Modern High-Performance Developer Portfolio',
    category: 'Frontend',
    tagline: 'Ultra-responsive React + TypeScript + Tailwind CSS showcase with interactive developer tools',
    description: 'Designed and engineered an elite engineering portfolio using React 18, TypeScript, and Tailwind CSS. Features dynamic typewriter effects, interactive code terminal preview, and zero-stock-image developer aesthetics.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'EmailJS'],
    features: [
      'Zero bloated imagery: replaced with interactive terminal code cards and metric chips',
      'Strict TypeScript typings and modular atomic component architecture',
      'Seamless EmailJS inquiry gateway with instant client-side validation',
      'Lighthouse 100 performance profile with responsive fluid typography'
    ],
    githubUrl: 'https://github.com/vikasvganjure/vikas-ganjure-portfolio',
    liveUrl: 'https://visionary-gumption-f306f2.netlify.app/',
    featured: false,
  }
];

export const experience: ExperienceItem[] = [
  {
    id: 'growstats',
    role: 'Junior Software Engineer',
    company: 'Growstats Media Pvt. Ltd.',
    location: 'Pune, Maharashtra',
    period: 'Apr 2026 – Present',
    current: true,
    type: 'Full-time',
    skills: ['Web Applications', 'Linux Server Deployment', 'HTML5/CSS3', 'JavaScript', 'Server Config'],
    points: [
      'Develop and maintain modern, production-grade web applications utilizing HTML5, CSS3, JavaScript, and backend endpoints.',
      'Configure Linux production servers, Apache/Nginx web servers, and manage zero-downtime application deployments.',
      'Design clean, responsive UI templates prioritizing accessibility, fast loading times, and cross-browser consistency.',
      'Collaborate across cross-functional engineering teams to deliver client-facing web solutions on tight schedules.'
    ]
  },
  {
    id: 'jspiders',
    role: 'Java Full Stack Intern',
    company: 'J-Spiders Training Institute',
    location: 'Thane, Maharashtra',
    period: 'Jan 2025 – Jan 2026',
    current: false,
    type: 'Internship',
    skills: ['Core Java', 'Spring Boot', 'Spring Security', 'JDBC', 'MySQL', 'REST APIs'],
    points: [
      'Completed intensive professional immersion in Core Java, Advanced Java, Spring Boot ecosystem, and enterprise architecture.',
      'Built production-like RESTful APIs and connected relational data models using JDBC and Spring Data JPA.',
      'Implemented role-based security configurations, JWT token mechanisms, and unit-tested core backend logic.',
      'Collaborated under senior technical mentors to architect full-stack capstone applications.'
    ]
  },
  {
    id: 'octanet',
    role: 'Web Development Intern',
    company: 'Octanet Services Pvt. Ltd.',
    location: 'Remote / Hybrid',
    period: 'Apr 2024 – May 2024',
    current: false,
    type: 'Internship',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Cross-Browser Testing'],
    points: [
      'Engineered interactive, mobile-responsive web pages applying modern CSS layout methodologies (Flexbox and Grid).',
      'Resolved cross-browser layout inconsistencies and enhanced rendering speeds across mobile and desktop devices.',
      'Adhered to semantic markup conventions and clean JavaScript standards for high-fidelity interactive elements.'
    ]
  },
  {
    id: 'mountreach',
    role: 'Android Developer Intern',
    company: 'Mountreach Solutions',
    location: 'Amravati, Maharashtra',
    period: 'Nov 2021 – Mar 2022',
    current: false,
    type: 'Internship',
    skills: ['Java', 'Android SDK', 'Mobile UI Components', 'XML Layouts'],
    points: [
      'Assisted the mobile engineering squad in developing modular native Android components in Java.',
      'Implemented mobile UI screens adhering to Android Material Design guidelines and responsive screen densities.',
      'Gained foundational real-world experience in software debugging, lifecycle management, and application workflows.'
    ]
  }
];

export const education: EducationItem[] = [
  {
    id: 'be-cse',
    degree: 'B.E. in Computer Science Engineering',
    institution: 'Babasaheb Naik College of Engineering (BNCOE)',
    location: 'Pusad, Maharashtra',
    period: '2022 – 2025',
    score: '8.16 CGPA',
    scoreType: 'CGPA',
    highlights: [
      'Specialization in Core Software Engineering, Database Management Systems, and Web Technologies',
      'Capstoned projects in Distributed Authentication and Machine Learning detection systems',
      'Consistent academic excellence across all semesters'
    ]
  },
  {
    id: 'diploma-cs',
    degree: 'Diploma in Computer Science & Engineering',
    institution: 'Government Polytechnic',
    location: 'Ambad, Jalna, Maharashtra',
    period: '2019 – 2022',
    score: '79.71%',
    scoreType: 'Percentage',
    highlights: [
      'Deep focus on Object-Oriented Programming (C++, Java), Data Structures, and Linux Basics',
      'Hands-on lab training in networking, hardware architecture, and database management'
    ]
  },
  {
    id: 'ssc',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Manmath Swami Vidyalaya',
    location: 'Shirur Anantpal, Maharashtra',
    period: '2018 – 2019',
    score: '83.00%',
    scoreType: 'Percentage',
    highlights: [
      'Distinction grade in Mathematics and Science foundations'
    ]
  }
];

export const certifications: Certification[] = [
  // ================= 1. FEATURED CERTIFICATIONS (6) =================
  {
    id: 'cert-hackerrank-java',
    title: 'Java (Basic & Advanced Assessment)',
    issuer: 'HackerRank',
    tag: 'Algorithms & Java',
    iconName: 'Code',
    verified: true,
    group: 'featured',
  },
  {
    id: 'cert-swayam-dbms',
    title: 'Database Management Systems (DBMS)',
    issuer: 'SWAYAM / IIT (NPTEL)',
    tag: 'Database & SQL',
    iconName: 'Database',
    verified: true,
    group: 'featured',
  },
  {
    id: 'cert-qspiders-java',
    title: 'Java Full Stack Development',
    issuer: 'Q-Spiders',
    tag: 'Full Stack & Spring',
    iconName: 'Layers',
    verified: true,
    group: 'featured',
  },
  {
    id: 'cert-letsgrowmore-java',
    title: 'Java Developer Internship',
    issuer: "Let's GrowMore",
    tag: 'Java Backend',
    iconName: 'Briefcase',
    verified: true,
    group: 'featured',
  },
  {
    id: 'cert-octanet-web',
    title: 'Web Development Internship',
    issuer: 'OctaNet Services',
    tag: 'Web Technologies',
    iconName: 'Globe',
    verified: true,
    group: 'featured',
  },
  {
    id: 'cert-accenture-data',
    title: 'Data Analytics & Visualization',
    issuer: 'Accenture / Forage',
    tag: 'Data Intelligence',
    iconName: 'BarChart3',
    verified: true,
    group: 'featured',
  },

  // ================= 2. OTHER CERTIFICATIONS & LEARNING =================
  {
    id: 'cert-innovedge-cloud',
    title: 'Advanced Cloud Computing Lab',
    issuer: 'InnovEdge',
    tag: 'Cloud Infrastructure',
    iconName: 'Cloud',
    verified: true,
    group: 'other',
  },
  {
    id: 'cert-simplilearn-cpp',
    title: 'Advanced C++ Course',
    issuer: 'Simplilearn',
    tag: 'C++ & OOP',
    iconName: 'Terminal',
    verified: true,
    group: 'other',
  },
  {
    id: 'cert-intro-genai',
    title: 'Introduction to Generative AI',
    issuer: 'AI Fundamentals',
    tag: 'Generative AI',
    iconName: 'Sparkles',
    verified: true,
    group: 'other',
  },
  {
    id: 'cert-occupyed-sql',
    title: 'SQL Hands-on Workshop',
    issuer: 'OccupyEd',
    tag: 'SQL & Database Design',
    iconName: 'Database',
    verified: true,
    group: 'other',
  },
  {
    id: 'cert-mountreach-android',
    title: 'Industrial Training in Android Development',
    issuer: 'Mountreach Solutions',
    tag: 'Mobile Development',
    iconName: 'Cpu',
    verified: true,
    group: 'other',
  },
  {
    id: 'cert-nxtwave-genai',
    title: 'AI for Students: Build Your Own Generative AI Model',
    issuer: 'NxtWave',
    tag: 'LLMs & AI Systems',
    iconName: 'Sparkles',
    verified: true,
    group: 'other',
  },
  {
    id: 'cert-tcs-ion-career',
    title: 'Career Edge – Young Professional',
    issuer: 'TCS iON',
    tag: 'Professional Skills',
    iconName: 'Briefcase',
    verified: true,
    group: 'other',
  },
  {
    id: 'cert-tcs-ion-softskills',
    title: 'Introduction to Soft Skills',
    issuer: 'TCS iON',
    tag: 'Communication & Teamwork',
    iconName: 'Users',
    verified: true,
    group: 'other',
  },
  {
    id: 'cert-scaler-devops',
    title: 'DevOps vs SRE vs Cloud Engineer vs Platform Engineer',
    issuer: 'Scaler Masterclass',
    tag: 'DevOps & Systems',
    iconName: 'Server',
    verified: true,
    group: 'other',
  },
  {
    id: 'cert-placement-prep',
    title: 'Placement Preparation Program',
    issuer: 'Technical Training',
    tag: 'Aptitude & DSA',
    iconName: 'GraduationCap',
    verified: true,
    group: 'other',
  },
  {
    id: 'cert-c-quiz',
    title: 'State Level Online Quiz Competition on Programming C',
    issuer: 'Technical Council / Competition',
    tag: 'C Programming',
    iconName: 'Award',
    verified: true,
    group: 'other',
  }
];
