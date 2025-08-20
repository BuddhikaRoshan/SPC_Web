import DivisionTemplate from '@/app/components/DivisionTemplate';
import Header from '@/app/components/Header';
export const metadata = {
  title: 'Security | SPC',
  description: 'Information about the Security Division at State Printing Corporation',
};

export default function SecurityPage() {
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
      name="Security Division"
      description="The Security Division is responsible for maintaining a safe and secure environment across all SPC facilities, ensuring the protection of personnel, assets, and sensitive information."
      fullDescription="The Security Division is responsible for maintaining a safe and secure environment across all SPC facilities, ensuring the protection of personnel, assets, and sensitive information."
      divisionImage="/division.jpg"
      functions={[
        '24/7 facility security monitoring',
        'Access control and visitor management',
        'Emergency response and crisis management',
        'Security risk assessments',
        'Coordination with law enforcement'
      ]}
      contact={{
        name: 'Mr. John Doe',
        designation: 'Manager',
        email: 'security@spc.lk',
        phone: '+94 11 2 123 415',
        address: 'Security Office, SPC Complex, Colombo 10, Sri Lanka',
        image: '/contact.jpg'
      }}
    />
    </div>
  );
}
