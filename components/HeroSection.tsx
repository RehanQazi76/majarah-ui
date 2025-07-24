'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { HoverNavLink } from '@/components/ui/HoverNavLink';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const brands = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
  type Brand = typeof brands[number];

  const brandSizes: Record<Brand, string> = {
    1: 'w-40 h-auto md:w-80',
    2: 'h-14 md:w-[150px] h-auto',
    3: 'w-40 md:w-[150px] h-auto',
    4: 'h-10 md:w-[100px] h-auto',
    5: 'w-32 h-auto',
    6: 'h-12',
    7: 'h-16',
    8: 'h-20 ',
    9: 'h-14 md:w-[100px] h-auto',
    10: 'h-24',
    11: 'h-12',
    12: 'h-10 md:w-[100px] h-auto',
    13: 'h-16 md:w-[100px] h-auto',
    14: 'h-20',
    15: 'h-14',
    16: 'h-14 md:w-[150px] h-auto',
    17: 'h-14 md:w-[150px] h-auto',
    18: 'h-14',
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setMenuOpen(false);
      }
      setLastScrollY(currentScrollY);
    };

    if (menuOpen) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, menuOpen]);

  return (
    <div className="bg-[#0e0e0e] relative min-h-screen w-full text-white px-6 md:px-12 overflow-hidden">
      
      {/* Starry Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <StarsBackground className="z-0" />
        <ShootingStars className="z-20" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-30">

        {/* 🌟 Add radial gradient glow at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] md:h-[80vh] bg-[radial-gradient(ellipse_at_top,_#4899E3_30%,_transparent_70%)] opacity-20 blur-4xl pointer-events-none z-0" />

        {/* Navbar */}
        <div className="flex justify-between items-center py-4 ">
          <img src="/icons/majarahlogo.svg" alt="Majarah Logo" className="w-60 md:w-60 h-auto" />

          <div className="hidden md:flex justify-between items-center w-full py-2">
            <div className="mx-auto flex items-center space-x-6 ml-65">
              <div className="flex space-x-4 px-5 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                
                <HoverNavLink key={0} label= "About us" href="#aboutus" />
                <HoverNavLink key={1} label="Services" href="#services" />
                {/* <HoverNavLink key={2} label="Work" href="#work" /> */}
                <HoverNavLink key={3} label="Project" href="#project" />
              </div>
            </div>

            <div className="ml-auto">
              <a
                href="#contact"
                className="inline-flex items-center h-10 px-6 rounded-full bg-[#1B2B40] border border-white/10 text-sm font-poppins text-white hover:bg-[#26364e] transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              {menuOpen ? (
                <XMarkIcon className="w-10 h-10 mr-5" />
              ) : (
                <Bars3Icon className="w-10 h-10 mr-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 mt-4 py-4 px-4 bg-[#1B2B40]/80 rounded-xl border border-white/10 backdrop-blur-sm">
             <HoverNavLink key={0} label= "About us" href="#aboutus" />
                <HoverNavLink key={1} label="Services" href="#services" />
                {/* <HoverNavLink key={2} label="Work" href="#work" /> */}
                <HoverNavLink key={3} label="Project" href="#project" />
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-[#1B2B40] border border-white/10 text-sm font-poppins text-white hover:bg-[#26364e] transition"
            >
              Contact Us
            </a>
          </div>
        )}

        <div className="border-b border-white/20 w-full mb-5" />

        {/* Hero Section */}
        <div className="relative md:mt-40 max-w-3xl mx-auto text-center z-30">
          <div className="relative z-10">
            <div className="relative inline-flex md:h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#8EC6FA]/60 focus:ring-offset-2 focus:ring-offset-[#1B2B40] mb-6">
              <span className="absolute inset-[-1000%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#77B8F3_0%,#FFFFFF_50%,#104677_100%)]" />
              <p className="inline-flex h-full w-full items-center justify-center rounded-full bg-[#1B2B40] px-8 py-2 text-sm font-poppins text-white/60 backdrop-blur-3xl transition z-10 relative">
                Creating Digital That Matters
              </p>
            </div>

            <motion.h1
              className="font-aeonik text-white text-3xl md:text-6xl font-light leading-[1.4] gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="whitespace-nowrap">
                We Don’t{" "}
                <span className="bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] text-transparent bg-clip-text animate-gradient-x">
                  Just Create Content
                </span>
              </div>
              <div>
                We Build{" "}
                <span className="bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] text-transparent bg-clip-text">
                  Impact
                </span>
              </div>
            </motion.h1>

            <p className="font-poppins font-light text-[8px] sm:text-[15px] mt-6 leading-[1.9]" style={{ color: '#F5F5F5' }}>
              Founded by Eisa Al Habib, Emmy® award-winning filmmaker and Forbes 30 Under 30 honoree, Majarah is a full-scale media agency delivering next-level storytelling, influencer-driven campaigns, and cross-platform digital marketing that moves people—and brands.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="inline-block mt-10 px-6 py-2 border border-[#5AA5E9] bg-[linear-gradient(to_bottom,_#5AA5E9_-150%,_transparent_60%)] text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 mb-10 md:mb-0"
            >
              Let’s Work Together →
            </motion.a>
          </div>
        </div>

        {/* Brand Logos */}
        <div className="md:mt-50 sm:mt-50 text-center">
          <p className="font-poppins font-regular text-lg text-gray-400 mb-6">
            Top-tier brands and governments redefining how stories are told online.
          </p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-y-4 md:gap-y-6 gap-x-5 md:gap-x-10 place-items-center max-w-6xl mx-auto mt-10">
            {brands.map((brand, i) => (
              <img
                key={i}
                src={`/brands/${brand}.svg`}
                alt={brand}
                className={`${brandSizes[brand] || 'h-auto'} grayscale opacity-70 hover:opacity-100 transition`}
              />
            ))}
          </div>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-10 px-6 py-2 font-inter font-semibold bg-[#343236] text-[#5AA5E9] tracking-[0.25em] text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            OUR SERVICES
          </motion.a>
        </div>
      </div>
    </div>
  );
}
