"use client";
import Image from "next/image";

import React, { useState, useEffect, useRef , ReactNode } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Terminal,
  Cpu,
  Globe,
  Smartphone,
  Server,
  ArrowRight,
  ChevronDown,
  Phone,
  Layout,
  ExternalLink 
} from "lucide-react";
interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
}
const RevealOnScroll = ({ children, delay = 0 }: RevealOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};
const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Front-End Developer";
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

   useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const personalInfo = {
    name: "Abdullah Abdelrhman",
    email: "bb7904990@gmail.com",
    phone: "+01098958697",
    linkedin: "https://www.linkedin.com/in/abdullh-abdelrhman-2b2452266",
    github: "https://github.com/Abdullahabdelrhman",
    about:
      "Passionate Front-End Developer crafting responsive, user-centric web applications. I blend technical expertise in React & TypeScript with modern design principles to build digital experiences that live on the web.",
  };

  const skills = [
    { name: "React.js", icon: <Globe size={24} />, level: "Advanced" },
    { name: "TypeScript", icon: <Code size={24} />, level: "Intermediate" },
    { name: "Tailwind CSS", icon: <Layout size={24} />, level: "Advanced" },
    { name: "JavaScript (ES6+)", icon: <Terminal size={24} />, level: "Advanced" },
    { name: "Redux Toolkit", icon: <Cpu size={24} />, level: "Intermediate" },
    { name: "REST APIs", icon: <Server size={24} />, level: "Advanced" },
    { name: "Responsive Design", icon: <Smartphone size={24} />, level: "Advanced" },
    { name: "Git & GitHub", icon: <Github size={24} />, level: "Intermediate" },
  ];

  const projects = [
    {
      title: "Currency & BTC Converter",
      category: "React App",
      description:
        "A powerful real-time currency converter featuring live exchange rates and Bitcoin pricing. Built with a focus on performance and accuracy using multiple APIs.",
      tech: ["React", "TypeScript", "Tailwind", "CoinGecko API"],
      demo: "https://currency-btc-converter.vercel.app/",
      repo: "https://github.com/Abdullahabdelrhman",
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Modern Restaurant",
      category: "Landing Page",
      description:
        "A visually stunning and responsive restaurant website showcasing menu items, elegant gallery, and location services with a modern UI design.",
      tech: ["React", "Tailwind CSS", "Responsive UI"],
      demo: "https://my-restaurant-6u6q.vercel.app/",
      repo: "https://github.com/Abdullahabdelrhman",
      color: "from-rose-500 to-orange-500",
    },
    {
      title: "Fresh Cart E-commerce",
      category: "E-commerce",
      description:
        "Full-featured e-commerce platform. Includes secure user authentication, dynamic cart management, product filtering, and a seamless checkout experience.",
      tech: ["React", "Axios", "Formik", "Yup"],
      demo: "https://abdullahabdelrhman.github.io/Local/",
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

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes glow {
          0% { box-shadow: 0 0 5px rgba(34, 211, 238, 0.2); }
          50% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.6); }
          100% { box-shadow: 0 0 5px rgba(34, 211, 238, 0.2); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-glow { animation: glow 3s infinite; }
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>

      <div 
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />

      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0f172a]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tighter cursor-pointer group">
            <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">{'<'}</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-300">
              Abdullah
            </span>
            <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">{' />'}</span>
          </h1>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            {["About", "Skills", "Projects"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group hover:text-cyan-400 transition-colors duration-300"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 border border-cyan-500/50 text-cyan-400 rounded-full hover:bg-cyan-500/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-105 active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>

        <div className="text-center z-10 max-w-5xl mx-auto space-y-8">
          <div className="animate-float">
            <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 mb-8 mx-auto shadow-[0_0_50px_rgba(34,211,238,0.3)]">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0f172a] relative">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  width={224}
                  height={224}
                  priority
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>

          <div className="inline-block px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md text-cyan-300 text-sm font-medium mb-4 shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] transition-shadow cursor-default">
            <span className="relative flex h-3 w-3  mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            Available for Freelance & Hire
          </div>

          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">{personalInfo.name}</span>
          </h1>

          <div className="h-12 flex justify-center items-center overflow-hidden">
            <span className="text-2xl md:text-4xl font-semibold text-slate-400 font-mono">
              {text}
              <span className="animate-pulse text-cyan-400 font-bold ml-1">|</span>
            </span>
          </div>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            {personalInfo.about}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 pt-8">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-bold text-white shadow-[0_10px_30px_rgba(8,145,178,0.3)] hover:shadow-[0_20px_40px_rgba(8,145,178,0.5)] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 skew-x-12 -ml-4"></div>
              <span className="relative flex items-center justify-center gap-2">
                View Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass-card rounded-full font-bold hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-cyan-500/50 flex items-center justify-center gap-2 group"
            >
              <Github size={20} className="group-hover:rotate-12 transition-transform" /> GitHub Profile
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500/50">
          <ChevronDown size={32} />
        </div>
      </section>

      <section id="skills" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Tech Stack</span>
            </h2>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="group glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:bg-slate-800/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/5 hover:border-cyan-500/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="mb-6 p-4 rounded-full bg-slate-900/50 text-cyan-400 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-500 shadow-lg">
                    {React.cloneElement(skill.icon, { size: 32 })}
                  </div>
                  <h3 className="font-bold text-xl text-white mb-2 relative z-10">{skill.name}</h3>
                  <p className="text-slate-400 text-sm relative z-10">{skill.level}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 relative z-10 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, idx) => (
              <RevealOnScroll key={idx} delay={idx * 150}>
                <div className="group relative rounded-2xl overflow-hidden bg-[#1e293b] border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-900/20 hover:-translate-y-2 h-full flex flex-col">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${project.color}`}></div>
                  
                  <div className={`h-2 w-full bg-gradient-to-r ${project.color}`}></div>
                  
                  <div className="p-8 flex flex-col flex-grow relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full bg-white/5 text-cyan-300 border border-cyan-500/20`}>
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-200 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="mb-6 text-slate-400 text-sm leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-md border border-slate-700/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 mt-auto">
                      {project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-center font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 group/btn"
                        >
                          Live Demo <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform"/>
                        </a>
                      )}
                      {project.repo !== "#" && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-3 bg-slate-800 text-white rounded-xl text-center font-semibold text-sm border border-slate-700 hover:bg-slate-700 transition-all flex items-center justify-center gap-2 group/btn"
                        >
                          Code <Code size={16} className="group-hover/btn:rotate-90 transition-transform"/>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#020617]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let&apos;s <span className="text-cyan-400">Connect</span></h2>
            <p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto">
              Interested in collaborating or just want to say hi? I&apos;m always open to discussing new projects and creative ideas.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
              <a
                href={`tel:${personalInfo.phone}`}
                className="w-full md:w-auto px-8 py-5 glass-card hover:bg-slate-800/80 text-white font-bold rounded-2xl border border-slate-700 transition-all flex items-center justify-center gap-4 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(168,85,247,0.2)] group"
              >
                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Call Me</div>
                  <div className="text-lg">{personalInfo.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="w-full md:w-auto px-8 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-cyan-900/20 flex items-center justify-center gap-4 hover:-translate-y-1 hover:shadow-cyan-500/40 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="p-3 bg-white/20 rounded-xl text-white relative z-10">
                  <Mail size={24} />
                </div>
                <div className="text-left relative z-10">
                  <div className="text-xs text-cyan-100 uppercase tracking-wider font-semibold">Email Me</div>
                  <div className="text-lg">Send a Message</div>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-8 py-5 glass-card hover:bg-slate-800/80 text-white font-bold rounded-2xl border border-slate-700 transition-all flex items-center justify-center gap-4 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)] group"
              >
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Linkedin size={24} />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">LinkedIn</div>
                  <div className="text-lg">Let&apos;s Connect</div>
                </div>
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <footer className="py-8 bg-[#020617] border-t border-slate-800 text-slate-500 text-center relative z-10">
        <div className="flex justify-center space-x-8 mb-4">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors transform hover:scale-110">
            <Github size={22} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors transform hover:scale-110">
            <Linkedin size={22} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition-colors transform hover:scale-110">
            <Mail size={22} />
          </a>
        </div>
        <p className="text-sm font-medium">&copy; {new Date().getFullYear()} Abdullah Abdelrhman. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;