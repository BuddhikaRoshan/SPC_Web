"use client";

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'DIVISIONS', href: '/projects' },
    { name: 'SERVICES', href: '/services' },
    {name:'NEWS & MEDIA',href:'/news'},
    { name: 'DOWNLOAD', href: '/download' },
    { name: 'CAREERS', href: '/careers' },
    { name: 'CONTACT', href: '/contact' },
  ];

  useEffect(() => {
    // Try to play video and handle autoplay restrictions
    const video = videoRef.current;
    const playVideo = async () => {
      if (video) {
        try {
          await video.play();
        } catch (err) {
          console.log("Autoplay prevented:", err);
          // Add play button or other UI to handle this case
        }
      }
    };
    
    playVideo();
  }, []);

  return (
    <section className="relative h-screen flex flex-col">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-white">
              <span className={isScrolled ? 'text-gray-900' : 'text-white'}>SPC</span>
              <span className="text-orange-500">.</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-orange-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`w-6 flex flex-col gap-1.5 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                <span className={`block h-0.5 w-full bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-current ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 w-full bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-2 space-y-4 pb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/get-started"
                className="block px-3 py-2 text-center text-white bg-orange-600 rounded-md hover:bg-orange-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Video Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/next.svg" // Using a simple placeholder
        >
          <source src="hero1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
