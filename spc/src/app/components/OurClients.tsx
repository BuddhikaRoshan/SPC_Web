"use client";

import Image from 'next/image';

const OurClients = () => {
  // Replace these with your actual client logos
  const clients = [
    { name: 'Client 1', logo: '/nlb.png' },
    { name: 'Client 2', logo: '/nlb.png' },
    { name: 'Client 3', logo: '/nlb.png' },
    { name: 'Client 4', logo: '/nlb.png' },
    { name: 'Client 5', logo: '/nlb.png' },
    { name: 'Client 6', logo: '/nlb.png' },
    { name: 'Client 7', logo: '/nlb.png' },
    { name: 'Client 8', logo: '/nlb.png' },
    { name: 'Client 9', logo: '/nlb.png' },
    { name: 'Client 10', logo: '/nlb.png' },
    { name: 'Client 11', logo: '/nlb.png' },
    { name: 'Client 12', logo: '/nlb.png' },
  ];

  return (
    <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            OUR <span className="text-orange-500">CLIENTS</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are proud to serve a diverse range of clients across various sectors, 
            including government institutions, educational organizations, and private enterprises.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300 h-40"
            >
              <div className="relative w-100 h-100">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 600px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            "We value the trust our clients place in us and are committed to delivering 
            exceptional printing services that meet their unique needs."
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
