import DivisionTemplate from '@/app/components/DivisionTemplate';
import Header from '@/app/components/Header';
export const metadata = {
  title: 'Litho Section | SPC',
  description: 'Information about the Litho Section at State Printing Corporation',
};

export default function LithoSectionPage() {
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
      name="Litho Section"
      description="The Litho Section specializes in high-quality offset lithographic printing, delivering exceptional print results for a wide range of commercial and security printing needs."
      fullDescription="The Litho Section specializes in high-quality offset lithographic printing, delivering exceptional print results for a wide range of commercial and security printing needs."
      divisionImage="/division.jpg"
      functions={[
        'Offset lithographic printing',
        'High-volume commercial printing',
        'Color matching and consistency',
        'Press maintenance and operation',
        'Quality control in printing'
      ]}
      contact={{
        name: 'Mr. John Doe',
        designation: 'Manager',
        email: 'litho@spc.lk',
        phone: '+94 11 2 123 412',
        address: 'Litho Section, SPC Complex, Colombo 10, Sri Lanka',
        image: '/contact.jpg'
      }}
    />
    </div>
  );
}
