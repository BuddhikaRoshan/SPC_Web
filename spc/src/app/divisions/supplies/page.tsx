import DivisionTemplate from '@/app/components/DivisionTemplate';
import Header from '@/app/components/Header';   
export const metadata = {
  title: 'Supplies Division | SPC',
  description: 'Information about the Supplies Division at State Printing Corporation',
};

export default function SuppliesPage() {
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
      name="Supplies Division"
      description="The Supplies Division is responsible for procurement and supply chain management, ensuring timely availability of materials and services required for SPC's operations."
      fullDescription="The Supplies Division is responsible for procurement and supply chain management, ensuring timely availability of materials and services required for SPC's operations."
      divisionImage="/division.jpg"
      functions={[
        'Procurement of goods and services',
        'Vendor and supplier management',
        'Inventory control and management',
        'Supply chain optimization',
        'Logistics and distribution coordination'
      ]}
      contact={{
        name: 'Mr. John Doe',
        designation: 'Manager',
        email: 'supplies@spc.lk',
        phone: '+94 11 2 123 404',
        address: 'Supplies Department, SPC Building, Colombo 10, Sri Lanka',
        image: '/contact.jpg'
      }}
    />
    </div>
  );
}
