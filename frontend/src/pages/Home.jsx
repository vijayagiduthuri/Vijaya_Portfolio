// import React, { useState } from "react";
// import {
//   Sun,
//   Moon,
//   Github,
//   Linkedin,
//   Mail,
//   ExternalLink,
// } from "lucide-react";

// function Home() {
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div
//       className="min-h-screen transition-all duration-500"
//       style={{
//         backgroundColor: isDarkMode ? "#0a0f1a" : "#ffffff",
//         backgroundImage: isDarkMode
//           ? "linear-gradient(135deg, #0a0f1a 0%, #0d1521 25%, #111827 50%, #1e293b 100%)"
//           : "linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%)",
//       }}
//     >
//       {/* Navbar */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${
//           isDarkMode ? "border-slate-600/30" : "border-gray-200/50"
//         }`}
//         style={{
//           backgroundColor: isDarkMode
//             ? "rgba(10, 22, 40, 0.9)"
//             : "rgba(255, 255, 255, 0.9)",
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
//           {/* Name/Logo */}
//           <div
//             className={`text-xl font-bold transition-colors duration-300 ${
//               isDarkMode ? "text-white" : "text-slate-900"
//             }`}
//           >
//             <span
//               className={`${
//                 isDarkMode
//                   ? "text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400"
//                   : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
//               }`}
//             >
//               Vijaya
//             </span>{" "}
//             Giduthuri
//           </div>

//           {/* Navigation Links */}
//           <div className="hidden md:flex items-center space-x-8">
//             {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item.toLowerCase())}
//                 className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
//                   isDarkMode
//                     ? "text-gray-300 hover:text-sky-400"
//                     : "text-gray-700 hover:text-blue-600"
//                 }`}
//               >
//                 {item}
//                 <span
//                   className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
//                     isDarkMode ? "bg-sky-400" : "bg-blue-600"
//                   }`}
//                 ></span>
//               </button>
//             ))}
//           </div>

//           {/* Theme Toggle */}
//           <button
//             onClick={toggleTheme}
//             className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
//               isDarkMode
//                 ? "text-sky-400 hover:bg-slate-800"
//                 : "text-blue-600 hover:bg-blue-50"
//             }`}
//           >
//             {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
//           </button>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="pt-0">
//         {/* Hero Section */}
//         <section
//           id="home"
//           className="min-h-screen flex items-center justify-center px-6"
//         >
//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="space-y-6 lg:pr-12">
//               <div className="space-y-2">
//                 <h2
//                   className={`text-3xl font-medium ${
//                     isDarkMode ? "text-sky-400" : "text-blue-600"
//                   }`}
//                 >
//                   Hello, I'm
//                 </h2>
//                 <h1
//                   className={`text-5xl md:text-6xl font-bold leading-tight ${
//                     isDarkMode ? "text-white" : "text-slate-900"
//                   }`}
//                 >
//                   Vijaya{" "}
//                   <span
//                     className={`${
//                       isDarkMode
//                         ? "text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400"
//                         : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
//                     }`}
//                   >
//                     Giduthuri
//                   </span>
//                 </h1>
//               </div>

//               {/* About Info */}
//               <div className="space-y-4">
//                 <div className="space-y-1">
//                   <h3
//                     className={`text-base sm:text-lg md:text-xl xl:text-2xl font-bold leading-tight ${
//                       isDarkMode ? "text-sky-300" : "text-blue-700"
//                     }`}
//                     style={{
//                       whiteSpace: "nowrap",
//                       overflow: "visible",
//                       minWidth: "max-content"
//                     }}
//                   >
//                     AI & Data Science Student | MERN Stack Developer |
//                   </h3>
//                   <h4
//                     className={`text-base sm:text-lg md:text-xl xl:text-2xl font-bold ${
//                       isDarkMode ? "text-sky-300" : "text-blue-700"
//                     }`}
//                   >
//                     ML Enthusiast
//                   </h4>
//                 </div>
//                 <div
//                   className={`text-base space-y-3 ${
//                     isDarkMode ? "text-gray-400" : "text-gray-500"
//                   }`}
//                 >
//                   <p>
//                     I'm passionate about building scalable web apps using the
//                     MERN stack and exploring machine learning to solve
//                     real-world problems.
//                   </p>
//                 </div>
//               </div>

//               {/* Action Button and Social Links */}
//               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
//                 <button
//                   className={`px-8 py-3 rounded-full font-semibold border-2 transition-all duration-300 transform hover:scale-105 ${
//                     isDarkMode
//                       ? "border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white"
//                       : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
//                   }`}
//                 >
//                   Get in Touch
//                 </button>

//                 {/* Social Links */}
//                 <div className="flex space-x-4">
//                   <a
//                     href="https://github.com/vijaya-giduthuri"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
//                     style={{
//                       boxShadow: isDarkMode
//                         ? "0 0 20px rgba(14, 165, 233, 0.6), 0 0 40px rgba(14, 165, 233, 0.4)"
//                         : "0 0 20px rgba(14, 165, 233, 0.6), 0 0 40px rgba(14, 165, 233, 0.4)",
//                     }}
//                   >
//                     <Github size={20} className="text-white" />
//                   </a>
//                   <a
//                     href="https://linkedin.com/in/vijaya-giduthuri"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
//                     style={{
//                       boxShadow: isDarkMode
//                         ? "0 0 20px rgba(14, 165, 233, 0.6), 0 0 40px rgba(14, 165, 233, 0.4)"
//                         : "0 0 20px rgba(14, 165, 233, 0.6), 0 0 40px rgba(14, 165, 233, 0.4)",
//                     }}
//                   >
//                     <Linkedin size={20} className="text-white" />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Right Image */}
//             <div className="flex justify-center lg:justify-end">
//               <div className="relative">
//                 <div
//                   className={`w-80 h-80 md:w-96 md:h-96 rounded-full p-1 ${
//                     isDarkMode
//                       ? "bg-gradient-to-br from-sky-400 via-blue-400 to-indigo-500"
//                       : "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600"
//                   } shadow-2xl`}
//                   style={{
//                     animation: "float 6s ease-in-out infinite",
//                   }}
//                 >
//                   <div
//                     className={`w-full h-full rounded-full overflow-hidden ${
//                       isDarkMode ? "bg-slate-800" : "bg-white"
//                     } flex items-center justify-center`}
//                   >
//                     {/* Placeholder for profile image */}
//                     <div
//                       className={`w-32 h-32 rounded-full ${
//                         isDarkMode
//                           ? "bg-gradient-to-br from-sky-400 to-blue-500"
//                           : "bg-gradient-to-br from-blue-500 to-indigo-600"
//                       } flex items-center justify-center text-white text-4xl font-bold shadow-lg`}
//                     >
//                       VG
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating elements */}
//                 <div
//                   className={`absolute top-8 right-8 w-4 h-4 rounded-full ${
//                     isDarkMode ? "bg-sky-400" : "bg-blue-500"
//                   }`}
//                   style={{
//                     animation: "pulse 2s infinite",
//                   }}
//                 ></div>
//                 <div
//                   className={`absolute bottom-8 left-8 w-3 h-3 rounded-full ${
//                     isDarkMode ? "bg-blue-400" : "bg-indigo-500"
//                   }`}
//                   style={{
//                     animation: "pulse 2s infinite",
//                     animationDelay: "1s",
//                   }}
//                 ></div>
//                 <div
//                   className={`absolute top-20 left-12 w-2 h-2 rounded-full ${
//                     isDarkMode ? "bg-indigo-400" : "bg-purple-500"
//                   }`}
//                   style={{
//                     animation: "pulse 2s infinite",
//                     animationDelay: "0.5s",
//                   }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Placeholder sections for other pages */}
//         <section id="about" className="h-20"></section>

//         <section id="projects" className="h-20"></section>

//         <section id="skills" className="h-20"></section>

//         <section id="contact" className="h-20"></section>
//       </main>

//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Home;

import React, { useState } from "react";
import { Sun, Moon, Github, Linkedin } from "lucide-react";
import About from "./About";

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen transition-all duration-500"
      style={{
        backgroundColor: isDarkMode ? "#0a0512" : "#ffffff",
        backgroundImage: isDarkMode
          ? "radial-gradient(ellipse at top, #2d1b4e 0%, #1a0d2e 30%, #0f051a 70%, #0a0512 100%)"
          : "none",
      }}
    >
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg border-b ${
          isDarkMode ? "border-purple-400/20" : "border-purple-300/30"
        }`}
        style={{
          backgroundColor: isDarkMode
            ? "rgba(13, 6, 23, 0.95)"
            : "rgba(255, 255, 255, 0.95)",
          boxShadow: isDarkMode
            ? "0 4px 20px rgba(139, 92, 246, 0.1)"
            : "0 4px 20px rgba(147, 51, 234, 0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          <div
            className={`text-2xl font-bold transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-purple-800"
            }`}
          >
            Vijaya{" "}
            <span
              style={{
                background: isDarkMode
                  ? "linear-gradient(135deg, #ddd6fe 0%, #c4b5fd 50%, #a78bfa 100%)"
                  : "none",
                WebkitBackgroundClip: isDarkMode ? "text" : "",
                WebkitTextFillColor: isDarkMode ? "transparent" : "",
                backgroundClip: isDarkMode ? "text" : "",
              }}
            >
              Giduthuri
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                  isDarkMode
                    ? "text-purple-200 hover:text-purple-100"
                    : "text-purple-800 hover:text-purple-900"
                }`}
              >
                {item}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isDarkMode
                      ? "bg-gradient-to-r from-purple-400 to-purple-300"
                      : "bg-gradient-to-r from-purple-600 to-purple-700"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 border ${
              isDarkMode
                ? "text-purple-300 hover:bg-purple-800/50 border-purple-600/40"
                : "text-purple-700 hover:bg-purple-100/80 border-purple-300/60"
            }`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-0">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-6 relative"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-20"
              style={{
                background: isDarkMode
                  ? "radial-gradient(circle, #8b5cf6 0%, transparent 70%)"
                  : "none",
                animation: "float 8s ease-in-out infinite",
              }}
            ></div>
          </div>

          {/* Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left */}
            <div className="space-y-6 lg:pr-12">
              <div className="space-y-2">
                <h2
                  className={`text-3xl font-medium ${
                    isDarkMode ? "text-purple-300" : "text-purple-700"
                  }`}
                >
                  Hello, I'm
                </h2>
                <h1
                  className={`text-5xl md:text-6xl font-bold leading-tight ${
                    isDarkMode ? "text-transparent" : "text-purple-900"
                  }`}
                  style={
                    isDarkMode
                      ? {
                          background:
                            "linear-gradient(135deg, #f3e8ff 0%, #c4b5fd 70%, #a78bfa 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }
                      : {}
                  }
                >
                  Vijaya{" "}
                  <span
                    className={isDarkMode ? "" : "text-purple-700"}
                    style={
                      isDarkMode
                        ? {
                            background:
                              "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }
                        : {}
                    }
                  >
                    Giduthuri
                  </span>
                </h1>
              </div>

              <div className="space-y-4">
                <h3
                  className={`text-[24px] font-thin leading-none mb-[8px] whitespace-nowrap ${
                    isDarkMode ? "text-gray-300" : "text-purple-800"
                  }`}
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStretch: "condensed",
                    letterSpacing: "0.5px",
                  }}
                >
                  AI & Data Science Student | MERN Stack Developer |
                </h3>

                <h3
                  className={`text-[24px] font-thin leading-none mt-0 ${
                    isDarkMode ? "text-gray-300" : "text-purple-800"
                  }`}
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStretch: "condensed",
                    letterSpacing: "0.5px",
                  }}
                >
                  ML Enthusiast
                </h3>

                <p
                  className={`text-base ${
                    isDarkMode ? "text-purple-100/80" : "text-purple-900/80"
                  }`}
                >
                  I'm passionate about building scalable web apps using the MERN
                  stack and exploring machine learning to solve real-world
                  problems.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                {/* Get in Touch Button */}
                <button
                  className="relative px-8 py-3 rounded-xl font-semibold border text-base transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: isDarkMode ? "rgba(0,0,0,0.7)" : "#7c3aed", // purple bg in light mode
                    color: isDarkMode ? "#C084FC" : "#ffffff", // white text in light mode
                    borderColor: isDarkMode ? "#A855F7" : "#7c3aed", // purple border in light mode
                    boxShadow: isDarkMode
                      ? "0 0 12px 4px rgba(168, 85, 247, 0.6)"
                      : "0 0 12px 4px rgba(124, 58, 237, 0.6)", // purple glow in light mode
                  }}
                >
                  Get In Touch
                </button>

                {/* Social Icons */}
                <div className="flex space-x-4">
                  {[
                    ["https://linkedin.com/in/vijaya-giduthuri", <Linkedin />],
                    ["https://github.com/vijayagiduthuri", <Github />],
                  ].map(([url, Icon], i) => (
                    <a
                      key={i}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                      style={{
                        backgroundColor: isDarkMode ? "#000" : "#fff", // white bg in light mode
                        border: "1.5px solid",
                        borderColor: isDarkMode ? "#A855F7" : "#7c3aed", // purple border in light mode
                        boxShadow: isDarkMode
                          ? "0 0 12px 4px rgba(168, 85, 247, 0.6)"
                          : "0 0 12px 4px rgba(124, 58, 237, 0.4)", // softer purple glow
                      }}
                    >
                      {React.cloneElement(Icon, {
                        size: 24,
                        color: isDarkMode ? "#ffffff" : "#7c3aed", // purple icon color in light mode
                      })}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Circle */}
            <div className="flex justify-center lg:justify-end -translate-x-18">
              <div
                className="relative w-80 h-80 md:w-[400px] md:h-[400px] rounded-full"
                style={{
                  backgroundColor: isDarkMode ? "#000" : "#fff", // white bg in light mode
                  border: "1.5px solid",
                  borderColor: isDarkMode ? "#A855F7" : "#7c3aed", // purple border
                  boxShadow: isDarkMode
                    ? "0 0 12px 4px rgba(168, 85, 247, 0.6)"
                    : "0 0 12px 4px rgba(124, 58, 237, 0.4)", // glowing effect
                }}
              >
                <img
                  src="/Vijaya.png"
                  alt="Vijaya"
                  className="w-full h-full rounded-full object-cover"
                  style={{
                    objectPosition: "48% top",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Empty Sections*/}
        <section id="about">
          <About />
        </section>
        {/* <section id="projects" className="h-20"></section>
        <section id="skills" className="h-20"></section>
        <section id="contact" className="h-20"></section> */}
      </main>

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
