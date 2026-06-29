import FederalTaxClient from './FederalTaxClient';

export const metadata = {
  title: 'Federal Tax Calculator | Estimate US Federal Income Tax',
  description:
    'Free federal tax calculator for US users. Estimate federal income tax using 2026 tax brackets, standard deduction assumptions and filing status.',
};

export default function FederalTaxPage() {
  return <FederalTaxClient />;
}
