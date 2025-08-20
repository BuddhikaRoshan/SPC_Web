import DivisionTemplate from '@/app/components/DivisionTemplate';

export const metadata = {
  title: 'Security Printing (Suraksha) | SPC',
  description: 'Information about the Security Printing Division at State Printing Corporation',
};

export default function SecurityPrintingPage() {
  return (
    <DivisionTemplate
      name="Security Printing (Suraksha)"
      description="The Security Printing Division specializes in producing secure and tamper-proof documents and certificates, including the renowned Suraksha insurance cards, with the highest level of security features."
      functions={[
        'Production of secure documents and certificates',
        'Suraksha insurance card manufacturing',
        'Security feature implementation',
        'Confidential document handling',
        'Anti-counterfeit solutions'
      ]}
      contact={{
        email: 'security.print@spc.lk',
        phone: '+94 11 2 123 410',
        address: 'Security Printing Division, SPC Complex, Colombo 10, Sri Lanka'
      }}
    />
  );
}
