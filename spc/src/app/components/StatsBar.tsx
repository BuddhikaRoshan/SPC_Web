"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  value: string;
  suffix?: string;
}

const AnimatedCounter = ({ value, suffix = '' }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Remove any non-numeric characters and convert to number
    const target = parseInt(value.replace(/\D/g, ''));
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    const easeOutQuad = (t: number) => t * (2 - t);
    
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      const currentCount = Math.round(target * progress);
      
      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(target);
      } else {
        setCount(currentCount);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, [value]);
  
  return <span>{count.toLocaleString()}{suffix}</span>;
};

const StatsBar = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { number: '57', label: 'Years Serving the Nation', suffix: '+' },
    { number: '3100', label: 'Workforce Strength', suffix: '+' },
    { number: '12500', label: 'Secure Projects', suffix: '+' },
    { number: '10', label: 'Sectors We Serve', suffix: '+' },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-orange-500 via-orange-600 to-amber-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center"></div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-300 via-white to-amber-300"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white/90">
            Our Impact in Numbers
          </h2>
          <div className="w-24 h-1 bg-amber-300 mx-auto mb-6"></div>
          <p className="text-orange-100 max-w-2xl mx-auto">
            Delivering excellence and innovation in printing services for over five decades
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              variants={item}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
                <AnimatedCounter value={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base font-medium text-orange-100">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;
