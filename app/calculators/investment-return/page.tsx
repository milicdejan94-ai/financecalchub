import InvestmentReturnClient from './InvestmentReturnClient';

export const metadata = {
  title: 'Investment Return Calculator | Estimate Future Investment Value',
  description:
    'Free investment return calculator. Estimate future investment value based on starting amount, contributions, return rate and time.',
};

export default function InvestmentReturnPage() {
  return <InvestmentReturnClient />;
}