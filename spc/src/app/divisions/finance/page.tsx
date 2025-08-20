import DivisionTemplate from '@/app/components/DivisionTemplate';

export const metadata = {
  title: 'Finance Division | SPC',
  description: 'Information about the Finance Division at State Printing Corporation',
};

export default function FinancePage() {
  return (
    <DivisionTemplate
      name="Finance Division"
      description="The Finance Division is responsible for managing all financial aspects of SPC, ensuring fiscal responsibility, accurate financial reporting, and strategic financial planning."
      functions={[
        'Financial planning and analysis',
        'Budget preparation and monitoring',
        'Financial reporting and compliance',
        'Accounts payable and receivable',
        'Treasury and cash flow management'
      ]}
      contact={{
        email: 'finance@spc.lk',
        phone: '+94 11 2 123 402',
        address: 'Finance Department, SPC Building, Colombo 10, Sri Lanka'
      }}
    />
  );
}
