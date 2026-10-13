import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import poster1 from '../assets/poster-1.png';
import poster2 from '../assets/poster-2.png';
import poster3 from '../assets/poster-3.png';
import poster4 from '../assets/poster-4.png';
import poster5 from '../assets/poster-5.jpg';
import poster6 from '../assets/poster-6.png';

const projects = [
  { id: 1, title: "Gangguan Sistem Muskuloskeletal", category: "Infographic Design", img: poster1 },
  { id: 2, title: "Pink Paradise - Ekowisata NTB", category: "Tourism Poster", img: poster2 },
  { id: 3, title: "Minuman Tradisional Seranja", category: "Product & Health Design", img: poster3 },
  { id: 4, title: "Merajut Toleransi, Menguatkan Persatuan", category: "Cultural Illustration", img: poster4 },
  { id: 5, title: "Waspada Fibromyalgia", category: "Medical Infographic", img: poster5 },
  { id: 6, title: "Tanam Uang Dengan Cermat", category: "Financial Literacy Poster", img: poster6 },
];

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-12">
        My Project
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03, y: -5 }}
            className="cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl backdrop-blur-sm group"
            onClick={() => setSelectedImg(item)}
          >
            <div className="relative overflow-hidden aspect-[3/4]">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-wider text-purple-400 font-semibold">{item.category}</span>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl"
            >
              <img src={selectedImg.img} alt={selectedImg.title} className="max-h-[85vh] w-auto rounded-xl object-contain mx-auto" />
              <p className="text-center text-white font-semibold mt-3">{selectedImg.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}