"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Github } from "lucide-react";

const personalInfo = {
  name: "Abdullah Abdelrhman",
  about:
    "Passionate Front-End Developer crafting responsive, user-centric web applications. I blend technical expertise in React & TypeScript with modern design principles to build digital experiences that live on the web.",
  github: "https://github.com/Abdullahabdelrhman",
};

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Front-End Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>

      <div className="text-center z-10 max-w-4xl mx-auto space-y-8">
        <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm text-cyan-300 text-sm font-medium mb-4 animate-fade-in-up">
          <span className="w-2 h-2 bg-cyan-400 rounded-full inline-block mr-2 animate-pulse"></span>
          Available for Freelance & Hire
        </div>

        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-white mb-4 animate-fade-in-up delay-100">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
            {personalInfo.name}
          </span>
        </h1>

        <div className="h-12 flex justify-center items-center overflow-hidden">
          <span className="text-2xl md:text-4xl font-semibold text-slate-400 font-mono animate-slide-up">
            {text}
            <span className="animate-blink text-cyan-400">|</span>
          </span>
        </div>

        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
          {personalInfo.about}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8 animate-fade-in-up delay-300">
          <a
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            View Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-full font-bold hover:bg-slate-700 hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-cyan-500/50 flex items-center justify-center gap-2"
          >
            <Github size={20} /> GitHub Profile
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500/50">
        <ChevronDown size={32} />
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }

        @keyframes blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink { animation: blink 1s step-end infinite; }

        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 15s ease infinite; }

        @keyframes slide-up {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.5s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default Hero;
