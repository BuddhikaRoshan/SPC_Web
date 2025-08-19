import Link from 'next/link';
import Image from 'next/image';

const CommitteeSection = () => {
  const directors = [
    {
      id: 1,
      name: 'Mr. D.M. Gunasiri Bandara',
      department: 'MAS Intimates Pvt Ltd at MAS Holdings',
      image: '/d1.png',
    },
    {
      id: 2,
      name: 'Mr. K.D.C.S. Kumarathunga',
      department: 'Department of Ayurveda',
      image: '/d2.png',
    },
    {
      id: 3,
      name: 'Mrs. Nimali Jayawardane',
      department: 'Ministry of Education',
      image: '/d3.png',
    },
    {
      id: 4,
      name: 'Nimal',
      department: 'Ministry of Education',
      image: '/d1.png',
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            DIRECTORS & <span className="text-amber-400">MANAGEMENT</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-black text-lg max-w-3xl mx-auto">
            Meet our esteemed board of directors and management committee members who guide our strategic direction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {directors.map((director) => (
            <div 
              key={director.id} 
              className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-64 relative">
                <Image
                  src={director.image}
                  alt={director.name}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{director.name}</h3>
                <p className="text-amber-400 text-sm">{director.department}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/about/committee" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-amber-500 hover:bg-amber-600 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            View All Directors & Management Committee Members
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommitteeSection;
