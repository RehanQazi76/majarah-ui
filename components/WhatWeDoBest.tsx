'use client';
import { motion } from 'framer-motion';
import React from 'react';
import Footersection from './Footersection';
import HeroSection from './HeroSection';
import { StarsBackground } from "@/components/ui/stars-background";
import ContactReachUs from '@/components/ContactReachUs';
import  { Footer } from '@/components/Footer';
import Testimonials from "@/components/Testimonials"
import ParallaxWrapper from '@/components/ParallaxWrapper';
import ScrollControlledVideo from './ui/ScrollControlledVideo';
import { FaYoutube, FaInstagram, FaFacebookF, FaTiktok, FaLinkedin } from 'react-icons/fa';
import { ReactNode, useRef, useState } from 'react';


export function Card({
  title,
  description,
  children,
  className = ''
}: {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
    
  };

  return (
  <motion.div
    ref={cardRef}
    onMouseMove={(e) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setCoords({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    }}
    initial={{ opacity: 0, y: 80, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{
      duration: 1.2,
      ease: [0.2, 0.8, 0.2, 1], // custom ease for smooth overshoot
      delay: 0.1
    }}
    viewport={{ once: false, amount: 0.4 }}
    className={`group relative min-h-[clamp(250px,25vh,600px)]
      p-[clamp(1rem,2vw,2rem)] rounded-3xl border border-[#223347]
      shadow-xl overflow-visible ${className}`}
  >
    {/* Moving Gradient Glow */}
    <div
      className="absolute inset-0 pointer-events-none transition-opacity duration-500 rounded-3xl"
      style={{
        background: `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(122, 193, 255, 0.15), transparent 80%)`,
        opacity: 1,
        zIndex: 0
      }}
    />

    {/* Outer Glow Border */}
    <div className="absolute top-0 left-0 w-full h-full rounded-3xl border border-transparent group-hover:border-[#7AC1FF] transition-all duration-700 animate-border-glow" />

    {/* Title */}
    <h3
      className="text-white font-poppins font-medium mb-1 z-10 relative"
      style={{ fontSize: 'clamp(1rem, 1.5vw, 1.875rem)' }}
    >
      {title}
    </h3>

    {/* Description */}
    <p
      className="text-gray-300 font-poppins font-medium mb-2 z-10 relative"
      style={{ fontSize: 'clamp(0.875rem, 1vw, 1.3rem)' }}
    >
      {description}
    </p>

    {/* Children */}
    <div className="z-10 relative">{children}</div>
  </motion.div>
);

}



export default function WhatWeDoBest() {
  return (
    <>
    <div className="min-h-screen w-full bg-[#0e0e0e] text-white px-0 md:px-0 overflow-hidden relative">

<div
  className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] bg-[radial-gradient(ellipse_at_top,_#4899E3_30%,_transparent_80%)] opacity-15 blur-2xl pointer-events-none z-0 animate-spotlight"
  style={{ height: 'clamp(300px, 60vh, 900px)' }}
/>
    <HeroSection />
  
  
    <div className="w-full min-h-screen px-0 py-0 text-white font-sans mt-20 bg-[#0e0e0e]">
      <div className="text-center mb-12" id='services'>
        <h2 className="text-3xl md:text-5xl [@media(min-width:2560px)]:text-7xl font-aeonik font-regular text-white">What We Do Best</h2>
        <p className=" font-poppins font-regular text-gray-400 mt-3 [@media(min-width:2560px)]:text-2xl [@media(min-width:2560px)]:mb-30">From Strategy to Spotlight — We Do it All.</p>
      </div>

      {/* ✅ Top Row */}
      <div className="flex flex-col md:flex-row justify-center md:space-x-10 gap-4 md:gap-0 px-0 mb-[clamp(1.5rem,3vw,4rem)]">
  {/* Card 1 - Digital Marketing */}
  <Card
    title="Digital Marketing"
    description="From SEO and PPC to email and content, we tailor strategies that drive results."
    className="w-full md:w-[42%]"
  >
    <StarsBackground className="z-0" />
    <div
  className="relative w-full"
  style={{
    height: 'clamp(120px, 8vw, 220px)',
  }}
>
  {/* Floating SEO Icon */}
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    className="absolute"
    style={{
      top: 'clamp(20px, 2.5vw, 40px)',
      left: 'clamp(10px, 2.5vw, 25px)',
    }}
  >
    <motion.img
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      src="/icons/seo.svg"
      alt="SEO"
      style={{
        width: 'clamp(50px, 5vw, 200px)',
      }}
    />
  </motion.div>

  {/* Floating Email Marketing Icon */}
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    className="absolute"
    style={{
      top: 'clamp(25px, 1vw, 50px)',
      left: 'clamp(90px, 10vw, 300px)',
    }}
  >
    <motion.img
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      src="/icons/emailmarketing.svg"
      alt="Email Marketing"
      style={{
        width: 'clamp(90px, 10vw, 220px)',
      }}
    />
  </motion.div>

  {/* Floating Google Ads Icon */}
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, -6, 0] }}
    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
    className="absolute"
    style={{
      top: 'clamp(35px, 1vw, 55px)',
      right: 'clamp(10px, 2.5vw, 30px)',
    }}
  >
    <motion.img
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      src="/icons/googleadds.svg"
      alt="Google Ads"
      style={{
        width: 'clamp(70px, 9vw, 200px)',
      }}
    />
  </motion.div>

  {/* Floating Paid Advertising Icon */}
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, 20, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    className="absolute"
    style={{
      top: 'clamp(90px, 8vw, 160px)',
      left: 'clamp(15px, 3vw, 30px)',
    }}
  >
    <motion.img
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      src="/icons/paid_advertising.svg"
      alt="Paid Advertising"
      style={{
        width: 'clamp(80px, 9vw, 220px)',
      }}
    />
  </motion.div>
</div>


    <img 
      src="/icons/growth.svg"
      alt="Growth Chart"
      className="mx-auto"
      style={{
        width: 'clamp(150px, 15vw, 320px)',
      }}
    />
  </Card>

  {/* Card 2 - Social Media Management */}
  <Card
    title="Social Media Management"
    description="A creative partner for brands and creators—offering strategy, content creation, and hands-on management to keep your digital presence thriving."
    className="w-full md:w-[42%]"
  >
    <StarsBackground className="z-0" />
    <div
      className="relative flex items-center justify-center mt-6 w-full"
      style={{
        height: 'clamp(220px, 20vw, 500px)',
      }}
    >
      <motion.div
        className="relative flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        style={{
          width: 'clamp(160px, 16vw, 340px)',
          height: 'clamp(160px, 12vw, 340px)',
        }}
      >
        <img
          src="/icons/Group 35518.svg"
          alt="Orbit Background"
          className="absolute"
          style={{ width: 'clamp(240px, 30vw, 400px)' }}
        />
        <img src="/icons/fbicon.svg" alt="Facebook"
          className="absolute"
          style={{
            top: '5%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'clamp(22px, 2vw, 40px)',
          }}
        />
        <img src="/icons/instagram.svg" alt="Instagram"
          className="absolute"
          style={{
            top: '50%',
            right: '2%',
            transform: 'translateY(-50%)',
            width: 'clamp(28px, 2.8vw, 50px)',
          }}
        />
        <img src="/icons/youtube.svg" alt="YouTube"
          className="absolute"
          style={{
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'clamp(30px, 3.1vw, 55px)',
          }}
        />
        <img src="/icons/tiktok.svg" alt="TikTok"
          className="absolute"
          style={{
            bottom: '25%',
            left: 'clamp(18px, 2.5vw, 30px)',
            width: 'clamp(22px, 2.2vw, 40px)',
          }}
        />
      </motion.div>
    </div>
  </Card>
</div>



      {/* ✅ Bottom Row - Two More Cards */}
      <div className="flex flex-col md:flex-row justify-center md:space-x-10 gap-4 md:gap-0 px-0 mb-[clamp(1.5rem,3vw,4rem)]">
  {/* 🧠 Card 3 */}
  <Card
    title="Event Coverage"
    description="From real-time Reels to cinematic recaps, we turn your moments into magnetic content"
    className="w-full md:w-[42%]"
  >
    <StarsBackground className="z-0" />
    <div
      className="flex items-center justify-center"
      style={{
        height: 'clamp(220px, 20vw, 500px)',
      }}
    >
      <img
        src="/icons/card3.svg"
        alt="Content Creation"
        className="h-auto"
        style={{
          width: 'clamp(220px, 30vw, 700px)',
          marginTop: 'clamp(1rem, 2vw, 2.5rem)',
        }}
      />
    </div>
  </Card>

  {/* 🎯 Card 4 */}
  <Card
    title="Website & App Development"
    description="We build platforms with content at the core. UX, UI, and storytelling designed to make people click, stay, and act."
    className="w-full md:w-[42%]"
  >
    <StarsBackground className="z-0" />
    <div
      className="flex items-center justify-center"
      style={{
        height: 'clamp(220px, 28vw, 340px)',
      }}
    >
      <img
        src="/icons/card4.svg"
        alt="Brand Strategy"
        className="h-auto"
        style={{
          width: 'clamp(220px, 28vw, 700px)',
          marginTop: 'clamp(1rem, 2vw, 2.5rem)',
        }}
      />
    </div>
  </Card>
</div>


      <div
  className="
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    xl:grid-cols-4 
    gap-[clamp(1rem,2vw,3rem)] 
    px-[clamp(0.5rem,1vw,2rem)] 
    w-[90%]
    max-w-[87%] 
    mx-auto 
    mb-[clamp(1.5rem,3vw,4rem)]
  "
>
  {/* 🔷 Card 1 – Ad Campaign */}
  <Card
    title="Ad Campaign"
    description="Smart targeting, high-conversion creatives, and optimized ROI"
  >
    <StarsBackground className="z-0" />
    <div
      className="flex items-center justify-center"
      style={{ height: 'clamp(180px, 20vw, 300px)' }}
    >
      <img
        src="/icons/adcampaign.svg"
        alt="Ad Campaign"
        className="h-auto mt-[clamp(1rem, 2.5vw, 2rem)] hover:scale-110"
        style={{ width: 'clamp(120px, 11vw, 260px)' }}
      />
    </div>
  </Card>

  {/* 🔷 Card 2 – Influencer Marketing */}
  <Card
  title="Influencer Marketing"
  description="More than matchmaking! We script, plan, and scale creator partnerships with real impact"
>
  <StarsBackground className="z-0" />
  
  {/* Animation Style */}
  <style>
    {`
      @keyframes floatX {
        0% { transform: translateX(0%); }
        50% { transform: translateX(10%); }
        100% { transform: translateX(0%); }
      }

      .float-x-slow {
        animation: floatX 10s ease-in-out infinite;
      }
    `}
  </style>

  <div
    className="relative w-full"
    style={{ height: 'clamp(190px, 16vw, 700px)' }}
  >
    <div
      className="relative w-full flex justify-center items-center"
      style={{ height: 'clamp(320px, 32vw, 550px)' }} // total height to fit all 3 images
    >
      <div
        className="relative"
        style={{ width: 'clamp(160px, 18vw, 300px)', height: '100%' }}
      >
        {/* f3 */}
        <img
          src="/icons/f3.svg"
          alt="F3"
          className="absolute float-x-slow"
          style={{
            top: 0,
            left: 0,
            width: 'clamp(150px, 16vw, 300px)',
            animationDelay: '1s',
          }}
        />
        {/* f2 */}
        <img
          src="/icons/f2.svg"
          alt="F2"
          className="absolute float-x-slow"
          style={{
            top: 'clamp(70px, 7.5vw, 150px)',
            left: 0,
            width: 'clamp(150px, 16vw, 300px)',
            animationDelay: '2s',
          }}
        />
        {/* f1 */}
        <img
          src="/icons/f1.svg"
          alt="F1"
          className="absolute float-x-slow"
          style={{
            top: 'clamp(140px, 18vw, 300px)',
            left: 0,
            width: 'clamp(150px, 16vw, 300px)',
            animationDelay: '8s',
          }}
        />
      </div>
    </div>
  </div>
</Card>


  {/* 🔷 Card 3 – Content Creation */}
  <Card
    title="Content Creation & Strategy"
    description="From real-time Reels to cinematic recaps, we turn your moments into magnetic content"
  >
    <StarsBackground className="z-0" />
    <div
      className="flex items-center justify-center"
      style={{ height: 'clamp(180px, 20vw, 300px)' }}
    >
      <img
        src="/icons/btmcard3.png"
        alt="Content Creation"
        className="h-auto mt-[clamp(0.5rem, 2vw, 2rem)]"
        style={{ width: 'clamp(200px, 22vw, 360px)' }}
      />
    </div>
  </Card>

  {/* 🔷 Card 4 – Training & Workshops */}
  <Card
    title="Training & Workshops"
    description="We scale businesses and skills. Learn from those who’ve done it, not just taught it"
  >
    <StarsBackground className="z-0" />
    <div
      className="flex items-center justify-center"
      style={{ height: 'clamp(180px, 20vw, 300px)' }}
    >
      <img
        src="/icons/btmcard4.svg"
        alt="Training"
        className="h-auto mb-[clamp(0.5rem, 2vw, 2rem)]"
        style={{ width: 'clamp(220px, 25vw, 500px)' }}
      />
    </div>
  </Card>
</div>

<motion.div
  initial={{ 
  opacity: 0, 
  y: 100, 
  scale: 0.9, 
  filter: "blur(15px)" 
}}
whileInView={{ 
  opacity: 1, 
  y: 0, 
  scale: 1, 
  filter: "blur(0px)" 
}}
viewport={{ 
  once: false, 
  amount: 0.2 
}}
transition={{ 
  duration: 0.7, 
  ease: [0.33, 1, 0.68, 1] // Strong ease-out for drama
}}

>
 <div className="relative bg-[#0e0e0e] overflow-hidden">

  {/* ✅ Gradient Overlay */}
<div className="absolute top-[clamp(500px,60vh,1150px)] md:top-[600px] left-0 w-full h-[clamp(700px,80vh,1000px)] bg-[linear-gradient(to_left,_#4899E3_-50%,_transparent_40%)] z-0 pointer-events-none blur-[100px]" />

{/* ✅ Heading */}
<div className="text-center mb-[clamp(2rem,5vw,4rem)] mt-[clamp(2rem,5vw,6rem)]" id="aboutus">
  <h2 className="text-[clamp(2.5rem,4vw,6rem)] font-aeonik font-light">
    Face Behind <span className="bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] text-transparent bg-clip-text animate-gradient-x">Majarah</span>
  </h2>
</div>

{/* ✅ Main Section Grid */}
<div className="flex flex-col md:flex-row justify-between items-start px-[clamp(2rem,6vw,15rem)] py-[clamp(3rem,6vw,8rem)] gap-[clamp(2rem,4vw,4rem)] text-white overflow-hidden relative z-10">
  {/* LEFT TEXT SIDE */}
  <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left ">
    <h2 className="text-[clamp(2rem,4vw,5rem)] font-aeonik font-regular mb-[clamp(0.5rem,1vw,1.5rem)]">
      <span className="bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] text-transparent bg-clip-text animate-gradient-x">Eisa Al Habib</span>
    </h2>

    <p className="text-[clamp(1rem,1.2vw,5rem)] leading-[clamp(1.6rem,2.8vw,4rem)] font-light font-poppins text-gray-300 mb-[clamp(2rem,3vw,3rem)] max-w-[clamp(90%,40vw,700px)]">
      International Emmys Young Creatives Award winner and Forbes-recognized creator, leads Majarah with a bold, viral-first vision. His content bridges culture, creativity, and influence across platforms.
    </p>

    {/* Social Icons */}
    <div className="flex items-center justify-center md:justify-start gap-[clamp(1rem,2vw,3rem)] mb-[clamp(2rem,2vw,3rem)] ">
      {[
        { icon: <FaYoutube />, link: "https://www.youtube.com/@eisayo" },
        { icon: <FaTiktok />, link: "https://www.tiktok.com/@eisayo?lang=en" },
        { icon: <FaInstagram />, link: "https://www.instagram.com/eisayo/" },
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/eisa-alhabib/" },
      ].map((item, index) => (
        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer"
          className="w-[clamp(2.5rem,3vw,5rem)] h-[clamp(2.5rem,3vw,5rem)] text-[clamp(1rem,2vw,3rem)] rounded-full bg-[#343236] flex items-center justify-center text-gray-400 hover:scale-110 hover:shadow-lg hover:bg-[#4a484b] hover:text-white border border-[#595959]"
        >
          {item.icon}
        </a>
      ))}
    </div>

    {/* Logos */}
    <div className="grid grid-cols-2 gap-[clamp(1rem,3vw,3rem)] items-center">
      <img src="/icons/forbeslogo.svg" alt="Forbes" className="w-[clamp(50px,6vw,200px)] h-auto ml-5" />
      <img src="/icons/logo2.svg" alt="Arab Forum" className="w-[clamp(120px,14vw,340px)] h-auto" />
      <img src="/icons/logo3.svg" alt="Logo 3" className="w-[clamp(100px,11vw,300px)] h-auto" />
      <img src="/icons/logo4.svg" alt="Logo 4" className="w-[clamp(100px,11vw,320px)] h-auto" />
    </div>
  </div>

  {/* RIGHT SCROLLING IMAGE GRID */}
  <div className="md:w-1/2 w-full grid grid-cols-2 gap-[clamp(1rem,2vw,1.5rem)] relative h-[clamp(500px,55vh,1000px)] md:h-[clamp(550px,50vh,950px)] xl:h-[clamp(600px,80vh,1300px)]
 overflow-hidden">
    {/* COLUMN 1: SCROLL UP */}
    <motion.div
      className="flex flex-col gap-[clamp(1rem,2vw,2rem)]"
      animate={{ y: ['0%', '-50%'] }}
      transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
    >
      {[1, 2].map((_, i) => (
        <React.Fragment key={i}>
          <div className="bg-gradient-to-br from-[#003C2A] to-[#418571] rounded-xl p-[clamp(1rem,2vw,2rem)] flex flex-col justify-center items-start">
            <p className="text-[clamp(1.5rem,3vw,3rem)] font-inter font-bold text-white">1B+<br />Views</p>
            <p className="text-[clamp(0.875rem,1.3vw,1.5rem)] text-gray-100">Across Globe</p>
          </div>

          <div className="relative overflow-hidden w-full h-[clamp(250px,30vw,700px)]">
            <img src="/icons/col1.svg" alt="Gold Play Button" className="rounded-xl object-cover w-full h-full" />
            <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#4899E3] to-transparent rounded-xl opacity-50" />
          </div>

          <div className="bg-gradient-to-tr from-[#3C1515] to-[#D40F0F] rounded-xl p-[clamp(1rem,2vw,2rem)] flex flex-col justify-center items-start">
            <p className="text-[clamp(1.5rem,3vw,3rem)] font-inter font-bold text-white">1600+</p>
            <p className="text-[clamp(1.5rem,3vw,3rem)] font-inter font-bold text-white">Videos</p>
            <p className="text-[clamp(0.875rem,1.3vw,1.5rem)] text-gray-300">Produced</p>
          </div>
        </React.Fragment>
      ))}
    </motion.div>

    {/* COLUMN 2: SCROLL DOWN */}
    <motion.div
      className="flex flex-col gap-[clamp(1rem,2vw,2rem)]"
      animate={{ y: ['-50%', '0%'] }}
      transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
    >
      {[1, 2].map((_, i) => (
        <React.Fragment key={i}>
          <div className="relative overflow-hidden w-full h-[clamp(250px,30vw,700px)]">
            <img src="/icons/YT 1.png" alt="Eisa in suit" className="rounded-xl object-cover w-full h-full" />
            <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-[#4899E3] to-transparent rounded-xl opacity-60" />
          </div>

          <div className="bg-gradient-to-tl from-[#1B091E] to-[#792884] rounded-xl p-[clamp(1rem,2vw,2rem)] flex flex-col justify-center items-start">
            <p className="text-[clamp(1.5rem,3vw,3rem)] font-inter font-bold text-white">4.7M+</p>
            <p className="text-[clamp(0.875rem,1.3vw,1.5rem)] text-gray-300 font-inter font-bold">Followers</p>
          </div>

          <div className="relative overflow-hidden w-full h-[clamp(250px,30vw,600px)]">
            <img src="/icons/card6.svg" alt="Gold Play Button" className="rounded-xl object-cover w-full h-full" />
            <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#4899E3] to-transparent rounded-xl opacity-60" />
          </div>
        </React.Fragment>
      ))}
    </motion.div>
  </div>
</div>

<div className = "[@media(min-width:2560px)]:mb-40">
      <ScrollControlledVideo />
    </div>
  </div>
</motion.div>


  {/* ✅ TESTIMONIAL SECTION */}
  <div className="w-full relative z-20" id ='Testimonials'>
  <Testimonials />
</div>

</div>
      
      <div className="relative z-0">
  {/* Star Background */}
  <div className="absolute inset-0 z-[-1] pointer-events-none">
    <StarsBackground />
  </div>

  {/* Content */}
  <Footersection />
  <div id ="contact" className="mb-10">
    <ContactReachUs />
  </div>
  
  <Footer />
</div>
  
    </div>
    </>
  );
}
