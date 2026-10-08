import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Music, Play, Pause, SkipBack, SkipForward } from 'lucide-react';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  const playlist = [
    { title: "Terbuang Dalam Waktu", artist: "Barasuara", duration: "04:41" },
    { title: "Reindance (feat. Tems)", artist: "Odesza, Tems", duration: "03:39" },
    { title: "Ojiro", artist: "Tatsuro Yamashita", duration: "03:12" }
  ];

  return (
    <section id="home" className="min-h-screen pt-28 pb-16 px-6 max-w-6xl mx-auto flex flex-col justify-center relative z-10">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Personal Identity */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 space-y-7"
        >
          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-white"
            >
              Griselda <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 drop-shadow-[0_0_35px_rgba(59,130,246,0.4)]">
                Densya Nariswari
              </span>
            </motion.h1>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 backdrop-blur-md text-xs text-blue-400 font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              IT Edu Student
            </div>
          </div>

          <p className="text-slate-400 text-sm md:text-base max-w-lg leading-relaxed font-normal">
            Dimulai dari rasa penasaran, berkembang menjadi passion. Aku membangun pengalaman digital yang tidak hanya terlihat bagus, tapi juga terasa bermakna bagi penggunanya.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#portfolio"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              Project <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 text-white font-semibold text-sm transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5"
            >
              Contact Me <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Spotify Glassmorphism Widget */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5"
        >
          <div className="p-6 rounded-2xl bg-[#080d1a]/70 border border-slate-800/80 backdrop-blur-xl shadow-2xl space-y-5">
            
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3.5">
              <div>
                <h3 className="text-sm font-bold text-white">Daily Rotation</h3>
                <p className="text-xs text-slate-400 mt-0.5">A curated collection of tracks that keep me in the zone.</p>
              </div>
              <Music className="w-5 h-5 text-green-400 animate-pulse" />
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 space-y-4 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg bg-slate-800 flex-shrink-0 overflow-hidden shadow-md border border-slate-700/50">
                  <img 
                    src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=200&q=80" 
                    alt="Album Cover" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-bold text-white truncate">New Life</h4>
                  <p className="text-xs text-slate-400 truncate mt-0.5">wildyy</p>
                  <span className="inline-block mt-2 text-[10px] bg-green-500/10 text-green-400 border border-green-500/20 px-2.5 py-0.5 rounded-full font-medium">
                    Save on Spotify
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-1/3 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>01:12</span>
                  <span>03:45</span>
                </div>
                <div className="flex items-center justify-center gap-5 text-slate-300 pt-1">
                  <SkipBack className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2.5 rounded-full bg-green-500 text-black hover:scale-105 transition-all shadow-lg shadow-green-500/20"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                  </button>
                  <SkipForward className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Discover</span>
              {playlist.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/30 hover:bg-slate-800/60 border border-transparent hover:border-slate-800 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-xs text-slate-500 font-mono">{index + 1}</span>
                    <div className="truncate">
                      <p className="text-xs font-medium text-slate-200 group-hover:text-green-400 transition-colors truncate">{item.title}</p>
                      <p className="text-[10px] text-slate-500 truncate">{item.artist}</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">{item.duration}</span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}