import { Users } from "lucide-react"

export default function About(){
    return (
        <>
         <section id="about" className="py-20 relative">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full">
            <path
              d="M0,200 Q400,100 800,200 T1600,200"
              stroke="#337cf2ff"
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
                Agentic AI • LLM Orchestration • System Thinking • Technical Innovation • Problem Solving
              </h3>
              <p className="text-lg text-slate-600 font-medium">
                Building scalable, production-ready AI solutions that deliver measurable business impact.
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
                    I'm a <strong>Data Scientist and Generative AI Engineer</strong> with <strong>7+ years of experience</strong> building AI solutions that create real business impact. 
                    I currently work at Mercedes-Benz Research & Development India, where I design and deploy GenAI chatbots, sales forecasting systems, and end-to-end MLOps pipelines on Azure Databricks. 
                    My work has improved forecast accuracy, automated decision workflows, and made AI solutions more scalable, secure, and enterprise-ready.
                  </p>
                  
                  <p className="text-lg text-slate-700 leading-relaxed">
                    My professional journey spans <strong>predictive maintenance, sales & inventory forecasting, NLP/LLM applications, and full-stack AI systems</strong>. 
                    I enjoy solving complex problems—whether it’s designing a forecasting model for multi-region demand, building LLM-powered assistants for enterprise data, or deploying robust pipelines using Azure ML, Databricks, and MLflow.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    I'm certified in Databricks Generative AI, IBM Applied AI, Azure AI Engineering, and Azure Data Science, and 
                    I continue to stay hands-on with the latest in Generative AI, LLMOps, and modern ML engineering practices.
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
                      {["AI/ML", "GenAI", "LLMs", "Deep Learning", "Time Series Forecasting", "Predictive Maintenance", "Azure Databricks", "PySpark", "Python", "SQL", "Power BI", "MLOps/LLMOps"].map((skill) => (
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
                      {["Solution Architecture for ML/GenAI", "Cross-Functional Collaboration", "Agile & Sprint Planning", "Strategic Planning", "Product Ownership", "Mentoring"].map((skill) => (
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