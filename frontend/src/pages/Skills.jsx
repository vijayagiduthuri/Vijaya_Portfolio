import React, { useState, useEffect } from "react";
import { Code, Database, Server, Terminal, Brain, Globe } from "lucide-react";

const skillsData = {
  "Programming Languages": {
    iconComponent: Code,
    gradient: "from-blue-400 to-blue-700",
    skills: ["C", "Java", "Python", "JavaScript", "TypeScript"],
    color: "#3B82F6",
  },
  "Frontend Technologies": {
    iconComponent: Globe,
    gradient: "from-purple-400 to-purple-700",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
    color: "#8B5CF6",
  },
  "Backend Technologies": {
    iconComponent: Server,
    gradient: "from-green-400 to-green-700",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Flask"],
    color: "#10B981",
  },
  Databases: {
    iconComponent: Database,
    gradient: "from-orange-400 to-orange-700",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
    color: "#F97316",
  },
  "Developer Tools": {
    iconComponent: Terminal,
    gradient: "from-pink-400 to-pink-700",
    skills: ["Git", "VsCode", "Jupyter Notebook", "Canva"],
    color: "#EC4899",
  },
  "Machine Learning": {
    iconComponent: Brain,
    gradient: "from-cyan-400 to-cyan-700",
    skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    color: "#06B6D4",
  },
};
function Skills({ isDarkMode = true }) {
  const [visibleCategories, setVisibleCategories] = useState({});

  useEffect(() => {
    Object.keys(skillsData).forEach((category, index) => {
      setTimeout(() => {
        setVisibleCategories((prev) => ({
          ...prev,
          [category]: true,
        }));
      }, index * 200);
    });
  }, []);

  const getSkillDescription = (category) => {
    switch (category) {
      case "Programming Languages":
        return "Core languages for software development";
      case "Frontend Technologies":
        return "Modern web development frameworks and tools";
      case "Backend Technologies":
        return "Server-side development and API creation";
      case "Databases":
        return "Data storage and management systems";
      case "Developer Tools":
        return "Essential development and design tools";
      case "Machine Learning":
        return "Data science and ML libraries";
      default:
        return "";
    }
  };

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

      <section id="skills" className="py-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
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
              Technical Skills
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
              Passionate about leveraging cutting-edge technologies to build
              innovative solutions
            </p>
          </div>

          {/* Skills Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillsData).map(
              ([category, data], categoryIndex) => {
                const IconComponent = data.iconComponent;
                const isVisible = visibleCategories[category];

                return (
                  <div
                    key={category}
                    className={`group relative rounded-3xl backdrop-blur-lg transition-all duration-500 hover:scale-[1.02] cursor-pointer ${
                      isDarkMode ? "bg-black/40" : "bg-white/80"
                    } ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{
                      border: "1.5px solid",
                      borderColor: data.color + "80",
                      boxShadow: isDarkMode
                        ? `0 0 8px 2px ${data.color}30`
                        : `0 0 8px 2px ${data.color}20`,
                      transitionDelay: `${categoryIndex * 0.1}s`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = isDarkMode
                        ? `0 0 12px 3px ${data.color}50`
                        : `0 0 12px 3px ${data.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = isDarkMode
                        ? `0 0 8px 2px ${data.color}30`
                        : `0 0 8px 2px ${data.color}20`;
                    }}
                  >
                    {/* Category Header */}
                    <div className="p-6 pb-5">
                      <div className="flex items-center mb-5">
                        <div
                          className={`p-2 rounded-2xl bg-gradient-to-br ${data.gradient} shadow-lg mr-3 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <div className="text-white">
                            <IconComponent size={20} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3
                            className={`text-lg font-bold ${
                              isDarkMode ? "text-white" : "text-purple-900"
                            }`}
                          >
                            {category}
                          </h3>
                          <div
                            className="h-1 rounded-full mt-2 transition-all duration-300"
                            style={{
                              background: `linear-gradient(90deg, ${data.color} 0%, transparent 100%)`,
                              width: "60%",
                            }}
                          />
                        </div>
                      </div>

                      {/* Skills Description */}
                      <p
                        className={`text-xs mb-5 ${
                          isDarkMode
                            ? "text-purple-100/80"
                            : "text-purple-900/80"
                        }`}
                      >
                        {getSkillDescription(category)}
                      </p>
                    </div>

                    {/* Skills Tags */}
                    <div className="px-6 pb-6">
                      <div className="flex flex-wrap gap-2">
                        {data.skills.map((skill, skillIndex) => (
                          <span
                            key={skill}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 ${
                              isDarkMode
                                ? "bg-purple-500/20 text-purple-300 hover:bg-purple-400/30"
                                : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                            }`}
                            style={{
                              animation: `fadeInScale 0.4s ease-out ${
                                skillIndex * 0.1 + 0.3
                              }s both`,
                              borderColor: data.color + "40",
                              border: "1px solid",
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Gradient Border Effect */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, ${data.color}10 0%, ${data.color}05 100%)`,
                      }}
                    />
                  </div>
                );
              }
            )}
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
export default Skills;
