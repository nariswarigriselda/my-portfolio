import React, { useState } from 'react';
import StarBackground from './components/StarBackground';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen text-slate-100 bg-[#020617] selection:bg-cyan-500 selection:text-white overflow-x-hidden font-sans">
      {/* Background Bintang & Nebula */}
      <StarBackground />

      {/* Loading Screen Mewah */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Konten Utama Halaman */}
      {!isLoading && (
        <>
          <Navbar />
          <main className="relative z-10 space-y-12">
            <Hero />
            <About />
            <Portfolio />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}