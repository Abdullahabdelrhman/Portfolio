"use client";

import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
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
  Utensils
} from "lucide-react";

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  // تأثير الكتابة التلقائية
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

  // تغيير الناف بار عند السكرول
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
    { name: "React.js", icon: <Globe size={18} />, level: "Advanced" },
    { name: "TypeScript", icon: <Code size={18} />, level: "Intermediate" },
    { name: "Tailwind CSS", icon: <Layout size={18} />, level: "Advanced" },
    { name: "JavaScript (ES6+)", icon: <Terminal size={18} />, level: "Advanced" },
    { name: "Redux Toolkit", icon: <Cpu size={18} />, level: "Intermediate" },
    { name: "REST APIs", icon: <Server size={18} />, level: "Advanced" },
    { name: "Responsive Design", icon: <Smartphone size={18} />, level: "Advanced" },
    { name: "Git & GitHub", icon: <Github size={18} />, level: "Intermediate" },
  ];

  const projects = [
    {
      title: "Currency & BTC Converter",
      category: "React App",
      description:
        "A powerful real-time currency converter featuring live exchange rates and Bitcoin pricing. Built with a focus on performance and accuracy using multiple APIs.",
      tech: ["React", "TypeScript", "Tailwind", "CoinGecko API"],
      demo: "https://currency-btc-converter-n9losb7h3-abdullah-zakis-projects.vercel.app/",
      repo: "https://github.com/Abdullahabdelrhman",
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "Modern Restaurant",
      category: "Landing Page",
      description:
        "A visually stunning and responsive restaurant website showcasing menu items, elegant gallery, and location services with a modern UI design.",
      tech: ["React", "Tailwind CSS", "Responsive UI"],
      demo: "https://my-restaurant-6u6q.vercel.app/",
      repo: "https://github.com/Abdullahabdelrhman",
      color: "from-rose-500 to-orange-500"
    },
    {
      title: "Fresh Cart E-commerce",
      category: "E-commerce",
      description:
        "Full-featured e-commerce platform. Includes secure user authentication, dynamic cart management, product filtering, and a seamless checkout experience.",
      tech: ["React", "Axios", "Formik", "Yup"],
      demo: "https://fresh-cart-demo-link.com",
      repo: "https://github.com/kareem-shalan/Fresh-Cart",
      color: "from-green-600 to-emerald-500"
    },
    {
      title: "Weather Dashboard",
      category: "Utility",
      description:
        "Interactive weather forecast application. Users can search for any city to get real-time data, humidity levels, and wind speeds with visual representations.",
      tech: ["JavaScript", "Bootstrap", "Weather API"],
      demo: "#",
      repo: "#",
      color: "from-orange-500 to-yellow-500"
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-slate-900/90 backdrop-blur-md shadow-lg py-4 border-b border-white/5" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tighter hover:scale-105 transition-transform cursor-default">
            <span className="text-cyan-400">{'<'}</span>
            Abdullah
            <span className="text-cyan-400">{' />'}</span>
          </h1>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            {["About", "Skills", "Projects"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="relative group hover:text-cyan-400 transition">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contact" className="px-5 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-slate-900 transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]">
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>

        <div className="text-center z-10 max-w-4xl mx-auto space-y-8">
          
          {/* Image Removed */}

          <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm text-cyan-300 text-sm font-medium mb-4 animate-fade-in-up hover:scale-105 transition-transform cursor-default shadow-[0_0_10px_rgba(34,211,238,0.2)]">
            <span className="w-2 h-2 bg-cyan-400 rounded-full inline-block mr-2 animate-pulse"></span>
            Available for Freelance & Hire
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-white mb-4 animate-fade-in-up delay-100">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">{personalInfo.name}</span>
          </h1>
          
          <div className="h-12 flex justify-center items-center overflow-hidden">
             <span className="text-2xl md:text-4xl font-semibold text-slate-400 font-mono animate-slide-up">
               {text}<span className="animate-blink text-cyan-400">|</span>
             </span>
          </div>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
            {personalInfo.about}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8 animate-fade-in-up delay-300">
            <a href="#projects" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              View Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-full font-bold hover:bg-slate-700 hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-cyan-500/50 flex items-center justify-center gap-2">
              <Github size={20} /> GitHub Profile
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500/50">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-slate-900 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Arsenal</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-slate-400 mt-6 text-lg">My weapon of choice for building modern web apps.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} 
                   className="group relative bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]"
                   style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex flex-col items-center space-y-4">
                  <div className="p-4 bg-slate-800 rounded-2xl text-cyan-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300 shadow-lg">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-slate-200 group-hover:text-white transition-colors">{skill.name}</h3>
                  <div className="w-full bg-slate-700/50 rounded-full h-1.5 mt-2 overflow-hidden">
                    <div className="bg-cyan-500 h-1.5 rounded-full w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-slate-800/20">
        <div className="max-w-6xl mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
               <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
            </div>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="group hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all mt-4 md:mt-0 font-medium">
              View All Repositories <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
            </a>
           </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-slate-900 border border-slate-700/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-3 flex flex-col h-full">
                {/* Project Image Placeholder with Gradient */}
                <div className={`h-56 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  {/* Glassmorphism Badge */}
                  <div className="absolute top-4 left-4 z-10">
                     <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20 shadow-lg">
                       {project.category}
                     </span>
                  </div>
                  {/* Decorative Icon - Dynamic based on category/title (simplified for now) */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 ease-out">
                    {project.title.includes("Restaurant") ? <Utensils size={80} /> : <Code size={80} />}
                  </div>
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                     <a href={project.repo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all border border-white/20" title="View Code">
                        <Github size={24} />
                     </a>
                     <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-cyan-500 rounded-full hover:bg-cyan-400 hover:scale-110 transition-all shadow-lg shadow-cyan-500/30" title="Live Demo">
                        <ExternalLink size={24} className="text-white" />
                     </a>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-slate-800 flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded-full border border-slate-700 group-hover:border-cyan-500/30 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
           <div className="mt-12 text-center md:hidden">
              <a href={personalInfo.github} className="text-cyan-400 font-medium inline-flex items-center gap-2">View All Projects <ArrowRight size={16}/></a>
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something Amazing</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a project in mind or just want to say hi, my inbox is always open!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
             <a href={`tel:${personalInfo.phone}`} className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-600 transition-all flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 group">
              <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                <Phone size={20} />
              </div>
              <span>{personalInfo.phone}</span>
            </a>

            <a href={`mailto:${personalInfo.email}`} className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-cyan-500/50 group">
               <div className="p-2 bg-white/20 rounded-lg text-white">
                <Mail size={20} />
               </div>
              <span>Send an Email</span>
            </a>
            
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-600 transition-all flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 group">
               <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Linkedin size={20} />
               </div>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-900/50 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Abdullah Abdelrhman. Built with <span className="text-red-500">❤</span> & React.</p>
          <div className="flex space-x-6">
            {[
              { icon: Github, link: personalInfo.github },
              { icon: Linkedin, link: personalInfo.linkedin },
              { icon: Mail, link: `mailto:${personalInfo.email}` }
            ].map((item, index) => (
               <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 hover:scale-110 transition-all duration-300">
                <item.icon size={20} />
               </a>
            ))}
          </div>
        </div>
      </footer>
      
      {/* Enhanced Animations Styles */}
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
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        
        .animate-blink {
            animation: blink 1s step-end infinite;
        }
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
        
        @keyframes gradient-x {
           0% { background-position: 0% 50%; }
           50% { background-position: 100% 50%; }
           100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
           background-size: 200% 200%;
           animation: gradient-x 15s ease infinite;
        }

        @keyframes slide-up {
           0% { transform: translateY(100%); opacity: 0; }
           100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
           animation: slide-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;