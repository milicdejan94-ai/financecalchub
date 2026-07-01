import type { Metadata } from 'next';
import RefinanceClient from './RefinanceClient';

export const metadata: Metadata = {
  title: 'Refinance Calculator | Estimate Mortgage Refinance Savings',
  description:
    'Free mortgage refinance calculator. Estimate your new payment, monthly savings, refinance closing cost break-even point and potential long-term cost difference.',
};

export default function RefinancePage() {
  return <RefinanceClient />;
}
