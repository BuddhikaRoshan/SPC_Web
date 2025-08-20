import DivisionTemplate from '@/app/components/DivisionTemplate';

export const metadata = {
  title: 'Internal Audit Division | SPC',
  description: 'Information about the Internal Audit Division at State Printing Corporation',
};

export default function InternalAuditPage() {
  return (
    <DivisionTemplate
      name="Internal Audit Division"
      description="The Internal Audit Division provides independent and objective assurance and consulting services designed to add value and improve SPC's operations."
      functions={[
        'Risk assessment and management',
        'Internal control evaluation',
        'Compliance auditing',
        'Operational and financial audits',
        'Fraud prevention and detection'
      ]}
      contact={{
        email: 'audit@spc.lk',
        phone: '+94 11 2 123 408',
        address: 'Internal Audit Department, SPC Building, Colombo 10, Sri Lanka'
      }}
    />
  );
}
