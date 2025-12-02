import { useState } from "react";
import { certifications } from "../Constants/index.js";
import { experiences } from "../Constants/index.js";
import { skills } from "../Constants/index.js";


import { 
 Briefcase, Code, Award, Zap, ChevronRight,
  Database, Brain, Server, Globe, Cpu, 
  BarChart3, GitBranch, Shield, Cloud,
  Layers, Rocket, Star, TrendingUp
} from 'lucide-react';



export default function EnhancedSkills() {
  const [activeTab, setActiveTab] = useState('experience');
  const [hoveredSkill, setHoveredSkill] = useState(null);

// eslint-disable-next-line no-unused-vars
const TabButton = ({ active, onClick, children, count, icon: Icon }) => (
  <button
    onClick={onClick}
    className={`relative flex cursor-pointer items-center gap-4 px-6 py-3 rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 ${
      active
        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-2xl'
        : 'text-gray-600 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:shadow-lg'
    }`}
  >
    <Icon className="w-5 h-5" />
    <span className="text-1xl">{children}</span>
    {count && (
      <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
        active ? 'bg-white text-indigo-600' : 'bg-indigo-100 text-indigo-600'
      }`}>
        {count}
      </span>
    )}
  </button>
);

const SkillCard = ({ skill, icon, index, category, hoveredSkill, setHoveredSkill }) => (
  <div 
    className="group relative"
    onMouseEnter={() => setHoveredSkill(`${category}-${index}`)}
    onMouseLeave={() => setHoveredSkill(null)}
  >
    <div className={`flex items-center gap-3 px-3 py-3 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-0 cursor-pointer bg-gradient-to-r ${skills[category].color} text-white shadow-lg hover:shadow-xl`}>
      <span className="text-2xl animate-pulse">{icon}</span>
      <span className="font-bold text-lg">{skill}</span>
      <Star className={`w-5 h-5 ml-auto transition-all duration-300 ${
        hoveredSkill === `${category}-${index}` ? 'rotate-180 text-yellow-300' : ''
      }`} />
    </div>
    
    {hoveredSkill === `${category}-${index}` && (
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded-lg text-sm font-semibold animate-fade-in z-10">
        Expert Level
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
      </div>
    )}
  </div>
);



  return (
    <section id="skills" className="py-13 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
    

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-4 bg-white rounded-full p-5 shadow-2xl border border-purple-200 mb-6">
            <Zap className="w-6 h-6 text-purple-500 animate-pulse" />
            <Rocket className="w-6 h-6 text-indigo-500 animate-bounce" />
            <TrendingUp className="w-6 h-6 text-emerald-500 animate-pulse" />
          </div>
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Expertise & Skills
          </h2>
          <p className="text-xl font-bold text-slate-800 mb-6 max-w-4xl mx-auto">
            Where expertise meets innovation. Explore my journey through technology, achievements, and continuous learning.
          </p>
          <div className="w-35 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

     
     
        <div className="flex justify-center mb-10">
          <div className="bg-white p-4 rounded-3xl shadow-2xl border border-gray-100">
            <div className="flex gap-3">
              <TabButton 
                active={activeTab === 'experience'} 
                onClick={() => setActiveTab('experience')}
                // eslint-disable-next-line no-undef
                icon={Briefcase}
                count={experiences.length}
              >
                Experience
              </TabButton>
              <TabButton 
                active={activeTab === 'skills'} 
                onClick={() => setActiveTab('skills')}
                icon={Code}
                count={Object.keys(skills).length}
              >
                Skills
              </TabButton>
              <TabButton 
                active={activeTab === 'certifications'} 
                onClick={() => setActiveTab('certifications')}
                icon={Award}
                count={certifications.length}
              >
                Certifications
              </TabButton>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-96">
          {activeTab === 'experience' && (
            <div className="space-y-9">
              {experiences.map((exp, index) => (
                <div key={index} className="group relative">
                  {/* Timeline connector */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-20 top-32 w-1 h-24 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                  )}
                  
                  <div className="bg-white cursor-pointer p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 border border-gray-100 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-10">
                        <div className="flex items-center gap-6">
                          {/* <div className="text-6xl ">{exp.logo}</div> */}
                          <div>
                            <h3 className="text-3xl font-black text-gray-800 mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                              {exp.company}
                            </h3>
                            <div className="text-xl text-gray-700 mb-2 font-semibold">{exp.role}</div>
                            <div className="flex items-center gap-4 text-indigo-600 font-bold">
                              <span className="bg-indigo-100 px-3 py-2 rounded-full">{exp.period}</span>
                              <span className="text-gray-400">•</span>
                              <span className="bg-purple-100 px-3 py-2 rounded-full">{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 mt-5 lg:mt-0">
                          {exp.tech.map((tech, i) => (
                            <span key={i} className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-5 py-2 rounded-2xl text-sm font-bold shadow-lg transform hover:scale-110 transition-all duration-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-2xl border-2 border-indigo-100 hover:border-indigo-300 hover:shadow-lg transition-all duration-500 transform hover:scale-105">
                            <ChevronRight className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 font-semibold text-lg leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {Object.entries(skills).map(([category, data]) => {
                const IconComponent = data.icon;
                return (
                  <div key={category} className="group relative">
                    <div className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-600 transform hover:-translate-y-4 border border-gray-100 relative overflow-hidden">
                      {/* Decorative gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      <div className="relative z-9">
                        <div className="flex items-center gap-4 mb-8">
                          <div className={`p-3 rounded-2xl bg-gradient-to-r ${data.color} shadow-xl transform group-hover:scale-110 transition-all duration-500`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-black text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500">
                            {category}
                          </h3>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-4">
                          {data.skills.map((skill, index) => (
                            <SkillCard 
                              key={skill} 
                              skill={skill} 
                              // icon={data.icons[index]} 
                              index={index}
                              category={category}
                              hoveredSkill={hoveredSkill}
                              setHoveredSkill={setHoveredSkill}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-6 hover:rotate-0 border border-gray-100 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full -translate-y-12 translate-x-12 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 text-center cursor-pointer">
                      <div className="text-6xl mb-6 transition-all duration-400">
                        {cert.icon}
                      </div>
                      <h4 className="text-xl font-black text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 group-hover:bg-clip-text transition-all duration-500">
                        {cert.name}
                      </h4>
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-bold mb-2 inline-block">
                        {cert.provider}
                      </div>
                      <div className="text-gray-500 font-semibold text-lg">{cert.year}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes animate-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes animate-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: animate-float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: animate-spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}