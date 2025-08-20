"use client";

import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUsers,
  FaCog,
  FaLightbulb,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface DivisionTemplateProps {
  name: string;
  description: string;
  fullDescription: string;
  divisionImage: string;
  functions: string[];
  contact: {
    name: string;
    designation: string;
    email: string;
    phone: string;
    address: string;
    image: string;
  };
}

const DivisionTemplate: React.FC<DivisionTemplateProps> = ({
  name,
  description,
  fullDescription,
  divisionImage,
  functions,
  contact,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden rounded-b-2xl shadow-lg">
        <Image
          src={divisionImage}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-4">
            {name}
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">{description}</p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">About the Division</h2>
          <p className="text-gray-700 leading-relaxed">{fullDescription}</p>

          {/* Educational Fact */}
          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-600 rounded">
            <div className="flex items-center gap-3">
              <FaLightbulb className="text-amber-600 text-2xl" />
              <p className="text-gray-800">
                Did you know? The <strong>{name}</strong> plays a crucial role in
                SPC’s long-term success by ensuring smooth operations and strategic support.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Functions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <FaCog className="mr-2 text-amber-600" /> Key Functions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {functions.map((func, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-amber-100 text-amber-700 rounded-full font-bold mb-3 mx-auto">
                  {index + 1}
                </div>
                <p className="text-gray-800 text-center">{func}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <FaUsers className="mr-2 text-amber-600" /> Contact Information
          </h2>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {contact.image && (
              <div className="flex-shrink-0">
                <Image
                  src={contact.image}
                  alt={contact.name}
                  width={140}
                  height={140}
                  className="rounded-full border-4 border-amber-500 shadow-lg"
                />
              </div>
            )}

            <div className="space-y-4 w-full">
              <div>
                <p className="text-lg font-semibold text-gray-800">{contact.name}</p>
                <p className="text-sm text-gray-500">{contact.designation}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Email */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
                  <FaEnvelope className="text-amber-600 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <a href={`mailto:${contact.email}`} className="text-amber-700 hover:underline">
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
                  <FaPhone className="text-amber-600 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Phone</p>
                    <a
                      href={`tel:${contact.phone.replace(/\D/g, "")}`}
                      className="text-amber-700 hover:underline"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition sm:col-span-2">
                  <FaMapMarkerAlt className="text-amber-600 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Address</p>
                    <p className="text-gray-700">{contact.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DivisionTemplate;
