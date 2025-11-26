// Footer.tsx
"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

type FooterProps = {
  personalInfo: {
    github: string;
    linkedin: string;
    email: string;
  };
};

const Footer: React.FC<FooterProps> = ({ personalInfo }) => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900/50 relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Abdullah Abdelrhman. Built with{" "}
          <span className="text-red-500">❤</span> & React.
        </p>
        <div className="flex space-x-6">
          {[
            { icon: Github, link: personalInfo.github },
            { icon: Linkedin, link: personalInfo.linkedin },
            { icon: Mail, link: `mailto:${personalInfo.email}` },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
            >
              <item.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
