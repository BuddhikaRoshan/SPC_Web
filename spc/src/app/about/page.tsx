"use client";

import dynamic from 'next/dynamic';
import Image from 'next/image';

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
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Delivering Excellence in Security Solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
          </MotionDiv>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-amber-400">Our Story</h2>
            <div className="prose prose-invert text-gray-300">
              <p className="mb-4">
                Founded with a vision to revolutionize security solutions, we have grown from a small team of security experts to a leading provider of comprehensive protection services. Our journey has been marked by innovation, dedication, and an unwavering commitment to our clients' safety.
              </p>
              <p>
                Over the years, we've expanded our services and expertise, but our core values remain the same: integrity, excellence, and client satisfaction above all else.
              </p>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gray-800/50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Our Mission</h3>
              <p className="text-gray-300">
                To provide exceptional security solutions through innovation, technology, and highly trained professionals, ensuring peace of mind for our clients and their assets.
              </p>
            </MotionDiv>

            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Our Vision</h3>
              <p className="text-gray-300">
                To be the most trusted and innovative security partner, setting new standards in the industry through excellence, integrity, and cutting-edge solutions.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-12 text-amber-400">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Integrity',
                  description: 'We conduct our business with the highest ethical standards and transparency.'
                },
                {
                  title: 'Excellence',
                  description: 'We strive for the highest quality in all aspects of our services.'
                },
                {
                  title: 'Innovation',
                  description: 'We embrace new technologies and creative solutions to stay ahead.'
                },
                {
                  title: 'Reliability',
                  description: 'Our clients trust us to be there when they need us most.'
                },
                {
                  title: 'Teamwork',
                  description: 'We believe in the power of collaboration and mutual respect.'
                },
                {
                  title: 'Client Focus',
                  description: 'Your safety and satisfaction are at the heart of everything we do.'
                }
              ].map((value, index) => (
                <MotionDiv
                  key={index}
                  variants={fadeIn}
                  className="bg-gray-700/30 p-6 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}
