import type { Metadata } from 'next';
import DownPaymentClient from './DownPaymentClient';

export const metadata: Metadata = {
  title: 'Down Payment Calculator | Estimate Cash Needed to Buy a Home',
  description:
    'Free down payment calculator. Estimate home down payment, loan amount, closing costs, cash needed and common 3.5%, 5%, 10% and 20% down payment examples.',
};

export default function DownPaymentPage() {
  return <DownPaymentClient />;
}
