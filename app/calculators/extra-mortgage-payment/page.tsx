import type { Metadata } from 'next';
import ExtraMortgagePaymentClient from './ExtraMortgagePaymentClient';

export const metadata: Metadata = {
  title: 'Extra Mortgage Payment Calculator | Estimate Interest Savings',
  description:
    'Free extra mortgage payment calculator. Estimate how extra monthly mortgage payments may reduce interest, shorten payoff time and change total loan cost.',
};

export default function ExtraMortgagePaymentPage() {
  return <ExtraMortgagePaymentClient />;
}
