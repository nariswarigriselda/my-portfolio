import React from 'react';
import { motion } from 'framer-motion';

export default function SectionWrapper({ children, id }) {
  return (
    <section id={id} className="relative z-10 min-h-screen py-24 px-6 md:px-16 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-6xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}