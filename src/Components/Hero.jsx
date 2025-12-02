import { useState, useEffect } from "react"
import { ChevronDown, Download, ChevronRight } from 'lucide-react';
import RoshanPhoto from "../assets/RoshanPhoto1.jpeg";

// Mock roles array - you can replace this with your actual roles import
const roles = [
  "Data Scientist",
  "AI/ML Engineer", 
  "GenAI Specialist",
];

export default function Hero(){
    const[currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
          <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute inset-0 overflow-hidden">
          {/* Clean White Background */}
          <div className="absolute inset-0 bg-white"></div>
          
          {/* Subtle Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-4 h-4 rounded-full animate-ping opacity-40 ${
                  i % 3 === 0 ? 'bg-blue-400' :
                  i % 3 === 1 ? 'bg-cyan-400' :
                  'bg-purple-400'
                }`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2000}ms`,
                  animationDuration: `${2000 + Math.random() * 2000}ms`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Journey Indicator - Top Center */}
          <div className="mb-12 animate-fade-in text-center">
            <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-200 px-8 py-3 rounded-full shadow-lg">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <span className="text-sm font-bold text-gray-700">Career Journey 2018-2025+</span>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-5 items-center">
            
            {/* Left Column - Profile Image */}
            <div className="flex justify-center lg:justify-center space-y-1">
              <div className="relative animate-slide-up">
                <div className="w-60 h-60 lg:w-70 lg:h-85 rounded-2xl overflow-hidden border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-1xl">
                  {/* Replace this src with your actual image path */}
                  <img 
                    src={RoshanPhoto}
                    alt="Roshan Kahane"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Animated Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-ping"></div>
                <div className="absolute -inset-4 rounded-full border border-indigo-300/20 animate-pulse"></div>
                
                {/* Floating badges around image */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-none">
                   Data Scientist 
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-none" style={{animationDelay: '1s'}}>
                 AI/ML Expert
                </div>
              </div>
            </div>

            {/* Right Column - Information */}
            <div className="text-left lg:text-left space-y-7">
              
              {/* Greeting */}
              <div className="animate-slide-up">
                <h2 className="text-3xl lg:text-4xl font-light text-purple-600 mb-2">
                  Hello, I'm
                </h2>
                <h1 className="text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                  Roshan Kahane
                </h1>
              </div>
              
              {/* Role Description */}
              <div className="animate-slide-up delay-200">
                <div className="text-2xl lg:text-3xl text-slate-700 mb-6 font-light">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-bold">
                    <span 
                      key={currentRoleIndex}
                      className="inline-block transition-all duration-500 ease-in-out transform"
                    >
                      {roles[currentRoleIndex]}
                    </span>
                  </span>
                  <span className="mx-3 text-teal-600">@</span>
                  <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent font-bold">
                    Mercedes-Benz
                  </span>
                </div>
              </div>
              
              {/* Description */}
              <div className="animate-slide-up delay-300">
                <p className="text-lg lg:text-xl text-slate-900 mb-5 leading-relaxed">
                  I make machines think, systems scale, and people smile. From GenAI agents and RAG chatbots 
                  to backend intelligence and ML innovation—I architect experiences that work, connect, and grow.
                </p>
                
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col mb-3 sm:flex-row gap-4 animate-slide-up delay-400">
                <button 
                  onClick={() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r cursor-pointer from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-4 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  Explore My Roadmap
                </button>
                <button className="border-2 cursor-pointer border-orange-400 hover:border-red-500 text-orange-600 hover:text-red-600 px-4 py-3 rounded-full font-bold transition-all duration-300 hover:bg-orange-50 flex items-center gap-3 hover:shadow-lg group">
                  <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                  Download Resume
                </button>
              </div>

              {/* Journey Progress */}
              {/* <div className="animate-slide-up delay-500">
                <div className="bg-white border border-rose-200 rounded-full px-6 py-3 shadow-lg inline-block">
                  <div className="flex items-center gap-4 text-sm font-semibold text-slate-600">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span>2018 Start</span>
                    </div>
                    <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 via-orange-500 to-purple-500 rounded-full"></div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                      <span>2025 Current</span>
                    </div>
                    <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-50"></div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-pink-400 rounded-full opacity-50"></div>
                      <span className="text-pink-600">Future</span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-white rounded-full p-3 shadow-lg border border-purple-200 cursor-pointer">
            <ChevronDown className="w-6 h-6 text-purple-500 " />
          </div>
        </div>
      </section>
        </>
    )
}