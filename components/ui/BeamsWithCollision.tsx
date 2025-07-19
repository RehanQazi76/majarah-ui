'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export const BeamsWithCollision = ({
  number = 7,
  className = '',
}: {
  number?: number;
  className?: string;
}) => {
  return (
    <div className={`absolute top-0 left-0 w-full h-full z-50 pointer-events-none overflow-hidden ${className}`}>
      {Array.from({ length: number }).map((_, idx) => (
        <BeamWithExplosion key={idx} index={idx} total={number} />
      ))}
    </div>
  );
};

const BeamWithExplosion = ({
  index,
  total,
}: {
  index: number;
  total: number;
}) => {
  const [explode, setExplode] = useState(false);
  const [cycle, setCycle] = useState(0);

  const left = (100 / total) * index + Math.random() * 3;
  const delay = Math.random() * 3;
  const duration = 7 + Math.random() * 1.5;
  const rotation = -15 + Math.random() * -10;

  useEffect(() => {
    const timer = setTimeout(() => {
      setExplode(true);
      setTimeout(() => {
        setExplode(false);
        setCycle((prev) => prev + 1);
      }, 600);
    }, (delay + duration) * 1000);

    return () => clearTimeout(timer);
  }, [cycle]);

  return (
    <>
      <motion.span
  key={`beam-${index}-${cycle}`}
  className="absolute top-0 w-[1.5px] h-12 rounded-full bg-gradient-to-t from-[#00c3ff] via-[#3abeff] to-transparent shadow-[0_0_6px_1px_#3abeff40]"
  initial={{ y: -100, opacity: 1 }}
  animate={{ y: '140vh', opacity: 1 }} // Beam travels all the way and remains visible
  transition={{
    duration,
    delay,
    repeat: Infinity,
    repeatDelay: 0,
    ease: 'easeInOut',
  }}
  style={{
    left: `${left}%`,
    transform: `rotate(${rotation}deg)`,
  }}
/>

      <AnimatePresence>
        {explode && <Explosion key={`explosion-${index}-${cycle}`} left={`${left}%`} />}
      </AnimatePresence>
    </>
  );
};

const Explosion = ({ left }: { left: string }) => {
  const particles = Array.from({ length: 12 });

  return (
    <div
      className="absolute bottom-0 "
      style={{ left, transform: 'translate(-50%, 0)' }}
    >
      {particles.map((_, i) => {
        const angle = Math.random() * 2 * Math.PI;
        const radius = 12 + Math.random() * 20;
        const offsetX = Math.cos(angle) * radius;
        const offsetY = -Math.abs(Math.sin(angle) * radius * 1); // taller height

        return (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gradient-to-b from-[#00c3ff] to-[#3abeff] shadow-[0_0_4px_#3abeff80]"
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{ x: offsetX, y: offsetY, opacity: 0 }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
            }}
          />
        );
      })}
    </div>
  );
};
