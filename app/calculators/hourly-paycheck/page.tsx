import type { Metadata } from 'next';
import HourlyPaycheckClient from './HourlyPaycheckClient';

export const metadata: Metadata = {
  title: 'Hourly Paycheck Calculator | Estimate Hourly Take-Home Pay',
  description:
    'Free hourly paycheck calculator. Estimate weekly, biweekly, monthly and annual take-home pay from hourly wages, weekly hours and simplified tax assumptions.',
};

export default function HourlyPaycheckPage() {
  return <HourlyPaycheckClient />;
}
