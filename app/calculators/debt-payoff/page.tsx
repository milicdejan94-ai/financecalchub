import type { Metadata } from 'next';
import DebtPayoffClient from './DebtPayoffClient';

export const metadata: Metadata = {
  title: 'Debt Payoff Calculator | Estimate Payoff Time and Interest',
  description:
    'Free debt payoff calculator. Estimate payoff time, total interest and total paid based on debt balance, APR and monthly payment.',
};

export default function DebtPayoffPage() {
  return <DebtPayoffClient />;
}
