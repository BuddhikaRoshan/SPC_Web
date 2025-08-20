import DivisionTemplate from '@/app/components/DivisionTemplate';
import Header from '@/app/components/Header';
export const metadata = {
  title: 'Maintenance Division | SPC',
  description: 'Information about the Maintenance Division at State Printing Corporation',
};

export default function MaintenancePage() {
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
      name="Maintenance Division"
      description="The Maintenance Division ensures the optimal performance and reliability of all SPC's equipment, machinery, and facilities through regular maintenance and timely repairs."
      fullDescription="The Maintenance Division ensures the optimal performance and reliability of all SPC's equipment, machinery, and facilities through regular maintenance and timely repairs."
      divisionImage="/division.jpg"
      functions={[
        'Preventive and corrective maintenance of printing equipment',
        'Facility maintenance and management',
        'Equipment calibration and performance optimization',
        'Energy management and conservation',
        'Safety and compliance maintenance'
      ]}
      contact={{
        name: 'Mr. John Doe',
        designation: 'Manager',
        email: 'maintenance@spc.lk',
        phone: '+94 11 2 123 406',
        address: 'Maintenance Department, SPC Building, Colombo 10, Sri Lanka',
        image: '/contact.jpg'
      }}
    />
    </div>
  );
}
