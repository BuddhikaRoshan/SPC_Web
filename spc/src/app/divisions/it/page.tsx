import DivisionTemplate from '@/app/components/DivisionTemplate';

export const metadata = {
  title: 'IT Division | SPC',
  description: 'Information about the Information Technology Division at State Printing Corporation',
};

export default function ITPage() {
  return (
    <DivisionTemplate
      name="IT Division"
      description="The IT Division drives digital transformation at SPC by implementing and maintaining cutting-edge technology solutions to enhance operational efficiency and security."
      functions={[
        'IT infrastructure management and support',
        'Software development and maintenance',
        'Network and cybersecurity management',
        'Database administration',
        'Digital transformation initiatives'
      ]}
      contact={{
        email: 'it@spc.lk',
        phone: '+94 11 2 123 407',
        address: 'IT Department, SPC Building, Colombo 10, Sri Lanka'
      }}
    />
  );
}
