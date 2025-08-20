import { FaArrowLeft, FaPhone, FaEnvelope, FaMapMarkerAlt, FaUsers, FaCog } from 'react-icons/fa';
import Link from 'next/link';

interface DivisionTemplateProps {
  name: string;
  description: string;
  functions: string[];
  contact: {
    email: string;
    phone: string;
    address: string;
  };
}

const DivisionTemplate: React.FC<DivisionTemplateProps> = ({
  name,
  description,
  functions,
  contact
}) => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <Link href="/" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6">
            <FaArrowLeft className="mr-2" /> Back to Home
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{name}</h1>
          <p className="text-gray-600 mb-8">{description}</p>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCog className="mr-2 text-amber-600" /> Key Functions
            </h2>
            <ul className="space-y-2 pl-2">
              {functions.map((func, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block h-6 w-6 flex-shrink-0 flex items-center justify-center bg-amber-100 text-amber-800 rounded-full text-sm font-medium mr-3">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{func}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaUsers className="mr-2 text-amber-600" /> Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaEnvelope className="text-amber-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <a href={`mailto:${contact.email}`} className="text-amber-700 hover:underline">
                    {contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <FaPhone className="text-amber-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <a 
                    href={`tel:${contact.phone.replace(/\D/g, '')}`} 
                    className="text-amber-700 hover:underline"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-amber-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Address</p>
                  <p className="text-gray-700">{contact.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivisionTemplate;
