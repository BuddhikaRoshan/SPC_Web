"use client";

import React, { useRef, useEffect } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const playVideo = async () => {
      if (video) {
        try {
          await video.play();
        } catch (err) {
          console.log("Autoplay prevented:", err);
        }
      }
    };
    
    playVideo();

    // Handle scroll indicator click
    const scrollIndicator = scrollIndicatorRef.current;
    const handleScrollClick = () => {
      const nextSection = document.getElementById('content');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (scrollIndicator) {
      scrollIndicator.addEventListener('click', handleScrollClick);
    }

    return () => {
      if (scrollIndicator) {
        scrollIndicator.removeEventListener('click', handleScrollClick);
      }
    };
  }, []);

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/hero1.mp4"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1 mb-2 group-hover:opacity-80 transition-opacity">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
          <span className="text-white text-sm opacity-70 group-hover:opacity-100 transition-opacity">
            Scroll Down
          </span>
        </div>
      </div>
    </div>
  );
}