import FederalTaxClient from './FederalTaxClient';

export const metadata = {
  title: 'Federal Tax Calculator | Estimate US Federal Income Tax',
  description:
    'Free federal tax calculator. Estimate US federal income tax based on income, filing status and standard deduction assumptions.',
};

export default function FederalTaxPage() {
  return <FederalTaxClient />;
}