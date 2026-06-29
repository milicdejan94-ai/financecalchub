import type { Metadata } from 'next';
import FourOhOneKClient from './FourOhOneKClient';

export const metadata: Metadata = {
  title: '401k Calculator | Estimate Retirement Savings Growth',
  description:
    'Free 401k calculator. Estimate future 401k savings using salary, employee contributions, employer match, current balance and expected return.',
};

export default function FourOhOneKPage() {
  return <FourOhOneKClient />;
}
