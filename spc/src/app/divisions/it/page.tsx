import DivisionTemplate from '@/app/components/DivisionTemplate';
import Header from '@/app/components/Header';
export const metadata = {
  title: 'IT Division | SPC',
  description: 'Information about the Information Technology Division at State Printing Corporation',
};

export default function ITPage() {
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
      name="IT Division"
      description="The IT Division drives digital transformation at SPC by implementing and maintaining cutting-edge technology solutions to enhance operational efficiency and security."
      fullDescription="The IT Division drives digital transformation at SPC by implementing and maintaining cutting-edge technology solutions to enhance operational efficiency and security."
      divisionImage="/division.jpg"
      functions={[
        'IT infrastructure management and support',
        'Software development and maintenance',
        'Network and cybersecurity management',
        'Database administration',
        'Digital transformation initiatives'
      ]}
      contact={{
        name: 'Mr. John Doe',
        designation: 'Manager',
        email: 'it@spc.lk',
        phone: '+94 11 2 123 407',
        address: 'IT Department, SPC Building, Colombo 10, Sri Lanka',
        image: '/contact.jpg'
      }}
    />
    </div>
  );
}
