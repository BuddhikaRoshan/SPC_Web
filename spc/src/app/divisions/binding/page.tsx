import DivisionTemplate from '@/app/components/DivisionTemplate';

export const metadata = {
  title: 'Binding Section | SPC',
  description: 'Information about the Binding Section at State Printing Corporation',
};

export default function BindingSectionPage() {
  return (
    <DivisionTemplate
      name="Binding Section"
      description="The Binding Section provides professional finishing services, transforming printed materials into high-quality finished products through various binding and finishing techniques."
      functions={[
        'Hardcover and softcover binding',
        'Perfect binding and saddle stitching',
        'Folding and collating',
        'Laminating and varnishing',
        'Die-cutting and embossing'
      ]}
      contact={{
        email: 'binding@spc.lk',
        phone: '+94 11 2 123 413',
        address: 'Binding Section, SPC Complex, Colombo 10, Sri Lanka'
      }}
    />
  );
}
