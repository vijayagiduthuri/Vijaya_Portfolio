import React, { useState } from "react";
import { Linkedin, Github, Mail, Phone, MapPin, Code2 } from "lucide-react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Contact({ isDarkMode = true }) {
  // Fixed dark theme to match your design
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Sending your message...");
    
    try {
      await axios.post(
        "http://localhost:9000/api/send-email",
        formData
      );
      toast.success("Message sent successfully!", { id: toastId });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.", { id: toastId });
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: isDarkMode ? '#1a0d2e' : '#fff',
            color: isDarkMode ? '#fff' : '#333',
            border: '1.5px solid #8B5CF6',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 0 12px 4px rgba(139, 92, 246, 0.3)',
          },
          success: {
            iconTheme: {
              primary: '#8B5CF6',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
          loading: {
            iconTheme: {
              primary: '#8B5CF6',
              secondary: '#fff',
            },
          },
        }}
      />
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

        <section id="contact" className="py-12 px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
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
                Get In Touch
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
                Let's connect and discuss how we can work together on exciting
                projects
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 items-stretch">
              {/* Left Section - Contact Information */}
              <div className="flex">
                <div
                  className={`group relative rounded-3xl backdrop-blur-lg transition-all duration-500 hover:scale-[1.02] cursor-pointer flex-1 ${
                    isDarkMode ? "bg-black/40" : "bg-white/80"
                  }`}
                  style={{
                    border: "1.5px solid",
                    borderColor: "#8B5CF6" + "80",
                    boxShadow: isDarkMode
                      ? `0 0 8px 2px #8B5CF630`
                      : `0 0 8px 2px #8B5CF620`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = isDarkMode
                      ? `0 0 12px 3px #8B5CF650`
                      : `0 0 12px 3px #8B5CF640`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = isDarkMode
                      ? `0 0 8px 2px #8B5CF630`
                      : `0 0 8px 2px #8B5CF620`;
                  }}
                >
                  <div className="p-5 pb-3">
                    <h3
                      className={`text-lg font-bold mb-4 ${
                        isDarkMode ? "text-white" : "text-purple-900"
                      }`}
                    >
                      Contact Information
                    </h3>

                    {/* Contact Details */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: isDarkMode ? "#000" : "#fff",
                            border: "1.5px solid",
                            borderColor: isDarkMode ? "#A855F7" : "#7c3aed",
                            boxShadow: isDarkMode
                              ? "0 0 12px 4px rgba(168, 85, 247, 0.6)"
                              : "0 0 12px 4px rgba(124, 58, 237, 0.4)",
                          }}
                        >
                          <Mail
                            size={18}
                            color={isDarkMode ? "#ffffff" : "#7c3aed"}
                          />
                        </div>
                        <div>
                          <p
                            className={`text-xs ${
                              isDarkMode
                                ? "text-purple-100/80"
                                : "text-purple-900/80"
                            }`}
                          >
                            Email
                          </p>
                          <p
                            className={`text-sm font-medium ${
                              isDarkMode ? "text-white" : "text-purple-900"
                            }`}
                          >
                            vijayagiduthuri2@gmail.com
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: isDarkMode ? "#000" : "#fff",
                            border: "1.5px solid",
                            borderColor: isDarkMode ? "#A855F7" : "#7c3aed",
                            boxShadow: isDarkMode
                              ? "0 0 12px 4px rgba(168, 85, 247, 0.6)"
                              : "0 0 12px 4px rgba(124, 58, 237, 0.4)",
                          }}
                        >
                          <MapPin
                            size={18}
                            color={isDarkMode ? "#ffffff" : "#7c3aed"}
                          />
                        </div>
                        <div>
                          <p
                            className={`text-xs ${
                              isDarkMode
                                ? "text-purple-100/80"
                                : "text-purple-900/80"
                            }`}
                          >
                            Location
                          </p>
                          <p
                            className={`text-sm font-medium ${
                              isDarkMode ? "text-white" : "text-purple-900"
                            }`}
                          >
                            Bhimavaram, Andhra Pradesh, India
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Social Icons */}
                    <div
                      className="mt-6 pt-4 border-t"
                      style={{ borderColor: "#8B5CF6" + "30" }}
                    >
                      <p
                        className={`text-xs mb-3 ${
                          isDarkMode
                            ? "text-purple-100/80"
                            : "text-purple-900/80"
                        }`}
                      >
                        Follow me on
                      </p>
                      <div className="flex space-x-3">
                        {[
                          {
                            url: "https://www.linkedin.com/in/vijaya-giduthuri-990aa22bb/",
                            icon: "linkedin",
                            component: <Linkedin key="linkedin" />,
                          },
                          {
                            url: "https://github.com/vijayagiduthuri",
                            icon: "github",
                            component: <Github key="github" />,
                          },
                          {
                            url: "https://leetcode.com/u/KkLrxuDp1n/",
                            icon: "leetcode",
                            component: <Code2 key="leetcode" />,
                          },
                        ].map((social, i) => (
                          <a
                            key={i}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                            style={{
                              backgroundColor: isDarkMode ? "#000" : "#fff",
                              border: "1.5px solid",
                              borderColor: isDarkMode ? "#A855F7" : "#7c3aed",
                              boxShadow: isDarkMode
                                ? "0 0 12px 4px rgba(168, 85, 247, 0.6)"
                                : "0 0 12px 4px rgba(124, 58, 237, 0.4)",
                            }}
                          >
                            {React.cloneElement(social.component, {
                              size: 20,
                              color: isDarkMode ? "#ffffff" : "#7c3aed",
                            })}
                          </a>
                        ))}
                      </div>

                      {/* Additional content to fill space */}
                      <div
                        className="mt-4 pt-3"
                        style={{
                          borderTop: "1px solid",
                          borderColor: "#8B5CF6" + "20",
                        }}
                      >
                        <p
                          className={`text-xs leading-relaxed ${
                            isDarkMode
                              ? "text-purple-200/70"
                              : "text-purple-700/70"
                          }`}
                        >
                          I'm always excited to collaborate on innovative
                          projects and connect with fellow developers. Whether
                          you have a project idea, want to discuss technology,
                          or just say hello, I'd love to hear from you!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Contact Form */}
              <div className="flex">
                <div
                  className={`group relative rounded-3xl backdrop-blur-lg transition-all duration-500 hover:scale-[1.02] cursor-pointer flex-1 ${
                    isDarkMode ? "bg-black/40" : "bg-white/80"
                  }`}
                  style={{
                    border: "1.5px solid",
                    borderColor: "#8B5CF6" + "80",
                    boxShadow: isDarkMode
                      ? `0 0 8px 2px #8B5CF630`
                      : `0 0 8px 2px #8B5CF620`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = isDarkMode
                      ? `0 0 12px 3px #8B5CF650`
                      : `0 0 12px 3px #8B5CF640`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = isDarkMode
                      ? `0 0 8px 2px #8B5CF630`
                      : `0 0 8px 2px #8B5CF620`;
                  }}
                >
                  <div className="p-5 pb-3">
                    <h3
                      className={`text-lg font-bold mb-4 ${
                        isDarkMode ? "text-white" : "text-purple-900"
                      }`}
                    >
                      Send a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-4">
                        <div className="relative group">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name"
                            required
                            className={`w-full px-3 py-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                              isDarkMode
                                ? "bg-black/40 text-white placeholder-purple-300/60 border border-purple-500/30 hover:border-purple-400/50"
                                : "bg-white/80 text-purple-900 placeholder-purple-700/60 border border-purple-300/50 hover:border-purple-500/50"
                            }`}
                          />
                        </div>

                        <div className="relative group">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Your Email"
                            required
                            className={`w-full px-3 py-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                              isDarkMode
                                ? "bg-black/40 text-white placeholder-purple-300/60 border border-purple-500/30 hover:border-purple-400/50"
                                : "bg-white/80 text-purple-900 placeholder-purple-700/60 border border-purple-300/50 hover:border-purple-500/50"
                            }`}
                          />
                        </div>

                        <div className="relative group">
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Subject"
                            required
                            className={`w-full px-3 py-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                              isDarkMode
                                ? "bg-black/40 text-white placeholder-purple-300/60 border border-purple-500/30 hover:border-purple-400/50"
                                : "bg-white/80 text-purple-900 placeholder-purple-700/60 border border-purple-300/50 hover:border-purple-500/50"
                            }`}
                          />
                        </div>

                        <div className="relative group">
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Your Message"
                            rows={4}
                            required
                            className={`w-full px-3 py-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none ${
                              isDarkMode
                                ? "bg-black/40 text-white placeholder-purple-300/60 border border-purple-500/30 hover:border-purple-400/50"
                                : "bg-white/80 text-purple-900 placeholder-purple-700/60 border border-purple-300/50 hover:border-purple-500/50"
                            }`}
                          ></textarea>
                        </div>

                        <button
                          type="submit"
                          className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group`}
                          style={{
                            backgroundColor: isDarkMode ? "#000" : "#7c3aed",
                            color: "#ffffff",
                            border: `1.5px solid ${
                              isDarkMode ? "#A855F7" : "#7c3aed"
                            }`,
                            boxShadow: isDarkMode
                              ? "0 0 12px 4px rgba(168, 85, 247, 0.6)"
                              : "0 0 12px 4px rgba(124, 58, 237, 0.6)",
                          }}
                        >
                          <span className="relative z-10">Send Message</span>
                          <div className="absolute inset-0 bg-purple-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="text-center py-6 relative z-10"
          style={{
            borderTop: "1px solid",
            borderColor: "#8B5CF6" + "30",
            backgroundColor: isDarkMode ? "#0a051280" : "#ffffff80",
          }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <p
              className={`text-sm ${
                isDarkMode ? "text-purple-200/80" : "text-purple-700/80"
              }`}
            >
              © 2025 Vijaya Giduthuri. All rights reserved.
            </p>
          </div>
        </footer>

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
        `}</style>
      </div>
    </>
  );
}

export default Contact;
