import DivisionTemplate from '@/app/components/DivisionTemplate';
import Header from '@/app/components/Header';
export const metadata = {
  title: 'HRD & Admin Division | SPC',
  description: 'Information about the HRD & Admin Division at State Printing Corporation',
};

export default function HRDAdminPage() {
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
      name="HRD & Admin Division"
      description="The HRD & Admin Division is dedicated to managing human resources, staff development, and administrative functions to support SPC's operations and strategic goals."
      fullDescription="The HRD & Admin Division is dedicated to managing human resources, staff development, and administrative functions to support SPC's operations and strategic goals."
      divisionImage="/division.jpg"
      functions={[
        'Recruitment and talent management',
        'Employee training and development programs',
        'Performance management and appraisal systems',
        'Administrative support services',
        'Employee welfare and engagement initiatives'
      ]}
      contact={{
        name: 'Mr. John Doe',
        designation: 'Manager',
        email: 'hr@spc.lk',
        phone: '+94 11 2 123 402',
        address: 'Human Resources Department, SPC Building, Colombo 10, Sri Lanka',
        image: '/contact.jpg'
      }}
    />
    </div>
  );
}
