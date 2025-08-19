"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';

const CommitteePage = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Directors data
  const directors = [
    {
      id: 1,
      name: 'Mr. D.M. Gunasiri Bandara',
      position: 'Technical Director',
      department: 'MAS Intimates Pvt Ltd at MAS Holdings',
      image: '/d1.png',
      bio: 'Extensive experience in technical leadership and strategic planning with a proven track record in organizational development.'
    },
    {
      id: 2,
      name: 'Mr. K.D.C.S. Kumarathunga',
      position: 'Commissioner',
      department: 'Department of Ayurveda',
      image: '/d2.png',
      bio: 'Seasoned professional with expertise in public administration and healthcare management.'
    },
    {
      id: 3,
      name: 'Mrs. Nimali Jayawardane',
      position: 'Secretary',
      department: 'Ministry of Education',
      image: '/d3.png',
      bio: 'Experienced administrator with a strong background in educational policy and management.'
    },
    {
      id: 4,
      name: 'Hon. Harini Amarasooriya',
      position: 'Minister',
      department: 'Ministry of Education',
      image: '/d4.png',
      bio: 'Dedicated public servant with a vision for educational reform and national development.'
    },
    {
      id: 5,
      name: 'Dr. Ravi Fernando',
      position: 'Senior Consultant',
      department: 'Ministry of Finance',
      image: '/d1.png',
      bio: 'Financial expert with extensive experience in economic policy and fiscal management.'
    },
    {
      id: 6,
      name: 'Ms. Shanika Perera',
      position: 'Director General',
      department: 'Department of Information Technology',
      image: '/d2.png',
      bio: 'Technology leader with a passion for digital transformation and innovation.'
    },
    {
      id: 7,
      name: 'Mr. Asanka Silva',
      position: 'Chief Operations Officer',
      department: 'National Development Bank',
      image: '/d3.png',
      bio: 'Operations specialist with a strong background in banking and financial services.'
    },

  ];

  // Group Management Committee Members
  const committeeMembers = [
    { id: 1, name: 'Mr.S.D.Kumarasinghe', position: 'Works Manager', department: 'Operations', image: '/d2.png', },
    { id: 2, name: 'Ms. Maheshi', position: 'Adminstration and Human Resources Manager', department: 'Finance', image: '/d2.png', },
    { id: 3, name: 'Mr.M.S.S.Mohotti', position: 'Financial Manager', department: 'Production', image: '/d2.png', },
    { id: 4, name: 'Mr.Ananda', position: 'Marketing Manager', department: 'Human Resources', image: '/d2.png', },
    { id: 5, name: 'Mr.Nimal', position: 'Supply Manager', department: 'Production', image: '/d2.png', },

  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[100vh] bg-gray-900 overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/80"></div>
          <Image
            src="/lead.jpg"
            alt="Leadership Team"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
            priority
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-amber-400">Leadership</span> Team
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
              Meet the dedicated professionals who guide our organization's vision and operations.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-amber-600 hover:bg-amber-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to About Us
              </Link>
              <button 
                onClick={() => {
                  const element = document.getElementById('directors');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-full text-white hover:bg-white/10 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                View Team
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => {
              const element = document.getElementById('directors');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="animate-bounce text-white hover:text-amber-300 transition-colors duration-200"
            aria-label="Scroll down"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>



      <div id="directors" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Board of Directors Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Board of <span className="text-amber-600">Directors</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our board members bring diverse expertise and leadership to guide our organization's strategic direction.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 px-4">
              {directors.map((director) => (
                <div 
                  key={director.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 w-[280px]"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={director.image}
                      alt={director.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{director.name}</h3>
                    <p className="text-sm text-amber-600 font-medium mb-1">{director.position}</p>
                    <p className="text-xs text-gray-500 mb-2">{director.department}</p>
                    <p className="text-xs text-gray-600 line-clamp-3">{director.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Group Management Committee Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Group Management <span className="text-amber-600">Committee</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our dedicated management team works tirelessly to ensure operational excellence and strategic execution.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 px-4">
              {committeeMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white shadow-md rounded-lg p-3 flex flex-col items-center text-center h-[250px] w-[220px] hover:shadow-lg transition-shadow shrink-0" 
                >
                  <div className="h-28 w-28 rounded-full overflow-hidden bg-gray-200 ring-2 ring-amber-100 mb-2">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={112}
                        height={112}
                        className="h-full w-full object-cover"
                        priority
                      />
                    ) : (
                      <div className="h-full w-full bg-amber-100 flex items-center justify-center text-lg font-medium text-amber-700">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>

                  <h3 className="text-base font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-xs text-amber-600 font-medium mb-1 line-clamp-2">
                    {member.position}
                  </p>
                  <p className="text-xs text-gray-600">{member.department}</p>
                </div>
              ))}
            </div>

          </section>

          {/* Back to Top Button */}
          <div className="mt-12 text-center">
          <button 
  onClick={scrollToTop}
  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md 
             text-white bg-orange-700 hover:bg-orange-800 
             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 transition-colors"
>
  Back to top
  <svg 
    className="ml-2 -mr-1 w-4 h-4" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitteePage;
