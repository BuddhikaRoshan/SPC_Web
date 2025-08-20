"use client";

import { useState } from "react";
import { FaImage, FaVideo, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import Header from "@/app/components/Header";
import Image from "next/image";

// Sample gallery data - in a real app, this would come from an API or CMS
const galleryItems = [
  { 
    id: 1, 
    type: "image", 
    url: "/images/gallery/factory-tour-1.jpg", 
    title: "Our Printing Facility", 
    category: "Facility",
    date: "2025-08-15",
    images: 12
  },
  { 
    id: 2, 
    type: "image", 
    url: "/images/gallery/team-2025.jpg", 
    title: "SPC Team 2025", 
    category: "Team",
    date: "2025-07-28",
    images: 8
  },
  { 
    id: 3, 
    type: "video", 
    url: "/images/gallery/printing-process-thumbnail.jpg", 
    videoUrl: "https://www.youtube.com/embed/example123", 
    title: "Our Printing Process", 
    category: "Process",
    date: "2025-07-10",
    videos: 3
  },
  { 
    id: 4, 
    type: "image", 
    url: "/images/gallery/print-samples.jpg", 
    title: "Print Samples", 
    category: "Portfolio",
    date: "2025-06-25",
    images: 15
  },
  { 
    id: 5, 
    type: "image", 
    url: "/images/gallery/machinery-1.jpg", 
    title: "Modern Printing Press", 
    category: "Machinery",
    date: "2025-06-15",
    images: 10
  },
  { 
    id: 6, 
    type: "image", 
    url: "/images/gallery/office-tour.jpg", 
    title: "Our Office Space", 
    category: "Facility",
    date: "2025-05-30",
    images: 7
  },
  { 
    id: 7, 
    type: "video", 
    url: "/images/gallery/quality-control-thumbnail.jpg", 
    videoUrl: "https://www.youtube.com/embed/example456", 
    title: "Quality Control Process", 
    category: "Process",
    date: "2025-05-20",
    videos: 2
  },
  { 
    id: 8, 
    type: "image", 
    url: "/images/gallery/team-event.jpg", 
    title: "Team Building Event", 
    category: "Team",
    date: "2025-05-10",
    images: 20
  }
];

// Get unique categories for filtering
const categories = ["All", ...new Set(galleryItems.map(item => item.category))];

export default function GalleryArchivePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter items based on selected category
  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Media Gallery</h1>
            <p className="text-xl text-gray-300">
              Explore our collection of images and videos showcasing our facilities, team, and work
            </p>
          </div>
        </div>
      </div>

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
              <li className="text-gray-500">Gallery</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Gallery Grid */}
          <div className="w-full">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaImage className="mr-2 text-amber-600" />
                Media Gallery
              </h2>
              
              {/* Category Filter */}
              <div className="mb-8 flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-amber-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map(item => (
                  <article key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Link href={`/news/gallery-archive/${item.id}`}>
                      <div className="relative h-48 bg-gray-200">
                        {item.type === "image" && item.url ? (
                          <Image
                            src={item.url}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        ) : item.type === "video" && item.url ? (
                          <>
                            <Image
                              src={item.url}
                              alt={item.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                              <FaVideo className="text-white text-3xl" />
                            </div>
                          </>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <FaImage className="text-gray-400 text-4xl" />
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 bg-amber-600 text-white text-xs font-semibold px-3 py-1 m-2 rounded">
                          {item.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <FaCalendarAlt className="mr-1" />
                          {new Date(item.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-amber-600 transition-colors">
                          {item.title}
                        </h3>
                        <div className="flex items-center text-sm text-amber-600 mt-4">
                          {item.images && (
                            <span className="flex items-center mr-4">
                              <FaImage className="mr-1" />
                              {item.images} {item.images === 1 ? 'Photo' : 'Photos'}
                            </span>
                          )}
                          {item.videos && (
                            <span className="flex items-center">
                              <FaVideo className="mr-1" />
                              {item.videos} {item.videos === 1 ? 'Video' : 'Videos'}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
