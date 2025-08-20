import DivisionTemplate from '@/app/components/DivisionTemplate';

export const metadata = {
  title: 'Marketing Division | SPC',
  description: 'Information about the Marketing Division at State Printing Corporation',
};

export default function MarketingPage() {
  return (
    <DivisionTemplate
      name="Marketing Division"
      description="The Marketing Division drives business growth by promoting SPC's services, developing new market opportunities, and maintaining strong customer relationships."
      functions={[
        'Market research and analysis',
        'Brand management and promotion',
        'Sales strategy and business development',
        'Customer relationship management',
        'Marketing communications and advertising'
      ]}
      contact={{
        email: 'marketing@spc.lk',
        phone: '+94 11 2 123 405',
        address: 'Marketing Department, SPC Building, Colombo 10, Sri Lanka'
      }}
    />
  );
}
