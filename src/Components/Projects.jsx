import React, { useState, useEffect } from 'react';
import { Code, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Photo3 from '../assets/Project_Image/Photo3.jpg'

// ProjectCard Component
// eslint-disable-next-line no-unused-vars
const ProjectCard = ({ project, active, index }) => {
  //
  const layouts = [
    'grid-layout-1', // Split layout
    'grid-layout-2', // Overlay layout  
    'grid-layout-3', // Side-by-side
    'grid-layout-4'  // Top-bottom
  ];
  
  const currentLayout = layouts[index % layouts.length];
  
//   const renderLayout1 = () => (
//     <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
//       {/* Background Image Side */}
//       <div 
//         className="relative bg-cover bg-center bg-no-repeat rounded-l-3xl lg:rounded-l-none lg:rounded-tl-3xl"
//         style={{ 
//           backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${project.backgroundImage})` 
//         }}
//       >
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center text-white p-6">
//             <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//               <span className="text-2xl">{project.icon}</span>
//             </div>
//             <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
//             <p className="text-lg opacity-90">{project.subheading}</p>
//           </div>
//         </div>
//       </div>
      
//       {/* Content Side */}
//       <div className="p-8 lg:p-12 bg-white flex flex-col justify-center">
//         <div className="space-y-6">
//           <p className="text-gray-600 leading-relaxed text-lg">{project.description}</p>
          
//           {/* Tech Stack */}
//           <div className="flex flex-wrap gap-2">
//             {project.technologies?.map((tech, i) => (
//               <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
//                 {tech}
//               </span>
//             ))}
//           </div>
          
//           {/* Links */}
//           <div className="flex gap-4 pt-4">
//             {project.githubLink && (
//               <a href={project.githubLink} className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
//                 <Github className="w-5 h-5" />
//                 Code
//               </a>
//             )}
//             {project.liveLink && (
//               <a href={project.liveLink} className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
//                 <ExternalLink className="w-5 h-5" />
//                 Live Demo
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
  
//   const renderLayout2 = () => (
//     <div 
//       className="relative min-h-[500px] bg-cover bg-center bg-no-repeat rounded-3xl"
//       style={{ 
//         backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(${project.backgroundImage})` 
//       }}
//     >
//       {/* Overlay Content */}
//       <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-center text-white">
//         <div className="max-w-2xl">
//           <div className="flex items-center gap-4 mb-6">
//             <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//               <span className="text-xl">{project.icon}</span>
//             </div>
//             <div>
//               <h3 className="text-3xl font-bold">{project.title}</h3>
//               <p className="text-xl opacity-90">{project.subheading}</p>
//             </div>
//           </div>
          
//           <p className="text-lg leading-relaxed mb-6 opacity-95">{project.description}</p>
          
//           {/* Tech Stack */}
//           <div className="flex flex-wrap gap-2 mb-8">
//             {project.technologies?.map((tech, i) => (
//               <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
//                 {tech}
//               </span>
//             ))}
//           </div>
          
//           {/* Links */}
//           <div className="flex gap-4">
//             {project.githubLink && (
//               <a href={project.githubLink} className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors border border-white/30">
//                 <Github className="w-5 h-5" />
//                 Code
//               </a>
//             )}
//             {project.liveLink && (
//               <a href={project.liveLink} className="flex items-center gap-2 px-6 py-3 bg-blue-600/80 backdrop-blur-sm text-white rounded-lg hover:bg-blue-700/80 transition-colors">
//                 <ExternalLink className="w-5 h-5" />
//                 Live Demo
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
  
  const renderLayout3 = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[500px] bg-white rounded-3xl overflow-hidden">
      {/* Image Column */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${project.backgroundImage})` 
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-3xl">{project.icon}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Columns */}
      <div className="lg:col-span-2 p-8 lg:p-12">
        <div className="h-full flex flex-col justify-center space-y-6">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold">{project.subheading}</p>
          </div>
          
          <p className="text-gray-600 leading-relaxed text-lg">{project.description}</p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
          
          {/* Links */}
          <div className="flex gap-4 pt-4">
            {project.githubLink && (
              <a href={project.githubLink} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all">
                <Github className="w-5 h-5" />
                View Code
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  
 
  // Render based on layout type
  switch (currentLayout) {
    case 'grid-layout-3': return renderLayout3();
    default: return renderLayout3();
  }
};

const ProjectCarousel = () => {
  // Main state for current project index
  const [currentProject, setCurrentProject] = useState(0);
  
  // Optional: Auto-play carousel
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Sample projects data
  const [projects] = useState([
    {
      title: "AI-Powered Analytics Dashboard",
      subheading: "Machine Learning & Data Visualization",
      description: "A comprehensive analytics platform that leverages machine learning algorithms to provide real-time insights and predictive analytics for business intelligence. Built with scalability and performance in mind.",
     backgroundImage: Photo3,
      technologies: ["Python", "TensorFlow", "React", "D3.js", "PostgreSQL"],
      githubLink: "https://github.com/username/analytics-dashboard",
      liveLink: "https://analytics-demo.com"
    },
    {
      title: "E-Commerce Mobile App",
      subheading: "Full-Stack Mobile Development",
      description: "A feature-rich mobile commerce application with real-time inventory management, secure payment processing, and personalized shopping experiences. Supports both iOS and Android platforms.",
      backgroundImage: Photo3,
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe API", "Firebase"],
      githubLink: "https://github.com/username/ecommerce-app",
      liveLink: "https://app-store-link.com"
    },
    {
      title: "Blockchain Voting System",
      subheading: "Web3 & Smart Contracts",
      description: "A secure, transparent voting platform built on Ethereum blockchain. Features smart contract-based vote counting, voter authentication, and real-time results with complete audit trails.",
      backgroundImage: Photo3,
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      githubLink: "https://github.com/username/blockchain-voting",
      liveLink: "https://voting-demo.com"
    },
    {
      title: "Real-Time Chat Application",
      subheading: "WebSocket & Microservices",
      description: "A scalable real-time messaging platform with file sharing, video calls, and team collaboration features. Built with microservices architecture for high availability and performance.",
      backgroundImage: Photo3,
      technologies: ["Node.js", "Socket.io", "Redis", "Docker", "Kubernetes"],
      githubLink: "https://github.com/username/chat-app",

      liveLink: "https://chat-demo.com"
    },
  
  ]);

  // Auto-play functionality (optional)
  useEffect(() => {
    if (isAutoPlay && !isPaused) {
      const interval = setInterval(() => {
        setCurrentProject(prev => (prev + 1) % projects.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoPlay, isPaused, projects.length]);

  // Navigation functions
  const goToNext = () => {
    setCurrentProject(prev => (prev + 1) % projects.length);
  };

  const goToPrevious = () => {
    setCurrentProject(prev => prev === 0 ? projects.length - 1 : prev - 1);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  // Pause auto-play on hover (optional)
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Keyboard navigation (optional)
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div>
      {/* Projects Carousel Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
         
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl font-bold text-slate-800 mb-6 max-w-4xl mx-auto">
              Discover the innovative solutions I've built that drive real business impact
            </p>
          </div>
          
          {/* Carousel Container */}
          <div 
            className="relative max-w-5xl mx-auto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <ProjectCard 
                      project={project} 
                      active={index === currentProject}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={goToPrevious}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border-2 border-gray-200 hover:border-blue-400"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6 text-blue-600" />
              </button>
              <button
                onClick={goToNext}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border-2 border-gray-200 hover:border-blue-400"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </button>
            </div>
            
            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`h-3 rounded-full transition-all duration-300  ${
                    index === currentProject
                      ? 'bg-blue-500 w-8'
                      : 'bg-gray-300 hover:bg-blue-300 w-3'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play Toggle (Optional) */}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  isAutoPlay 
                    ? 'bg-gradient-to-b from-blue-500 to-purple-500 text-white hover:from-blue-600 ' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {isAutoPlay ? 'Auto-play ON' : 'Auto-play OFF'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCarousel;