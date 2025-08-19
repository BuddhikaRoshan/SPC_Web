"use client";

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Header from '../components/Header';
import CommitteeSection from '../components/CommitteeSection';
import HistorySection from '../components/HistorySection';

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
    <div className="min-h-screen bg-white text-white">
      <Header />

      {/* Hero Section with Video Background */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 via-gray-900/80 to-gray-900/90"></div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                WHO <span className="text-amber-400">WE ARE</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
              <h2 className="text-black bold italic text-3xl max-w-6xl mx-auto text-center">
                "Sri Lanka’s premier state-owned printing and publishing house dedicated to education, knowledge, and national service."
              </h2>
            </div>

            <div className="space-y-12">
              {/* Mission, Vision, Purpose Section */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Mission Card */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-amber-500/50 transition-all hover:shadow-lg ">
                  <div className="bg-amber-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl text-center font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-white text-center">
                    To deliver high-quality printing services for educational, governmental, and commercial needs while upholding accuracy, reliability, and affordability for the people of Sri Lanka.
                  </p>
                </div>

                {/* Vision Card */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-amber-500/50 transition-all hover:shadow-lg">
                  <div className="bg-amber-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">👁️</span>
                  </div>
                  <h3 className="text-xl text-center font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-white text-center">
                    To be the nation’s trusted leader in printing and publishing, driving knowledge distribution and supporting Sri Lanka’s progress through sustainable and innovative practices.
                  </p>
                </div>

                {/* Purpose Card */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-amber-500/50 transition-all hover:shadow-lg">
                  <div className="bg-amber-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="text-xl text-center font-bold text-white mb-4">Our Purpose</h3>
                  <p className="text-white text-center">
                    To empower education, communication, and cultural development by being the backbone of Sri Lanka’s printing and publishing sector.
                  </p>
                </div>
              </div>

              {/* Story Section */}
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-300">
                <h3 className="text-2xl font-bold text-white mb-6">Our Story</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4 text-white">
                    <p className="text-justify">
                      The State Printing Corporation was established in 1968 by an Act of Parliament of the Democratic Socialist Republic of Sri Lanka. It functions today as a statutory institution under the purview of the Ministry of Mass Communication. With state-of-the-art pre-press, press, and finishing facilities, SPC is capable of handling a wide range of printing, publishing, and bookbinding requirements.
                    </p>
                    <p className="text-justify">
                      Initially focused on school textbooks and commercial print work until 1982, SPC expanded in 1989 with a dedicated publishing project. Since then, it has grown into one of the nation’s most respected printing houses, now operating through two fully fledged production units.
                    </p>
                  </div>
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src="/welcome.png"
                      alt="State Printing Corporation Building"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Leadership Messages Section */}
              <div className="mt-24">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    LEADERSHIP <span className="text-amber-400">MESSAGES</span>
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
                  <p className="text-black text-lg max-w-3xl mx-auto">
                    Insights from our leaders on SPC’s role in education, communication, and national development.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Minister */}
                  <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="h-64 relative">
                      <Image
                        src="/pm.jpeg"
                        alt="Hon. Minister"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-90 hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-xl font-bold text-white">Hon. Harini Amarasooriya</h3>
                        <p className="text-amber-400 text-sm">Minister of Education</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-white text-justify text-sm">
                        "As the Minister of Education, I am proud of the State Printing Corporation's commitment to excellence in educational material production. Your dedication to quality and innovation in printing services has been instrumental in supporting our nation's education system."
                      </p>
                    </div>
                  </div>

                  {/* Secretary */}
                  <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="h-64 relative">
                      <Image
                        src="/sec.jpeg"
                        alt="Secretary"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-90 hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-xl font-bold text-white">Mr. Nalaka Kaluwewe</h3>
                        <p className="text-amber-400 text-sm">Secretary, Ministry of Education</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-white text-justify text-sm">
                        "The State Printing Corporation continues to be a reliable partner in our mission to provide quality educational materials. Their commitment to innovation and efficiency in printing services has significantly contributed to our educational objectives."
                      </p>
                    </div>
                  </div>

                  {/* Chairman */}
                  <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="h-64 relative">
                      <Image
                        src="/chair.jpeg"
                        alt="Chairman"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-90 hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-xl font-bold text-white">Mr. Ujitha Bandara</h3>
                        <p className="text-amber-400 text-sm">Chairman, State Printing Corporation</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-white text-justify text-sm">
                        "As Chairman, I am proud to lead a team that's at the forefront of Sri Lanka's printing industry. Our commitment to quality, innovation, and timely delivery has made us the preferred choice for government and educational printing needs."
                      </p>
                    </div>
                  </div>

                  {/* General Manager */}
                  <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="h-64 relative">
                      <Image
                        src="/gm.png"
                        alt="General Manager"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-90 hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-xl font-bold text-white">Mr. M.S.S. Mohotti</h3>
                        <p className="text-amber-400 text-sm">General Manager, State Printing Corporation</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-white text-justify text-sm">
                        "Our team at State Printing Corporation is dedicated to maintaining the highest standards in printing technology and service. We continuously invest in modern equipment and training to ensure we meet the evolving needs of our clients."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Committee Section */}
                <CommitteeSection />

                {/* Welcome Section */}
                {/* <WelcomeSection /> */}

                {/* History Section */}
                <HistorySection />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
