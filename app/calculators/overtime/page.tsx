import type { Metadata } from 'next';
import OvertimeClient from './OvertimeClient';

export const metadata: Metadata = {
  title: 'Overtime Calculator | Estimate Weekly Overtime Pay',
  description:
    'Free overtime calculator. Estimate regular pay, overtime pay, weekly gross pay and annualized gross pay using hourly wage and overtime hours.',
};

export default function OvertimeCalculatorPage() {
  return <OvertimeClient />;
}
