import type { Metadata } from 'next';
import SalaryToHourlyClient from './SalaryToHourlyClient';

export const metadata: Metadata = {
  title: 'Salary To Hourly Calculator | Convert Annual Salary to Hourly Pay',
  description:
    'Free salary to hourly calculator. Convert annual salary to an estimated hourly wage and compare monthly, biweekly and weekly gross pay.',
};

export default function SalaryToHourlyPage() {
  return <SalaryToHourlyClient />;
}
