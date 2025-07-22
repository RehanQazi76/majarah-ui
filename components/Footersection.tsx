'use client';
import { motion } from 'framer-motion';

export const FooterTop = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center md:h-[70vh] h-[50vh] text-center md:mb-10 mb-4">
      {/* Radial background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full  h-[50vh] md:h-[80vh] bg-[radial-gradient(ellipse_at_top,_#4899E3_30%,_transparent_70%)] opacity-20 blur-4xl pointer-events-none z-0" />

      {/* Logo */}
      <img src="/icons/majarahlogo.svg" alt="Majarah Logo" className="w-80 h-auto mb-3 md:mt-30" />

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-aeonik font-light leading-tight max-w-4xl">
        Don’t <span className="bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] text-transparent bg-clip-text animate-gradient-x">Blend in</span>
        <br />
        Go <span className="bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] text-transparent bg-clip-text animate-gradient-x">Impact</span> with <span className="bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] text-transparent bg-clip-text animate-gradient-x">Us</span>.
      </h1>

      
    </section>
  );
};

export default FooterTop;
