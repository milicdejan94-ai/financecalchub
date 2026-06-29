import RetirementCalculatorClient from './RetirementCalculatorClient';

export const metadata = {
  title: 'Retirement Calculator | Estimate Future Retirement Savings',
  description:
    'Free retirement calculator. Estimate future retirement savings using current age, retirement age, current savings, monthly contributions and expected return.',
};

export default function RetirementPage() {
  return <RetirementCalculatorClient />;
}
