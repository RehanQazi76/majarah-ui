"use client";

import React, { useEffect, useState, useId, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; // Loads all features
import { loadEmittersPlugin } from "tsparticles-plugin-emitters"; // <-- Load emitters plugin
import { motion, useAnimation } from "framer-motion";
import type { Container, Engine } from "@tsparticles/engine";
import type { EmittersEngine } from "tsparticles-plugin-emitters"; // ✅ Add this

type SparklesProps = {
  className?: string;
};

export const SparklesCore: React.FC<SparklesProps> = ({ className = "" }) => {
  const [init, setInit] = useState(false);
  const controls = useAnimation();
  const generatedId = useId();
  const containerRef = useRef<Container | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize particles engine with all features including emitters
  useEffect(() => {
  initParticlesEngine(async (engine: Engine) => {
    await loadFull(engine);
    await loadEmittersPlugin(engine as unknown as EmittersEngine); // ✅ Cast to correct type
  }).then(() => setInit(true));
}, []);

  // Shooting star effect
  useEffect(() => {
    if (!containerRef.current) return;

    const emitShootingStar = () => {
      const container = containerRef.current as any; // TypeScript workaround
      container?.addEmitter?.({
        position: { x: 0, y: 0 },
        rate: { delay: 0, quantity: 1 },
        particles: {
          move: {
            direction: "top-right",
            speed: 50,
            straight: true,
            outModes: { default: "destroy" },
          },
          size: { value: 2 },
          color: { value: "#ffffff" },
          life: {
            duration: { value: 2 },
            count: 1,
          },
          opacity: {
            value: 1,
            animation: {
              enable: true,
              speed: 1,
              startValue: "max",
              destroy: "min",
            },
          },
        },
      });
    };

    emitShootingStar();
    intervalRef.current = setInterval(emitShootingStar, 15000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [init]);

  // When particles are loaded
  const particlesLoaded = async (container?: Container) => {
    if (container) {
      containerRef.current = container;
      await controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  };

  return (
    <motion.div
      animate={controls}
      className={`absolute inset-0 z-0 opacity-0 pointer-events-none ${className}`}
    >
      {init && (
        <Particles
          id={generatedId}
          className="h-full w-full"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: { enable: false },
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            detectRetina: true,
            particles: {
              number: {
                value: 200,
              },
              color: { value: "#ffffff" },
              shape: { type: "circle" },
              opacity: {
                value: { min: 0.3, max: 0.9 },
                animation: {
                  enable: true,
                  speed: 0.5,
                  sync: false,
                },
              },
              size: {
                value: { min: 0.3, max: 1 },
              },
              move: {
                enable: false, // Static twinkling stars
              },
            },
            emitters: [], // Will be triggered programmatically
          }}
        />
      )}
    </motion.div>
  );
};
