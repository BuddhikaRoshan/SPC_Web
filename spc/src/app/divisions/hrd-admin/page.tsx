import DivisionTemplate from '@/app/components/DivisionTemplate';

export const metadata = {
  title: 'HRD & Admin Division | SPC',
  description: 'Information about the HRD & Admin Division at State Printing Corporation',
};

export default function HRDAdminPage() {
  return (
    <DivisionTemplate
      name="HRD & Admin Division"
      description="The HRD & Admin Division is dedicated to managing human resources, staff development, and administrative functions to support SPC's operations and strategic goals."
      functions={[
        'Recruitment and talent management',
        'Employee training and development programs',
        'Performance management and appraisal systems',
        'Administrative support services',
        'Employee welfare and engagement initiatives'
      ]}
      contact={{
        email: 'hr@spc.lk',
        phone: '+94 11 2 123 402',
        address: 'Human Resources Department, SPC Building, Colombo 10, Sri Lanka'
      }}
    />
  );
}
