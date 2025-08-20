import Link from 'next/link';
import { FaCalendarAlt, FaArrowLeft, FaFilePdf, FaImage, FaVideo, FaNewspaper } from 'react-icons/fa';
import Header from '../../components/Header';

// Reusing the same news data from the main news page
const newsArticles = [
  {
    id: 1,
    title: 'SPC Launches New Digital Printing Division',
    excerpt: 'Expanding our services to include state-of-the-art digital printing solutions for businesses of all sizes.',
    date: '2025-08-15',
    category: 'Company News',
    image: '/images/news/digital-printing.jpg',
    slug: 'digital-printing-launch',
  },
  {
    id: 2,
    title: 'SPC Wins National Printing Excellence Award',
    excerpt: 'Recognized for outstanding print quality and innovation in commercial printing services.',
    date: '2025-07-28',
    category: 'Awards',
    image: '/images/news/award.jpg',
    slug: 'printing-excellence-award',
  },
  {
    id: 3,
    title: 'Sustainable Printing Initiatives at SPC',
    excerpt: 'Our commitment to environmentally friendly printing practices and sustainable materials.',
    date: '2025-07-10',
    category: 'Sustainability',
    image: '/images/news/sustainability.jpg',
    slug: 'sustainable-printing',
  },
];

export default function NewsArchive() {
  // In a real app, you would fetch paginated data from an API
  const currentPage = 1;
  const totalPages = 1;
  const itemsPerPage = 6;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
            <p className="text-xl text-gray-300">Stay updated with the latest news and announcements from SPC</p>
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
              <li className="text-gray-500">Archive</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* News List */}
          <div className="w-full">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaNewspaper className="mr-2 text-amber-600" />
                All News
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsArticles.map((article) => (
                  <article key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 bg-gray-200">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 bg-amber-600 text-white text-xs font-semibold px-3 py-1 m-2 rounded">
                        {article.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <FaCalendarAlt className="mr-1" />
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-amber-600 transition-colors">
                        <Link href={`/news/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <Link 
                        href={`/news/${article.slug}`}
                        className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                      >
                        Read More <FaArrowLeft className="ml-1 transform rotate-180" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <button 
                  disabled={currentPage === 1}
                  className="px-4 py-2 border rounded-l-md border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Link
                    key={page}
                    href={`/news/archive?page=${page}`}
                    className={`px-4 py-2 border-t border-b ${currentPage === page 
                      ? 'bg-amber-600 text-white border-amber-600' 
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                  >
                    {page}
                  </Link>
                ))}
                <button 
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border rounded-r-md border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
