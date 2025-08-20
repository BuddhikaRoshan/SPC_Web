import DivisionTemplate from '@/app/components/DivisionTemplate';

export const metadata = {
  title: 'General Manager Office | SPC',
  description: 'Information about the General Manager\'s Office at State Printing Corporation',
};

export default function GMOfficerPage() {
  return (
    <DivisionTemplate
      name="General Manager's Office"
      description="The General Manager's Office is responsible for the overall management and administration of SPC, ensuring operational excellence and strategic implementation."
      functions={[
        'Overseeing daily operations and management',
        'Implementing strategic plans and policies',
        'Coordinating between different divisions',
        'Ensuring operational efficiency and effectiveness',
        'Managing key stakeholder relationships'
      ]}
      contact={{
        email: 'gm@spc.lk',
        phone: '+94 11 2 123 401',
        address: 'No. 100, SPC Building, Colombo 10, Sri Lanka'
      }}
    />
  );
}
