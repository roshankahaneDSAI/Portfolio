  // export default function Navbar(){

  //     return (
  //         <>
  //             {/* Navigation */}
  //     <div className="flex justify-center">
  //       <nav className="fixed top-0 backdrop-blur-lg z-50 bg-white-50 px-8 py-3 border-b-gray-100 rounded-full shadow-lg">
  //         <div className="flex justify-center max-w-7xl">
  //           <div className="flex justify-between items-center">
  //             {/* <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
  //               RK
  //             </div> */}
  //             <div className="flex space-x-10 my-2">
  //               {['About', 'Roadmap', 'Projects', 'Skills', 'Contact'].map((item) => (
  //                 <button
  //                   key={item}
  //                   className="text-1xl cursor-pointer text-gray-800 hover:text-blue-600 transition-all duration-300 relative group font-semibold"
  //                   onClick={() => document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: 'smooth' })}
  //                 >
  //                   {item}
  //                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
  //                 </button>
  //               ))}
  //             </div>
  //           </div>
  //         </div>
  //       </nav>

  //     </div>
        
  //         </>
  //     )
  // }

  import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const items = ["About", "Roadmap", "Projects", "Skills", "Contact"];

  const handleScroll = (id) => {
    setOpen(false);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full backdrop-blur-lg z-50 bg-white/40 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            RK
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {items.map((item) => (
              <button
                key={item}
                className="text-lg cursor-pointer text-gray-800 hover:text-blue-600 transition-all relative group font-semibold"
                onClick={() => handleScroll(item.toLowerCase())}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden px-6 pb-4 flex flex-col space-y-4 bg-white/70 backdrop-blur-xl shadow-md">
            {items.map((item) => (
              <button
                key={item}
                className="text-lg text-gray-800 hover:text-blue-600 transition-all font-semibold"
                onClick={() => handleScroll(item.toLowerCase())}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
