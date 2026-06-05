import SavingsClient from './SavingsClient';

export const metadata = {
  title: 'Savings Calculator | Estimate Future Savings',
  description:
    'Free savings calculator. Estimate how your savings may grow over time with monthly deposits and interest.',
};

export default function SavingsPage() {
  return <SavingsClient />;
}