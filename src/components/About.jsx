import React from 'react';
import profileImg from '../assets/profile.jpeg';

export default function About() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="relative group w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
        <img 
          src={profileImg} 
          alt="Griselda Densya Nariswari" 
          className="relative w-full h-full object-cover rounded-full border-2 border-white/20 shadow-2xl"
        />
      </div>

      <div className="text-white text-center md:text-left space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
          Griselda Densya Nariswari
        </h2>
        <p className="text-purple-300 font-medium tracking-wide">Specialist Graphic Designer & Visual Storyteller</p>
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          Berfokus pada penyampaian pesan visual yang intuitif, edukatif, dan estetis. Berpengalaman dalam merancang infografis kesehatan, komunikasi publik, materi branding, hingga ilustrasi bertema sosial dan kebudayaan.
        </p>
      </div>
    </section>
  );
}