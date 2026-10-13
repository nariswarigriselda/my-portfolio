import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSpotify, FaPlay, FaPause, FaMusic, FaChevronRight } from 'react-icons/fa';

const playlist = [
  { id: 1, title: "Foto Kita Blur", artist: "Sal Priadi", duration: "3:45" },
  { id: 2, title: "It Will Rain", artist: "Bruno Mars", duration: "4:17" },
  { id: 3, title: "Drop Dead", artist: "Olivia Rodrigo", duration: "2:54" },
  { id: 4, title: "Begin Again", artist: "Taylor Swift", duration: "3:57" },
];

export default function Hero() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Cosmic Glow Background Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-600/30 via-pink-500/20 to-cyan-400/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Luxury Title & Bio */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs uppercase tracking-[0.25em] text-cyan-300 font-medium">Cosmic Portfolio Showcase</span>
          </div>

          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Griselda <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">
              Densya Nariswari
            </span> <br />
            Graphic Designer.
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl font-light leading-relaxed">
            Eksplorasi portofolio desain grafis bertema kosmik modern karya <strong className="text-white font-semibold">Griselda Densya Nariswari</strong>. Menghadirkan *visual storytelling* melalui infografis, materi komunikasi publik, dan karya seni digital berspesifikasi *high-end*.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="#portfolio"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2"
            >
              Examine Projects <FaChevronRight className="text-xs" />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/15 text-white font-medium backdrop-blur-md hover:bg-white/10 hover:border-white/25 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>

        {/* Right Side: High-End Spotify Glass Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="w-full max-w-md bg-gradient-to-b from-white/10 to-white/5 border border-white/15 p-6 rounded-3xl backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-6">
            
            {/* Header Spotify */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-green-500/20 border border-green-500/30 text-green-400 shadow-lg shadow-green-500/10">
                  <FaSpotify className="text-2xl animate-spin-slow" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-green-400 font-semibold">Spotify Live Player</h4>
                  <p className="text-xs text-gray-400">Curated Design Soundtrack</p>
                </div>
              </div>

              {/* Animated Audio Waves */}
              {isPlaying && (
                <div className="flex items-end gap-1 h-5 px-2">
                  <span className="w-1 h-full bg-green-400 rounded-full animate-bounce" />
                  <span className="w-1 h-3/4 bg-green-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1 h-1/2 bg-green-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
            </div>

            {/* Currently Playing Track Display */}
            <div className="p-4 rounded-2xl bg-black/30 border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-400/20 flex items-center justify-center text-purple-300">
                  <FaMusic />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base leading-tight">{playlist[currentTrack].title}</h3>
                  <p className="text-gray-400 text-xs mt-1">{playlist[currentTrack].artist}</p>
                </div>
              </div>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-11 h-11 rounded-full bg-green-500 hover:bg-green-400 text-black flex items-center justify-center transition-all transform hover:scale-110 shadow-lg shadow-green-500/30"
              >
                {isPlaying ? <FaPause className="text-sm" /> : <FaPlay className="text-sm ml-0.5" />}
              </button>
            </div>

            {/* Playlist Track Items */}
            <div className="space-y-2 pt-2">
              {playlist.map((track, idx) => (
                <button
                  key={track.id}
                  onClick={() => { setCurrentTrack(idx); setIsPlaying(true); }}
                  className={`w-full p-3 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                    currentTrack === idx 
                      ? 'bg-white/15 border border-green-400/40 text-white shadow-md' 
                      : 'hover:bg-white/5 text-gray-400 hover:text-white border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <span className="text-xs font-mono opacity-50">0{idx + 1}</span>
                    <div className="text-left truncate">
                      <p className="text-sm font-medium truncate">{track.title}</p>
                      <p className="text-[11px] opacity-60 truncate">{track.artist}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono opacity-50">{track.duration}</span>
                </button>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}