"use client";

import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import Header from '../components/Header';
import dynamic from 'next/dynamic';

// Dynamic import for the map component to avoid SSR issues
const MapWithNoSSR = dynamic(
  () => import('../components/MapComponent'),
  { ssr: false, loading: () => <div className="h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">Loading map...</div> }
);

// Outlet locations data with coordinates
const outletLocations = [
    {
        name: 'Peoples Park (Pettah)',
        address: 'U.G.26/27, Pettah, Colombo 11',
        phone: '011 2423163',
        email: 'spcmkt05@gmail.com',
        position: [6.93803, 79.85484] as [number, number]
      },
      {
        name: 'Isurupaya (Battaramulla)',
        address: 'Ministry of Education, Isurupaya, Battaramulla - Pannipitiya Rd, Battaramulla',
        phone: '070 6699515',
        email: 'spcmkt03@gmail.com',
        position: [6.90167, 79.91917] as [number, number]
      },
      {
        name: 'Gampaha Outlet',
        address: 'No. 8/9, Ngarasaba Nawa Sappu Sankirnaya, Bus Nawathumpola, Gampaha',
        phone: '033 2223683',
        email: 'spcmkt11@gmail.com',
        position: [7.09167, 79.99972] as [number, number]
      },
      {
        name: 'Kalutara Outlet',
        address: 'No. A/8, Super Market, Kalutara',
        phone: '034 2228660',
        email: 'spcmkt04@gmail.com',
        position: [6.58694, 79.96028] as [number, number]
      },
      {
        name: 'Narammala Outlet',
        address: 'No. 21, Podu Welada Sankirnaya, Narammala',
        phone: '037 2249368',
        email: 'spcmkt03@gmail.com',
        position: [7.43444, 80.22139] as [number, number]
      },
      {
        name: 'Panaluwa Outlet',
        address: 'No. 275, 20 Kanuwa, Wataraka',
        phone: '011 2757825',
        email: 'spcmkt08@gmail.com',
        position: [6.8677, 80.0604] as [number, number]
      },
      {
        name: 'Warakapola Outlet',
        address: 'No. 48, Bus Nawathum Pola Idiripita, Kandy Road, Wataraka',
        phone: '035 2267934',
        email: 'spcmkt20@gmail.com',
        position: [7.2268, 80.1959] as [number, number]
      },
      {
        name: 'Ambalangoda Outlet',
        address: 'No. 341, Maha Vidiya, Ambalangoda',
        phone: '091 2255737',
        email: 'spcmkt25@gmail.com',
        position: [6.2355, 80.0538] as [number, number]
      },
      {
        name: 'Vibavi Outlet',
        address: 'No. 341, Policestation, Godagama',
        phone: '091 2255737',
        email: 'spcmkt25@gmail.com',
        position: [6.843275, 80.003183] as [number, number]
      }
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">HAVE QUESTIONS, CONCERNS, OR FEEDBACK?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help. As a premier government-owned printing, publishing, and shopping entity in Sri Lanka, 
            the State Printing Corporation (SPC) operates across the country to serve both public and private sector needs.
          </p>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Below you'll find our head office and outlet contact details for your convenience. 
            Visit our shopping outlets for a wide range of stationery, office supplies, and printed materials.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-amber-600 mb-4">
              <FaMapMarkerAlt className="text-3xl" />
            </div>
            <h3 className="text-xl text-amber-700 font-semibold mb-2">Our Address</h3>
            <p className="text-gray-600">Head Office: Peoples Park, Pettah, Colombo 11, Sri Lanka</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-amber-600 mb-4">
              <FaPhone className="text-3xl" />
            </div>
            <h3 className="text-xl text-amber-700 font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+94 11 2423163</p>
            <p className="text-gray-600">+94 70 6699515</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-amber-600 mb-4">
              <FaEnvelope className="text-3xl" />
            </div>
            <h3 className="text-xl text-amber-700 font-semibold mb-2">Email</h3>
            <p className="text-gray-600">info@spc.lk</p>
            <p className="text-gray-600">support@spc.lk</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Locations</h2>
          <div className="bg-white shadow rounded-lg overflow-hidden" style={{ height: '500px' }}>
            <MapWithNoSSR locations={outletLocations} />
          </div>
        </div>

        {/* Outlet Locations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Outlet Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outletLocations.map((outlet, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-amber-700 mb-2">{outlet.name}</h3>
                <p className="text-gray-600 mb-3">{outlet.address}</p>
                <p className="text-gray-700">
                  <span className="font-medium">Phone:</span> {outlet.phone}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Email:</span> {outlet.email}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaClock className="text-amber-600 text-2xl mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Business Hours</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold text-amber-700">Weekdays</h3>
              <p className="text-gray-600">8:30 AM - 5:00 PM</p>
            </div>
            <div>
              <h3 className="font-semibold text-amber-700">Saturday</h3>
              <p className="text-gray-600">8:30 AM - 1:00 PM</p>
            </div>
            <div>
              <h3 className="font-semibold text-amber-700">Sunday</h3>
              <p className="text-gray-600">Closed</p>
            </div>
            <div>
              <h3 className="font-semibold text-amber-700">Public Holidays</h3>
              <p className="text-gray-600">Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;