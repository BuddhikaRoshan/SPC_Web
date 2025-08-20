import DivisionTemplate from '@/app/components/DivisionTemplate';
import Header from '@/app/components/Header';
export const metadata = {
  title: 'Process Section | SPC',
  description: 'Information about the Process Section at State Printing Corporation',
};

export default function ProcessSectionPage() {
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
      name="Process Section"
      description="The Process Section is responsible for the pre-press and production processes, ensuring all printing jobs are prepared and processed with the highest level of precision and quality."
      fullDescription="The Process Section is responsible for the pre-press and production processes, ensuring all printing jobs are prepared and processed with the highest level of precision and quality."
      divisionImage="/division.jpg"
      functions={[
        'Pre-press operations and plate making',
        'Digital file preparation',
        'Color management and proofing',
        'Quality control of printing plates',
        'Workflow optimization'
      ]}
      contact={{
        name: 'Mr. John Doe',
        designation: 'Manager',
        email: 'process@spc.lk',
        phone: '+94 11 2 123 411',
        address: 'Process Section, SPC Complex, Colombo 10, Sri Lanka',
        image: '/contact.jpg'
      }}
    />
    </div>
  );
}
