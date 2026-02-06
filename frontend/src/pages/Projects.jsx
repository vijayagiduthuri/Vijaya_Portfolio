import React from "react";
import {
  Github,
  ExternalLink,
  MessageCircle,
  Zap,
  Cloud,
  ShoppingCart,
  Key,
  Flag,
} from "lucide-react";

const projects = [
  {
    title: "Online E-Auction System",
    subtitle: "Quantum Key Distribution Security",
    description:
      "Developed a secure e-auction platform using BB84 Quantum Key Distribution for encrypted bid amounts. Features simulated quantum key exchange with robustness against classical and quantum cyberattacks, ensuring end-to-end data confidentiality.",
    tech: ["Quantum Simulation", "FastAPI", "MongoDB", "Express", "React", "Node.js"],
    githubLink: "https://github.com/vijayagiduthuri/QKD",
    liveLink: "#",
    icon: <Key size={24} />,
    gradient: "from-indigo-400 to-purple-700",
    hasLiveDemo: false,
  },
  {
    title: "Civic Issues Reporting System",
    subtitle: "Smart City Platform",
    description:
      "Created a civic-tech platform for real-time public issue reporting with geolocation tagging. Implemented ML-driven automatic issue routing, admin portal for task assignment, and dedicated apps for users, technicians, and administrators.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Supabase", "Machine Learning"],
    githubLink: "https://github.com/vijayagiduthuri/Civic-app",
    liveLink: "#",
    icon: <Flag size={24} />,
    gradient: "from-emerald-400 to-cyan-600",
    hasLiveDemo: false,
  },
  {
    title: "Talkify",
    subtitle: "MERN Stack Real-Time Chat App",
    description:
      "Enables real-time messaging with support for images, emojis, and typing indicators. Features secure login, friend management, and a responsive, user-friendly UI.",
    tech: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Zustand",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/vijayagiduthuri/Chat-App-tuts",
    liveLink: "https://talkify-oghp.onrender.com/", // Add your actual live link
    icon: <MessageCircle size={24} />,
    gradient: "from-blue-300 to-purple-800",
    hasLiveDemo: true,
  },
  {
    title: "Friendly Fitness Tracker",
    subtitle: "Personalized Fitness Management",
    description:
      "Developed a fitness tracker app to record and keep tabs on daily workouts. Integrated personalized fitness plans and progress tracking with intuitive design.",
    tech: ["React.js", "Node.js", "MongoDB", "Express", "RESTful APIs"],
    githubLink: "https://github.com/vijayagiduthuri/FRONTEND.git",
    liveLink: "#",
    icon: <Zap size={24} />,
    gradient: "from-green-300 to-teal-800",
    hasLiveDemo: false,
  },
  {
    title: "Weather Prediction using ML",
    subtitle: "Machine Learning Model",
    description:
      "Designed a weather prediction model using Linear Regression, achieving 99% accuracy on historical data. Leveraged supervised learning techniques for reliable forecasts.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Flask"],
    githubLink: "https://github.com/vijayagiduthuri/Weather-prediction",
    liveLink: "hhttps://weather-prediction-g3qp.onrender.com", // Add your actual live link
    icon: <Cloud size={24} />,
    gradient: "from-blue-300 to-blue-600",
    hasLiveDemo: true,
  },
  {
    title: "ShopVerse",
    subtitle: "E-Commerce Website",
    description:
      "Built a fully responsive e-commerce platform with essential shopping features and smooth user experience. Added intuitive product filtering, search functionality, and streamlined checkout.",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    githubLink: "https://github.com/vijayagiduthuri/ShopVerse",
    liveLink: "https://melodious-khapse-39f84a.netlify.app/", // Add your actual live link
    icon: <ShoppingCart size={24} />,
    gradient: "from-pink-500 to-purple-600",
    hasLiveDemo: true,
  },
];

function Projects({ isDarkMode = true }) {
  return (
    <div
      className="min-h-screen transition-all duration-500"
      style={{
        backgroundColor: isDarkMode ? "#0a0512" : "#ffffff",
        backgroundImage: isDarkMode
          ? "radial-gradient(ellipse at top, #2d1b4e 0%, #1a0d2e 30%, #0f051a 70%, #0a0512 100%)"
          : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
      }}
    >
      <section id="projects" className="py-16 px-6 relative">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-32 right-20 w-32 h-32 rounded-full opacity-10"
            style={{
              background: isDarkMode
                ? "radial-gradient(circle, #8b5cf6 0%, transparent 70%)"
                : "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
              animation: "float 10s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-32 left-20 w-20 h-20 rounded-full opacity-15"
            style={{
              background: isDarkMode
                ? "radial-gradient(circle, #a78bfa 0%, transparent 70%)"
                : "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
              animation: "float 12s ease-in-out infinite reverse",
            }}
          />
          <div
            className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full opacity-8"
            style={{
              background: isDarkMode
                ? "radial-gradient(circle, #c4b5fd 0%, transparent 70%)"
                : "radial-gradient(circle, #a855f7 0%, transparent 70%)",
              animation: "float 8s ease-in-out infinite",
              animationDelay: "2s",
            }}
          />
          <div
            className="absolute top-20 left-1/2 w-24 h-24 rounded-full opacity-5"
            style={{
              background: isDarkMode
                ? "radial-gradient(circle, #ddd6fe 0%, transparent 70%)"
                : "radial-gradient(circle, #9333ea 0%, transparent 70%)",
              animation: "float 15s ease-in-out infinite reverse",
              animationDelay: "4s",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2
              className={`mt-6 text-3xl md:text-4xl font-bold mb-2 ${
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
              My Projects
            </h2>
            <div
              className={`w-24 h-1 mx-auto rounded-full mb-4 ${
                isDarkMode
                  ? "bg-gradient-to-r from-purple-400 to-purple-800"
                  : "bg-gradient-to-r from-purple-400 to-purple-800"
              }`}
            />
            <p
              className={`text-sm max-w-2xl mx-auto ${
                isDarkMode ? "text-purple-200/80" : "text-purple-700/80"
              }`}
            >
              Explore my latest projects showcasing Mern-stack development,
              machine learning, and modern web technologies
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`group relative rounded-3xl backdrop-blur-lg transition-all duration-500 hover:scale-[1.02] cursor-pointer ${
                  isDarkMode ? "bg-black/40" : "bg-white/80"
                }`}
                style={{
                  border: "1.5px solid",
                  borderColor: isDarkMode ? "#A855F7" : "#7c3aed",
                  boxShadow: isDarkMode
                    ? "0 0 8px 2px rgba(168, 85, 247, 0.3)"
                    : "0 0 8px 2px rgba(124, 58, 237, 0.2)",
                  animation: `slideInUp 0.6s ease-out ${idx * 0.2}s both`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = isDarkMode
                    ? "0 0 12px 3px rgba(168, 85, 247, 0.5)"
                    : "0 0 12px 3px rgba(124, 58, 237, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = isDarkMode
                    ? "0 0 8px 2px rgba(168, 85, 247, 0.3)"
                    : "0 0 8px 2px rgba(124, 58, 237, 0.2)";
                }}
              >
                {/* Project Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg`}
                    >
                      <div className="text-white">{project.icon}</div>
                    </div>

                    {/* Action Icons */}
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                          isDarkMode
                            ? "bg-gray-800/60 hover:bg-gray-700/80 text-purple-300 hover:text-white"
                            : "bg-white/80 hover:bg-gray-100 text-purple-600 hover:text-purple-800"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                      </a>

                      {project.hasLiveDemo && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                            isDarkMode
                              ? "bg-purple-600/60 hover:bg-purple-500/80 text-white"
                              : "bg-purple-600 hover:bg-purple-700 text-white"
                          }`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Title & Subtitle */}
                  <div className="mb-3">
                    <h3
                      className={`text-xl font-bold mb-1 ${
                        isDarkMode ? "text-white" : "text-purple-900"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-purple-300" : "text-purple-600"
                      }`}
                    >
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Project Description */}
                  <p
                    className={`text-sm leading-relaxed mb-4 ${
                      isDarkMode ? "text-purple-100/80" : "text-purple-900/80"
                    }`}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="px-6 pb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 ${
                          isDarkMode
                            ? "bg-purple-500/20 text-purple-300 hover:bg-purple-400/30"
                            : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                        }`}
                        style={{
                          animation: `fadeInScale 0.4s ease-out ${
                            techIdx * 0.1
                          }s both`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Gradient Border Effect */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${
                      isDarkMode
                        ? "rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%"
                        : "rgba(124, 58, 237, 0.1) 0%, rgba(147, 51, 234, 0.05) 100%"
                    })`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-8px) rotate(1deg);
          }
          66% {
            transform: translateY(4px) rotate(-1deg);
          }
        }

        @keyframes slideInUp {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default Projects;
