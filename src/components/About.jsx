import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

export default function About() {
  const skills = ['React.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'Node.js', 'UI/UX Design', 'Framer Motion'];

  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Sisi Kiri: Profil & Deskripsi */}
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            ✦ About Me
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Membangun Pengalaman Digital Bermutu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Tinggi & Estetis.</span>
          </h2>
          <p className="text-slate-400 leading-relaxed text-sm md:text-base">
            Saya adalah seorang <span className="text-white font-medium">IT Edu Student</span> dan Web Developer yang berfokus pada eksplorasi antarmuka modern, performa tinggi, serta estetika visual tingkat lanjut. Menggabungkan logika pemrogram dengan seni interaksi digital.
          </p>

          {/* Grid Skill Chips */}
          <div className="pt-4 space-y-3">
            <p className="text-xs font-mono text-slate-500 tracking-wider uppercase">Tech Stack & Mastery:</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-mono hover:border-cyan-400/50 hover:text-cyan-300 transition-all shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sisi Kanan: Frame Kartu Hologram */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-3xl blur-2xl -z-10" />
          <div className="w-full max-w-md p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xl shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                🚀
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Griselda Densya Nariswari</h3>
                <p className="text-cyan-400 text-xs font-mono">Frontend Developer & Designer</p>
              </div>
            </div>
            <div className="border-t border-slate-800/80 pt-4 space-y-3 text-xs font-mono text-slate-400">
              <div className="flex justify-between">
                <span>Location:</span> <span className="text-white">Indonesia</span>
              </div>
              <div className="flex justify-between">
                <span>Specialization:</span> <span className="text-white">Interactive Web & UI/UX</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span> <span className="text-green-400 flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Available for Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}