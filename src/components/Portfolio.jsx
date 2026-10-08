import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const projects = [
    {
      title: 'Cosmic Personal Branding',
      desc: 'Website portofolio interaktif bermutu tinggi dengan tema alam semesta dan animasi kustom.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      category: 'Web Application',
    },
    {
      title: 'EduTech Dashboard System',
      desc: 'Platform analitik pembelajaran interaktif untuk memantau perkembangan akademik siswa secara real-time.',
      tags: ['React', 'Node.js', 'Chart.js'],
      category: 'Dashboard UI',
    },
    {
      title: 'Cyber-Theme Music Player Widget',
      desc: 'Integrasi widget pemutar musik Spotify dengan efek visualizer dan UI futuristik.',
      tags: ['React', 'API Integration', 'Tailwind'],
      category: 'UI Component',
    },
  ];

  return (
    <SectionWrapper id="portfolio">
      <div className="space-y-12">
        {/* Header Seksi */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            ✦ Selected Works
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Portofolio & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Karya Unggulan</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Kumpulan proyek terbaik yang memadukan keandalan kode dan kualitas visual kelas atas.
          </p>
        </div>

        {/* Grid Kartu Portofolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group p-6 rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl hover:border-cyan-400/50 transition-all shadow-xl hover:shadow-[0_10px_30px_rgba(56,189,248,0.15)] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono text-slate-500">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}