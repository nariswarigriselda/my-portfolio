import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING QUANTUM CORE...');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDone(true);
          setTimeout(() => onComplete(), 1000); // Transition buffer saat efek ledakan cahaya
          return 100;
        }

        const next = prev + 1;
        if (next === 25) setStatusText('CALIBRATING STELLAR MAPS...');
        if (next === 55) setStatusText('SYNCHRONIZING PORTFOLIO MODULES...');
        if (next === 85) setStatusText('ENGAGING COSMIC HYPERDRIVE...');
        return next;
      });
    }, 28);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Efek Partikel Mengambang Latar Belakang (Pure Dynamic FX)
  const floatingParticles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.15, filter: 'blur(10px)' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 bg-[#020617] flex flex-col items-center justify-center overflow-hidden select-none font-sans"
      >
        {/* 1. FX: Ambient Dynamic Cosmic Nebula Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-cyan-400/20 rounded-full blur-[150px] pointer-events-none"
        />

        {/* 2. FX: Shockwave Flash ketika 100% */}
        {isDone && (
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="absolute z-30 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-white blur-xl"
          />
        )}

        {/* 3. FX: Floating Particles Background */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingParticles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                y: [-10, -50],
              }}
              transition={{
                repeat: Infinity,
                duration: p.duration,
                delay: p.delay,
                ease: 'easeInOut',
              }}
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
              }}
              className="absolute bg-cyan-300 rounded-full shadow-[0_0_8px_#38bdf8]"
            />
          ))}
        </div>

        {/* --- MAIN CONTENT CONTAINER --- */}
        <div className="relative z-20 flex flex-col items-center max-w-xl px-6 text-center space-y-9">

          {/* 4. Multi-Layer Orbital Loader */}
          <div className="relative flex items-center justify-center w-36 h-36">
            {/* Outer Pulsar Wave */}
            <motion.div
              animate={{ scale: [0.95, 1.1, 0.95], opacity: [0.2, 0.5, 0.2] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-full border border-blue-500/30 bg-blue-500/5 blur-sm"
            />

            {/* Ring 1: Berputar Searah Jarum Jam */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-blue-500 shadow-[0_0_25px_rgba(56,189,248,0.6)]"
            />

            {/* Ring 2: Berputar Berlawanan Arah + Dot Satellite */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'linear' }}
              className="absolute inset-3 rounded-full border-2 border-transparent border-b-indigo-400 border-l-purple-400/60"
            >
              <div className="absolute top-1 left-1 w-2.5 h-2.5 bg-cyan-300 rounded-full shadow-[0_0_10px_#38bdf8]" />
            </motion.div>

            {/* Ring 3: Center Grid Core */}
            <div className="absolute inset-6 rounded-full border border-slate-800 bg-slate-950/80 backdrop-blur-md flex items-center justify-center shadow-inner">
              <span className="text-2xl font-black font-mono text-white tracking-widest drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]">
                {progress}
                <span className="text-xs text-cyan-400 font-normal">%</span>
              </span>
            </div>
          </div>

          {/* 5. Luxury Typography Section */}
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, letterSpacing: '0.2em' }}
              animate={{ opacity: 1, letterSpacing: '0.4em' }}
              transition={{ duration: 1 }}
              className="text-[11px] font-mono uppercase text-blue-400/90 font-bold tracking-[0.4em] drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]"
            >
              ✦ Griselda Densya Nariswari ✦
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black tracking-tight text-white leading-none"
            >
              WELCOME TO MY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 drop-shadow-[0_0_35px_rgba(56,189,248,0.6)]">
                PORTFOLIO
              </span>
            </motion.h1>
          </div>

          {/* 6. High-Tech Cyber Progress Bar & Status */}
          <div className="w-full max-w-xs space-y-3 pt-2">
            <div className="relative w-full h-2 bg-slate-900/90 rounded-full overflow-hidden border border-slate-800/80 p-0.5 shadow-2xl">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-400 rounded-full shadow-[0_0_20px_rgba(56,189,248,1)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Dynamic Status Text */}
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 tracking-wider">
              <motion.span
                key={statusText}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-cyan-400/90"
              >
                {statusText}
              </motion.span>
              <span className="text-slate-500 font-bold">V 2.0</span>
            </div>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}