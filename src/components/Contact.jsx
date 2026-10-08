import React from 'react';
import SectionWrapper from './SectionWrapper';

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase">
          ✦ Get In Touch
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
          Mari Bekerja Sama & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
            Ciptakan Sesuatu yang Luar Biasa
          </span>
        </h2>

        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          Tertarik untuk berdiskusi, membangun proyek baru, atau sekadar menyapa? Pintu saya selalu terbuka untuk kolaborasi seru.
        </p>

        {/* Tombol Email Utama */}
        <div className="pt-4">
          <a
            href="mailto:faldan@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(56,189,248,0.8)] hover:scale-105 transition-all"
          >
            ✉️ Kirim Pesan / Email
          </a>
        </div>

        {/* Footer Hak Cipta */}
        <div className="pt-20 text-xs font-mono text-slate-600 border-t border-slate-900">
          © {new Date().getFullYear()} Griselda Densya Nariswari. Built with React, Tailwind CSS & Framer Motion.
        </div>
      </div>
    </SectionWrapper>
  );
}