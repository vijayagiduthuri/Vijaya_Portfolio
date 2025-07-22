import React from "react";

const projects = [
  {
    title: "AI Chatbot",
    description: "Conversational AI chatbot for customer support.",
    tech: ["React", "Node.js", "TensorFlow"],
    link: "https://github.com/vijaya-giduthuri/ai-chatbot",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS"],
    link: "https://github.com/vijaya-giduthuri/portfolio",
    demo: "#",
  },
  {
    title: "Expense Tracker",
    description: "Track expenses and visualize spending habits.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/vijaya-giduthuri/expense-tracker",
    demo: "#",
  },
  {
    title: "Weather App",
    description: "Real-time weather updates with beautiful UI.",
    tech: ["React", "OpenWeatherMap API"],
    link: "https://github.com/vijaya-giduthuri/weather-app",
    demo: "#",
  },
  {
    title: "Blog Platform",
    description: "Full-stack blog platform with authentication.",
    tech: ["MERN", "JWT", "Redux"],
    link: "https://github.com/vijaya-giduthuri/blog-platform",
    demo: "#",
  },
  {
    title: "Image Classifier",
    description: "Deep learning image classification app.",
    tech: ["Python", "Keras", "Flask"],
    link: "https://github.com/vijaya-giduthuri/image-classifier",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center gradient-text">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-slate-800/80 rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-2 text-sky-400">{project.title}</h3>
              <p className="mb-4 text-sky-100">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-sky-700/30 text-sky-200 px-3 py-1 rounded-full text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-200 underline">GitHub</a>
                {project.demo !== "#" && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-200 underline">Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 