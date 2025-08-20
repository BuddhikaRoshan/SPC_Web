import { FaCalendarAlt, FaArrowLeft, FaTrophy } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function PrintingExcellenceAward() {
  const article = {
    title: 'SPC Wins National Printing Excellence Award',
    date: '2025-07-28',
    category: 'Awards & Recognition',
    image: '/images/news/award.jpg',
    content: [
      "State Printing Corporation is proud to announce that we have been honored with the prestigious National Printing Excellence Award for 2025. This recognition highlights our commitment to superior print quality, innovation, and customer satisfaction in the printing industry.",
      
      "The award was presented at the annual National Print Industry Gala, where SPC was recognized among the top printing companies in the country. Our winning submission showcased a range of projects that demonstrated exceptional print quality, technical expertise, and creative solutions for our clients.",
      
      "'This award is a testament to the hard work and dedication of our entire team,' said [Executive Name], [Title] at SPC. 'We've always strived to push the boundaries of what's possible in print, and this recognition validates our commitment to excellence in every project we undertake.'",
      
      "Key factors that contributed to this achievement include:",
      "• Investment in cutting-edge printing technology and equipment\n• Rigorous quality control processes\n• Skilled and experienced printing professionals\n• Innovative solutions tailored to client needs\n• Commitment to sustainable printing practices",
      
      "The National Printing Excellence Award is particularly meaningful as it comes from our peers in the industry. The judging panel, composed of industry experts, evaluated entries based on print quality, technical difficulty, and overall visual impact.",
      
      "'This recognition motivates us to continue raising the bar in printing excellence,' added [Executive Name]. 'We remain committed to delivering outstanding results for our clients and pushing the boundaries of innovation in the printing industry.'"
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
              <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {article.category}
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
          {/* Award Badge */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <FaTrophy className="text-white text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">National Printing Excellence Award 2025</h2>
            <p className="text-amber-100">Presented to State Printing Corporation</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Award</h3>
              <p className="text-gray-700 mb-4">
                The National Printing Excellence Award recognizes outstanding achievement in the printing industry, 
                celebrating innovation, quality, and craftsmanship in print production.
              </p>
              <p className="text-gray-600 text-sm">
                For media inquiries or to learn more about our award-winning printing services, please contact our team.
              </p>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                Contact Us About Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
