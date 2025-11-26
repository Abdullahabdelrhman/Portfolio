"use client";

import React from "react";
import { Code, Cpu, Terminal, Layout, Globe, Smartphone, Server, Github } from "lucide-react";

const skills = [
  { name: "React.js", icon: <Globe size={18} />, level: "Advanced" },
  { name: "TypeScript", icon: <Code size={18} />, level: "Intermediate" },
  { name: "Tailwind CSS", icon: <Layout size={18} />, level: "Advanced" },
  { name: "JavaScript (ES6+)", icon: <Terminal size={18} />, level: "Advanced" },
  { name: "Redux Toolkit", icon: <Cpu size={18} />, level: "Intermediate" },
  { name: "REST APIs", icon: <Server size={18} />, level: "Advanced" },
  { name: "Responsive Design", icon: <Smartphone size={18} />, level: "Advanced" },
  { name: "Git & GitHub", icon: <Github size={18} />, level: "Intermediate" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-slate-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Arsenal</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 text-lg">My weapon of choice for building modern web apps.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex flex-col items-center space-y-4">
                <div className="p-4 bg-slate-800 rounded-2xl text-cyan-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300 shadow-lg">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg text-slate-200 group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
                <div className="w-full bg-slate-700/50 rounded-full h-1.5 mt-2 overflow-hidden">
                  <div className="bg-cyan-500 h-1.5 rounded-full w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
