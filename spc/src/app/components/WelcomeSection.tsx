"use client";

import Link from 'next/link';
import Image from 'next/image';

const WelcomeSection = () => {
  return (
    <section id="welcome-section" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column - Image */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <div className="relative h-80 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/welcome.png" 
                alt="Our Office" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Welcome to <span className="text-orange-500">Government Printing Department</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
            Established in 1968 by an Act of Parliament of the Democratic Socialist Republic of Sri Lanka, the State Printing Corporation (SPC) has been a trusted name in quality printing for over five decades.




            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
            Initially focused on printing school books and commercial publications, SPC has evolved into a dynamic institution leading creative and innovative printing projects nationwide. With advanced equipment and expert staff, we ensure every project is handled with precision, efficiency, and uncompromised quality.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
            Our experienced Sales and Estimating team will guide you through tailored solutions, helping you make the right choices for your printing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/about" 
                className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 text-center"
              >
                Learn More
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent hover:bg-gray-100 text-orange-600 font-medium py-3 px-6 border-2 border-orange-600 rounded-md transition-colors duration-300 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
