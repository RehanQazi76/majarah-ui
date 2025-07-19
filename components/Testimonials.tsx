'use client';

import { useEffect, useState } from 'react';
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

  const [pauseRow1, setPauseRow1] = useState(false);
  const [pauseRow2, setPauseRow2] = useState(false);

  useEffect(() => {
    if (!pauseRow1) {
      controls1.start({
        x: ['0%', '-50%'],
        transition: { duration: 25, ease: 'linear', repeat: Infinity },
      });
    } else {
      controls1.stop();
    }
  }, [pauseRow1]);

  useEffect(() => {
    if (!pauseRow2) {
      controls2.start({
        x: ['-50%', '0%'],
        transition: { duration: 25, ease: 'linear', repeat: Infinity },
      });
    } else {
      controls2.stop();
    }
  }, [pauseRow2]);

  const renderCards = (cards: Card[]) =>
    cards.map((card, idx) => (
      <div
        key={idx}
        className="w-[280px] md:w-[500px] min-h-[200px] text-white p-4 md:p-6 rounded-xl shadow-2xl transition-transform duration-300 hover:-translate-y-2 ring-1 ring-white/10 hover:ring-white/20 cursor-pointer bg-[linear-gradient(to_bottom,_#141316_-150%,_transparent_70%)]"
      >
        <div className="flex items-center gap-3 mb-4">
          <img src={card.img} className="w-10 h-10 rounded-full" alt={card.name} />
          <div>
            <h4 className="font-inter text-white text-base">{card.name}</h4>
            <p className="text-sm text-gray-400">{card.user}</p>
          </div>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed font-inter text-justify">
          {card.text.split('@').map((part: string, i: number) =>
            i > 0 ? (
              <span key={i}>
                <span className="text-[#5EA8FF]">@{part.split(' ')[0]}</span>{' '}
                {part.substring(part.indexOf(' ') + 1)}
              </span>
            ) : (
              part
            )
          )}
        </p>
      </div>
    ));

  const row1Cards: Card[] = [
    {
      img: '/icons/sean.svg',
      name: 'Hassan Al Mansoori',
      user: '@Hassan',
      text: `Collaborating with info@majarah.co was a transformative experience. Their team took our vision and turned it into a powerful digital story that not only engaged our audience but also set new creative benchmarks in the industry.`,
    },
    {
      img: '/icons/ryan.svg',
      name: 'Ryan Delk',
      user: '@delk',
      text: `From the first concept discussion to the final post-production, info@majarah.co delivered excellence at every stage. Their content strategy and execution helped us reach new levels of audience connection and brand impact.`,
    },
    {
      img: '/icons/demeteria.svg',
      name: 'Amina Al Suwaidi',
      user: '@Amina',
      text: `info@majarah.co doesn’t just create content—they craft narratives that move people. Their approach is bold, data-driven, and always aligned with what today’s audience truly connects with.`,
    },
  ];

  const row2Cards: Card[] = [
    {
      img: '/icons/jeremy.svg',
      name: 'Omar Al Farsi',
      user: '@omae',
      text: `We were thoroughly impressed with the professionalism and creative energy of the team at info@majarah.co. Their ability to translate complex ideas into engaging, viral content made a measurable impact on our outreach.`,
    },
    {
      img: '/icons/fabrizio.svg',
      name: 'Faisal Al Amiri',
      user: '@FaisalAmiri',
      text: `With info@majarah.co, we didn’t just get a media partner—we found a visionary team that pushes boundaries. Their deep understanding of the digital landscape helped us deliver bold campaigns with real results.`,
    },
    {
      img: '/icons/jonathan.svg',
      name: 'Tariq Al Habsi',
      user: '@TariqHabsi',
      text: `The work delivered by info@majarah.co exceeded expectations. Their creative storytelling, high-quality production, and strategic digital execution played a key role in amplifying our brand message.`,
    },
  ];

  return (
    <div className="w-full relative z-20">
      {/* Glowing Background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#4899E3] to-transparent blur-3xl opacity-60 z-0" />

      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl font-aeonik font-regular text-white">What Our Clients Say</h2>
      </div>

      {/* Row 1 */}
      <div
        className="w-full px-0 mb-10 relative z-20 cursor-pointer"
        onMouseEnter={() => setPauseRow1(true)}
        onMouseLeave={() => setPauseRow1(false)}
        onClick={() => setPauseRow1(prev => !prev)}
        onTouchStart={() => setPauseRow1(prev => !prev)}
      >
        <motion.div className="flex gap-6 w-max" animate={controls1}>
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>{renderCards(row1Cards)}</React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Row 2 with background gradient behind */}
      <div className="relative w-full px-5 z-10">
        {/* Gradient background behind row 2 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,_#4899E3_-100%,_transparent_40%)] z-0 pointer-events-none px-10" />

        <div
          className="relative flex gap-6 w-max cursor-pointer z-10"
          onMouseEnter={() => setPauseRow2(true)}
          onMouseLeave={() => setPauseRow2(false)}
          onClick={() => setPauseRow2(prev => !prev)}
          onTouchStart={() => setPauseRow2(prev => !prev)}
        >
          <motion.div className="flex gap-6 w-max" animate={controls2}>
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>{renderCards(row2Cards)}</React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
