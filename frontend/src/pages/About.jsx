import React, { useState } from "react";
import {
  Download,
  BookOpen,
  Award,
  Code,
  GraduationCap,
  User,
  Trophy,
  Star,
  Target,
  ChevronRight,
} from "lucide-react";

function About({ isDarkMode = true }) {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { id: "education", label: "Education", icon: <GraduationCap size={16} /> },
    { id: "personal", label: "Personal Details", icon: <User size={16} /> },
  ];

  const technicalSkills = ["Java", "Python", "Full Stack", "Data Structures"];

  const achievements = [
    {
      icon: <Trophy size={16} />,
      title: "Vedic Vision Hackathon 2k24",
      desc: "Awarded a special category prize in a college-level hackathon among 40+ teams.",
    },
    {
      icon: <Award size={16} />,
      title: "Academic Excellence Award",
      desc: "Secured Second Prize in First Year for maintaining a 9.55/10 CGPA.",
    },
  ];

  // const interests = [
  //   {
  //     icon: <Code size={16} />,
  //     text: "Full Stack Development",
  //     desc: "Building scalable web applications with modern technologies",
  //   },
  //   {
  //     icon: <BookOpen size={16} />,
  //     text: "Machine Learning",
  //     desc: "Exploring AI algorithms and data science methodologies",
  //   },
  //   {
  //     icon: <Target size={16} />,
  //     text: "Problem Solving",
  //     desc: "Competitive programming and algorithmic thinking",
  //   },
  // ];

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
      <section id="about" className="py-16 px-6 relative">
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
              About Me
            </h2>
            <div
              className={`w-24 h-1 mx-auto rounded-full ${
                isDarkMode
                  ? "bg-gradient-to-r from-purple-400 to-purple-800"
                  : "bg-gradient-to-r from-purple-400 to-purple-800"
              }`}
            />
          </div>

          {/* Introduction Card */}
          <div
            className={`p-6 rounded-3xl border backdrop-blur-lg mb-5 ${
              isDarkMode
                ? "bg-black/40 border-purple-500/20"
                : "bg-white/80 border-purple-200"
            }`}
            style={{
              boxShadow: isDarkMode
                ? "0 20px 60px rgba(139, 92, 246, 0.15)"
                : "0 20px 60px rgba(124, 58, 237, 0.15)",
            }}
          >
            <div className="flex items-start space-x-4">
              <div
                className={`p-3 rounded-2xl ${
                  isDarkMode
                    ? "bg-gradient-to-br from-purple-600/30 to-purple-700/30"
                    : "bg-gradient-to-br from-purple-100 to-purple-200"
                }`}
              >
                <Star
                  size={18}
                  className={isDarkMode ? "text-purple-300" : "text-purple-700"}
                />
              </div>
              <div className="flex-1">
                <h3
                  className={`text-lg font-bold mb-2 ${
                    isDarkMode ? "text-purple-300" : "text-purple-800"
                  }`}
                >
                  Hello There! 👋
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-2 ${
                    isDarkMode ? "text-purple-100/90" : "text-purple-900/90"
                  }`}
                >
                  I'm{" "}
                  <span
                    className={`font-bold text-base ${
                      isDarkMode ? "text-purple-200" : "text-purple-700"
                    }`}
                  >
                    Vijaya Giduthuri
                  </span>
                  , a passionate AI & Data Science student with a strong drive
                  to explore and innovate through{" "}
                  <span className="font-semibold">full-stack development</span>.
                </p>

                <p
                  className={`text-sm leading-relaxed ${
                    isDarkMode ? "text-purple-100/80" : "text-purple-900/80"
                  }`}
                >
                  I love building seamless web applications and exploring{" "}
                  <span className="font-semibold">machine learning</span>{" "}
                  potential while solving problems with{" "}
                  <span className="font-semibold">
                    data structures and algorithms
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
          <div
            className={`relative flex p-0.5 rounded-xl mb-6 w-fit mx-auto ${
              isDarkMode
                ? "bg-gray-800/90 border border-gray-700/50 backdrop-blur-xl"
                : "bg-white/90 border border-gray-200/50 shadow-xl backdrop-blur-xl"
            }`}
          >
            <div
              className={`absolute top-0.5 bottom-0.5 rounded-lg transition-all duration-500 ease-out shadow-lg ${
                isDarkMode
                  ? "bg-gradient-to-r from-purple-400 to-purple-900"
                  : "bg-gradient-to-r from-purple-400 to-purple-900"
              }`}
              style={{
                left: `${
                  tabs.findIndex((tab) => tab.id === activeTab) *
                  (100 / tabs.length)
                }%`,
                width: `${100 / tabs.length}%`,
              }}
            />
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-40 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-white transform scale-105"
                    : isDarkMode
                    ? "text-gray-300 hover:text-white hover:scale-102"
                    : "text-gray-600 hover:text-gray-900 hover:scale-102"
                }`}
              >
                <span className="text-base">{tab.icon}</span>
                <span className="whitespace-nowrap text-xs sm:text-sm">
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content - Compact Left-Aligned Version */}
          <div
            className={`inline-block rounded-3xl border backdrop-blur-lg transition-all duration-500 ${
              isDarkMode
                ? "bg-black/40 border-purple-500/20"
                : "bg-white/80 border-purple-200"
            }`}
            style={{
              boxShadow: isDarkMode
                ? "0 20px 60px rgba(139, 92, 246, 0.15)"
                : "0 20px 60px rgba(124, 58, 237, 0.15)",
            }}
          >
            {activeTab === "education" && (
              <div className="p-6 space-y-6 w-full">
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap
                    size={20}
                    className={
                      isDarkMode ? "text-purple-400" : "text-purple-600"
                    }
                  />
                  <h3
                    className={`text-lg font-bold ${
                      isDarkMode ? "text-purple-300" : "text-purple-800"
                    }`}
                  >
                    My Academic Journey
                  </h3>
                </div>

                {/* B.Tech Education */}
                <div
                  className={`relative p-4 rounded-xl border ${
                    isDarkMode
                      ? "bg-purple-900/20 border-purple-500/30"
                      : "bg-purple-50 border-purple-300/50"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-3 h-3 rounded-full mt-2 ring-3 ${
                        isDarkMode
                          ? "bg-purple-400 ring-purple-400/20"
                          : "bg-purple-600 ring-purple-600/20"
                      }`}
                      style={{
                        boxShadow: isDarkMode
                          ? "0 0 10px rgba(168, 85, 247, 0.6)"
                          : "0 0 10px rgba(124, 58, 237, 0.6)",
                      }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4
                          className={`text-l font-bold ${
                            isDarkMode ? "text-white" : "text-purple-900"
                          }`}
                        >
                          Bachelor of Technology
                        </h4>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            isDarkMode
                              ? "bg-purple-600/30 text-purple-200"
                              : "bg-purple-600 text-white"
                          }`}
                        >
                          CGPA: 9.53/10.00
                        </span>
                      </div>
                      <p
                        className={`text-sm font-semibold mb-1 ${
                          isDarkMode ? "text-purple-300" : "text-purple-700"
                        }`}
                      >
                        Artificial Intelligence & Data Science
                      </p>
                      <p
                        className={`text-sm mb-1 ${
                          isDarkMode ? "text-purple-200" : "text-purple-600"
                        }`}
                      >
                        Sagi Ramakrishnam Raju Engineering College, Bhimavaram
                      </p>
                      <p
                        className={`text-xs ${
                          isDarkMode ? "text-purple-400" : "text-purple-500"
                        }`}
                      >
                        2023 - Present
                      </p>
                    </div>
                  </div>
                </div>

                {/* Intermediate Education */}
                <div
                  className={`relative p-4 rounded-xl border ${
                    isDarkMode
                      ? "bg-purple-900/20 border-purple-500/30"
                      : "bg-purple-50 border-purple-300/50"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-3 h-3 rounded-full mt-2 ring-3 ${
                        isDarkMode
                          ? "bg-purple-400 ring-purple-400/20"
                          : "bg-purple-600 ring-purple-600/20"
                      }`}
                      style={{
                        boxShadow: isDarkMode
                          ? "0 0 10px rgba(168, 85, 247, 0.6)"
                          : "0 0 10px rgba(124, 58, 237, 0.6)",
                      }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4
                          className={`text-l font-bold ${
                            isDarkMode ? "text-white" : "text-purple-900"
                          }`}
                        >
                          Intermediate (XII)
                        </h4>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            isDarkMode
                              ? "bg-purple-600/30 text-purple-200"
                              : "bg-purple-600 text-white"
                          }`}
                        >
                          98%
                        </span>
                      </div>
                      <p
                        className={`text-sm mb-1 ${
                          isDarkMode ? "text-purple-200" : "text-purple-600"
                        }`}
                      >
                        Akhil Junior College
                      </p>
                      <p
                        className={`text-xs ${
                          isDarkMode ? "text-purple-400" : "text-purple-500"
                        }`}
                      >
                        2021 - 2023
                      </p>
                    </div>
                  </div>
                </div>

                {/* Resume Download Button - Centered */}
                {/* <div className="pt-4 border-t border-purple-500/20 flex justify-center">
                  <button
                    className="inline-flex items-center space-x-2 py-2 px-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
                    style={{
                      backgroundColor: isDarkMode
                        ? "rgba(0,0,0,0.7)"
                        : "#7c3aed",
                      color: isDarkMode ? "#C084FC" : "#ffffff",
                      border: isDarkMode
                        ? "2px solid #A855F7"
                        : "2px solid #7c3aed",
                      boxShadow: isDarkMode
                        ? "0 0 15px 2px rgba(168, 85, 247, 0.4)"
                        : "0 0 15px 2px rgba(124, 58, 237, 0.4)",
                    }}
                  >
                    <Download
                      size={16}
                      className="group-hover:animate-bounce"
                    />
                    <span>Download Resume</span>
                  </button>
                </div> */}
              </div>
            )}

            {activeTab === "personal" && (
              <div className="p-6 space-y-6 w-full">
                <div className="flex items-center space-x-3 mb-4">
                  <User
                    size={20}
                    className={
                      isDarkMode ? "text-purple-400" : "text-purple-600"
                    }
                  />
                  <h3
                    className={`text-lg font-bold ${
                      isDarkMode ? "text-purple-300" : "text-purple-800"
                    }`}
                  >
                    Personal Details
                  </h3>
                </div>

                {/* Personal details Section - Compact */}
                <div
                  className={`p-4 rounded-xl border ${
                    isDarkMode
                      ? "bg-purple-900/20 border-purple-500/30"
                      : "bg-purple-50 border-purple-300/50"
                  }`}
                >
                  <p
                    className={`text-sm leading-relaxed ${
                      isDarkMode ? "text-purple-100/90" : "text-purple-900/90"
                    }`}
                  >
                    I'm currently pursuing my undergraduate degree in Artificial
                    Intelligence and Data Science at SRKR Engineering College.
                    I'm passionate about working with new technologies and
                    dedicated to continuous learning. I enjoy teaching web
                    technologies and helping others develop their skills.
                  </p>
                </div>

                {/* Technical Skills - Compact */}
                <div>
                  <h4
                    className={`text-sm font-bold mb-3 ${
                      isDarkMode ? "text-purple-300" : "text-purple-800"
                    }`}
                  >
                    Technical Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 ${
                          isDarkMode
                            ? "bg-purple-500/20 text-purple-300"
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements and Interests Side by Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Achievements Section - Compact */}
                  <div>
                    <h4
                      className={`text-sm font-bold mb-3 ${
                        isDarkMode ? "text-purple-300" : "text-purple-800"
                      }`}
                    >
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="flex flex-col items-center mt-1">
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${
                                isDarkMode ? "bg-purple-400" : "bg-purple-600"
                              }`}
                            />
                            {index < achievements.length - 1 && (
                              <div
                                className={`w-px h-8 ${
                                  isDarkMode
                                    ? "bg-purple-500/30"
                                    : "bg-purple-400/30"
                                }`}
                              />
                            )}
                          </div>
                          <div className="flex-1 pb-2">
                            <h5
                              className={`text-sm font-bold tracking-tight mb-0.5 ${
                                isDarkMode ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {achievement.title}
                            </h5>
                            <p
                              className={`text-xs ${
                                isDarkMode
                                  ? "text-purple-300"
                                  : "text-purple-600"
                              }`}
                            >
                              {achievement.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interests & Passions - Compact */}
                  {/* <div>
                    <h4
                      className={`text-sm font-bold mb-3 ${
                        isDarkMode ? "text-purple-300" : "text-purple-800"
                      }`}
                    >
                      Interests & Passions
                    </h4>
                    <div className="space-y-2">
                      {interests.map((interest, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="flex flex-col items-center mt-1">
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${
                                isDarkMode ? "bg-purple-400" : "text-purple-600"
                              }`}
                            />
                            {index < interests.length - 1 && (
                              <div
                                className={`w-px h-8 ${
                                  isDarkMode
                                    ? "bg-purple-500/30"
                                    : "bg-purple-400/30"
                                }`}
                              />
                            )}
                          </div>
                          <div className="flex-1 pb-2">
                            <h5
                              className={`text-sm font-bold tracking-tight mb-0.5 ${
                                isDarkMode ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {interest.text}
                            </h5>
                            <p
                              className={`text-xs ${
                                isDarkMode
                                  ? "text-purple-300"
                                  : "text-purple-600"
                              }`}
                            >
                              {interest.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-8px) rotate(1deg);
          }
          66% {
            transform: translateY(4px) rotate(-1deg);
          }
        }
      `}</style>
    </div>
  );
}

export default About;
