import DivisionTemplate from '@/app/components/DivisionTemplate';
import Header from '@/app/components/Header';
export const metadata = {
  title: 'Security Printing (Suraksha) | SPC',
  description: 'Information about the Security Printing Division at State Printing Corporation',
};

export default function SecurityPrintingPage() {
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
      name="Security Printing (Suraksha)"
      description="The Security Printing Division specializes in producing secure and tamper-proof documents and certificates, including the renowned Suraksha insurance cards, with the highest level of security features."
      fullDescription="The Security Printing Division specializes in producing secure and tamper-proof documents and certificates, including the renowned Suraksha insurance cards, with the highest level of security features."
      divisionImage="/division.jpg"
      functions={[
        'Production of secure documents and certificates',
        'Suraksha insurance card manufacturing',
        'Security feature implementation',
        'Confidential document handling',
        'Anti-counterfeit solutions'
      ]}
      contact={{
        name: 'Mr. John Doe',
        designation: 'Manager',
        email: 'security.print@spc.lk',
        phone: '+94 11 2 123 410',
        address: 'Security Printing Division, SPC Complex, Colombo 10, Sri Lanka',
        image: '/contact.jpg'
      }}
    />
    </div>
  );
}
