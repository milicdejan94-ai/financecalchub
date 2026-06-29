import type { Metadata } from 'next';
import LoanCalculatorClient from './LoanCalculatorClient';

export const metadata: Metadata = {
  title: 'Loan Calculator | Estimate Monthly Loan Payments',
  description:
    'Free US loan calculator. Estimate monthly loan payments, total interest and total repayment for personal loans, auto loans and fixed-rate installment loans.',
};

export default function LoanPage() {
  return <LoanCalculatorClient />;
}
