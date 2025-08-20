import DivisionTemplate from '@/app/components/DivisionTemplate';
import Header from '@/app/components/Header';
export const metadata = {
  title: 'Main Store | SPC',
  description: 'Information about the Main Store at State Printing Corporation',
};

export default function MainStorePage() {
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
      name="Main Store"
      description="The Main Store serves as the central hub for inventory management, ensuring the availability and proper distribution of materials and supplies essential for SPC's operations."
      fullDescription="The Main Store serves as the central hub for inventory management, ensuring the availability and proper distribution of materials and supplies essential for SPC's operations."
      divisionImage="/division.jpg"
      functions={[
        'Inventory management and control',
        'Material storage and distribution',
        'Stock level monitoring',
        'Issuance of materials to departments',
        'Stock reconciliation and reporting'
      ]}
      contact={{
        name: 'Mr. John Doe',
        designation: 'Manager',
        email: 'store@spc.lk',
        phone: '+94 11 2 123 414',
        address: 'Main Store, SPC Complex, Colombo 10, Sri Lanka',
        image: '/contact.jpg'
      }}
    />
    </div>
    );
}
