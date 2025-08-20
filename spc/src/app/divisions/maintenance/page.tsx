import DivisionTemplate from '@/app/components/DivisionTemplate';

export const metadata = {
  title: 'Maintenance Division | SPC',
  description: 'Information about the Maintenance Division at State Printing Corporation',
};

export default function MaintenancePage() {
  return (
    <DivisionTemplate
      name="Maintenance Division"
      description="The Maintenance Division ensures the optimal performance and reliability of all SPC's equipment, machinery, and facilities through regular maintenance and timely repairs."
      functions={[
        'Preventive and corrective maintenance of printing equipment',
        'Facility maintenance and management',
        'Equipment calibration and performance optimization',
        'Energy management and conservation',
        'Safety and compliance maintenance'
      ]}
      contact={{
        email: 'maintenance@spc.lk',
        phone: '+94 11 2 123 406',
        address: 'Maintenance Department, SPC Building, Colombo 10, Sri Lanka'
      }}
    />
  );
}
