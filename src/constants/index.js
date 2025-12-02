import { ChevronDown, Mail, Phone, Linkedin, Github, Award, Briefcase, GraduationCap, Code, Database, Cloud, Bot, Brain, TrendingUp, Users, Shield, Zap, ExternalLink, Download, Star, ChevronRight, Eye, ChevronLeft, Play, Pause } from 'lucide-react'; 
 
  export const roles = [
    "Data Scientist",
    "GenAI Engineer", 
    "ML Engineer",
    "AI Consultant",
    "Innovation Leader"
  ];
 

// Mock data - replace with your actual imports
export const experiences = [
  {
    logo: "🏎️",
    company: "Mercedes-Benz",
    role: "Data Scientist",
    period: "2023-Present",
    location: "Banaglore, India",
    tech: ["Python", "TensorFlow", "AWS", "Docker"],
    achievements: [
      "Built GenAI agents improving customer service efficiency by 40%",
      "Developed RAG chatbots serving 50K+ daily users",
      "Architected ML pipelines processing 1M+ data points",
      "Led cross-functional team of 8 engineers"
    ]
  },
  {
    logo: "🚀",
    company: "Previous Company",
    role: "ML Engineer",
    period: "2021-2023",
    location: "Remote",
    tech: ["PyTorch", "Kubernetes", "GCP"],
    achievements: [
      "Reduced model inference time by 60%",
      "Implemented automated ML workflows",
      "Mentored junior developers"
    ]
  }
];

export const skills = {
  "AI/ML": {
    // eslint-disable-next-line no-undef
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenAI API"],
    // icons: ["🧠", "🤖", "📊", "🔬", "⚡"]
  },
  "Programming": {
    icon: Code,
    color: "from-blue-500 to-cyan-500", 
    skills: ["Python", "JavaScript", "SQL", "R", "Java"],
    icons: ["🐍", "⚡", "🗃️", "📈", "☕"]
  },
  "Cloud & DevOps": {
    icon: Cloud,
    color: "from-emerald-500 to-teal-500",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    icons: ["☁️", "🐳", "⚙️", "🔄", "🏗️"]
  },
  "Data Engineering": {
    icon: Database,
    color: "from-orange-500 to-red-500",
    skills: ["Apache Spark", "Kafka", "MongoDB", "PostgreSQL", "Redis"],
    icons: ["⚡", "🌊", "🍃", "🐘", "💾"]
  }
};


export const projects = [
 
  {
    title: "AI-Powered Analytics Dashboard",
    subheading: "Machine Learning & Data Visualization",
    description: "A comprehensive analytics platform that leverages machine learning algorithms to provide real-time insights and predictive analytics for business intelligence.",
    backgroundImage: "/api/placeholder/800/600", // Replace with actual image
    icon: "🤖",
    technologies: ["Python", "TensorFlow", "React", "D3.js", "PostgreSQL"],
    githubLink: "https://github.com/username/project",
    liveLink: "https://project-demo.com"
  },
  {
    title: "E-Commerce Mobile App",
    subheading: "Full-Stack Mobile Development",
    description: "A feature-rich mobile commerce application with real-time inventory management, secure payment processing, and personalized shopping experiences.",
    backgroundImage: "/api/placeholder/800/600",
    icon: "📱",
    technologies: ["React Native", "Node.js", "MongoDB", "Stripe API", "Firebase"],
    githubLink: "https://github.com/username/project",
    liveLink: "https://app-store-link.com"
  }
]



  export const certifications = [
    { name: "Microsoft Certified: Azure AI Engineer Associate", provider: "Microsoft", year: "2024", icon: "🎓" },
    { name: "Microsoft Certified: Azure Data Scientist Associate", provider: "Microsoft", year: "2024", icon: "🎓" },
    { name: "IBM Applied AI Developer Professional Certificate", provider: "IBM", year: "2023", icon: "🎓" },
    { name: "Machine Learning - Stanford University", provider: "Coursera", year: "2023", icon: "🎓" }
  ];

