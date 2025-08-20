import { FaCalendarAlt, FaArrowLeft, FaLeaf, FaRecycle } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function SustainablePrinting() {
  const article = {
    title: 'Sustainable Printing Initiatives at SPC',
    date: '2025-07-10',
    category: 'Sustainability',
    image: '/images/news/sustainability.jpg',
    content: [
      "State Printing Corporation is proud to announce our comprehensive Sustainable Printing Initiative, reinforcing our commitment to environmental responsibility in the printing industry. This program represents a significant step forward in reducing our ecological footprint while maintaining the high-quality printing services our clients expect.",
      
      "'At SPC, we recognize our responsibility to protect the environment while delivering exceptional printing services,' said [Executive Name], [Title] at SPC. 'Our Sustainable Printing Initiative reflects our dedication to eco-friendly practices throughout our operations.'",
      
      "Key components of our sustainability program include:",
      "• Transition to vegetable-based and soy-based inks that are more environmentally friendly\n• Implementation of energy-efficient printing equipment and processes\n• Comprehensive paper recycling program for all production waste\n• Use of Forest Stewardship Council (FSC) certified papers\n• Reduction of volatile organic compounds (VOCs) in our printing processes\n• Investment in carbon offset programs",
      
      "Our sustainability efforts have already yielded impressive results:",
      "• 40% reduction in energy consumption across our facilities\n• 75% of waste materials now recycled or repurposed\n• 100% of our paper products sourced from sustainable forestry\n• 30% decrease in our carbon footprint over the past two years",
      
      "'We believe that environmental responsibility and business success go hand in hand,' added [Executive Name]. 'By implementing these sustainable practices, we're not only reducing our impact on the planet but also providing our clients with more environmentally conscious printing solutions.'"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/news" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6">
              <FaArrowLeft className="mr-2" /> Back to News
            </Link>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                <FaLeaf className="mr-1" /> {article.category}
              </span>
              <span className="mx-2">•</span>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-1" />
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {/* Sustainability Badge */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <FaRecycle className="text-white text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Sustainable Printing Initiative</h2>
            <p className="text-green-100">Committed to Environmental Responsibility</p>
          </div>
          
          {/* Featured Image */}
          <div className="relative w-full h-96">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Article Body */}
          <div className="p-6 md:p-8">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
                {paragraph}
              </p>
            ))}
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Environmental Commitment</h3>
              <p className="text-gray-700 mb-4">
                SPC is dedicated to continuous improvement in our environmental performance. 
                We regularly review and update our sustainability practices to ensure we remain 
                at the forefront of eco-friendly printing solutions.
              </p>
              <p className="text-gray-600 text-sm">
                To learn more about our sustainable printing options or to request a quote for your next project, 
                please contact our team.
              </p>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Inquire About Sustainable Printing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
