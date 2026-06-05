import DownPaymentClient from './DownPaymentClient';

export const metadata = {
  title: 'Down Payment Calculator | Estimate Home Down Payment',
  description:
    'Free down payment calculator. Estimate down payment amount, loan amount and down payment percentage for buying a home.',
};

export default function DownPaymentPage() {
  return <DownPaymentClient />;
}