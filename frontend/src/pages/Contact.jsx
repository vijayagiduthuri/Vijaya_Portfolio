import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 gradient-text">Contact</h2>
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="mailto:vijaya@example.com"
            className="social-icon w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:scale-110 bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/40 glow-effect text-2xl"
            title="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://linkedin.com/in/vijaya-giduthuri"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:scale-110 bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-lg hover:shadow-xl hover:shadow-sky-500/40 glow-effect text-2xl"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/vijaya-giduthuri"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:scale-110 bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-lg hover:shadow-xl hover:shadow-slate-500/40 glow-effect text-2xl"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        {/* Optional Contact Form */}
        <form className="bg-slate-800/80 rounded-xl p-8 shadow-lg flex flex-col gap-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-3 rounded-lg bg-slate-900/80 text-white placeholder-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-lg bg-slate-900/80 text-white placeholder-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="px-4 py-3 rounded-lg bg-slate-900/80 text-white placeholder-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
          ></textarea>
          <button
            type="submit"
            className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact; 