import MortgageCalculatorClient from './MortgageCalculatorClient';

export const metadata = {
  title: 'Mortgage Calculator | Estimate Monthly Home Payments',
  description:
    'Free US mortgage calculator. Estimate monthly home payments with principal, interest, property tax, homeowners insurance, PMI, HOA fees and maintenance assumptions.',
};

export default function MortgagePage() {
  return <MortgageCalculatorClient />;
}
