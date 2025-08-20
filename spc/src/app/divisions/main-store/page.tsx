import DivisionTemplate from '@/app/components/DivisionTemplate';

export const metadata = {
  title: 'Main Store | SPC',
  description: 'Information about the Main Store at State Printing Corporation',
};

export default function MainStorePage() {
  return (
    <DivisionTemplate
      name="Main Store"
      description="The Main Store serves as the central hub for inventory management, ensuring the availability and proper distribution of materials and supplies essential for SPC's operations."
      functions={[
        'Inventory management and control',
        'Material storage and distribution',
        'Stock level monitoring',
        'Issuance of materials to departments',
        'Stock reconciliation and reporting'
      ]}
      contact={{
        email: 'store@spc.lk',
        phone: '+94 11 2 123 414',
        address: 'Main Store, SPC Complex, Colombo 10, Sri Lanka'
      }}
    />
  );
}
