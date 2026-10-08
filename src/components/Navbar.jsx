import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'py-4 bg-[#020617]/70 backdrop-blur-xl border-b border-slate-800/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Kosmik */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px] transition-transform duration-300 group-hover:scale-110">
            <div className="w-full h-full bg-[#020617] rounded-[11px] flex items-center justify-center text-white font-bold font-mono text-sm">
              F
            </div>
          </div>
          <span className="font-extrabold text-lg text-white tracking-wider group-hover:text-cyan-400 transition-colors">
            FALDAN<span className="text-cyan-400">.</span>
          </span>
        </a>

        {/* Link Navigasi */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/40 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-5 py-2 text-xs font-mono tracking-wider text-slate-300 hover:text-white rounded-full transition-all hover:bg-blue-600/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}