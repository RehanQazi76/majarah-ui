'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import React from 'react';

type Card = {
  img: string;
  name: string;
  user: string;
  text: string;
};

export default function Testimonials() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    controls1.start({
      x: ['0%', '-50%'],
      transition: {
        duration: 70, // Slower animation (was 25)
        ease: 'linear',
        repeat: Infinity,
      },
    });

    controls2.start({
      x: ['-50%', '0%'],
      transition: {
        duration: 70, // Slower animation (was 25)
        ease: 'linear',
        repeat: Infinity,
      },
    });
  }, []);

  const scrollToAbout = () => {
    const section = document.getElementById('hero');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const renderCards = (cards: Card[]) =>
    cards.map((card, idx) => {
      const parts = card.text.split(/info@majarah\.co|majarah/);
      const joined = parts.map((part, i) =>
        i < parts.length - 1 ? (
          <span key={i}>
            {part}
            <span
              onClick={scrollToAbout}
              className="text-[#5EA8FF] hover:underline cursor-pointer"
            >
              majarah
            </span>
          </span>
        ) : (
          part
        )
      );

      return (
        <div
          key={idx}
          className="w-[280px] md:w-[500px] [@media(min-width:2560px)]:w-[520px] min-h-[200px] md:min-h-[240px] [@media(min-width:2560px)]:min-h-[280px] 
          text-white p-4 md:p-6 [@media(min-width:2560px)]:p-8 rounded-xl shadow-2xl transition-transform duration-300 
          hover:-translate-y-2 ring-1 ring-white/10 hover:ring-white/20 cursor-pointer 
          bg-[linear-gradient(to_bottom,_#141316_-150%,_transparent_70%)]"
        >
          <div className="flex items-center gap-3 md:gap-4 mb-4">
            <img
              src={card.img}
              className="w-10 h-10 md:w-12 md:h-12 [@media(min-width:2560px)]:w-14 [@media(min-width:2560px)]:h-14 rounded-full"
              alt={card.name}
            />
            <div>
              <h4 className="font-inter text-white text-base md:text-lg [@media(min-width:2560px)]:text-xl">
                {card.name}
              </h4>
              <p className="text-sm md:text-base text-gray-400 [@media(min-width:2560px)]:text-lg">
                {card.user}
              </p>
            </div>
          </div>
          <p className="text-gray-300 text-sm md:text-base [@media(min-width:2560px)]:text-lg leading-relaxed font-inter text-justify">
            {joined}
          </p>
        </div>
      );
    });

  const row1Cards: Card[] = [
    {
      img: '/icons/sean.svg',
      name: 'Hassan Al Mansoori',
      user: '@Hassan',
      text:
        'Collaborating with majarah was a transformative experience. Their team took our vision and turned it into a powerful digital story that not only engaged our audience but also set new creative benchmarks in the industry.',
    },
    {
      img: '/icons/ryan.svg',
      name: 'Ryan Delk',
      user: '@delk',
      text:
        'From the first concept discussion to the final post-production, majarah. delivered excellence at every stage. Their content strategy and execution helped us reach new levels of audience connection and brand impact.',
    },
    {
      img: '/icons/demeteria.svg',
      name: 'Amina Al Suwaidi',
      user: '@Amina',
      text:
        'majarah doesn’t just create content—they craft narratives that move people. Their approach is bold, data-driven, and always aligned with what today’s audience truly connects with.',
    },
  ];

  const row2Cards: Card[] = [
    {
      img: '/icons/jeremy.svg',
      name: 'Omar Al Farsi',
      user: '@omae',
      text:
        'We were thoroughly impressed with the professionalism and creative energy of the team at majarah. Their ability to translate complex ideas into engaging, viral content made a measurable impact on our outreach.',
    },
    {
      img: '/icons/fabrizio.svg',
      name: 'Faisal Al Amiri',
      user: '@FaisalAmiri',
      text:
        'With majarah we didn’t just get a media partner—we found a visionary team that pushes boundaries. Their deep understanding of the digital landscape helped us deliver bold campaigns with real results.',
    },
    {
      img: '/icons/jonathan.svg',
      name: 'Tariq Al Habsi',
      user: '@TariqHabsi',
      text:
        'The work delivered by majarah exceeded expectations. Their creative storytelling, high-quality production, and strategic digital execution played a key role in amplifying our brand message.',
    },
  ];

  return (
  <motion.div
    initial={{ opacity: 0, y: 100, scale: 0.9, filter: "blur(15px)" }}
    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)"
    }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{
      duration: 0.7,
      ease: [0.33, 1, 0.68, 1] // intense entrance
    }}
    className="w-full relative z-20"
  >
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#4899E3] to-transparent blur-3xl opacity-60 z-0" />

    <div className="text-center mb-12 relative z-10">
      <h2 className="text-4xl font-aeonik font-regular text-white md:mt-10 [@media(min-width:2560px)]:text-6xl">
        What Our Clients Say
      </h2>
    </div>

    {/* Row 1 */}
    <div className="w-full px-0 mb-10 relative z-20">
      <motion.div className="flex gap-6 w-max" animate={controls1}>
        {[...Array(3)].map((_, i) => (
          <React.Fragment key={i}>{renderCards(row1Cards)}</React.Fragment>
        ))}
      </motion.div>
    </div>

    {/* Row 2 */}
    <div className="relative w-full px-5 z-10">
      <div className="absolute inset-0 bg-[linear-gradient(to_top,_#4899E3_-100%,_transparent_40%)] z-0 pointer-events-none px-10" />
      <div className="relative flex gap-6 w-max z-10">
        <motion.div className="flex gap-6 w-max" animate={controls2}>
          {[...Array(3)].map((_, i) => (
            <React.Fragment key={i}>{renderCards(row2Cards)}</React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  </motion.div>
);

}