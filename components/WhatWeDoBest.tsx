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


function Card({ title, description, children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group relative w-full md:w-[42%] min-h-[270px] bg-[linear-gradient(to_bottom_right,_#1B2B40_10%,_#0e0e0e_60%)] p-4 rounded-3xl border border-[#223347] shadow-xl overflow-visible"
    >
      {/* Hover glow effect */}
     <div className="absolute inset-0 bg-gradient-to-r from-[#7AC1FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
     <div className="absolute top-0 left-0 w-full h-full rounded-3xl border border-transparent group-hover:border-[#7AC1FF] transition-all duration-700 animate-border-glow" />


      <h3 className="text-white text-lg font-poppins font-medium mb-1 z-10 relative">{title}</h3>
      <p className="text-sm text-gray-300 mb-2 z-10 relative font-poppins font-medium">{description}</p>
      {children}
    </motion.div>
  );
}


export default function WhatWeDoBest() {
  return (
    <>
    <div className="min-h-screen w-full bg-[#0e0e0e] text-white px-0 md:px-0 overflow-hidden relative">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vh] bg-[radial-gradient(ellipse_at_top,_#4899E3_30%,_transparent_80%)] opacity-15 blur-2xl pointer-events-none z-0 animate-spotlight"/>

    <HeroSection />
  
  
    <div className="w-full min-h-screen px-0 py-0 text-white font-sans mt-20 bg-[#0e0e0e]">
      <div className="text-center mb-12" id='services'>
        <h2 className="text-3xl md:text-5xl font-aeonik font-regular text-white">What We Do Best</h2>
        <p className=" font-poppins font-regular text-gray-400 mt-3">From Strategy to Spotlight — We Do it All.</p>
      </div>

      {/* ✅ Top Row */}
      
      <div className="flex flex-col md:flex-row justify-center md:space-x-10 gap-4 md:gap-0 px-0 mb-6">
        {/* 🧊 Card 1 */}
        <Card
          title="Digital Marketing"
          description="From SEO and PPC to email and content, we tailor strategies that drive results."
        >
          <StarsBackground className="z-0" />
           <div className="relative w-full h-[25px] mt-2">
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
        src="/icons/seo.svg"
        alt="SEO"
        className="absolute top-[40px] left-[25px] w-[60px] md:w-[80px] hover:drop-shadow-[0_0_10px_rgba(72,153,227,0.7)]"
      />
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
        src="/icons/emailmarketing.svg"
        alt="Email Marketing"
        className="absolute top-[35px] left-[140px] md:left-[180px] w-[110px] md:w-[140px] hover:drop-shadow-[0_0_10px_rgba(72,153,227,0.7)]"
      />
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
        src="/icons/googleadds.svg"
        alt="Google Ads"
        className="absolute top-[50px] right-[20px] w-[90px] md:w-[110px] hover:drop-shadow-[0_0_10px_rgba(72,153,227,0.7)]"
      />
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
        src="/icons/paid_advertising.svg"
        alt="Paid Advertising"
        className="absolute top-[150px] left-[20px] md:left-[30px] w-[100px] md:w-[130px] hover:drop-shadow-[0_0_10px_rgba(72,153,227,0.7)]"
      />
    </div>
          <img src="/icons/growth.svg" alt="Growth Chart" className="w-full max-w-[200px] mx-auto mt-15" />
        </Card>

        {/* 🪐 Card 2 */}
        <Card
          title="Social Media Management"
          description="More than matchmaking! We script, plan, and scale creator partnerships with real impact."
        >
          <StarsBackground className="z-0" />
          <div className="relative w-full h-[300px] flex items-center justify-center mt-1">
            <motion.div
              className="relative w-[180px] h-[180px] flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            >
              <img
                src="/icons/Group 35518.svg"
                alt="Orbit Background"
                className="w-[320px] h-auto mt-4" />
              <img src="/icons/fbicon.svg" alt="Facebook" className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[26px] h-[26px]" />
              <img src="/icons/instagram.svg" alt="Instagram" className="absolute right-1 top-1/2 transform -translate-y-1/2 w-[33px] h-auto" />
              <img src="/icons/youtube.svg" alt="YouTube" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[35px] h-auto" />
              <img src="/icons/tiktok.svg" alt="TikTok" className="absolute left-5 bottom-1/4 transform -translate-y-1/4 w-[25px] h-auto" />
            </motion.div>
          </div>
        </Card>
      </div>


      {/* ✅ Bottom Row - Two More Cards */}
      <div className="flex flex-col md:flex-row justify-center md:space-x-10 gap-4 md:gap-0 px-0 mb-6">
        {/* 🧠 Card 3 */}
        <Card
          title="Event Coverage"
          description="From real-time Reels to cinematic recaps, we turn your moments into magnetic content"
        >
          <StarsBackground className="z-0" />
          <div className="h-[300px] flex items-center justify-center">
            <img src="/icons/card3.svg" alt="Content Creation" className="w-[340px] h-auto mt-4" />
          </div>
        </Card>

        {/* 🎯 Card 4 */}
        <Card
          title="Website & App Development "
          description="We build platforms with content at the core. UX, UI, and storytelling designed to make people click, stay, and act."
        >
          <StarsBackground className="z-0" />
          <div className="h-[300px] flex items-center justify-center">
            <img src="/icons/card4.svg" alt="Brand Strategy" className="w-[320px] h-auto mt-4" />
          </div>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row justify-center md:space-x-4 gap-4 md:gap-0 px-4 w-[90%] mx-auto">
        {/* 🧠 Card 1 */}
        <Card
          title="Ad Campaign "
          description="Smart targeting, high-conversion creatives, and optimized ROI"
        >
          <StarsBackground className="z-0" />
          <div className="h-[240px] md:h-[300px] flex items-center justify-center">
            <img src="/icons/adcampaign.svg" alt="Content Creation" className="w-[150px] h-auto mt-4" />
          </div>
        </Card>

        {/* 🎯 Card 2 */}
        <Card
          title="Influencer Marketing "
          description="More than matchmaking!we script, plan, and scale creator partnerships with real impact"
        >
          <StarsBackground className="z-0" />
          <div className="h-[240px] md:h-[300px] flex items-center justify-center relative  w-full h-[20px] mt-2">

            <img src="/icons/f3.svg" alt="f1" className="absolute top-[20px] w-[220px] left-[25px]" />
            <img src="/icons/f2.svg" alt="f2" className="absolute top-[100px] w-[220px] left-[25px]" />
            <img src="/icons/f1.svg" alt="f3" className="absolute top-[200px] w-[220px] left-[25px]" />
          </div>
        </Card>

        <Card
          title="Content Creation & Strategy"
          description="From real-time Reels to cinematic recaps, we turn your moments into magnetic content"
        >
          <StarsBackground className="z-0" />
          <div className="h-[240px] md:h-[300px] flex items-center justify-center">
            <img src="/icons/btmcard3.png" alt="Content Creation" className="w-[280px] h-auto mt-4" />
          </div>
        </Card>

        <Card
          title="Training & Workshops"
          description="We scale businesses and skills. Learn from those who’ve done it, not just taught it"
        >
          <StarsBackground className="z-0" />
          <div className="h-[240px] md:h-[300px] flex items-center justify-center">
            <img src="/icons/btmcard4.svg" alt="Content Creation" className="w-[300px] h-auto mb-12" />
          </div>
        </Card>
      </div>

     <div className="relative w-full bg-[#0e0e0e] overflow-hidden">

  {/* ✅ GRADIENT OVERLAY */}
  <div className="absolute  top-[1150px] md:top-[600px] left-0 w-full h-[1000px] bg-[linear-gradient(to_left,_#4899E3_-50%,_transparent_40%)] z-0 pointer-events-none blur-[100px]" />

  {/* ✅ FACE BEHIND MAJARAH SECTION */}
  <div className="text-center mb-10 mt-35" id='aboutus'>
  <h2 className="text-5xl font-aeonik font-light">
    Face Behind <span className="bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] text-transparent bg-clip-text animate-gradient-x">Majarah</span>
  </h2>
</div>

<div className="flex flex-col md:flex-row justify-between items-start px-4 md:px-0 py-20 text-white gap-10">
  {/* LEFT SIDE */}
  <div className="md:w-1/2 md:ml-20 w-full flex flex-col items-center md:items-start text-center md:text-left">
    <h2 className="text-4xl md:text-6xl font-aeonik font-regular mb-4">
      <span className="bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] text-transparent bg-clip-text animate-gradient-x">Eisa Al Habib</span>
    </h2>
    <p className="text-base sm:text-lg md:text-lg lg:text-2xl text-gray-300 leading-relaxed mb-6 font-poppins font-light max-w-md md:mr-30 w-[90%]">
      International Emmys Young Creatives Award winner and Forbes-recognized creator, leads Majarah with a bold, viral-first vision. His content bridges culture, creativity, and influence across platforms.
    </p>

    {/* Social Icons */}
    <div className="flex items-center justify-center md:justify-start gap-6  mb-20 md:mb-10 mt-10">
      {[
        { src: "/icons/SMlogo/youtube.svg", alt: "YouTube" , link: "https://www.youtube.com/@eisayo"},
        { src: "/icons/SMlogo/tiktok.svg", alt: "TikTok" , link: "https://www.tiktok.com/@eisayo?lang=en"},
        { src: "/icons/instagramlogo.svg", alt: "Instagram" , link: "https://www.instagram.com/eisayo/"},
        { src: "/icons/SMlogo/linkedin.svg", alt: "Linkedin", link: "https://www.linkedin.com/in/eisa-alhabib/" },
        
      ].map((icon, index) => (
        <div
          key={index}
          className="w-10 h-10 rounded-full bg-[#343236] flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#4a484b] border border-[#595959]"
        >
          <a href={icon.link} target="_blank" rel="noopener noreferrer">
            <img src={icon.src} alt={icon.alt} className="w-7 h-7" />
          </a>
        </div>
      ))}
    </div>

    {/* Logos */}
    <div className="mt-10 md:mt-30 md:mr-10 w-full flex flex-col items-center md:items-start mb-20">
      <div className="grid grid-cols-2 gap-6 justify-center items-center">
        <img src="/icons/forbeslogo.svg" alt="Forbes" className="w-[70px] md:w-[100px] h-auto" />
        <img src="/icons/logo2.svg" alt="Arab Forum" className="w-[140px] md:w-[220px] h-auto" />
        <img src="/icons/logo3.svg" alt="Logo 3" className="w-[120px] md:w-[160px] h-auto" />
        <img src="/icons/logo4.svg" alt="Logo 4" className="w-[120px] md:w-[160px] h-auto" />
      </div>
    </div>
  </div>

  {/* RIGHT SIDE — IMAGE GRID */}
  <div className="md:w-1/2 w-[90%] grid grid-cols-2 gap-4 md:gap-6 md:mr-20 relative overflow-hidden h-[600px] md:h-[800px] mx-auto">
    {/* Left Column */}
    <motion.div
      className="flex flex-col gap-4 md:gap-6"
      animate={{ y: ['0%', '-50%'] }}
      transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
    >
      {[1, 2].map((_, i) => (
        <React.Fragment key={i}>
          <div className="bg-gradient-to-br from-[#003C2A] to-[#418571] rounded-xl p-4 flex flex-col justify-center items-start h-[160px] md:h-[200px]">
  <p className="text-xl md:text-4xl font-inter font-bold text-white  ml-2 md:ml-5">1B+<br />Views</p>
  <p className="text-sm md:text-xl font-inter text-gray-100  ml-2 md:ml-5">Across Globe</p>
</div>
         <div className="relative overflow-visible w-full h-[500px]">
  <img
    src="/icons/col1.svg"
    alt="Gold Play Button"
    className="rounded-xl object-cover w-full h-full"
  />
  {/* Gradient Overlay */}
  <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#4899E3] to-transparent rounded-xl opacity-50" />
</div>
         <div className="bg-gradient-to-tr from-[#3C1515] to-[#D40F0F] rounded-xl p-4 flex flex-col justify-center items-start h-[160px] md:h-[200px]">
  <p className="text-xl md:text-4xl font-inter font-bold text-white ml-2 md:ml-5">1600+</p>
  <p className="text-xl text-white md:text-4xl font-inter font-bold ml-2 md:ml-5">Videos</p>
  <p className="text-sm md:text-xl text-gray-300 font-inter ml-2 md:ml-5">Produced</p>
</div>

        </React.Fragment>
      ))}
    </motion.div>

    {/* Right Column */}
    <motion.div
      className="flex flex-col gap-4 md:gap-6"
      animate={{ y: ['-50%', '0%'] }}
      transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
    >
      {[1, 2].map((_, i) => (
        <React.Fragment key={i}>
         <div className="relative overflow-visible w-full h-full">
  <img
    src="/icons/YT 1.png"
    alt="Eisa in suit"
    className="rounded-xl object-cover w-full h-full"
  />
  {/* Gradient Overlay */}
  <div className="absolute bottom-0 left-0 w-full  h-[30vh] md:h-[50vh] bg-gradient-to-t from-[#4899E3] to-transparent rounded-xl opacity-60" />
</div>
          <div className="bg-gradient-to-tl from-[#1B091E] to-[#792884] rounded-xl p-4 flex flex-col justify-center items-start h-[300px] md:h-[400px]">
  <p className="text-xl md:text-3xl font-inter font-bold text-white">4.7M+</p>
  <p className="text-sm md:text-xl text-gray-300 font-inter font-bold">Followers</p>
</div>
 <div className="relative overflow-visible w-full h-full">
  <img
    src="/icons/card6.svg"
    alt="Gold Play Button"
    className="rounded-xl object-cover w-full h-full"
  />
  {/* Gradient Overlay */}
  <div className="absolute bottom-0 left-0 w-full h-[30vh] md:h-[50vh] bg-gradient-to-t from-[#4899E3] to-transparent rounded-xl opacity-60" />
</div>
        </React.Fragment>
      ))}
    </motion.div>
  </div>
</div>
 <div>
      <ScrollControlledVideo />
    </div>

  {/* ✅ TESTIMONIAL SECTION */}
  <div className="w-full relative z-20">
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
  <div id ="contact">
    <ContactReachUs />
  </div>
  
  <Footer />
</div>
  
    </div>
    </div>
    </>
  );
}
