import AprClient from './AprClient';

export const metadata = {
  title: 'APR Calculator | Estimate Annual Percentage Rate',
  description:
    'Free APR calculator. Estimate annual percentage rate based on loan amount, fees, interest rate and loan term.',
};

export default function AprPage() {
  return <AprClient />;
}