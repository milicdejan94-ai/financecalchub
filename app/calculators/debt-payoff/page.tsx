import DebtPayoffClient from './DebtPayoffClient';

export const metadata = {
  title: 'Debt Payoff Calculator | Estimate Time to Pay Off Debt',
  description:
    'Free debt payoff calculator. Estimate how long it may take to pay off debt based on balance, interest rate and monthly payment.',
};

export default function DebtPayoffPage() {
  return <DebtPayoffClient />;
}