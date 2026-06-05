import CarLoanClient from './CarLoanClient';

export const metadata = {
  title: 'Car Loan Calculator | Estimate Monthly Auto Payments',
  description:
    'Free car loan calculator. Estimate monthly auto loan payments based on vehicle price, down payment, interest rate and loan term.',
};

export default function CarLoanPage() {
  return <CarLoanClient />;
}