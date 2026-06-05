import CreditCardPayoffClient from './CreditCardPayoffClient';

export const metadata = {
  title: 'Credit Card Payoff Calculator | Estimate Payoff Time',
  description:
    'Free credit card payoff calculator. Estimate how long it may take to pay off credit card debt based on balance, APR and monthly payment.',
};

export default function CreditCardPayoffPage() {
  return <CreditCardPayoffClient />;
}