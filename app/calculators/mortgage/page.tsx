import MortgageCalculatorClient from './MortgageCalculatorClient';

export const metadata = {
  title: 'Mortgage Calculator | Estimate Monthly Home Payments',
  description:
    'Free US mortgage calculator. Estimate monthly mortgage payments including principal, interest, property tax and homeowners insurance.',
};

export default function MortgagePage() {
  return <MortgageCalculatorClient />;
}