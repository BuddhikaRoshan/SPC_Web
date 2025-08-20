import DivisionTemplate from '@/app/components/DivisionTemplate';
import Header from '@/app/components/Header';
export const metadata = {
  title: 'Stationery Factory | SPC',
  description: 'Information about the Stationery Factory at State Printing Corporation',
};

export default function StationeryFactoryPage() {
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

    <DivisionTemplate
      name="Stationery Factory"
      description="The Stationery Factory is a key production unit of SPC, specializing in the manufacturing of high-quality stationery products for government and private sector clients."
      fullDescription="The Stationery Factory is a key production unit of SPC, specializing in the manufacturing of high-quality stationery products for government and private sector clients."
      divisionImage="/division.jpg"
      functions={[
        'Production of official stationery',
        'Quality control and assurance',
        'Research and development of new products',
        'Bulk order processing',
        'Custom stationery solutions'
      ]}
      contact={{
        name: 'Mr. John Doe',
        designation: 'Manager',
        email: 'stationery@spc.lk',
        phone: '+94 11 2 123 409',
        address: 'Stationery Factory, SPC Complex, Colombo 10, Sri Lanka',
        image: '/contact.jpg'
      }}
    />
    </div>
  );
}
