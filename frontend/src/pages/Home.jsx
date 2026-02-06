import React, { useState } from "react";
import { Sun, Moon, Github, Linkedin, Code2 } from "lucide-react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleGetInTouch = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
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

          {/* Desktop nav */}
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

          {/* Theme toggle */}
          <div className="flex items-center space-x-4">
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

            {/* Hamburger for mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md focus:outline-none"
            >
              <svg
                className={`w-6 h-6 ${
                  isDarkMode ? "text-white" : "text-purple-900"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            className={`absolute top-16 right-4 w-60 rounded-xl shadow-lg z-50 p-4 flex flex-col gap-3 ${
              isDarkMode ? "bg-[#0a0512]" : "bg-white"
            }`}
          >
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-lg font-medium px-3 py-2 rounded-md transition duration-200 ${
                  isDarkMode
                    ? "text-purple-100 hover:bg-purple-800/30"
                    : "text-purple-800 hover:bg-purple-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
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
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 px-4 sm:px-6 md:px-8 pt-20 sm:pt-24">
            {/* Left */}
            <div className="space-y-6 text-center lg:text-left lg:pr-12">
              <div className="space-y-2">
                <h2
                  className={`text-3xl font-medium ${
                    isDarkMode ? "text-purple-300" : "text-purple-700"
                  }`}
                >
                  Hello, I'm
                </h2>
                <h1
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-[90vw] mx-auto lg:mx-0  ${
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
                  className={`text-lg sm:text-xl md:text-2xl font-thin leading-snug text-center sm:text-left ${
                    isDarkMode ? "text-gray-300" : "text-purple-800"
                  }`}
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStretch: "condensed",
                    letterSpacing: "0.5px",
                  }}
                >
                  AI & Data Science Student | Full Stack Developer | ML Enthusiast
                </h3>

                {/* <h3
                  className={`text-lg sm:text-xl md:text-2xl font-thin leading-snug text-center sm:text-left ${
                    isDarkMode ? "text-gray-300" : "text-purple-800"
                  }`}
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStretch: "condensed",
                    letterSpacing: "0.5px",
                  }}
                >
                  ML Enthusiast
                </h3> */}

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

              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start text-center sm:text-left gap-6 pt-4 w-full">
                {/* Get in Touch Button */}
                <button
                  onClick={handleGetInTouch}
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
                    ["https://leetcode.com/u/KkLrxuDp1n/", <Code2 />],
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
            <div className="flex justify-center lg:justify-end px-4 sm:px-0">
              <div
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full mx-auto"
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
          <About isDarkMode={isDarkMode} />
        </section>
        <section id="projects">
          <Projects isDarkMode={isDarkMode} />
        </section>
        <section id="skills">
          <Skills isDarkMode={isDarkMode} />
        </section>
        <section id="contact">
          <Contact isDarkMode={isDarkMode} />
        </section>
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
