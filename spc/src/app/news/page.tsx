import Link from 'next/link';
import { FaCalendarAlt, FaArrowRight, FaFilePdf, FaImage, FaVideo, FaNewspaper } from 'react-icons/fa';
import Image from 'next/image';
import Header from '../components/Header';

// Sample data - in a real app, this would come from an API or CMS
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


const mediaGallery = [
  { id: 1, type: 'image', url: '/images/gallery/factory-tour-1.jpg', title: 'Our Printing Facility', category: 'Facility' },
  { id: 2, type: 'image', url: '/images/gallery/team-2025.jpg', title: 'SPC Team 2025', category: 'Team' },
  { id: 3, type: 'video', url: 'https://www.youtube.com/watch?v=8D9Gi_aKsHc&t=104s&pp=ygUac3RhdGUgcHJpbnRpbmcgY29ycG9yYXRpb24%3D', title: 'Our Printing Process', category: 'Process' },
  { id: 4, type: 'image', url: '/images/gallery/print-samples.jpg', title: 'Print Samples', category: 'Portfolio' },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        <Header/>
            
      
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
      <div className="container mx-auto px-4 py-12">
        {/* Latest News Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <FaNewspaper className="mr-2 text-amber-600" />
              Latest News
            </h2>
            <Link href="/news/archive" className="text-amber-600 hover:text-amber-700 flex items-center">
              View All News <FaArrowRight className="ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <FaCalendarAlt className="mr-2" />
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link 
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Read More <FaArrowRight className="ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Media Gallery Section */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <FaImage className="mr-2 text-amber-600" />
              Media Gallery
            </h2>
            <Link href="/news/gallery-archive" className="text-amber-600 hover:text-amber-700 flex items-center">
              View Full Gallery <FaArrowRight className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mediaGallery.map((item) => (
              <div key={item.id} className="group relative rounded-lg overflow-hidden aspect-square bg-gray-200">
                {item.type === 'image' ? (
                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-800">
                    <FaVideo className="h-12 w-12 text-white" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-medium">{item.title}</p>
                    <span className="text-xs text-amber-300">{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
