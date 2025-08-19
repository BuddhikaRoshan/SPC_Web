"use client";

import { useState, useRef, ChangeEvent, FormEvent } from 'react';
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaClock, FaFileAlt, FaSpinner, FaTimes, FaFilePdf, FaImage, FaLightbulb, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Job {
  id: number;
  title: string;
  type: string;
  location: string;
  experience: string;
  description: string;
  requirements: string[];
  advertisement?: {
    type: 'image' | 'pdf';
    url: string;
    alt?: string;
  };
}

const careers: Job[] = [
  {
    id: 1,
    title: 'Printing Press Operator',
    type: 'Full-time',
    location: 'Colombo',
    experience: '2+ years',
    description: 'We are looking for an experienced Printing Press Operator to handle our state-of-the-art printing equipment and ensure high-quality output.',
    requirements: [
      'Diploma in Printing Technology or equivalent',
      'Minimum 2 years of experience in offset printing',
      'Knowledge of color management and quality control',
      'Ability to work in shifts'
    ],
    advertisement: {
      type: 'image',
      url: '/welcome.jpeg',
      alt: 'Printing Press Operator Position'
    }
  },
  {
    id: 2,
    title: 'Graphic Designer',
    type: 'Full-time',
    location: 'Colombo',
    experience: '3+ years',
    description: 'Creative Graphic Designer needed to create visually appealing designs for various print and digital media.',
    requirements: [
      'Degree in Graphic Design or related field',
      'Proficiency in Adobe Creative Suite',
      'Strong portfolio showcasing design work',
      'Experience with print production processes'
    ],
    advertisement: {
      type: 'pdf',
      url: '/G.M.pdf',
      alt: 'Graphic Designer Position'
    }
  },
  
];

export default function CareersPage() {
  const [selectedAd, setSelectedAd] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMoreDetails = (job: Job) => {
    setSelectedAd(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAd(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
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

      {/* Why Join SPC Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">WHY JOIN SPC?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              As Sri Lanka's premier government-owned printing and publishing partner, State Printing Corporation fosters innovation, collaboration, and professional growth. 
              Discover a workplace where your ideas matter and your career can flourish.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-amber-600 text-4xl mb-4">
                <FaLightbulb />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Innovation</h3>
              <p className="text-gray-600">Drive creative solutions with cutting-edge technology and forward-thinking teams.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-amber-600 text-4xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Integrity</h3>
              <p className="text-gray-600">Work in an environment that values honesty, transparency, and ethical practices.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-amber-600 text-4xl mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Growth</h3>
              <p className="text-gray-600">Access continuous learning opportunities to advance your skills and career.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Growth Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">EMPOWERING GROWTH THROUGH CONTINUOUS LEARNING</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">
                At the State Printing Corporation, we believe in cultivating a culture of lifelong learning and professional development. As a government-owned institution with a legacy of excellence in printing and publishing, we provide our employees with opportunities to expand their skills through hands-on experience, structured training programs, and cross-departmental collaboration.
              </p>
              <p className="text-lg text-gray-600">
                Whether in pre-press, production, or digital innovation, SPC ensures every team member is equipped to grow, adapt, and lead in a dynamic public sector environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strength in Diversity Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">STRENGTH IN DIVERSITY</h2>
              <p className="text-lg text-gray-600">
                At the State Printing Corporation, our strength is built on the diversity of our people. We value individuals who bring integrity, innovation, and a willingness to challenge convention—regardless of their background. With a rich blend of experiences and perspectives across departments such as design, printing, publishing, logistics, and administration, we celebrate the meaningful contributions of our dedicated workforce and their role in shaping Sri Lanka's print heritage.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-100 rounded-lg p-8 h-full">
                <h3 className="text-2xl font-semibold text-amber-600 mb-4">Our Departments</h3>
                <ul className="space-y-3 text-gray-600">
                  {['Design & Pre-Press', 'Printing & Production', 'Publishing', 'Logistics', 'Administration', 'Quality Control'].map((dept, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {dept}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Make a Difference Section */}
      <section className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">A CHANCE TO MAKE A DIFFERENCE</h2>
            <p className="text-lg text-gray-700 mb-8">
              A career at the State Printing Corporation (SPC) is more than just a job — it's an opportunity to serve the nation. Rooted in decades of public service, SPC empowers its employees to contribute meaningfully to national development.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: '♻️', title: 'Eco-Friendly Initiatives', desc: 'Pioneering sustainable printing solutions' },
                { icon: '🤝', title: 'Community Impact', desc: 'Engaging in meaningful outreach programs' },
                { icon: '🌱', title: 'Resource Stewardship', desc: 'Promoting responsible resource management' }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inclusive Culture Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">AN INCLUSIVE, CARING CULTURE</h2>
              <p className="text-lg text-gray-600 mb-6">
                At the State Printing Corporation, we prioritize the well-being of our people. Our inclusive workplace fosters a sense of belonging, while year-round sports, cultural, and wellness programs support both personal and professional growth.
              </p>
              <p className="text-lg text-gray-600">
                Through health, safety, and employee engagement initiatives, we promote a balanced and supportive environment where every team member can thrive.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4 text-gray-600">
                {[
                  '🏋️ Health & Wellness',
                  '🎨 Cultural Events',
                  '⚽ Sports Activities',
                  '👨‍👩‍👧‍👦 Family Days',
                  '📚 Training Programs',
                  '🌱 Sustainability Initiatives'
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex-1">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          
    

          {/* Current Openings */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Current Openings</h2>
            <div className="space-y-6">
              {careers.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 mt-2 text-gray-600">
                          <span className="flex items-center">
                            <FaMapMarkerAlt className="mr-1 text-amber-600" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <FaBriefcase className="mr-1 text-amber-600" />
                            {job.type}
                          </span>
                          <span className="flex items-center">
                            <FaGraduationCap className="mr-1 text-amber-600" />
                            {job.experience} experience
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <a 
                          href={`mailto:careers@example.com?subject=Application for ${encodeURIComponent(job.title)}`}
                          className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 whitespace-nowrap"
                        >
                          Apply Now
                        </a>
                        <button 
                          onClick={() => handleMoreDetails(job)}
                          className="inline-flex items-center px-6 py-3 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 whitespace-nowrap"
                        >
                          More Details
                        </button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-700 mb-3">{job.description}</p>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Job Ad Modal */}
      {isModalOpen && selectedAd?.advertisement && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold">{selectedAd.title}</h3>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close modal"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              {selectedAd.advertisement.type === 'image' ? (
                <img 
                  src={selectedAd.advertisement.url} 
                  alt={selectedAd.advertisement.alt || selectedAd.title}
                  className="w-full h-auto rounded"
                />
              ) : (
                <div className="h-[80vh] w-full">
                  <iframe 
                    src={`${selectedAd.advertisement.url}#view=fitH`} 
                    className="w-full h-full border-0"
                    title={selectedAd.advertisement.alt || selectedAd.title}
                  />
                </div>
              )}
              <div className="mt-4 flex justify-end space-x-3">
                <a 
                  href={selectedAd.advertisement.url}
                  download
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedAd.advertisement.type === 'image' ? (
                    <>
                      <FaImage className="mr-2" />
                      Download Image
                    </>
                  ) : (
                    <>
                      <FaFilePdf className="mr-2" />
                      Download PDF
                    </>
                  )}
                </a>
                <button
                  onClick={closeModal}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

   
    </div>
  );
}
