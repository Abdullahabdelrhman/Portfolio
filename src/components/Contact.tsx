// Contact.tsx
"use client";

import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";

type ContactProps = {
  personalInfo: {
    email: string;
    phone: string;
    linkedin: string;
  };
};

const Contact: React.FC<ContactProps> = ({ personalInfo }) => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's Build Something Amazing
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a project in mind or just want to say hi, my inbox is always open!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
          <a
            href={`tel:${personalInfo.phone}`}
            className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-600 transition-all flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 group"
          >
            <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
              <Phone size={20} />
            </div>
            <span>{personalInfo.phone}</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-cyan-500/50 group"
          >
            <div className="p-2 bg-white/20 rounded-lg text-white">
              <Mail size={20} />
            </div>
            <span>Send an Email</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-600 transition-all flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 group"
          >
            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Linkedin size={20} />
            </div>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
