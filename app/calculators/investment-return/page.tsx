import InvestmentReturnClient from './InvestmentReturnClient';

export const metadata = {
  title: 'Investment Return Calculator | Estimate Future Investment Value',
  description:
    'Free investment return calculator. Estimate future investment value based on starting amount, monthly contributions, expected return rate and time horizon. Educational estimates only.',
};

export default function InvestmentReturnPage() {
  return <InvestmentReturnClient />;
}
