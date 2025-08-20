import DivisionTemplate from '@/app/components/DivisionTemplate';

export const metadata = {
  title: 'Supplies Division | SPC',
  description: 'Information about the Supplies Division at State Printing Corporation',
};

export default function SuppliesPage() {
  return (
    <DivisionTemplate
      name="Supplies Division"
      description="The Supplies Division is responsible for procurement and supply chain management, ensuring timely availability of materials and services required for SPC's operations."
      functions={[
        'Procurement of goods and services',
        'Vendor and supplier management',
        'Inventory control and management',
        'Supply chain optimization',
        'Logistics and distribution coordination'
      ]}
      contact={{
        email: 'supplies@spc.lk',
        phone: '+94 11 2 123 404',
        address: 'Supplies Department, SPC Building, Colombo 10, Sri Lanka'
      }}
    />
  );
}
