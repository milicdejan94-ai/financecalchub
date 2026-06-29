import CompoundInterestClient from './CompoundInterestClient';

export const metadata = {
  title: 'Compound Interest Calculator | Estimate Savings and Investment Growth',
  description:
    'Free compound interest calculator. Estimate how savings or investments may grow over time with an initial amount, monthly contributions, years and a hypothetical annual return.',
};

export default function CompoundInterestPage() {
  return <CompoundInterestClient />;
}
