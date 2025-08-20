import DivisionTemplate from '@/app/components/DivisionTemplate';

export const metadata = {
  title: 'Stationery Store | SPC',
  description: 'Information about the Stationery Store at State Printing Corporation',
};

export default function StationeryStorePage() {
  return (
    <DivisionTemplate
      name="Stationery Store"
      description="The Stationery Store division of SPC is responsible for the retail and distribution of high-quality stationery products to government institutions, educational organizations, and the general public."
      functions={[
        'Retail and wholesale of stationery items',
        'Inventory management and stock control',
        'Customer service and order processing',
        'Corporate and bulk order management',
        'Product display and merchandising'
      ]}
      contact={{
        email: 'store@spc.lk',
        phone: '+94 11 2 123 456',
        address: 'Stationery Store, SPC Complex, Colombo 10, Sri Lanka'
      }}
    />
  );
}
