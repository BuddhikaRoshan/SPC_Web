"use client";

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Header from '../components/Header';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false,
});

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />

      {/* Hero Section with Video Background */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 via-gray-900/80 to-gray-900/90"></div>
        </div>


      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Who <span className="text-amber-400">We Are</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto text-justify">
                A leading security solutions provider committed to excellence, innovation, and client satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Our Story</h3>
                <div className="space-y-4 text-gray-300">
                  <p className="text-justify">
                    The State Printing Corporation was set up in 1968 by an Act of Parliament of the Democratic Socialist Republic of Sri Lanka and now 
                    functions as a statutory institution under the purview of the Ministry of Education. Today it stands as a high-quality printing 
                    house equipped with comprehensive pre-press, press, and finishing operations, virtually capable of undertaking anything in the fields of printing, publishing, and book binding.
                    Up to the year 1982, the Corporation was primarily engaged in printing of school textbooks and other commercial print work.
                  </p>
                  <p className="text-justify">
                    In 1989, a dedicated publishing project was launched which has since positioned SPC as one of the leading printing works in the country. 
                    The Corporation now comprises two fully fledged production units.
                  </p>
                </div>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
                <p className="text-gray-300 mb-6 text-justify">
                  To provide our nation with high-quality printed textbooks and secure printing solutions delivered on time, competitively priced, and powered by top talent and technology.
                </p>

                <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
                <p className="text-gray-300 mb-6 text-justify">
                  To be the preferred choice for the commercial printing market while remaining the leader in delivering high-quality school textbooks with a complete package of services for emerging printing demands.
                </p>

                <h3 className="text-2xl font-bold text-white mb-6">Our Purpose</h3>
                <p className="text-gray-300 text-justify">
                  To empower Sri Lanka by being the trusted backbone of knowledge distribution and government communication through sustainable and innovative printing practices.
                </p>
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Integrity',
                  description: 'We conduct our business with the highest ethical standards and transparency in all our dealings.',
                  icon: '🔒'
                },
                {
                  title: 'Excellence',
                  description: 'We strive for the highest quality in all aspects of our services and operations.',
                  icon: '⭐'
                },
                {
                  title: 'Innovation',
                  description: 'We embrace new technologies and creative solutions to stay ahead in the security industry.',
                  icon: '💡'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-amber-500/50 transition-colors">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-300 text-justify">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
