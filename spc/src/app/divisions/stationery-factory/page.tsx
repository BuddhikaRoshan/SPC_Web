import DivisionTemplate from '@/app/components/DivisionTemplate';

export const metadata = {
  title: 'Stationery Factory | SPC',
  description: 'Information about the Stationery Factory at State Printing Corporation',
};

export default function StationeryFactoryPage() {
  return (
    <DivisionTemplate
      name="Stationery Factory"
      description="The Stationery Factory is a key production unit of SPC, specializing in the manufacturing of high-quality stationery products for government and private sector clients."
      functions={[
        'Production of official stationery',
        'Quality control and assurance',
        'Research and development of new products',
        'Bulk order processing',
        'Custom stationery solutions'
      ]}
      contact={{
        email: 'stationery@spc.lk',
        phone: '+94 11 2 123 409',
        address: 'Stationery Factory, SPC Complex, Colombo 10, Sri Lanka'
      }}
    />
  );
}
