import SavingsClient from './SavingsClient';

export const metadata = {
  title: 'Savings Calculator | Estimate Future Savings Growth',
  description:
    'Free savings calculator. Estimate how your savings may grow over time with a starting balance, monthly deposits and an assumed interest rate.',
};

export default function SavingsPage() {
  return <SavingsClient />;
}
