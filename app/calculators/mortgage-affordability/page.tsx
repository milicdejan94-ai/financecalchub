import MortgageAffordabilityClient from './MortgageAffordabilityClient';

export const metadata = {
  title: 'Mortgage Affordability Calculator | How Much House Can I Afford?',
  description:
    'Free mortgage affordability calculator. Estimate how much house you may be able to afford based on income, debts, down payment and interest rate.',
};

export default function MortgageAffordabilityPage() {
  return <MortgageAffordabilityClient />;
}