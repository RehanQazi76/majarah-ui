'use client';

import { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxWrapperProps {
  children: ReactNode[];
}

export default function ParallaxWrapper({ children }: ParallaxWrapperProps) {
  return (
    <div className="relative h-[500vh]">
      {children.map((child, index) => (
        <ParallaxSection key={index} index={index} total={children.length}>
          {child}
        </ParallaxSection>
      ))}
    </div>
  );
}

function ParallaxSection({
  children,
  index,
  total,
}: {
  children: ReactNode;
  index: number;
  total: number;
}) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(
    scrollYProgress,
    [index / total, (index + 1) / total],
    ['0%', '-100%']
  );

  return (
    <section
      className="h-screen sticky top-0"
      style={{ zIndex: total - index }}
    >
      <motion.div
        style={{ y }}
        className="w-full h-full flex items-center justify-center bg-black text-white"
      >
        {children}
      </motion.div>
    </section>
  );
}
