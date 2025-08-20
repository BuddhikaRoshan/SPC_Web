import DivisionTemplate from '@/app/components/DivisionTemplate';

export const metadata = {
  title: 'Security | SPC',
  description: 'Information about the Security Division at State Printing Corporation',
};

export default function SecurityPage() {
  return (
    <DivisionTemplate
      name="Security Division"
      description="The Security Division is responsible for maintaining a safe and secure environment across all SPC facilities, ensuring the protection of personnel, assets, and sensitive information."
      functions={[
        '24/7 facility security monitoring',
        'Access control and visitor management',
        'Emergency response and crisis management',
        'Security risk assessments',
        'Coordination with law enforcement'
      ]}
      contact={{
        email: 'security@spc.lk',
        phone: '+94 11 2 123 415',
        address: 'Security Office, SPC Complex, Colombo 10, Sri Lanka'
      }}
    />
  );
}
