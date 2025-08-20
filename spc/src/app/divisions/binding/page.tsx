import DivisionTemplate from '@/app/components/DivisionTemplate';
import Header from '@/app/components/Header';
export const metadata = {
  title: 'Binding Section | SPC',
  description: 'Information about the Binding Section at State Printing Corporation',
};

export default function BindingSectionPage() {
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
      name="Binding Section"
      description="The Binding Section provides professional finishing services, transforming printed materials into high-quality finished products through various binding and finishing techniques."
      fullDescription="The Binding Section provides professional finishing services, transforming printed materials into high-quality finished products through various binding and finishing techniques."
      divisionImage="/division.jpg"
      functions={[
        'Hardcover and softcover binding',
        'Perfect binding and saddle stitching',
        'Folding and collating',
        'Laminating and varnishing',
        'Die-cutting and embossing'
      ]}
      contact={{
        name: 'Mr. John Doe',
        designation: 'Manager',
        email: 'binding@spc.lk',
        phone: '+94 11 2 123 413',
        address: 'Binding Section, SPC Complex, Colombo 10, Sri Lanka',
        image: '/contact.jpg'
      }}
    />
    </div>
  );
}
