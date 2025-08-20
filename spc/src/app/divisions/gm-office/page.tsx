import DivisionTemplate from '@/app/components/DivisionTemplate';
import Header from '@/app/components/Header';
export const metadata = {
  title: 'General Manager Office | SPC',
  description: 'Information about the General Manager\'s Office at State Printing Corporation',
};

export default function GMOfficerPage() {
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
      name="General Manager's Office"
      description="The General Manager's Office is responsible for the overall management and administration of SPC, ensuring operational excellence and strategic implementation."
      fullDescription="The General Manager's Office is responsible for the overall management and administration of SPC, ensuring operational excellence and strategic implementation."
      divisionImage="/division.jpg"
      functions={[
        'Overseeing daily operations and management',
        'Implementing strategic plans and policies',
        'Coordinating between different divisions',
        'Ensuring operational efficiency and effectiveness',
        'Managing key stakeholder relationships'
      ]}
      contact={{
        name: 'Mr. John Doe',
        designation: 'General Manager',
        email: 'gm@spc.lk',
        phone: '+94 11 2 123 401',
        address: 'No. 100, SPC Building, Colombo 10, Sri Lanka',
        image: '/contact.jpg'
      }}
    />
    </div>
  );
}
