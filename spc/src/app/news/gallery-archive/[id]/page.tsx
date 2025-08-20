'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { FaChevronLeft, FaChevronRight, FaTimes, FaDownload, FaExpand } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header';

// This would typically come from an API or database
const galleryItems = [
  {
    id: 1,
    title: 'Our Printing Facility',
    description: 'A detailed look at our state-of-the-art printing facility and equipment.',
    date: '2025-08-15',
    category: 'Facility',
    images: [
      { id: 1, url: '/images/gallery/factory-tour-1.jpg', alt: 'Printing press in action' },
      { id: 2, url: '/images/gallery/factory-tour-2.jpg', alt: 'Quality control station' },
      { id: 3, url: '/images/gallery/factory-tour-3.jpg', alt: 'Finished product packaging' },
    ],
  },
  {
    id: 2,
    title: 'SPC Team 2025',
    description: 'Our annual team building activities and celebrations.',
    date: '2025-07-20',
    category: 'Events',
    images: [
      { id: 1, url: '/images/gallery/event-1.jpg', alt: 'Team building activities' },
      { id: 2, url: '/images/gallery/event-2.jpg', alt: 'Group photo' },
    ],
  },
  {
    id: 3,
    title: 'Our Printing Process',
    description: 'Our latest printing products and services on display.',
    date: '2025-06-10',
    category: 'Products',
    images: [
      { id: 1, url: '/images/gallery/product-1.jpg', alt: 'Product display' },
      { id: 2, url: '/images/gallery/product-2.jpg', alt: 'Close-up of printed materials' },
      { id: 3, url: '/images/gallery/product-3.jpg', alt: 'Custom packaging solutions' },
    ],
  },
  {
    id: 4,
    title: 'Print Sample',
    description: 'Celebrating our valued customers and partners.',
    date: '2025-05-05',
    category: 'Events',
    images: [
      { id: 1, url: '/images/gallery/customer-1.jpg', alt: 'Customer event' },
      { id: 2, url: '/images/gallery/customer-2.jpg', alt: 'Networking session' },
    ],
  },
  {
    id: 5,
    title: 'Modern Printing Press',
    description: 'Our latest printing technology and equipment upgrades.',
    date: '2025-04-15',
    category: 'Technology',
    images: [
      { id: 1, url: '/images/gallery/tech-1.jpg', alt: 'New printing equipment' },
      { id: 2, url: '/images/gallery/tech-2.jpg', alt: 'Technology showcase' },
    ],
  },
  {
    id: 6,
    title: 'Our Office Space',
    description: 'Our efforts in sustainable and eco-friendly printing.',
    date: '2025-03-10',
    category: 'Sustainability',
    images: [
      { id: 1, url: '/images/gallery/sustainability-1.jpg', alt: 'Eco-friendly materials' },
      { id: 2, url: '/images/gallery/sustainability-2.jpg', alt: 'Green initiatives' },
    ],
  },
  {
    id: 7,
    title: 'Quality Controll Process',
    description: 'Celebrating our achievements and industry recognition.',
    date: '2025-02-20',
    category: 'Awards',
    images: [
      { id: 1, url: '/images/gallery/award-1.jpg', alt: 'Award ceremony' },
      { id: 2, url: '/images/gallery/award-2.jpg', alt: 'Trophy and certificates' },
    ],
  },
  {
    id: 8,
    title: 'Team Building Event',
    description: 'Our involvement in community service and social responsibility programs.',
    date: '2025-01-15',
    category: 'Community',
    images: [
      { id: 1, url: '/images/gallery/community-1.jpg', alt: 'Community event' },
      { id: 2, url: '/images/gallery/community-2.jpg', alt: 'Volunteer work' },
    ],
  },
];

export default function GalleryItemPage({ params }: { params: { id: string } }) {
  const galleryItem = galleryItems.find(item => item.id.toString() === params.id);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  if (!galleryItem) {
    notFound();
  }

  const currentImage = galleryItem.images[currentImageIndex];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === galleryItem.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryItem.images.length - 1 : prev - 1
    );
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(console.error);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(console.error);
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
  
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-amber-600">
                  Home
                </Link>
              </li>
              <li>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li>
                <Link href="/news" className="text-gray-600 hover:text-amber-600">
                  News & Media
                </Link>
              </li>
              <li>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li>
                <Link href="/news/gallery-archive" className="text-gray-600 hover:text-amber-600">
                  Gallery
                </Link>
              </li>
              <li>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li className="text-gray-500">{galleryItem.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{galleryItem.title}</h1>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full mr-3">
                {galleryItem.category}
              </span>
              <span>{new Date(galleryItem.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}</span>
            </div>
            <p className="text-gray-600 mb-8">{galleryItem.description}</p>
            
            {/* Main Image */}
            <div className="relative bg-black rounded-lg overflow-hidden mb-6">
              <div className="relative aspect-video">
                <Image
                  src={currentImage.url}
                  alt={currentImage.alt}
                  fill
                  className="object-contain"
                  priority
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Previous image"
                >
                  <FaChevronLeft />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Next image"
                >
                  <FaChevronRight />
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {galleryItem.images.length}
                </div>
                
                {/* Fullscreen Toggle */}
                <button 
                  onClick={toggleFullscreen}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded hover:bg-black/70 transition-colors"
                  aria-label={isFullscreen ? 'Exit fullscreen' : 'View fullscreen'}
                >
                  <FaExpand />
                </button>
              </div>
            </div>
            
            {/* Thumbnail Strip */}
            <div className="flex space-x-2 overflow-x-auto py-2">
              {galleryItem.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-16 rounded overflow-hidden border-2 ${
                    index === currentImageIndex 
                      ? 'border-amber-500' 
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={80}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            
            {/* Download Button */}
            <div className="mt-6">
              <a
                href={currentImage.url}
                download
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <FaDownload className="mr-2" />
                Download Image
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
