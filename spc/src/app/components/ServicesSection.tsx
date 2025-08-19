'use client';

import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Secure Printing',
    description: 'High-security printing services for government documents with advanced anti-counterfeiting measures.',
    icon: '/nlb.png',
  },
  {
    title: 'Document Management',
    description: 'Comprehensive solutions for document storage, retrieval, and archival with strict security protocols.',
    icon: '/nlb.png',
  },
  {
    title: 'Digital Solutions',
    description: 'Modern digital printing and document management systems for efficient workflow automation.',
    icon: '/nlb.png',
  },
  {
    title: 'Wide Format Printing',
    description: 'Large-scale printing services for banners, maps, and technical drawings with precision quality.',
    icon: '/nlb.png',
  },
  {
    title: 'Stationery & Supplies',
    description: 'Official government stationery, forms, and office supplies with custom branding options.',
    icon: '/nlb.png',
  },
  {
    title: 'Consultation Services',
    description: 'Expert advice on document security, printing technologies, and process optimization.',
    icon: '/nlb.png',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 text-justify max-w-4xl mx-auto">
            Comprehensive printing and documentation solutions for government needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <div className="relative w-10 h-10">
                  <Image 
                    src={service.icon} 
                    alt={service.title}
                    width={40}
                    height={40}
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/nlb.png';
                    }}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
