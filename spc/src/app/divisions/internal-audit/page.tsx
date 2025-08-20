import DivisionTemplate from '@/app/components/DivisionTemplate';
import Header from '@/app/components/Header';
export const metadata = {
  title: 'Internal Audit Division | SPC',
  description: 'Information about the Internal Audit Division at State Printing Corporation',
};

export default function InternalAuditPage() {
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
      name="Internal Audit Division"
      description="The Internal Audit Division provides independent and objective assurance and consulting services designed to add value and improve SPC's operations."
      fullDescription="The Internal Audit Division provides independent and objective assurance and consulting services designed to add value and improve SPC's operations."
      divisionImage="/division.jpg"
      functions={[
        'Risk assessment and management',
        'Internal control evaluation',
        'Compliance auditing',
        'Operational and financial audits',
        'Fraud prevention and detection'
      ]}
      contact={{
        name: 'Mr. John Doe',
        designation: 'Manager',
        email: 'audit@spc.lk',
        phone: '+94 11 2 123 408',
        address: 'Internal Audit Department, SPC Building, Colombo 10, Sri Lanka',
        image: '/contact.jpg'
      }}
    />
    </div>
  );
}
