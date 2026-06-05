import AmortizationClient from './AmortizationClient';

export const metadata = {
  title: 'Amortization Calculator | Mortgage & Loan Schedule',
  description:
    'Free amortization calculator. Estimate monthly payment, total interest and yearly loan amortization schedule.',
};

export default function AmortizationPage() {
  return <AmortizationClient />;
}