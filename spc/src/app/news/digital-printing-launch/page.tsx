import { FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function DigitalPrintingLaunch() {
  const article = {
    title: 'SPC Launches New Digital Printing Division',
    date: '2025-08-15',
    category: 'Company News',
    image: '/images/news/digital-printing.jpg',
    content: [
      "State Printing Corporation is proud to announce the launch of our new Digital Printing Division, marking a significant expansion of our service offerings. This strategic move positions SPC at the forefront of modern printing technology, enabling us to better serve our clients with faster turnaround times and more flexible printing solutions.",
      "The new division is equipped with state-of-the-art digital printing presses capable of handling everything from short-run commercial printing to personalized direct mail campaigns. Our investment in the latest digital printing technology ensures exceptional print quality while maintaining the high standards our clients have come to expect from SPC.",
      "Key features of our new digital printing services include:",
      "• On-demand printing with quick turnaround times\n• Variable data printing for personalized marketing materials\n• Cost-effective short to medium print runs\n• Environmentally friendly printing options",
      "'This expansion represents our commitment to innovation and meeting the evolving needs of our clients,' said [Executive Name], [Title] at SPC. 'Digital printing opens up new possibilities for businesses of all sizes to create high-impact marketing materials with greater flexibility and efficiency.'",
      "The launch event will take place on [Date] at our [Location] facility, where attendees can see live demonstrations of our new digital printing capabilities and explore potential applications for their business needs."
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
              <h3 className="text-lg font-semibold text-gray-900 mb-4">For more information, contact:</h3>
              <p className="text-gray-700">
                [Contact Person]<br />
                [Job Title]<br />
                State Printing Corporation<br />
                [Phone Number]<br />
                [Email Address]
              </p>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                Contact Us About Digital Printing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
