import type { Metadata } from 'next';
import CarLoanClient from './CarLoanClient';

export const metadata: Metadata = {
  title: 'Car Loan Calculator | Estimate Monthly Auto Payments',
  description:
    'Free car loan calculator. Estimate monthly auto loan payments, amount financed, sales tax, total interest and total repayment based on vehicle price, down payment, trade-in, interest rate and loan term.',
};

export default function CarLoanPage() {
  return <CarLoanClient />;
}
