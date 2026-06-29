import PaycheckCalculatorClient from './PaycheckCalculatorClient';

export const metadata = {
  title: 'Paycheck Calculator | Estimate Your Take-Home Pay',
  description:
    'Free US paycheck calculator. Estimate take-home pay after federal tax, Social Security, Medicare, state income tax, retirement contributions and deductions.',
};

export default function PaycheckPage() {
  return <PaycheckCalculatorClient />;
}
