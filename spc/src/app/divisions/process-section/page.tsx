import DivisionTemplate from '@/app/components/DivisionTemplate';

export const metadata = {
  title: 'Process Section | SPC',
  description: 'Information about the Process Section at State Printing Corporation',
};

export default function ProcessSectionPage() {
  return (
    <DivisionTemplate
      name="Process Section"
      description="The Process Section is responsible for the pre-press and production processes, ensuring all printing jobs are prepared and processed with the highest level of precision and quality."
      functions={[
        'Pre-press operations and plate making',
        'Digital file preparation',
        'Color management and proofing',
        'Quality control of printing plates',
        'Workflow optimization'
      ]}
      contact={{
        email: 'process@spc.lk',
        phone: '+94 11 2 123 411',
        address: 'Process Section, SPC Complex, Colombo 10, Sri Lanka'
      }}
    />
  );
}
