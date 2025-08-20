import DivisionTemplate from '@/app/components/DivisionTemplate';
import Header from '@/app/components/Header';
export const metadata = {
  title: 'Chairman Office | SPC',
  description: 'Information about the Chairman Office at State Printing Corporation',
};

export default function ChairmanOfficePage() {
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
      name="Chairman Office"
      description="The Chairman's Office serves as the cornerstone of strategic leadership and governance at SPC, dedicated to setting the vision, mission, and long-term goals of the organization."
      fullDescription="The Chairman's Office serves as the cornerstone of strategic leadership and governance at SPC, dedicated to setting the vision, mission, and long-term goals of the organization."
      divisionImage="/division.jpg"
      functions={[
        'Providing strategic direction and leadership for SPC',
        'Overseeing corporate governance and compliance',
        'Representing SPC at national and international forums',
        'Guiding policy development and implementation',
        'Ensuring effective stakeholder engagement'
      ]}
      contact={{
        name: 'Mr. John Doe',
        designation: 'Chairman',
        email: 'chairman@spc.lk',
        phone: '+94 11 2 123 400',
        address: 'No. 100, SPC Building, Colombo 10, Sri Lanka',
        image: '/contact.jpg'
      }}
    />
    </div>
  );
}
