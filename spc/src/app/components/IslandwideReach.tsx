"use client";

import Image from 'next/image';

const IslandwideReach = () => {
  return (
    <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center">
          {/* Right Column - Map */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-full h-[400px] md:h-[600px]">
              <Image 
                src="/map.png" 
                alt="Sri Lanka Map" 
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          
          {/* Left Column - Content */}
          <div className="w-full md:w-1/2 md:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              ISLANDWIDE <span className="text-orange-500">REACH</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-justify">
              Our extensive distribution network spans across all provinces of Sri Lanka, ensuring 
              timely delivery of high-quality printed materials to every corner of the island.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Sri Lankan Distribution Network</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span className="text-justify">Covering all 9 provinces and 25 districts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span className="text-justify">Strategic distribution centers in key locations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span className="text-justify">Efficient logistics for both urban and rural areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span className="text-justify">Timely delivery guaranteed</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              <p className="text-gray-700 italic text-justify">
                "Our commitment to nationwide coverage ensures that no matter where you are in Sri Lanka, 
                you can rely on our printing and distribution services."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IslandwideReach;
