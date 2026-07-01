import type { Metadata } from 'next';
import CreditCardPayoffClient from './CreditCardPayoffClient';

export const metadata: Metadata = {
  title: 'Credit Card Payoff Calculator | Estimate Payoff Time and Interest',
  description:
    'Free credit card payoff calculator. Estimate payoff time, total interest and total payments based on balance, APR and monthly payment.',
};

export default function CreditCardPayoffPage() {
  return <CreditCardPayoffClient />;
}
