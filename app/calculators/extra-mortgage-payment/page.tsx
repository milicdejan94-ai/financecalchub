import ExtraMortgagePaymentClient from './ExtraMortgagePaymentClient';

export const metadata = {
  title: 'Extra Mortgage Payment Calculator | Estimate Interest Savings',
  description:
    'Free extra mortgage payment calculator. Estimate how extra monthly payments may reduce interest and shorten mortgage payoff time.',
};

export default function ExtraMortgagePaymentPage() {
  return <ExtraMortgagePaymentClient />;
}