import { Users } from "lucide-react"

export default function About(){
    return (
        <>
         <section id="about" className="py-20 relative">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full">
            <path
              d="M0,200 Q400,100 800,200 T1600,200"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              className="animate-pulse"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            {/* <div className="inline-block bg-white rounded-full p-4 shadow-lg border-4 border-emerald-200 mb-6">
              <Users className="w-8 h-8 text-emerald-500" />
            </div> */}
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-8"></div>
            
            {/* Key Skills Headline */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Leadership & Collaboration • Problem Solving • System Thinking • Technical Innovation
              </h3>
              <p className="text-lg text-slate-600 font-medium">
                Transforming complex business challenges into scalable AI solutions
              </p>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-purple-100 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-3">
                <div className="grid grid-cols-8 gap-3 h-full p-6">
                  {[...Array(32)].map((_, i) => (
                    <div key={i} className="bg-gradient-to-br from-indigo-400 to-purple-400 rounded-lg animate-pulse" style={{animationDelay: `${i * 100}ms`}}></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 space-y-5">
                <div className="text-center">
                  <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                    Senior Consultant • Mercedes-Benz R&D India
                  </div>
                </div>

                <div className="space-y-5">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    I'm a <strong>Data Scientist and Generative AI Engineer</strong> with <strong>6+ years of experience</strong> in building AI solutions that solve real business problems. Currently, I work at Mercedes-Benz R&D India as a Senior Consultant, where I design and deploy GenAI chatbots, sales forecasting models, and MLOps pipelines on Azure. My work has improved forecast accuracy, reduced costs, and made AI solutions more scalable and secure.
                  </p>
                  
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Over the years, I've worked on <strong>predictive maintenance, sales forecasting, and full-stack AI systems</strong>—combining machine learning, deep learning, and cloud technologies. I enjoy collaborating across teams, creating end-to-end solutions, and turning complex data into actionable insights. I'm also certified in Azure AI and Data Science, and I continue to explore the latest in Generative AI and machine learning.
                  </p>
                </div>

                {/* Core Competencies */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-7 pt-8 border-t border-purple-100">
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-indigo-600 flex items-center gap-2">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                      Technical Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Machine Learning", "Generative AI", "MLOps", "Azure", "Python", "Deep Learning"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-purple-600 flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      Leadership Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Team Collaboration", "System Thinking", "Problem Solving", "Strategic Planning", "Innovation", "Mentoring"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}