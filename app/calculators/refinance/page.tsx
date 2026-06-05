import RefinanceClient from './RefinanceClient';

export const metadata = {
  title: 'Refinance Calculator | Estimate Mortgage Refinance Savings',
  description:
    'Free mortgage refinance calculator. Estimate monthly savings, break-even point and potential refinance benefits.',
};

export default function RefinancePage() {
  return <RefinanceClient />;
}