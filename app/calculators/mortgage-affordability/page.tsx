import type { Metadata } from 'next';
import MortgageAffordabilityClient from './MortgageAffordabilityClient';

export const metadata: Metadata = {
  title: 'Mortgage Affordability Calculator | How Much House Can I Afford?',
  description:
    'Estimate how much house you may be able to afford using income, debts, down payment, interest rate, taxes, insurance, PMI and HOA fees.',
  alternates: {
    canonical: '/calculators/mortgage-affordability',
  },
};

export default function MortgageAffordabilityPage() {
  return <MortgageAffordabilityClient />;
}
