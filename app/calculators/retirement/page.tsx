import RetirementCalculatorClient from './RetirementCalculatorClient';

export const metadata = {
  title: 'Retirement Calculator | Estimate Future Savings',
  description:
    'Free US retirement calculator. Estimate future retirement savings using current savings, monthly contributions, age and expected annual return.',
};

export default function RetirementPage() {
  return <RetirementCalculatorClient />;
}