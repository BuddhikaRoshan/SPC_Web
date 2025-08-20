import DivisionTemplate from '@/app/components/DivisionTemplate';
import Header from '@/app/components/Header';
export const metadata = {
  title: 'Marketing Division | SPC',
  description: 'Information about the Marketing Division at State Printing Corporation',
};

export default function MarketingPage() {
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
      name="Marketing Division"
      description="The Marketing Division drives business growth by promoting SPC's services, developing new market opportunities, and maintaining strong customer relationships."
      fullDescription="The Marketing Division drives business growth by promoting SPC's services, developing new market opportunities, and maintaining strong customer relationships."
      divisionImage="/division.jpg"
      functions={[
        'Market research and analysis',
        'Brand management and promotion',
        'Sales strategy and business development',
        'Customer relationship management',
        'Marketing communications and advertising'
      ]}
      contact={{
        name: 'Mr. John Doe',
        designation: 'Manager',
        email: 'marketing@spc.lk',
        phone: '+94 11 2 123 405',
        address: 'Marketing Department, SPC Building, Colombo 10, Sri Lanka',
        image: '/contact.jpg'
      }}
    />
    </div>
  );
}
