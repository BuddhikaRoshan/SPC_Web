"use client";

import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaClock, FaFileAlt } from 'react-icons/fa';
import Header from '../components/Header';

const careers = [
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
    ]
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
    ]
  },
  {
    id: 3,
    title: 'Sales Executive',
    type: 'Full-time',
    location: 'Multiple Locations',
    experience: '1+ years',
    description: 'Dynamic Sales Executive to promote our printing and publishing services to potential clients.',
    requirements: [
      'Degree in Marketing or related field',
      'Excellent communication and negotiation skills',
      'Experience in B2B sales preferred',
      'Willingness to travel'
    ]
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-amber-600 to-amber-800 text-white">
        <div className="text-center px-4">
          <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Be part of Sri Lanka's leading government-owned printing and publishing organization.
            Grow your career with us and contribute to nation-building.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Why Join Us */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-amber-600 text-4xl mb-4">
                <FaBriefcase />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
              <p className="text-gray-600">Opportunities for professional development and career advancement.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-amber-600 text-4xl mb-4">
                <FaGraduationCap />
              </div>
              <h3 className="text-xl font-semibold mb-2">Learning & Development</h3>
              <p className="text-gray-600">Continuous training programs to enhance your skills.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-amber-600 text-4xl mb-4">
                <FaClock />
              </div>
              <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
              <p className="text-gray-600">Flexible working hours and a supportive work environment.</p>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Current Openings</h2>
          <div className="space-y-6">
            {careers.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
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
                    <button className="mt-4 md:mt-0 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300">
                      Apply Now
                    </button>
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

        {/* Application Form */}
        <section className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Apply Now</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="full-name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                  Position Applied For <span className="text-red-500">*</span>
                </label>
                <select
                  id="position"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  required
                >
                  <option value="">Select a position</option>
                  {careers.map((job) => (
                    <option key={job.id} value={job.id}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">
                Upload CV/Resume (PDF, max 5MB) <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 flex items-center">
                <label className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                  <span>Choose File</span>
                  <input id="cv" name="cv" type="file" className="sr-only" accept=".pdf" required />
                </label>
                <span className="ml-3 text-sm text-gray-500">No file chosen</span>
              </div>
            </div>
            <div>
              <label htmlFor="cover-letter" className="block text-sm font-medium text-gray-700 mb-1">
                Cover Letter (Optional)
              </label>
              <textarea
                id="cover-letter"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                placeholder="Tell us why you'd be a great fit for this role..."
              ></textarea>
            </div>
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the <a href="/privacy-policy" className="text-amber-600 hover:text-amber-500">Privacy Policy</a> and consent to my data being processed for recruitment purposes.
              </label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                <FaFileAlt className="mr-2" />
                Submit Application
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
