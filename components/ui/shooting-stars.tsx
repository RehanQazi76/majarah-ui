"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  speed: number;
}

interface ShootingStarsProps {
  speed?: number;
  interval?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  speed = 30,                      // ✅ Controlled moderate speed
  interval = 8000,               // ✅ One star every 5 seconds
  starColor = "#FFFFFF",
  trailColor = "#D4D0D0",
  starWidth = 1.1,               // ✅ Thinner star
  starHeight = 40,              // ✅ Reduced height
  className,
}) => {
  const [star, setStar] = useState<ShootingStar | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const launchStar = () => {
      const newStar: ShootingStar = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: -starHeight,
        speed,
      };
      setStar(newStar);

      timeoutId = setTimeout(launchStar, interval); // schedule next star after 5 sec
    };

    launchStar();

    return () => clearTimeout(timeoutId);
  }, [interval, speed, starHeight]);

  useEffect(() => {
    let animationId: number;

    const animate = () => {
      setStar((prev) => {
        if (!prev) return null;

        const nextY = prev.y + prev.speed;
        if (nextY > window.innerHeight + starHeight) return null; // remove star

        return { ...prev, y: nextY };
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, [speed, starHeight]);

  return (
    <svg
      ref={svgRef}
      className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
    >
      <defs>
        <linearGradient id="star-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={trailColor} stopOpacity="0" />
          <stop offset="100%" stopColor={starColor} stopOpacity="1" />
        </linearGradient>
      </defs>

      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth}
          height={starHeight}
          fill="url(#star-gradient)"
          rx={1}
        />
      )}
    </svg>
  );
};
