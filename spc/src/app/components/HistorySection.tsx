import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const HistorySection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollInterval = useRef<NodeJS.Timeout | undefined>(undefined);
  const isPaused = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollStep = 1;
    let scrollPosition = 0;
    const cardWidth = 320; // Width of each card including margins

    const autoScroll = () => {
      if (isPaused.current) return;
      
      scrollPosition += scrollStep;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft = scrollPosition;
      }
    };

    scrollInterval.current = setInterval(autoScroll, 10);

    const handleMouseEnter = () => {
      isPaused.current = true;
    };

    const handleMouseLeave = () => {
      isPaused.current = false;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (scrollInterval.current) clearInterval(scrollInterval.current);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const historyItems = [
    {
      year: "2000",
      title: "Our Humble Beginnings",
      description: "Established with a vision to revolutionize the industry through innovation and quality service.",
      isHighlighted: false,
      image: "/d1.png" // Replace with your actual image path
    },
    {
      year: "2010",
      title: "Expanding Horizons",
      description: "Expanded our operations internationally, establishing a strong global presence.",
      isHighlighted: false,
      image: "/d1.png" // Replace with your actual image path
    },
    {
      year: "2015",
      title: "Technological Advancement",
      description: "Invested in cutting-edge technology to enhance our services and operations.",
      isHighlighted: false,
      image: "/d1.png" // Replace with your actual image path
    },
    {
      year: "2018-2020",
      title: "New Milestones",
      description: "Reached significant milestones in our growth and service excellence.",
      isHighlighted: false,
      image: "/d1.png" // Replace with your actual image path
    },
    {
      year: "2020",
      title: "Global Recognition",
      description: "Received international recognition for our innovative solutions and services.",
      isHighlighted: false,
      image: "/d1.png" // Replace with your actual image path
    },
    {
      year: "Present",
      title: "Today & Beyond",
      description: "Continuing our journey of excellence, innovation, and sustainable growth.",
      isHighlighted: true,
      image: "/d1.png" // Replace with your actual image path
    }
  ];

  return (
    <div className="bg-white py-16 overflow-hidden w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our <span className="text-amber-600">History</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A journey of innovation, growth, and commitment to excellence
          </p>
        </div>

        <div className="relative w-full py-8">
          
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto py-8 px-4 -mx-4 scrollbar-hide"
            style={{
              scrollBehavior: 'smooth',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {historyItems.map((item, index) => (
              <div 
                key={index} 
                className="relative flex-shrink-0 w-[calc(25%-1rem)] mx-2 snap-start min-w-[250px]"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Timeline dot with year above and connecting lines */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-2 flex flex-col items-center w-full">
                  <span className="text-xs font-bold text-gray-700 mb-1 whitespace-nowrap">{item.year}</span>
                  <div className="relative w-full flex justify-center">
                    {/* Left connecting line */}
                    {index > 0 && (
                      <div className="absolute right-[calc(100%+3rem)] w-[calc(100%+3rem)] h-0.5 bg-orange-500 top-1/2 -translate-y-1/2"></div>
                    )}
                    {/* Dot */}
                    <div className={`w-6 h-6 rounded-full ${item.isHighlighted ? 'bg-orange-500' : 'bg-orange-500'} flex items-center justify-center relative z-10`}>
                      <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    </div>
                    {/* Right connecting line */}
                    {index < historyItems.length - 1 && (
                      <div className="absolute left-[calc(100%+3rem)] w-[calc(100%+3rem)] h-0.5 bg-orange-500 top-1/2 -translate-y-1/2"></div>
                    )}
                  </div>
                  {/* Vertical line to next dot */}
                  {index < historyItems.length - 1 && (
                    <div className="absolute top-full h-12 w-0.5 bg-gray-200 -z-10"></div>
                  )}
                </div>
                
                {/* Card - positioned below the dot */}
                <div className={`mt-12 rounded-xl shadow-md overflow-hidden w-full min-h-[300px] ${item.isHighlighted ? 'bg-gradient-to-br from-amber-500 to-orange-500 text-white' : 'bg-white'} transform transition-all duration-300 hover:scale-105`}>
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden" style={{ position: 'relative' }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="text-center">
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className={`text-sm font-medium mb-2 ${item.isHighlighted ? 'text-amber-100' : 'text-amber-600'}`}>
              
                      </p>
                      <p className={`text-sm ${item.isHighlighted ? 'text-amber-50' : 'text-gray-600'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Add extra space at the end for better scrolling */}
            <div className="flex-shrink-0 w-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
