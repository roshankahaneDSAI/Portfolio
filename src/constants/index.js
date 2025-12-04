import { ChevronDown, Mail, Phone, Linkedin, Github, Award, Briefcase, GraduationCap, Code, Database, Cloud, Bot, Brain, TrendingUp, Users, Shield, Zap, ExternalLink, Download, Star, ChevronRight, Eye, ChevronLeft, Play, Pause } from 'lucide-react'; 
import databricks from "../assets/Project_Image/databricks.png";
import IBM from "../assets/Project_Image/IBM.png";
import microsoft from "../assets/Project_Image/microsoft.png";
import Stanford from "../assets/Project_Image/Stanford.png";
import mercedes_benz_logo from "../assets/Project_Image/mercedes_benz_logo.png";


  export const roles = [
    "Data Scientist",
    "GenAI Engineer", 
    "ML Engineer",
    "AI Engineer",
    "Innovation Leader"
  ];
 

// Mock data - replace with your actual imports
export const experiences = [
  {
    logo: mercedes_benz_logo,
    company: "Mercedes-Benz",
    role: " Data Scientist & Generative AI Engineer (Sales Analytics)",
    period: "Oct 2023 - Present",
    location: "Banaglore, India",
    tech: ["Python", "Open AI", "Databricks", "Azure", "GitHub"],
    achievements: [
      "Built GenAI agents improving customer service efficiency by 40%",
      "Led design and deployment of a GenAI-powered chatbot serving 10K+ users",
      "Built and optimized time series forecasting models for vehicle equipment demand.",
      "Implemented MLOps workflows for continuous monitoring and retraining of models.",
      "Collaborated cross-functionally to integrate AI solutions into business workflows."
    ]
  },
  {
    logo: "🚀",
    company: "Infosys Ltd",
    role: "Data Scientist (Predictive Maintenance Solutions)",
    period: "Feb 2021 - Oct 2023",
    location: "Bangaolore, India",
    tech: ["PyTorch", "Tensorflow", "Azure ML", "SQL", "Power BI"],
    achievements: [
      "End-to-end development of predictive maintenance solutions using Random Forests, LSTM, CNNs, and NLP-based fault detection.",
      "Engineered real-time data ingestion pipelines for scalable sensor analytics.",
      "Delivered Power BI dashboards driving proactive maintenance scheduling and improving asset uptime.",
    ]
  },
  {
    logo: "🚀",
    company: "Quest Global Ltd",
    role: "Data Scientist (Retail Forecasting)",
    period: "Dec 2019 - Oct 2020",
    location: "Bangaolore, India",
    tech: ["Python", "Tensorflow", "Keras", "SQL"],
    achievements: [
      "Built and deployed scalable demand forecasting models using ARIMA, Prophet, and LSTM improving multi-region retail forecast accuracy.",
      "Developed automated data pipelines using Python (Pandas, NumPy, Scikit-learn, TensorFlow/Keras).",
    ]
  },
  {
    logo: "🚀",
    company: "Cyient Ltd",
    role: "Design Engineer -  Application Development",
    period: "Dec 2019 - Oct 2020",
    location: "Hyderabad, India",
    tech: ["Python", "Git", "web frameworks"],
    achievements: [
      "Built RESTful APIs using Flask to serve ML models for integration into engineering workflows.",
      "Developed Python-based GUIs and visualization tools to support ML model interpretability for warehouse teams.",
    ]
  }
];

export const skills = {
  "AI/ML": {
    // eslint-disable-next-line no-undef
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    skills: ["Time Series Forecasting","Predictive Maintenance","Deep Learning (CNN, LSTM)","NLP & LLMs","Semantic Search","Vector Databases","GenAI Chatbots","Prompt Engineering","Retrieval-Augmented Generation (RAG)","LLM Fine-tuning (LoRA, QLoRA)"],
    // icons: ["🧠", "🤖", "📊", "🔬", "⚡"]
  },
  "Agentic AI Systems": {
    icon: Code,
    color: "from-blue-500 to-cyan-500", 
    skills: ["Multi-Agent Architectures", "LLM Tool Calling & Orchestration", "Autonomous Workflow Agents", "Planning & Reasoning with LLMs", "Function Calling & API Integration", "AI Workflow Automation", "Task Decomposition & Reasoning Loops", "Memory-Augmented Agents", "Retrieval-Augmented Agents", "Agent Evaluation & Safety", "Agent Frameworks (LangGraph, AutoGen, Semantic Kernel)", "Toolformer-style Tool Use", "State Management for Agents", "Multi-step Action Planning", "Guardrails & Responsible Agent Design"],
    icons: ["🐍", "⚡", "🗃️", "📈", "☕"]
  },
  
  "Programming & Tools": {
    icon: Code,
    color: "from-blue-500 to-cyan-500", 
    skills: ["Python (Pandas, NumPy, Scikit-learn, TensorFlow/Keras, PyTorch)", "SQL", "PySpark", "Git", "Docker", "FastAPI / Flask", "Power BI", "Databricks Dashboards", "JavaScript"],
    icons: ["🐍", "⚡", "🗃️", "📈", "☕"]
  },
  "Cloud & DevOps": {
    icon: Cloud,
    color: "from-emerald-500 to-teal-500",
    skills: ["Azure Cloud","Azure Databricks","Azure Data Factory","AWS", "Delta Lake","Distributed Data Processing","Data Pipelines & Orchestration", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    icons: ["☁️", "🐳", "⚙️", "🔄", "🏗️"]
  },
  "MLOps / LLMOps": {
    icon: Database,
    color: "from-orange-500 to-red-500",
    skills: ["MLflow", "Azure ML & Databricks", "CI/CD for ML", "Model Monitoring & Retraining", "Responsible AI", "Model Governance", "Databricks Workflows", "Feature Engineering & Feature Store"],
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
    { name: "Databricks Certified Generative AI Engineer Associate", provider: "Databricks", year: "2025", icon: databricks },
    { name: "IBM Applied AI Developer Professional Certificate", provider: "IBM", year: "2023", icon: IBM },
    { name: "Microsoft Certified: Azure AI Engineer Associate", provider: "Microsoft", year: "2024", icon: microsoft },
    { name: "Microsoft Certified: Azure Data Scientist Associate", provider: "Microsoft", year: "2024", icon: microsoft },
    { name: "Machine Learning - Stanford University", provider: "Coursera", year: "2023", icon: Stanford }
  ];

