import DivisionTemplate from '@/app/components/DivisionTemplate';

export const metadata = {
  title: 'Chairman Office | SPC',
  description: 'Information about the Chairman Office at State Printing Corporation',
};

export default function ChairmanOfficePage() {
  return (
    <DivisionTemplate
      name="Chairman Office"
      description="The Chairman's Office serves as the cornerstone of strategic leadership and governance at SPC, dedicated to setting the vision, mission, and long-term goals of the organization."
      functions={[
        'Providing strategic direction and leadership for SPC',
        'Overseeing corporate governance and compliance',
        'Representing SPC at national and international forums',
        'Guiding policy development and implementation',
        'Ensuring effective stakeholder engagement'
      ]}
      contact={{
        email: 'chairman@spc.lk',
        phone: '+94 11 2 123 400',
        address: 'No. 100, SPC Building, Colombo 10, Sri Lanka'
      }}
    />
  );
}
