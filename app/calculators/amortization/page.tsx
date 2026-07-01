import type { Metadata } from 'next';
import AmortizationClient from './AmortizationClient';

export const metadata: Metadata = {
  title: 'Amortization Calculator | Loan Schedule & Interest Breakdown',
  description:
    'Free amortization calculator. Estimate monthly loan payments, total interest, total paid and a principal vs interest amortization schedule.',
};

export default function AmortizationPage() {
  return <AmortizationClient />;
}
