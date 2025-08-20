import DivisionTemplate from '@/app/components/DivisionTemplate';
import Header from '@/app/components/Header';
export const metadata = {
  title: 'Stationery Store | SPC',
  description: 'Information about the Stationery Store at State Printing Corporation',
};

export default function StationeryStorePage() {
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
      name="Stationery Store"
      description="The Stationery Store division of SPC is responsible for the retail and distribution of high-quality stationery products to government institutions, educational organizations, and the general public."
      fullDescription="The Stationery Store division of SPC is responsible for the retail and distribution of high-quality stationery products to government institutions, educational organizations, and the general public."
      divisionImage="/division.jpg"
      functions={[
        'Retail and wholesale of stationery items',
        'Inventory management and stock control',
        'Customer service and order processing',
        'Corporate and bulk order management',
        'Product display and merchandising'
      ]}
      contact={{
        name: 'Mr. John Doe',
        designation: 'Manager',
        email: 'store@spc.lk',
        phone: '+94 11 2 123 456',
        address: 'Stationery Store, SPC Complex, Colombo 10, Sri Lanka',
        image: '/contact.jpg'
      }}
    />
    </div>
  );
}
