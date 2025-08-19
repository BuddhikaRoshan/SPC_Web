export interface Division {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  services: string[];
  image: string;
  contact: {
    email: string;
    phone: string;
    website: string;
  };
}

export const divisions: Division[] = [
  {
    id: 'commercial-printing',
    name: 'Commercial Printing',
    description: 'High-quality commercial printing services for businesses of all sizes.',
    longDescription: 'Our Commercial Printing division offers state-of-the-art printing solutions tailored to meet the diverse needs of businesses. With cutting-edge technology and a team of skilled professionals, we deliver exceptional print quality, fast turnaround times, and cost-effective solutions for all your commercial printing needs.',
    services: [
      'Brochures & Catalogs',
      'Business Cards & Stationery',
      'Flyers & Leaflets',
      'Posters & Banners',
      'Direct Mail',
      'Presentation Folders',
    ],
    image: '/images/divisions/commercial-printing.jpg',
    contact: {
      email: 'commercial@spc.lk',
      phone: '+94 11 234 5678',
      website: 'commercial.spc.lk',
    },
  },
  {
    id: 'publishing',
    name: 'Publishing',
    description: 'Comprehensive publishing solutions for books, magazines, and more.',
    longDescription: 'Our Publishing division specializes in delivering high-quality printing services for books, magazines, journals, and other publications. We work with authors, publishers, and educational institutions to bring content to life with exceptional print quality and attention to detail.',
    services: [
      'Book Printing',
      'Magazines & Journals',
      'Academic Publications',
      'E-book Conversion',
      'Print on Demand',
      'Self-Publishing Services',
    ],
    image: '/images/divisions/publishing.jpg',
    contact: {
      email: 'publishing@spc.lk',
      phone: '+94 11 234 5679',
      website: 'publishing.spc.lk',
    },
  },
  {
    id: 'packaging',
    name: 'Packaging',
    description: 'Innovative and sustainable packaging solutions.',
    longDescription: 'Our Packaging division delivers cutting-edge packaging solutions that combine functionality with stunning design. We offer a wide range of packaging options, from eco-friendly materials to high-end luxury packaging, all designed to enhance your product and brand.',
    services: [
      'Folding Cartons',
      'Rigid Boxes',
      'Flexible Packaging',
      'Labels & Stickers',
      'Eco-Friendly Packaging',
      'Custom Packaging Design',
    ],
    image: '/images/divisions/packaging.jpg',
    contact: {
      email: 'packaging@spc.lk',
      phone: '+94 11 234 5680',
      website: 'packaging.spc.lk',
    },
  },
  {
    id: 'digital-solutions',
    name: 'Digital Solutions',
    description: 'Cutting-edge digital printing and workflow solutions.',
    longDescription: 'Our Digital Solutions division leverages the latest digital printing technologies to provide fast, flexible, and cost-effective printing solutions. From short runs to personalized marketing materials, we deliver exceptional quality with quick turnaround times.',
    services: [
      'Digital Printing',
      'Variable Data Printing',
      'Web-to-Print Solutions',
      'Marketing Collateral',
      'Personalized Direct Mail',
      'Large Format Digital Printing',
    ],
    image: '/images/divisions/digital-solutions.jpg',
    contact: {
      email: 'digital@spc.lk',
      phone: '+94 11 234 5681',
      website: 'digital.spc.lk',
    },
  },
  {
    id: 'security-printing',
    name: 'Security Printing',
    description: 'Secure document solutions with advanced anti-counterfeiting features.',
    longDescription: 'Our Security Printing division specializes in producing secure documents with advanced anti-counterfeiting technologies. We work with government agencies and financial institutions to produce tamper-evident documents that meet the highest security standards.',
    services: [
      'Cheque Printing',
      'Certificates',
      'ID Cards',
      'Security Labels',
      'Holograms',
      'Watermarked Papers',
    ],
    image: '/images/divisions/security-printing.jpg',
    contact: {
      email: 'security@spc.lk',
      phone: '+94 11 234 5682',
      website: 'security.spc.lk',
    },
  },
  {
    id: 'label-manufacturing',
    name: 'Label Manufacturing',
    description: 'High-quality labels for various industries and applications.',
    longDescription: 'Our Label Manufacturing division produces high-quality, durable labels for a wide range of industries. From product labels to barcodes and RFID tags, we provide solutions that meet your specific requirements for durability, adhesion, and print quality.',
    services: [
      'Product Labels',
      'Shrink Sleeves',
      'RFID Labels',
      'Barcodes',
      'Prime Labels',
      'Specialty Labels',
    ],
    image: '/images/divisions/label-manufacturing.jpg',
    contact: {
      email: 'labels@spc.lk',
      phone: '+94 11 234 5683',
      website: 'labels.spc.lk',
    },
  },
  {
    id: 'wide-format',
    name: 'Wide Format Printing',
    description: 'Large-scale printing for banners, signs, and displays.',
    longDescription: 'Our Wide Format division specializes in large-scale printing for both indoor and outdoor applications. From trade show displays to building wraps, we deliver vibrant, high-impact graphics that capture attention and communicate your message effectively.',
    services: [
      'Banners & Backdrops',
      'Vehicle Wraps',
      'Wall Murals',
      'Point of Sale Displays',
      'Window Graphics',
      'Exhibition Stands',
    ],
    image: '/images/divisions/wide-format.jpg',
    contact: {
      email: 'wideformat@spc.lk',
      phone: '+94 11 234 5684',
      website: 'wideformat.spc.lk',
    },
  },
  {
    id: 'stationery',
    name: 'Stationery',
    description: 'Premium stationery and business collateral.',
    longDescription: 'Our Stationery division produces high-quality business stationery that reflects your brand\'s professionalism. From business cards to letterheads and presentation folders, we help you make a lasting impression with every piece of communication.',
    services: [
      'Business Cards',
      'Letterheads',
      'Envelopes',
      'Notepads',
      'Presentation Folders',
      'Corporate Gifts',
    ],
    image: '/images/divisions/stationery.jpg',
    contact: {
      email: 'stationery@spc.lk',
      phone: '+94 11 234 5685',
      website: 'stationery.spc.lk',
    },
  },
  {
    id: '3d-printing',
    name: '3D Printing',
    description: 'Advanced 3D printing services for prototyping and production.',
    longDescription: 'Our 3D Printing division offers cutting-edge additive manufacturing solutions for prototyping and production. With a range of materials and technologies, we help businesses bring their designs to life with precision and efficiency.',
    services: [
      'Rapid Prototyping',
      'Functional Parts',
      'Architectural Models',
      'Product Design',
      'Custom Figurines',
      'Medical Models',
    ],
    image: '/images/divisions/3d-printing.jpg',
    contact: {
      email: '3dprinting@spc.lk',
      phone: '+94 11 234 5686',
      website: '3d.spc.lk',
    },
  },
  {
    id: 'promotional',
    name: 'Promotional Items',
    description: 'Custom promotional products to boost your brand.',
    longDescription: 'Our Promotional division helps businesses increase brand visibility with custom promotional products. From branded merchandise to corporate gifts, we offer a wide range of products that will make your brand stand out.',
    services: [
      'Branded Merchandise',
      'Corporate Gifts',
      'Event Giveaways',
      'Custom Apparel',
      'Eco-Friendly Promotions',
      'Seasonal Promotions',
    ],
    image: '/images/divisions/promotional.jpg',
    contact: {
      email: 'promo@spc.lk',
      phone: '+94 11 234 5687',
      website: 'promo.spc.lk',
    },
  },
  {
    id: 'design-studio',
    name: 'Design Studio',
    description: 'Creative design services for print and digital media.',
    longDescription: 'Our Design Studio combines creativity with technical expertise to deliver stunning visual solutions. From concept to completion, our team of designers works closely with clients to bring their vision to life across print and digital platforms.',
    services: [
      'Graphic Design',
      'Brand Identity',
      'Packaging Design',
      'Digital Design',
      'Art Direction',
      'Photo Retouching',
    ],
    image: '/images/divisions/design-studio.jpg',
    contact: {
      email: 'design@spc.lk',
      phone: '+94 11 234 5688',
      website: 'design.spc.lk',
    },
  },
  {
    id: 'logistics',
    name: 'Logistics',
    description: 'Efficient distribution and logistics solutions.',
    longDescription: 'Our Logistics division ensures that your printed materials are delivered on time and in perfect condition. With a reliable network and advanced tracking systems, we provide efficient distribution solutions tailored to your needs.',
    services: [
      'Warehousing',
      'Distribution',
      'Inventory Management',
      'Fulfillment Services',
      'Nationwide Delivery',
      'International Shipping',
    ],
    image: '/images/divisions/logistics.jpg',
    contact: {
      email: 'logistics@spc.lk',
      phone: '+94 11 234 5689',
      website: 'logistics.spc.lk',
    },
  },
  {
    id: 'quality-control',
    name: 'Quality Control',
    description: 'Rigorous quality assurance for all our products.',
    longDescription: 'Our Quality Control division maintains the highest standards across all our products and services. With rigorous testing and inspection processes, we ensure that every item that leaves our facility meets our strict quality requirements.',
    services: [
      'Quality Inspection',
      'Color Management',
      'Material Testing',
      'Process Audits',
      'Compliance Testing',
      'Quality Certification',
    ],
    image: '/images/divisions/quality-control.jpg',
    contact: {
      email: 'quality@spc.lk',
      phone: '+94 11 234 5690',
      website: 'quality.spc.lk',
    },
  },
  {
    id: 'rd',
    name: 'Research & Development',
    description: 'Innovation and development of new printing technologies.',
    longDescription: 'Our R&D division drives innovation in printing technology and processes. We continuously explore new materials, techniques, and technologies to provide our clients with cutting-edge printing solutions and maintain our position at the forefront of the industry.',
    services: [
      'New Product Development',
      'Process Improvement',
      'Material Research',
      'Technology Integration',
      'Sustainability Initiatives',
      'Industry Partnerships',
    ],
    image: '/images/divisions/rd.jpg',
    contact: {
      email: 'rnd@spc.lk',
      phone: '+94 11 234 5691',
      website: 'rnd.spc.lk',
    },
  },
  {
    id: 'training',
    name: 'Training Academy',
    description: 'Professional training programs for the printing industry.',
    longDescription: 'Our Training Academy offers comprehensive training programs for professionals in the printing and packaging industry. From technical skills to management training, we help individuals and organizations enhance their capabilities and stay competitive in the market.',
    services: [
      'Technical Training',
      'Workforce Development',
      'Apprenticeship Programs',
      'Certification Courses',
      'Workshops & Seminars',
      'Custom Training Solutions',
    ],
    image: '/images/divisions/training.jpg',
    contact: {
      email: 'training@spc.lk',
      phone: '+94 11 234 5692',
      website: 'academy.spc.lk',
    },
  },
  {
    id: 'international',
    name: 'International Operations',
    description: 'Global reach with local expertise.',
    longDescription: 'Our International Operations division manages our global presence and serves clients worldwide. With local expertise and global capabilities, we deliver consistent quality and service across all our international locations.',
    services: [
      'Global Account Management',
      'International Distribution',
      'Export Services',
      'Localization Support',
      'Global Compliance',
      'International Partnerships',
    ],
    image: '/images/divisions/international.jpg',
    contact: {
      email: 'international@spc.lk',
      phone: '+94 11 234 5693',
      website: 'international.spc.lk',
    },
  },
];

// Helper function to get division by ID
export function getDivisionById(id: string): Division | undefined {
  return divisions.find(division => division.id === id);
}

// Helper function to get all division IDs for static generation
export function getAllDivisionIds() {
  return divisions.map(division => ({
    params: {
      divisionId: division.id,
    },
  }));
}
