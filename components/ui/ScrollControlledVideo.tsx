'use client';

import { useEffect, useRef } from 'react';

export default function ScrollControlledVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto py-4">
      <video
        ref={videoRef}
        src="/videos/eisa.mp4"
        autoPlay
        loop
        playsInline
        className="w-full h-[800px] object-cover rounded-lg shadow-md"
      />
    </div>
  );
}
