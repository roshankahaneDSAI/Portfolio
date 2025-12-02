import {Mail, Phone, Linkedin} from 'lucide-react';

export default function Contact(){
    return (
          <section id="contact" className="py-15 bg-gradient-to-br from-blue-800 to-purple-900">
                <div className="max-w-4xl mx-auto px-5 text-center">
                  <h2 className="text-5xl font-black mb-5 bg-gradient-to-r text-white bg-clip-text ">
                    Let's Create Something Amazing
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
                  
                  <p className="text-2xl text-white mb-10 leading-relaxed">
                    Ready to transform your business with cutting-edge AI solutions? 
                    <br />Let's discuss how we can build intelligent systems that deliver real results.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                    <a 
                      href="mailto:roshankahane09@gmail.com"
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3 text-lg"
                    >
                      <Mail className="w-5 h-5" />
                      Start a Conversation
                    </a>
                    <a 
                      href="tel:+919922397857"
                      className="border-2 border-gray-500 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-blue-500/10 flex items-center gap-3 text-lg hover:shadow-lg"
                    >
                      <Phone className="w-5 h-5" />
                      Schedule a Call
                    </a>
                  </div>
                  
                  <div className="flex justify-center gap-8">
                    <a href="mailto:roshankahane09@gmail.com" className="p-4 bg-gray-700 hover:bg-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                      <Mail className="w-8 h-8 text-blue-400" />
                    </a>
                    <a href="tel:+919922397857" className="p-4 bg-gray-700 hover:bg-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                      <Phone className="w-8 h-8 text-emerald-400" />
                    </a>
                    <a href="https://linkedin.com" className="p-4 bg-gray-700 hover:bg-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                      <Linkedin className="w-8 h-8 text-blue-400" />
                    </a>
                  </div>
                </div>
              </section>
    )
}