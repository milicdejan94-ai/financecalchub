import LoanCalculatorClient from './LoanCalculatorClient';

export const metadata = {
  title: 'Loan Calculator | Estimate Monthly Loan Payments',
  description:
    'Free US loan calculator. Estimate monthly payments, total interest and total repayment for personal loans, auto loans and fixed-rate loans.',
};

export default function LoanPage() {
  return <LoanCalculatorClient />;
}