import DivisionTemplate from '@/app/components/DivisionTemplate';
import Header from '@/app/components/Header';
export const metadata = {
  title: 'Finance Division | SPC',
  description: 'Information about the Finance Division at State Printing Corporation',
};

export default function FinancePage() {
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
      name="Finance Division"
      description="The Finance Division is responsible for managing all financial aspects of SPC, ensuring fiscal responsibility, accurate financial reporting, and strategic financial planning."
      fullDescription="The Finance Division is responsible for managing all financial aspects of SPC, ensuring fiscal responsibility, accurate financial reporting, and strategic financial planning."
      divisionImage="/division.jpg"
      functions={[
        'Financial planning and analysis',
        'Budget preparation and monitoring',
        'Financial reporting and compliance',
        'Accounts payable and receivable',
        'Treasury and cash flow management'
      ]}
      contact={{
        name: 'Mr. John Doe',
        designation: 'Manager',
        email: 'finance@spc.lk',
        phone: '+94 11 2 123 402',
        address: 'Finance Department, SPC Building, Colombo 10, Sri Lanka',
        image: '/contact.jpg'
      }}
    />
    </div>
  );
}
