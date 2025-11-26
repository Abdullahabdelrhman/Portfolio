"use client";

import React from "react";
import { Code, Github, ExternalLink, ArrowRight } from "lucide-react";

const personalInfo = {
  github: "https://github.com/Abdullahabdelrhman",
};

const projects = [
  {
    title: "Currency & BTC Converter",
    category: "React App",
    description:
      "A powerful real-time currency converter featuring live exchange rates and Bitcoin pricing. Built with a focus on performance and accuracy using multiple APIs.",
    tech: ["React", "TypeScript", "Tailwind", "CoinGecko API"],
    demo: "https://currency-btc-converter-n9losb7h3-abdullah-zakis-projects.vercel.app/",
    repo: "https://github.com/Abdullahabdelrhman",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Fresh Cart E-commerce",
    category: "E-commerce",
    description:
      "Full-featured e-commerce platform. Includes secure user authentication, dynamic cart management, product filtering, and a seamless checkout experience.",
    tech: ["React", "Axios", "Formik", "Yup"],
    demo: "https://fresh-cart-demo-link.com",
    repo: "https://github.com/kareem-shalan/Fresh-Cart",
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Weather Dashboard",
    category: "Utility",
    description:
      "Interactive weather forecast application. Users can search for any city to get real-time data, humidity levels, and wind speeds with visual representations.",
    tech: ["JavaScript", "Bootstrap", "Weather API"],
    demo: "#",
    repo: "#",
    color: "from-orange-500 to-yellow-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-slate-800/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
          </div>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all mt-4 md:mt-0 font-medium"
          >
            View All Repositories <ArrowRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900 border border-slate-700/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-3 flex flex-col h-full"
            >
              <div className={`h-56 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20 shadow-lg">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 ease-out">
                  <Code size={80} />
                </div>
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all border border-white/20"
                    title="View Code"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-cyan-500 rounded-full hover:bg-cyan-400 hover:scale-110 transition-all shadow-lg shadow-cyan-500/30"
                    title="Live Demo"
                  >
                    <ExternalLink size={24} className="text-white" />
                  </a>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">{project.description}</p>
                <div className="mt-auto pt-6 border-t border-slate-800 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded-full border border-slate-700 group-hover:border-cyan-500/30 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href={personalInfo.github} className="text-cyan-400 font-medium inline-flex items-center gap-2">
            View All Projects <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
