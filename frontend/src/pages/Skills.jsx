import React from "react";

const skills = [
  { name: "React", icon: "fab fa-react" },
  { name: "Node.js", icon: "fab fa-node-js" },
  { name: "MongoDB", icon: "fas fa-database" },
  { name: "Express", icon: "fas fa-server" },
  { name: "Python", icon: "fab fa-python" },
  { name: "TensorFlow", icon: "fas fa-brain" },
  { name: "Keras", icon: "fas fa-brain" },
  { name: "Tailwind CSS", icon: "fas fa-wind" },
  { name: "Git", icon: "fab fa-git-alt" },
  { name: "Docker", icon: "fab fa-docker" },
  { name: "Redux", icon: "fas fa-sync" },
  { name: "Flask", icon: "fas fa-flask" },
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 gradient-text">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center bg-slate-800/80 rounded-xl p-6 shadow-lg hover:scale-110 hover:shadow-2xl transition-transform duration-300">
              <i className={`${skill.icon} text-4xl mb-3 text-sky-400`}></i>
              <span className="text-lg font-semibold text-sky-100">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills; 