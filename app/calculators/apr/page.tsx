import type { Metadata } from 'next';
import AprClient from './AprClient';

export const metadata: Metadata = {
  title: 'APR Calculator | Estimate Annual Percentage Rate',
  description:
    'Free APR calculator. Estimate annual percentage rate, monthly payment, total interest and total borrowing cost using loan amount, interest rate, fees and loan term.',
};

export default function AprPage() {
  return <AprClient />;
}
