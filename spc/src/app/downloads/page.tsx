"use client";

import { useState } from 'react';
import { FaFilePdf, FaFileWord, FaFileExcel, FaFileArchive, FaDownload, FaSearch } from 'react-icons/fa';
import Header from '../components/Header';

interface DownloadItem {
  id: number;
  title: string;
  category: string;
  type: 'pdf' | 'doc' | 'xls' | 'zip';
  size: string;
  date: string;
  url: string;
}

const downloads: DownloadItem[] = [
  {
    id: 1,
    title: 'Annual Report 2023',
    category: 'Reports',
    type: 'pdf',
    size: '2.4 MB',
    date: '2023-12-31',
    url: '/downloads/reports/annual-report-2023.pdf'
  },
  {
    id: 2,
    title: 'Application Form',
    category: 'Forms',
    type: 'doc',
    size: '1.2 MB',
    date: '2024-01-15',
    url: '/downloads/forms/application-form.doc'
  },
  {
    id: 3,
    title: 'Price List 2024',
    category: 'Price Lists',
    type: 'xls',
    size: '1.8 MB',
    date: '2024-01-10',
    url: '/downloads/price-lists/2024-prices.xls'
  },
  {
    id: 4,
    title: 'Company Brochure',
    category: 'Marketing',
    type: 'pdf',
    size: '5.1 MB',
    date: '2023-11-20',
    url: '/downloads/marketing/company-brochure.pdf'
  },
  {
    id: 5,
    title: 'Product Catalog',
    category: 'Catalogs',
    type: 'pdf',
    size: '3.7 MB',
    date: '2024-01-05',
    url: '/downloads/catalogs/product-catalog-2024.pdf'
  },
  {
    id: 6,
    title: 'Software Update v2.3',
    category: 'Software',
    type: 'zip',
    size: '45.2 MB',
    date: '2023-12-15',
    url: '/downloads/software/update-v2.3.zip'
  },
];

const categories = ['All', 'Reports', 'Forms', 'Price Lists', 'Marketing', 'Catalogs', 'Software'];

export default function DownloadsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDownloads = downloads.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FaFilePdf className="text-red-500 text-2xl" />;
      case 'doc':
        return <FaFileWord className="text-blue-500 text-2xl" />;
      case 'xls':
        return <FaFileExcel className="text-green-600 text-2xl" />;
      case 'zip':
        return <FaFileArchive className="text-yellow-500 text-2xl" />;
      default:
        return <FaFilePdf className="text-gray-500 text-2xl" />;
    }
  };

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search documents..."
                className="block text-black w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="block text-black w-full md:w-64 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 rounded-md"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Downloads List */}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {filteredDownloads.length > 0 ? (
              filteredDownloads.map((item) => (
                <li key={item.id}>
                  <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          {getFileIcon(item.type)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-amber-600">{item.category}</div>
                          <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                          <div className="mt-1 text-sm text-gray-500">
                            {item.size} • {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                          </div>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href={item.url}
                          download
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                        >
                          <FaDownload className="-ml-1 mr-2 h-4 w-4" />
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li className="px-4 py-12 text-center">
                <p className="text-gray-500">No documents found matching your criteria.</p>
              </li>
            )}
          </ul>
        </div>

        {/* Help Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Need Help with Downloads?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our support team is ready to assist you with any questions about our resources.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-amber-700 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Common Questions
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex"><span className="text-amber-500 mr-2">•</span> How to open downloaded files?</li>
                  <li className="flex"><span className="text-amber-500 mr-2">•</span> What software do I need?</li>
                  <li className="flex"><span className="text-amber-500 mr-2">•</span> Download taking too long?</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-amber-700 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Support
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p> support@spc.lk</p>
                  <p> +94 11 2 555 666</p>
                  <p> Mon-Fri: 8:30 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
               CONTACT US
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
