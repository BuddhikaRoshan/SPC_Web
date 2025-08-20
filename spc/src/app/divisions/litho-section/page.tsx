import DivisionTemplate from '@/app/components/DivisionTemplate';

export const metadata = {
  title: 'Litho Section | SPC',
  description: 'Information about the Litho Section at State Printing Corporation',
};

export default function LithoSectionPage() {
  return (
    <DivisionTemplate
      name="Litho Section"
      description="The Litho Section specializes in high-quality offset lithographic printing, delivering exceptional print results for a wide range of commercial and security printing needs."
      functions={[
        'Offset lithographic printing',
        'High-volume commercial printing',
        'Color matching and consistency',
        'Press maintenance and operation',
        'Quality control in printing'
      ]}
      contact={{
        email: 'litho@spc.lk',
        phone: '+94 11 2 123 412',
        address: 'Litho Section, SPC Complex, Colombo 10, Sri Lanka'
      }}
    />
  );
}
