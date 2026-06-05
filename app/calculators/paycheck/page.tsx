import PaycheckCalculatorClient from './PaycheckCalculatorClient';

export const metadata = {
  title: 'Paycheck Calculator | Estimate Your Take-Home Pay',
  description:
    'Free US paycheck calculator. Estimate your take-home pay after federal tax, Social Security, Medicare and state income tax.',
};

export default function PaycheckPage() {
  return <PaycheckCalculatorClient />;
}