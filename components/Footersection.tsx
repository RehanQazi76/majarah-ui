'use client';
import { motion } from 'framer-motion';

export const FooterTop = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100, scale: 0.85, rotateX: -15, filter: 'blur(10px)' }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: 'blur(0px)',
      }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1], // smooth & dramatic
      }}
      className="relative z-10 flex flex-col items-center justify-center h-[clamp(50vh,20vh,80vh)] text-center mb-[clamp(1rem,5vh,5rem)]"
    >
      {/* Radial background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[clamp(50vh,40vh,80vh)] bg-[radial-gradient(ellipse_at_top,_#4899E3_30%,_transparent_70%)] opacity-20 blur-4xl pointer-events-none z-0" />

      {/* Logo */}
      <motion.img
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        src="/icons/majarahlogo.svg"
        alt="Majarah Logo"
        className="w-[clamp(160px,20vw,600px)] h-auto mb-[clamp(0.5rem,2vh,2rem)] mt-[clamp(2rem,10vh,9rem)]"
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(6px)' }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
        }}
        transition={{ delay: 0.4, duration: 1, ease: [0.33, 1, 0.68, 1] }}
        className="text-[clamp(2.5rem,5vw,8rem)] font-aeonik font-light leading-tight max-w-[90%] mb-[clamp(2rem,6vh,8rem)]"
      >
        Don’t{' '}
        <span className="bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] text-transparent bg-clip-text animate-gradient-x">
          Blend in
        </span>
        <br />
        Go{' '}
        <span className="bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] text-transparent bg-clip-text animate-gradient-x">
          Impact
        </span>{' '}
        with{' '}
        <span className="bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] text-transparent bg-clip-text animate-gradient-x">
          Us
        </span>
        .
      </motion.h1>
    </motion.section>
  );
};
export default FooterTop;